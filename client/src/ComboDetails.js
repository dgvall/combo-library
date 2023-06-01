import React, {useState, useEffect} from 'react'
import DropdownMenu from './DropdownMenu'
import './ComboDetails.css'

function ComboDetails( { characterData, selectedGame, setComboDetails, combo }) {
  const [starter, setStarter] = useState("")
  const [meterless, setMeterless] = useState(false)
  const [location, setLocation] = useState("")
  const [hitType, setHitType] = useState("")
  const [damage, setDamage] = useState("")
  const [authorNotes, setAuthorNotes] = useState("")

  useEffect(() => {
    if (combo) {
      setStarter(combo.starter)
      setMeterless(combo.meterless)
      setLocation(combo.location)
      setHitType(combo.hit_type)
      setDamage(combo.damage)
      setAuthorNotes(combo.author_notes)
    }
  }, [combo])

  useEffect(() => {
    let comboDetailsObj = {
      starter,
      meterless: meterless,
      location,
      hit_type: hitType,
      damage: parseInt(damage),
      author_notes: authorNotes,
    }
    setComboDetails(comboDetailsObj)
  }, [starter, meterless, location, hitType, damage, authorNotes, setComboDetails])

  function handleDamageChange(e) {
    if (!isNaN(e.target.value)) {
      if (e.target.value <= 1500) {
        setDamage(e.target.value)
      }
    }
  }

  return(
    <>
    {
      characterData&&selectedGame
      ?
        <div className = 'combo-details-container'>
          <h2>Combo Details</h2>
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
            <div className = 'input-container'>
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
          </div>
        </div>
        : <div></div>
    }
    </>
  )
}

export default ComboDetails