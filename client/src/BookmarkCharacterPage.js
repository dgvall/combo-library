import React, { useState, useEffect, useContext} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CharacterDataContext } from './context/CharacterData'
import { UserContext } from './context/user'
import Combo from './Combo'
import ComboFilter from './ComboFilter'
import Pagination from './Pagination'
import './CharacterPage.css'

function BookmarkCharacterPage({ dataRetrieved, selectedGame, handleGameSelection }) {
  const { game, character, username } = useParams()
  const history = useHistory()
  const { characterData } = useContext(CharacterDataContext)
  const { user, setUser } = useContext(UserContext)
  const [ displayedCombos, setDisplayedCombos ] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
   const [currentFilteredPage, setCurrentFilteredPage] = useState(1)
  const [totalFilteredPages, setTotalFilteredPages] = useState(1)
  const [displayedFiltered, setDisplayedFiltered] = useState(false)
  // refetch on unbookmark
  const [triggerFetch, setTriggerFetch] = useState(false)
  const [triggerFilteredFetch, setTriggerFilteredFetch] = useState(false)

  useEffect(() => {
    setCurrentPage(1)
  }, [displayedFiltered])

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved, handleGameSelection])
  

  useEffect(() => {
      if (user) {
        if (user.username === username) {
          const foundBookmark = user.bookmarks.find((b) => b.character.slug === character && b.character.game_slug === game)
          if (!foundBookmark) {
             // if you're on your own bookmarks without a combo, push to your combo page
             history.push(`/${username}/bookmarks`)
          }
        }
      }
  }, [user, character, username, game, history])

  useEffect(() => {
    if (selectedGame && characterData && username && !displayedFiltered) {
      fetch(`/api/users/${username}/bookmarks/games/${selectedGame.id}/characters/${characterData.id}/combos`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          current_page: currentPage,
        })
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setDisplayedCombos(data.combos)
            setTotalPages(data.total_pages)

            if (currentPage === 1 && data.combos.length === 0) {
              if (user) {
                if (user.username === username) {
                  const updatedBookmarks = user.bookmarks.filter((b) => b.character.slug !== characterData.slug || b.character.game_slug !== game)
                  setUser({...user, bookmarks: updatedBookmarks})
                }
              }
            }
          })
        }
      })
      .catch((error) => console.log(error))
    }
  }, [character, game, currentPage, displayedFiltered, username, triggerFetch, selectedGame, characterData])

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber)
  }

  function handleFilteredPageChange(pageNumber) {
    setCurrentFilteredPage(pageNumber)
  }

  function handleClickEdit(comboId) {
    history.push(`/${game}/${character}/${comboId}/edit`)
  }

  function addBookmark(newCombo) {
    const updatedBookmarkIds = [...user.bookmarked_combo_ids, newCombo.id]
    const foundCharacter = user.bookmarks.find((b) => b.character.slug === character && b.character.game_slug === game)
    if (foundCharacter) {
      const updatedUser = {...user, bookmarked_combo_ids: updatedBookmarkIds}
      setUser(updatedUser)
    }
    // create a new bookmarked character
    else {
      const newBookmark = {character: characterData, game: selectedGame}
      const updatedBookmarks = [newBookmark, ...user.bookmarks]
      const updatedUser = {...user, bookmarked_combo_ids: updatedBookmarkIds, bookmarks: updatedBookmarks}
      setUser(updatedUser)
    }
  }

  function removeBookmark(comboId) {
    const updatedBookmarkIds = user.bookmarked_combo_ids.filter((c) => c !== parseInt(comboId))
    const updatedUser = {...user, bookmarked_combo_ids: updatedBookmarkIds}
    setUser(updatedUser)

    // forces a refetch so only bookmarked data is displayed
    if (!displayedFiltered) {
      setTriggerFetch(() => !triggerFetch)
    }
    else setTriggerFilteredFetch(() => !triggerFilteredFetch)
  }

  function handleKeyDown(e) {
    if(displayedFiltered) {
      
      if (e.keyCode === 39) {
        if (currentFilteredPage + 1 <= totalFilteredPages) {
          setCurrentFilteredPage(() => currentFilteredPage + 1)
        }
      } else if (e.keyCode === 37) {
        if (currentFilteredPage > 1) {
          setCurrentFilteredPage(() => currentFilteredPage - 1)
        }
      }
    }
    else {
      if (e.keyCode === 39) {
        if (currentPage + 1 <= totalPages) {
          setCurrentPage(() => currentPage + 1)
        }
      } else if (e.keyCode === 37) {
        if (currentPage > 1) {
          setCurrentPage(() => currentPage - 1)
        }
      }
    }
  }

  return (
      <>
      {
        characterData && selectedGame &&
        <div
          onKeyDown={handleKeyDown}
          tabIndex = {0}
          className = 'character-page'
        >
          <div className = 'combos-filter-container'>
            <ComboFilter
              characterData = {characterData}
              selectedGame = {selectedGame}
              setDisplayedCombos = {setDisplayedCombos}
              isBookmarks = {true}
              character = {character}
              username = {username}
              currentFilteredPage = {currentFilteredPage}
              setCurrentFilteredPage = {setCurrentFilteredPage}
              setTotalFilteredPages = {setTotalFilteredPages}
              setDisplayedFiltered = {setDisplayedFiltered}
              triggerFilteredFetch = {triggerFilteredFetch}
            />
          </div>
            <div className = "combos-container-main">
              <button
                className = 'upload-button'
                onClick = {() => history.push(`/${selectedGame.slug}/${character}/upload`)}
              >+</button>
              <div className = 'combos-container'>
              {
                displayedCombos.map((c) => {
                  let isBookmarked = false
                  let canEdit = false
                  let madeCombo = false
                  if (user) {
                    if (c.user_id === user.id) {
                      canEdit = true
                      madeCombo = true
                      isBookmarked = true
                    }
                    else if (user.username === username) {
                      isBookmarked = true
                    }
                    else {
                      let foundBookmarkId = user.bookmarked_combo_ids.find((i) => i === c.id)
                      if (foundBookmarkId) {
                        isBookmarked = true
                      } 
                    }
                  } 
                  return (
                    <Combo
                      key = {c.id}
                      id = {c.id}
                      starter = {c.starter}
                      hitType = {c.hit_type}
                      location = {c.location}
                      imageUrls = {c.image_urls}
                      youtubeId = {c.youtube_id}
                      authorNotes = {c.author_notes}
                      canEdit = {canEdit}
                      handleClickEdit = {handleClickEdit}
                      isBookmarked = {isBookmarked}
                      user = {user}
                      addBookmark = {addBookmark}
                      removeBookmark = {removeBookmark}
                      madeCombo = {madeCombo}
                    />
                  )
                })
              }
              </div>
               {
                displayedFiltered
                ?
                <Pagination
                onPageChange = {handleFilteredPageChange}
                dataPerPage= {3}
                navigation={true}
                getStyle={'style-3'}
                totalPages= {totalFilteredPages}
                currentPageProp = {currentFilteredPage}
              />
                :

                <Pagination
                onPageChange = {handlePageChange}
                dataPerPage={3}
                navigation={true}
                getStyle={'style-3'}
                totalPages= {totalPages}
                currentPageProp={currentPage}
              />
              }
            </div>
            <div className = 'character-display'>
              <h2>{characterData.name}</h2>
              <img src = {characterData.image_url} alt = {characterData.name}/>
            </div>
        </div>
      }
      </>
  )
}

export default BookmarkCharacterPage