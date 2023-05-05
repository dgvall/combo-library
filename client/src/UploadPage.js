import React, { useState, useEffect, useContext } from 'react'
import { CharacterDataContext } from './context/CharacterData'
import { useHistory, useParams} from 'react-router-dom'

import './UploadPage.css'

function UploadPage() {
  const history = useHistory()
  const { characterData, setCharacterData} = useContext(CharacterDataContext)
  const { game, character } = useParams()

  const [starter, setStarter] = useState("")
  const [meterless, setMeterless] = useState(0)
  const [location, setLocation] = useState("")
  const [hitType, setHitType] = useState("")
  const [damage, setDamage] = useState("")
  const [authorNotes, setAuthorNotes] = useState("")
  const [youtubeId, setYoutubeId] = useState("")

  console.log(characterData)
  return (
    <div className = 'upload-combo-page'>
      <div className = 'combo-details-container'>
        Combo Details
      </div>
      <div className = 'combo-builder-container'>
        Combo Builder
      </div>
      <div className = 'combo-video-container'>
        Combo Video
      </div>
    </div>
  )
}

export default UploadPage