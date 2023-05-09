import React, {useState} from 'react'
import './ComboDetails.css'

import DropdownMenu from './DropdownMenu'

function ComboDetails({characterData, selectedGame, setDisplayedCombos}) {
  const [starter, setStarter] = useState("")
  const [meterless, setMeterless] = useState("")
  const [location, setLocation] = useState("")
  const [hitType, setHitType] = useState("")

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

      if ( value === 'False') {
        filters[key] = false
      }

      else if (value === 'True') {
        filters[key] = true
      }
    })
    return filters
  }

  function handleFilter() {
    const filters = getFilters()
    console.log(filters)
    // fetch('/')
  }

  return (
    <div className = 'combo-details-container'>
      {
        characterData&&selectedGame
        ?
          <div>

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

export default ComboDetails