import React, { useState, useEffect, useContext } from 'react'
import { CharacterDataContext } from './context/CharacterData'
import { useHistory, useParams} from 'react-router-dom'
import YouTube from 'react-youtube'
import IconPicker from './IconPicker'
import DropdownMenu from './DropdownMenu'
import Icon from './Icon'

import './UploadPage.css'

function UploadPage( { dataRetrieved, selectedGame, handleGameSelection  } ) {
  const history = useHistory()
  const { characterData, setCharacterData} = useContext(CharacterDataContext)
  const { game, character } = useParams()

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


  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved])

  // console.log(selectedGame)
  // console.log(characterData)
  console.log(inputs)

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
            console.log(data)
          })
        }
        else {
          r.json().then((error) => console.log(error.errors))
        }
      })
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
    console.log(src)
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

  console.log(characterData)
  console.log(starter)
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
                  buttonInputs = {selectedGame.inputs["Normal"]}
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
                <div>
                  ERRORS HERE
                </div>
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