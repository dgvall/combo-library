import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CharacterDataContext } from './context/CharacterData'
import { UserContext } from './context/user'
import Combo from './Combo'

import './CharacterPage.css'
import ComboFilter from './ComboFilter'

function CharacterPage({ dataRetrieved, selectedGame, handleGameSelection, isBookmarks }) {
  const { game, character, username } = useParams()
  const history = useHistory()
  const { characterData, setCharacterData } = useContext(CharacterDataContext)
  const { user, setUser } = useContext(UserContext)
  const [ displayedCombos, setDisplayedCombos ] = useState([])
  const [ bookmark, setBookmark ] = useState(null)

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved])

  useEffect(() => {
    if (!isBookmarks) {
      if (characterData) {
        setDisplayedCombos(characterData.combos)
      }
    }
  }, [characterData])

  useEffect(() => {
    if (isBookmarks) {
      if (user) {
        const foundBookmark = user.bookmarks.find((b) => b.character.slug === character)
        setBookmark(foundBookmark)
        setDisplayedCombos(foundBookmark.combos)
        console.log(user)
      }
    }
  }, [user, character, username, game])

  function handleClickEdit(comboId) {
    if (!isBookmarks) {
      history.push(`/${game}/${character}/${comboId}`)
    }
    else {
      history.push(`/${bookmark.game.slug}/${character}/${comboId}`)
    }
  }

  return (
    <>
    {
      isBookmarks
      ?
      <>
      {
        bookmark &&
        <div className = 'character-page'>
          <div className = 'combos-filter-container'>
            <ComboFilter
              characterData = {bookmark.character}
              selectedGame = {bookmark.game}
              setDisplayedCombos = {setDisplayedCombos}
            />
          </div>

            <div className = "combos-container">
              <button
                className = 'upload-button'
                onClick = {() => history.push(`/${game}/${character}/upload`)}
              >+</button>
              {
                displayedCombos.map((c) => {
                  let canEdit = false
                  if (user) {
                    if (c.user_id == user.id) {
                      canEdit = true
                    }
                  }
                  return (
                    <Combo
                      key = {c.id}
                      id = {c.id}
                      imageUrls = {c.image_urls}
                      youtubeId = {c.youtube_id}
                      authorNotes = {c.author_notes}
                      canEdit = {canEdit}
                      handleClickEdit = {handleClickEdit}
                    />
                  )
                })
              }
            </div>
            <div className = 'character-display'>
              <h2>{bookmark.character.name}</h2>
              <img src = {bookmark.character.image_url}/>
            </div>
        </div>
      }
      </>
      :
      <>
      {
        characterData &&
          <div className = 'character-page'>
          <div className = 'combos-filter-container'>
            <ComboFilter
              characterData = {characterData}
              selectedGame = {selectedGame}
              setDisplayedCombos = {setDisplayedCombos}
            />
          </div>

            <div className = "combos-container">
              <button
                className = 'upload-button'
                onClick = {() => history.push(`/${game}/${character}/upload`)}
              >+</button>
              {
                displayedCombos.map((c) => {
                  let canEdit = false
                  if (user) {
                    if (c.user_id == user.id) {
                      canEdit = true
                    }
                  }
                  return (
                    <Combo
                      key = {c.id}
                      id = {c.id}
                      imageUrls = {c.image_urls}
                      youtubeId = {c.youtube_id}
                      authorNotes = {c.author_notes}
                      canEdit = {canEdit}
                      handleClickEdit = {handleClickEdit}
                    />
                  )
                })
              }
            </div>
            <div className = 'character-display'>
              <h2>{characterData.name}</h2>
              <img src = {characterData.image_url}/>
            </div>
          </div>
      }
      </>
      }
    </>
  )
}

export default CharacterPage
