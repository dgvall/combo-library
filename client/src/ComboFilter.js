import React, {useState, useEffect} from 'react'
import './ComboFilter.css'

import DropdownMenu from './DropdownMenu'

function ComboFilter({characterData, selectedGame, setDisplayedCombos, isBookmarks, username, character, currentFilteredPage, setCurrentFilteredPage, setTotalFilteredPages, setDisplayedFiltered, triggerFilteredFetch}) {
  const [starter, setStarter] = useState("")
  const [meterless, setMeterless] = useState("")
  const [location, setLocation] = useState("")
  const [hitType, setHitType] = useState("")
  const [showUnfilter, setShowUnfilter] = useState(false)

  function getFilters() {
    let filters = {}

    let obj = {
      starter,
      meterless,
      location,
      hit_type: hitType
    }

    Object.entries(obj).forEach(([key, value]) => {
      if( !!value ) {
        filters[key] = value
      }
      if ( value === 'False' ) {
        filters[key] = false
      }
      if ( value === 'True' ) {
        filters[key] = true
      }
    })
    return filters
  }

  function handleFilter() {
    const filters = getFilters()
    const params = {
      filters: filters,
      current_page: 1
    }
    if(Object.keys(filters).length > 0 && characterData && selectedGame) {
      const url = isBookmarks
      ? `/api/users/${username}/bookmarks/games/${selectedGame.id}/characters/${characterData.id}/filter_bookmarked_combos`
      : `/api/games/${selectedGame.id}/characters/${characterData.id}/filter_combos`

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            console.log(data)
            setShowUnfilter(true)
            setDisplayedCombos(data.combos)
            setTotalFilteredPages(data.total_pages)
            setDisplayedFiltered(true)
            setCurrentFilteredPage(1)
          })
        }
      })
    }
  }

  useEffect(() => {
    const filters = getFilters()
    const params = {
      filters: filters,
      current_page: currentFilteredPage
    }
    if(Object.keys(filters).length > 0 && selectedGame && characterData) {
      const url = isBookmarks
      ? `/api/users/${username}/bookmarks/games/${selectedGame.id}/characters/${characterData.id}/filter_bookmarked_combos`
      : `/api/games/${selectedGame.id}/characters/${characterData.id}/filter_combos`

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            console.log(data)
            setShowUnfilter(true)
            setDisplayedCombos(data.combos)
            setTotalFilteredPages(data.total_pages)
          })
        }
      })
    }
  }, [currentFilteredPage, triggerFilteredFetch, character, characterData, isBookmarks, selectedGame, setDisplayedCombos, setTotalFilteredPages, username])

  function handleUnfilter() {
    setStarter("")
    setMeterless("")
    setLocation("")
    setHitType("")
    setShowUnfilter(false)
    setCurrentFilteredPage(1)
    setTotalFilteredPages(1)
    setDisplayedFiltered(false)
  }

  return (
    <div>
      {
        characterData&&selectedGame
        ?
          <div className = 'combo-filter'>

            <h2>Combo Filter</h2>
                <h3>{characterData.name} - {selectedGame.name}</h3>
                <DropdownMenu
                  options = {['True', 'False']}
                  value = {meterless}
                  setValue = {setMeterless}
                  placeholder = "Both"
                  title = "Meterless?"
                />
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
                <button
                  className = "filter-button"
                  onClick = {handleFilter}
                >Filter</button>

                {
                  showUnfilter &&
                  <button
                    className = 'remove-filter-button'
                    onClick = {handleUnfilter}
                  >Remove Filters</button>
                }
                {/* <div className = 'input-container'>
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
                </div> */}
          </div>
        : <div>Loading...</div>
      }
  </div>
  )
}

export default ComboFilter