import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './context/user'
import { CharacterDataContext } from './context/CharacterData'
import { useHistory, useParams} from 'react-router-dom'
import YouTube from 'react-youtube'
import IconPicker from './IconPicker'
import DropdownMenu from './DropdownMenu'
import Icon from './Icon'

import './UploadPage.css'

function UploadPage( { dataRetrieved, selectedGame, handleGameSelection, isEdit  } ) {
  const history = useHistory()
  const { characterData, setCharacterData} = useContext(CharacterDataContext)
  const { user, setUser } = useContext(UserContext)
  const { game, character, comboId } = useParams()
  

  const [starter, setStarter] = useState("")
  const [meterless, setMeterless] = useState(false)
  const [location, setLocation] = useState("")
  const [hitType, setHitType] = useState("")
  const [damage, setDamage] = useState("")
  const [authorNotes, setAuthorNotes] = useState("")
  const [imageUrls, setImageUrls] = useState([])
  const [youtubeInput, setYoutubeInput] = useState("")
  const [youtubeId, setYoutubeId] = useState("")
  const [inputs, setInputs] = useState("")
  const [errors, setErrors] = useState([])

  // console.log(comboId)

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved])

  useEffect(() => {
    // checks if on edit page
    if(isEdit) {
      // checks if logged in
      if(user) {
        let foundId = user.combo_ids.find((id) => id == comboId)
        // checks if comboId is uploaded by this user
        if (foundId) {
          let foundCharacter = user.bookmarks.find((b) => b.character.slug == character)
          if (foundCharacter) {
            let foundCombo = foundCharacter.combos.find((c) => c.id == comboId)
            if (foundCombo) {
              setStarter(foundCombo.starter)
              setMeterless(foundCombo.meterless)
              setLocation(foundCombo.location)
              setHitType(foundCombo.hit_type)
              setDamage(foundCombo.damage)
              setAuthorNotes(foundCombo.author_notes)
              setYoutubeInput(foundCombo.youtube_id)
              setYoutubeId(foundCombo.youtube_id)
              setInputs(foundCombo.inputs)
              setImageUrls(foundCombo.image_urls)
            }
          }
        }
      }
    }
  }, [user, character, comboId])

  function handleSubmit(e) {
    e.preventDefault()

    const comboObj = {
      starter,
      meterless: meterless,
      location,
      hit_type: hitType,
      damage: parseInt(damage),
      author_notes: authorNotes,
      youtube_id: youtubeId,
      inputs
      // youtube id only works after clicking check video
    }
    console.log(comboObj)

    if (isEdit) {

      fetch(`/characters/${characterData.id}/combos/${comboId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(comboObj)
      })
        .then((r) => {
          if(r.ok) {
            r.json().then((data) => {
              updateCombo(data)
              history.push(`/${game}/${character}`)
            })
          }
          else {
            r.json().then((error) => setErrors(error.errors))
          }
        })
    }
    else {
      fetch(`/characters/${characterData.id}/combos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(comboObj)
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              // add combo to characterData state, still need to add to user bookmark state
              addCombo(data)
              history.push(`/${game}/${character}`)
            })
          }
          else {
            r.json().then((error) => setErrors(error.errors))
          }
        })
    }
  }

  function addCombo(newCombo) {
    // update characterData state
    const updatedCombos = [newCombo, ...characterData.combos]
    setCharacterData({...characterData, combos: updatedCombos})

    // update user state
    const updatedComboIds = [...user.combo_ids, newCombo.id]
    const updatedBookmarks = user.bookmarks.map((b) => {
      if (b.character.slug === character) {
        b.combos = [newCombo, ...b.combos]
        return b
      } else return b
    })
    const updatedUser = {...user, combo_ids: updatedComboIds, bookmarks: updatedBookmarks}
    setUser(updatedUser)
  }

  function updateCombo(newCombo) {
    // update characterData state
    const updatedCombos = characterData.combos.map((c) => {
      if (c.id === newCombo.id) {
        return newCombo
      }
      else return c
    })
    setCharacterData({...characterData, combos: updatedCombos})

    // update user state
    const updatedBookmarks = user.bookmarks.map((b) => {
      if (b.character.slug === character) {
        const updatedCombos = b.combos.map((c) => {
          if (c.id === newCombo.id) {
            return newCombo
          }
          else return c
        })
        return {...b, combos: updatedCombos}
      } else return b
    })
    const updatedUser = {...user, bookmarks: updatedBookmarks}
    setUser(updatedUser)
  }

  function handleDamageChange(e) {
    if (!isNaN(e.target.value)) {
      if (e.target.value <= 1500) {
        setDamage(e.target.value)
      }
    }
  }
  const youtubeStyles = {
    width: '320vw', 
    height: '180vh', 
  }

  function handleClick(src, name) {
    setImageUrls(() => [...imageUrls, src])
    if (inputs.length > 0) {
      setInputs(() => `${inputs} ${name}`)
    }
    else setInputs(name)
  }

  function handleSpace() {
    // set spaceUrl from game data later!
    const spaceUrl = "https://i.imgur.com/IxEwf4u.png"
    setImageUrls(() => [...imageUrls, spaceUrl])
    setInputs(() => `${inputs} -`)
  }

  function handleKeyDown(e) {
    if (e.code === 'Space') {
      handleSpace()
    }
  }

  function handleClear() {
    setImageUrls([])
    setInputs("")
  }
  return (
    <div className = 'upload-combo-page'>
      {
        characterData&&selectedGame
        ?
          <>
            <div className = 'combo-details-container'>
              <h2>Combo Details</h2>
              <h3>{characterData.name} - {selectedGame.name}</h3>
              <div className = 'checkbox-container'>
                <h3>Meterless</h3>
                <input 
                  type = 'checkbox'
                  checked = {meterless}
                  onChange = {() => setMeterless(() => !meterless)}
                />
              </div>
              <DropdownMenu
                options = {characterData.starters}
                value = {starter}
                setValue = {setStarter}
                placeholder = "Starter"
                title = "Starter"
              />
              <DropdownMenu
                options = {["Corner", "Midscreen", "Mid to Corner", "Back to Corner"]}
                value = {location}
                setValue = {setLocation}
                placeholder = "Location"
                title = "Location"
              />

              <DropdownMenu
                options = {selectedGame.hit_types}
                value = {hitType}
                setValue = {setHitType}
                placeholder = "Hit Type"
                title = "Hit Type"
              />
              <div className = 'input-container'>
                <h3>Damage</h3>
                <input
                  type = "number"
                  value = {damage}
                  onChange = {handleDamageChange}
                />
              </div>
              <div className = 'input-container'>
                <h3>Author Notes</h3>
                <textarea
                  type = "text"
                  value = {authorNotes}
                  maxLength = {100}
                  onChange = {(e) => setAuthorNotes(e.target.value)}
                />
              </div>
            </div>

            <div
              className = 'combo-builder-container'
              tabIndex = {0}
              onKeyDown = {handleKeyDown}
            >
              <h2>Combo Builder</h2>
              <div className = 'combo-display'>
                <div className = 'icons-container'>
                  {
                    imageUrls.map((url, index) => {
                      return (
                        <Icon
                          key = {index}
                          url = {url}
                        />
                      )
                    })
                  }   
                </div>
                <button
                  className = 'clear-button'
                  onClick = {handleClear}
                >
                Clear</button>
              </div>
                <IconPicker
                  extraInputs = {selectedGame.inputs["Extra"]}
                  buttonInputs = {selectedGame.inputs["Button"]}
                  motionInputs = {characterData.inputs["Motion"]}
                  handleClick = {handleClick}
                  handleSpace = {handleSpace}
                />
            </div>

            <div className = 'combo-video-container'>
              <div className = 'video'>
                <h2>Combo Video</h2>
                <input
                  type = "text"
                  value = {youtubeInput}
                  onChange = {(e) => setYoutubeInput(e.target.value)}
                  placeholder = "YouTube ID"
                />
                <button
                  className = 'check-video-button'
                  onClick = {() => setYoutubeId(youtubeInput)}
                >Check Video</button>
                <YouTube 
                  videoId = {youtubeId}
                  opts = {youtubeStyles}
                />
              </div>
              <div className = 'submit'>
                <ul className = 'errors-list'>
                  {
                    errors.map((e, index) => {
                      return (
                        <li key = {index}>{e}</li>
                      )
                    })
                  }
                </ul>
                <button
                onClick = {handleSubmit}
                className = 'submit-combo-button'
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        : <div>Loading...</div>
      }
    </div>
  )
}

export default UploadPage