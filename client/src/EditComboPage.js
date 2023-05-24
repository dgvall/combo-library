import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './context/user'
import { CharacterDataContext } from './context/CharacterData'
import { useHistory, useParams} from 'react-router-dom'
import YouTube from 'react-youtube'
import ComboDetails from './ComboDetails'
import ComboBuilder from './ComboBuilder'
import './UploadComboPage.css'

function EditComboPage( {dataRetrieved, selectedGame, handleGameSelection} ) {
  const history = useHistory()
  const { characterData, setCharacterData} = useContext(CharacterDataContext)
  const { user, setUser } = useContext(UserContext)
  const { game, character, comboId } = useParams()
  const [inputs, setInputs] = useState("")
  const [youtubeInput, setYoutubeInput] = useState("")
  const [youtubeId, setYoutubeId] = useState("")
  const [errors, setErrors] = useState([])
  const [ownsCombo, setOwnsCombo] = useState(false)
  const [comboDetails, setComboDetails] = useState(null)
  const [combo, setCombo] = useState(null)

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved, handleGameSelection])

  useEffect(() => {
      // checks if logged in
      if(user && characterData && comboId && character && selectedGame) {
        // let foundId = user.combo_ids.find((id) => id == comboId)
        // checks if comboId is uploaded by this user
        // if (foundId) {
          // let foundCharacter = user.bookmarks.find((b) => b.character.slug === character)
          // if (foundCharacter) {
          //   let foundCombo = foundCharacter.combos.find((c) => c.id === parseInt(comboId))
          //   if (foundCombo) {
          //     if (foundCombo.user_id === user.id) {
          //       setCombo(foundCombo)
          //       setYoutubeInput(foundCombo.youtube_id)
          //       setYoutubeId(foundCombo.youtube_id)
          //       setInputs(foundCombo.inputs)
          //       // setImageUrls(foundCombo.image_urls)
          //       setOwnsCombo(true)
          //     }
          //   }
          // }
        // }

        // get "/users/:user_id/games/:game_id/characters/:character_id/combos/:id", to: "combos#show"

        fetch(`/api/users/${user.id}/games/${selectedGame.id}/characters/${characterData.id}/combos/${comboId}`)
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              console.log(data)
              setCombo(data)
              setYoutubeInput(data.youtube_id)
              setYoutubeId(data.youtube_id)
              setInputs(data.inputs)
              // setImageUrls(data.image_urls)
              setOwnsCombo(true)
            })
          }
        })
    }
  }, [user, character, comboId, characterData, selectedGame])

  function handleSubmit(e) {
    e.preventDefault()

    const comboObj = {
      ...comboDetails,
      youtube_id: youtubeId,
      inputs
      // youtube id only works after clicking check video
    }

      fetch(`/api/characters/${characterData.id}/combos/${comboId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(comboObj)
      })
        .then((r) => {
          if(r.ok) {
            r.json().then((data) => {
              // updateCombo(data)
              history.push(`/${game}/${character}`)
            })
          }
          else {
            r.json().then((error) => setErrors(error.errors))
          }
        })
    
  }

  function handleDelete() {
    fetch(`/api/characters/${characterData.id}/combos/${comboId}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          deleteCombo()
          history.push(`/${game}/${character}`)
        }
        else {
          r.json().then((error) => setErrors(error.errors))
        }
      })
  }

  function deleteCombo() {
    // update characterData state
    // const updatedCharacterCombos = characterData.combos.filter((c) => c.id !== parseInt(comboId))
    // setCharacterData({...characterData, combos: updatedCharacterCombos})

    // update user state
    // const updatedComboIds = user.combo_ids.filter((c) => c !== parseInt(comboId))
    const updatedBookmarkIds = user.bookmarked_combo_ids.filter((c) => c !== parseInt(comboId))
    // const updatedBookmarks = user.bookmarks.map((b) => {
    //   if (b.character.slug === character) {
    //     const updatedCombos = b.combos.filter((c) => c.id != comboId)
    //     return {...b, combos: updatedCombos}
    //   } else return b
    // })

    // if this leads to issues, revert to above code. Will test with more characters later
    // const updatedBookmarks = user.bookmarks.map((b) => {
    //   if (b.character.slug === character) {
    //     const updatedCombos = b.combos.filter((c) => c.id !== parseInt(comboId))
    //     if (updatedCombos.length !== 0) {
    //       return { ...b, combos: updatedCombos }
    //     } else {
    //       return null // Return null for bookmarks with no updatedCombos
    //     }
    //   } else {
    //     return b
    //   }
    // }).filter(Boolean) // Remove null bookmark objects
    const updatedUser = {...user, bookmarked_combo_ids: updatedBookmarkIds}
    setUser(updatedUser)
  }

  function updateCombo(newCombo) {
    // update characterData state
    // const updatedCharacterCombos = characterData.combos.map((c) => {
    //   if (c.id === newCombo.id) {
    //     return newCombo
    //   }
    //   else return c
    // })
    // setCharacterData({...characterData, combos: updatedCharacterCombos})

    // update user state
    // const updatedBookmarks = user.bookmarks.map((b) => {
    //   if (b.character.slug === character) {
    //     const updatedCombos = b.combos.map((c) => {
    //       if (c.id === newCombo.id) {
    //         return newCombo
    //       }
    //       else return c
    //     })
    //     return {...b, combos: updatedCombos}
    //   } else return b
    // })
    // const updatedUser = {...user, bookmarks: updatedBookmarks}
    // setUser(updatedUser)
  }

  const youtubeStyles = {
    width: '320vw', 
    height: '180vh', 
  }
  return (
    <div className = 'upload-combo-page'>
      {
        characterData&&selectedGame&&ownsCombo
        ?
          <>
          <ComboDetails
            selectedGame = {selectedGame}
            characterData = {characterData}
            setComboDetails = {setComboDetails}
            combo = {combo}
          />

            <ComboBuilder
              characterData = {characterData}
              selectedGame = {selectedGame}
              combo = {combo}
              inputs = {inputs}
              setInputs = {setInputs}
            />

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

                <div className = 'button-column'>
                  <button
                    onClick = {handleDelete}
                    className = 'delete-combo-button'
                  >DELETE</button>

                  <button
                    onClick = {handleSubmit}
                    className = 'submit-combo-button'
                  >Edit</button>
                </div>
              </div>
            </div>
          </>
        : <div>Loading...</div>
      }
    </div>
  )
}

export default EditComboPage