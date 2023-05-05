import React, { useState, useEffect, useContext } from 'react'
import { CharacterDataContext } from './context/CharacterData'
import { useHistory, useParams} from 'react-router-dom'

import DropdownMenu from './DropdownMenu'
import Icon from './Icon'

import './UploadPage.css'
import IconPicker from './IconPicker'

function UploadPage() {
  const history = useHistory()
  const { characterData, setCharacterData} = useContext(CharacterDataContext)
  const { game, character } = useParams()

  const [starter, setStarter] = useState("")
  const [meterless, setMeterless] = useState(false)
  const [location, setLocation] = useState("")
  const [hitType, setHitType] = useState("")
  const [damage, setDamage] = useState("")
  const [authorNotes, setAuthorNotes] = useState("")
  const [imageUrls, setImageUrls] = useState([])
  const [youtubeId, setYoutubeId] = useState("")

  console.log(characterData)

  function handleDamageChange(e) {
    if (!isNaN(e.target.value)) {
      if (e.target.value <= 1500) {
        setDamage(e.target.value)
      }
    }
  }
  const test = ["https://i.imgur.com/Fby15hF.png", "https://i.imgur.com/Fby15hF.png", "https://i.imgur.com/Fby15hF.png", "https://i.imgur.com/Fby15hF.png", "https://i.imgur.com/Fby15hF.png", "https://i.imgur.com/Fby15hF.png", "https://i.imgur.com/Fby15hF.png", "https://i.imgur.com/Fby15hF.png", "https://i.imgur.com/Fby15hF.png"]

  function getHitTypes() {
    if (game == "ggst") {
      return ["Normal", "Counter"]
    }
    else if (game == "sf6") {
      return ["Normal", "Counter", "Punish Counter"]
    }
  }

  function handleClick(src) {
    console.log(src)
    setImageUrls(() => [...imageUrls, src])
  }

  function handleSpace() {
    // set spaceUrl from game data later!
    const spaceUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEX///8AAACGhobg4OCUlJTc3Ny+vr6BgYGQkJB9fX3o6OjBwcHj4+PWbIn5AAAA0UlEQVR4nO3bSQ6DQAxFQRLm4f7nzR5YINlyE6nqAF9+++6uAwAAAAAAAAAAAAAAAAAAAAAA4H9N8/dk3YpP2NbzCfOUOL98LsbE+SfG6wlL4vzwysIhcV5hAYVBCgsoDFJYQGGQwgIKgxQWUBiksIDCIIUFFAYpLKAwSGEBhUEKCygMUlhAYdBNYZ84/0RfXrgffaVjLy98AYUKFbanUKHC9hQqVNieQoUK28ssvHmr/wKZb/Wv/y1eIPW/BQAAAAAAAAAAAAAAAAAAAAAAANV+DKkWELiZZ7MAAAAASUVORK5CYII="
    setImageUrls(() => [...imageUrls, spaceUrl])
  }

  function handleKeyDown(e) {
    if (e.code === 'Space') {
      handleSpace()
    }
  }

  console.log(characterData)
  console.log(starter)
  return (
    <div className = 'upload-combo-page'>
      {
        characterData
        ?
          <>
            <div className = 'combo-details-container'>
              <h2>Combo Details</h2>
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
                options = {getHitTypes()}
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

            <div
              className = 'combo-builder-container'
              tabIndex = {0}
              onKeyDown = {handleKeyDown}
            >
              <h2>Combo Builder</h2>
                <div className = 'icons-container'>
                  {
                    imageUrls.map((url, index) => {
                      return (
                        <Icon
                          key = {index}
                          url = {url}
                        />
                      )
                    })
                  }
                </div>
                <IconPicker
                  extraUrls = {test}
                  buttonUrls = {test}
                  directionUrls = {test}
                  motionUrls = {test}
                  spacebarUrl = {test}
                  handleClick = {handleClick}
                  handleSpace = {handleSpace}
                />


            </div>

            <div className = 'combo-video-container'>
              <h2>Combo Video</h2>
            </div>
          </>
        : <div>Loading...</div>
      }
   
    </div>
  )
}

export default UploadPage