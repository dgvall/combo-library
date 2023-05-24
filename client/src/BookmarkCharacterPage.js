import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CharacterDataContext } from './context/CharacterData'
import { UserContext } from './context/user'
import Combo from './Combo'
import ComboFilter from './ComboFilter'
import './CharacterPage.css'

function BookmarkCharacterPage({ dataRetrieved, selectedGame, handleGameSelection }) {
  const { game, character, username } = useParams()
  const history = useHistory()
  const { characterData } = useContext(CharacterDataContext)
  const { user, setUser } = useContext(UserContext)
  const [ displayedCombos, setDisplayedCombos ] = useState([])
  const [ bookmark, setBookmark ] = useState(null)

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved, handleGameSelection])

  useEffect(() => {
      if (user) {
        const foundBookmark = user.bookmarks.find((b) => b.character.slug === character)
        if (foundBookmark) {
          setBookmark(foundBookmark)
          setDisplayedCombos(foundBookmark.combos)
        }
        else {
          history.push(`/${username}/bookmarks`)
        }
        // think about setting this up
        // setCharacterData(foundBookmark.character)
      }
  }, [user, character, username, game, characterData, history])

  function handleClickEdit(comboId) {
    history.push(`/${bookmark.game.slug}/${character}/${comboId}/edit`)
  }

  function addBookmark(newCombo) {
    const updatedBookmarkIds = [...user.bookmarked_combo_ids, newCombo.id]

    const foundCharacter = user.bookmarks.find((b) => b.character.slug === character)
    if (foundCharacter) {
      const updatedBookmarks = user.bookmarks.map((b) => {
        if (b.character.slug === character) {
          b.combos = [newCombo, ...b.combos]
          return b
        } else return b
      })
      const updatedUser = {...user, bookmarked_combo_ids: updatedBookmarkIds, bookmarks: updatedBookmarks}
      setUser(updatedUser)
    }
    // create a new bookmarked character
    else {
      const newBookmark = {character: characterData, combos: [newCombo], game: selectedGame}
      const updatedBookmarks = [newBookmark, ...user.bookmarks]
      const updatedUser = {...user, bookmarked_combo_ids: updatedBookmarkIds, bookmarks: updatedBookmarks}
      setUser(updatedUser)
    }
  }

  function removeBookmark(comboId) {
    const updatedBookmarkIds = user.bookmarked_combo_ids.filter((c) => c !== parseInt(comboId))
    // const updatedBookmarks = user.bookmarks.map((b) => {
    //   if (b.character.slug === character) {
    //     const updatedCombos = b.combos.filter((c) => c.id != comboId)
    //     return {...b, combos: updatedCombos}
    //   } else return b
    // })

    // if this leads to issues, revert to above code. Will test with more characters later
    const updatedBookmarks = user.bookmarks.map((b) => {
      if (b.character.slug === character) {
        const updatedCombos = b.combos.filter((c) => c.id !== parseInt(comboId))
        if (updatedCombos.length !== 0) {
          return { ...b, combos: updatedCombos }
        } else {
          return null // Return null for bookmarks with no updatedCombos
        }
      } else {
        return b
      }
    }).filter(Boolean) // Remove null bookmark objects

    const updatedUser = {...user, bookmarked_combo_ids: updatedBookmarkIds, bookmarks: updatedBookmarks}
    setUser(updatedUser)
  }

  return (
      <>
      {
        bookmark &&
        <div className = 'character-page'>
          <div className = 'combos-filter-container'>
            <ComboFilter
              characterData = {bookmark.character}
              selectedGame = {bookmark.game}
              setDisplayedCombos = {setDisplayedCombos}
              isBookmarks = {true}
              combos = {bookmark.combos}
              character = {character}
              username = {username}
            />
          </div>
            <div className = "combos-container">
              <button
                className = 'upload-button'
                onClick = {() => history.push(`/${bookmark.game.slug}/${character}/upload`)}
              >+</button>
              {
                displayedCombos.map((c) => {
                  let canEdit = false
                  if (user) {
                    if (c.user_id === user.id) {
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
                      isBookmarked = {true}
                      user = {user}
                      addBookmark = {addBookmark}
                      removeBookmark = {removeBookmark}
                    />
                  )
                })
              }
            </div>
            <div className = 'character-display'>
              <h2>{bookmark.character.name}</h2>
              <img src = {bookmark.character.image_url} alt = {bookmark.character.name}/>
            </div>
        </div>
      }
      </>
  )
}

export default BookmarkCharacterPage