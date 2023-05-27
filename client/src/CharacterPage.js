import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CharacterDataContext } from './context/CharacterData'
import { UserContext } from './context/user'
import Combo from './Combo'
import ComboFilter from './ComboFilter'
import './CharacterPage.css'
import Pagination from './Pagination'

function CharacterPage({ dataRetrieved, selectedGame, handleGameSelection}) {
  const { game, character, username } = useParams()
  const history = useHistory()
  const { characterData } = useContext(CharacterDataContext)
  const { user, setUser } = useContext(UserContext)
  const [ displayedCombos, setDisplayedCombos ] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  const [currentFilteredPage, setCurrentFilteredPage] = useState(1)
  const [totalFilteredPages, setTotalFilteredPages] = useState(1)

  // are filteredcombos being displayed? enabled when filter is clicked, disabled when unfilter is clicked
  const [displayedFiltered, setDisplayedFiltered] = useState(false)


  useEffect(() => {
    setCurrentPage(1)
  }, [displayedFiltered])

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved, handleGameSelection])

  useEffect(() => {
    if (game && character && !displayedFiltered && selectedGame && characterData) {
      console.log("FETCHING FOR UNFILTERED")
      fetch(`/api/games/${selectedGame.id}/characters/${characterData.id}/combos`, {
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
            console.log(data)
            setDisplayedCombos(data.combos)
            setTotalPages(data.total_pages)
          })
        }
      })
      .catch((error) => console.log(error))
    }
  }, [character, game, currentPage, displayedFiltered, selectedGame, characterData])

  useEffect(() => {
    console.log(currentPage)
    console.log(currentFilteredPage)
  }, [currentPage, currentFilteredPage])

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber)
  }

  function handleFilteredPageChange(pageNumber) {
    setCurrentFilteredPage(pageNumber)
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
  }

  return (
      <>
      {
        characterData && displayedCombos &&
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
              isBookmarks = {false}
              character = {character}
              username = {username}
              currentFilteredPage = {currentFilteredPage}
              setCurrentFilteredPage = {setCurrentFilteredPage}
              setTotalFilteredPages = {setTotalFilteredPages}
              setDisplayedFiltered = {setDisplayedFiltered}
            />
          </div>

            <div className = "combos-container-main">
              <button
                className = 'upload-button'
                onClick = {() => history.push(`/${game}/${character}/upload`)}
              >+</button>
              <div className = 'combos-container'>
              {
                displayedCombos.map((c) => {
                  let madeCombo = false
                  let canEdit = false
                  let isBookmarked = false
                  if (user) {
                    if (c.user_id === user.id) {
                      canEdit = true
                      isBookmarked = true
                      madeCombo = true
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

export default CharacterPage
