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
  // const [unfilteredCombos, setUnfilteredCombos] = useState(null)
  const [ displayedCombos, setDisplayedCombos ] = useState([])
  const [ bookmark, setBookmark ] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  const [currentFilteredPage, setCurrentFilteredPage] = useState(1)
  const [totalFilteredPages, setTotalFilteredPages] = useState(1)

  // are filteredcombos being displayed? enabled when filter is clicked, disabled when unfilter is clicked
  const [displayedFiltered, setDisplayedFiltered] = useState(false)
  // when filter or unfilter buttons are pressed, set pagination menu back to 1
  const [filterButtonClicked, setFilterButtonClicked] = useState(false)


  useEffect(() => {
    setCurrentPage(1)
  }, [displayedFiltered])

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved, handleGameSelection])

  useEffect(() => {
    if (game && character && !displayedFiltered) {
      console.log("FETCHING FOR UNFILTERED")
      fetch(`/api/games/${game}/characters/${character}/combos`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          current_page: currentPage,
          // total_pages: totalPages,
        })
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            console.log(data)
            setDisplayedCombos(data.combos)
            setTotalPages(data.total_pages)

            // if(!unfilteredCombos) {
            //   setUnfilteredCombos(data.combos)
            // }
          })
        }
      })
      .catch((error) => console.log(error))
    }
  }, [character, game, currentPage, totalPages, displayedFiltered])

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

  // useEffect(() => {
  //   if (characterData) {
  //     setDisplayedCombos(characterData.combos)
  //     console.log(characterData.combos)
  //   }
  // }, [characterData])

  function handleClickEdit(comboId) {
    history.push(`/${game}/${character}/${comboId}/edit`)
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
              // combos = {unfilteredCombos}
              character = {character}
              username = {username}
              currentFilteredPage = {currentFilteredPage}
              setCurrentFilteredPage = {setCurrentFilteredPage}
              setTotalFilteredPages = {setTotalFilteredPages}
              setDisplayedFiltered = {setDisplayedFiltered}
              setFilterButtonClicked = {setFilterButtonClicked}
              filterButtonClicked = {filterButtonClicked}
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
                  let isBookmarked = false
                  if (user) {
                    if (c.user_id === user.id) {
                      canEdit = true
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
                      imageUrls = {c.image_urls}
                      youtubeId = {c.youtube_id}
                      authorNotes = {c.author_notes}
                      canEdit = {canEdit}
                      handleClickEdit = {handleClickEdit}
                      isBookmarked = {isBookmarked}
                      user = {user}
                      addBookmark = {addBookmark}
                      removeBookmark = {removeBookmark}
                    />
                  )
                })
              }
              {
                displayedFiltered
                ?
                <Pagination
                onPageChange = {handleFilteredPageChange}
                dataPerPage= {3}
                navigation={true}
                getStyle={'style-3'}
                totalPages= {totalFilteredPages}
                // filterButtonClicked = {filterButtonClicked}
                currentPageProp = {currentFilteredPage}
              />
        

                :

                <Pagination
                onPageChange = {handlePageChange}
                dataPerPage={3}
                navigation={true}
                getStyle={'style-3'}
                totalPages= {totalPages}
                // filterButtonClicked = {filterButtonClicked}
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
