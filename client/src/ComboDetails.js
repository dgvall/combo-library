import React, {useState} from 'react'

import DropdownMenu from './DropdownMenu'

function ComboDetails({characterData, selectedGame, setDisplayedCombos}) {
  const [starter, setStarter] = useState("")
  const [meterless, setMeterless] = useState(false)
  const [location, setLocation] = useState("")
  const [hitType, setHitType] = useState("")

  return (
    <div className = 'combo-details-container'>
      {
        characterData&&selectedGame
        ?
          <div>

            <h2>Combo Filter</h2>
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