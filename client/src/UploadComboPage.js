import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './context/user'
import { CharacterDataContext } from './context/CharacterData'
import { useHistory, useParams} from 'react-router-dom'
import YouTube from 'react-youtube'
import ComboDetails from './ComboDetails'
import ComboBuilder from './ComboBuilder'
import './UploadComboPage.css'

function UploadComboPage( { dataRetrieved, selectedGame, handleGameSelection } ) {
  const history = useHistory()
  const { characterData, setCharacterData} = useContext(CharacterDataContext)
  const { user, setUser } = useContext(UserContext)
  const { game, character } = useParams()
  const [youtubeInput, setYoutubeInput] = useState("")
  const [youtubeId, setYoutubeId] = useState("")
  const [inputs, setInputs] = useState("")
  const [errors, setErrors] = useState([])
  const [comboDetails, setComboDetails] = useState(null)

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved])

  function handleSubmit(e) {
    e.preventDefault()
    const comboObj = {
      ...comboDetails,
      youtube_id: youtubeId,
      inputs
      // youtube id only works after clicking check video
    }
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
            addCombo(data)
            history.push(`/${game}/${character}`)
          })
        }
        else {
          r.json().then((error) => setErrors(error.errors))
        }
      })
  }

  function addCombo(newCombo) {
    // update characterData state
    const updatedCharacterCombos = [newCombo, ...characterData.combos]
    setCharacterData({...characterData, combos: updatedCharacterCombos})

    // update user state
    const updatedComboIds = [...user.combo_ids, newCombo.id]
    const updatedBookmarkIds = [...user.bookmarked_combo_ids, newCombo.id]

    const foundCharacter = user.bookmarks.find((b) => b.character.slug == character)
    if (foundCharacter) {
      const updatedBookmarks = user.bookmarks.map((b) => {
        if (b.character.slug === character) {
          b.combos = [newCombo, ...b.combos]
          return b
        } else return b
      })
      const updatedUser = {...user, combo_ids: updatedComboIds, bookmarked_combo_ids: updatedBookmarkIds, bookmarks: updatedBookmarks}
      setUser(updatedUser)
    }
    // create a new bookmarked character
    else {
      const newBookmark = {character: characterData, combos: [newCombo], game: selectedGame}
      const updatedBookmarks = [...user.bookmarks, newBookmark]
      const updatedUser = {...user, combo_ids: updatedComboIds, bookmarked_combo_ids: updatedBookmarkIds, bookmarks: updatedBookmarks}
      setUser(updatedUser)
    }
  }

  const youtubeStyles = {
    width: '320vw', 
    height: '180vh', 
  }

  return (
    <div className = 'upload-combo-page'>
      {
        characterData&&selectedGame
        ?
          <>
            <ComboDetails 
              selectedGame = {selectedGame}
              characterData = {characterData}
              setComboDetails = {setComboDetails}
              combo = {null}
            />

            <ComboBuilder
              characterData = {characterData}
              selectedGame = {selectedGame}
              combo = {null}
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
                    <button
                      onClick = {handleSubmit}
                      className = 'submit-combo-button'
                    >Upload</button>
              </div>
            </div>
          </>
        : <div>Loading...</div>
      }
    </div>
  )
}

export default UploadComboPage