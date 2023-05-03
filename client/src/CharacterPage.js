import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Combo from './Combo'

import './CharacterPage.css'

function CharacterPage() {
  const { game, character } = useParams()
  const [characterData, setCharacterData] = useState(null)
  console.log(character)

  useEffect(() => {
    fetch(`/characters/${character}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => setCharacterData(data))
        }
      })
  }, [])
  console.log(characterData)


  return (
    <div className = 'character-page' >
      {
        characterData &&
          <>
            <div className = "combos-container">
              {
                characterData.combos.map((c) => {
                  return (
                    <Combo
                      key = {c.id}
                      id = {c.id}
                      inputs = {c.inputs}
                      youtubeId = {c.youtube_id}
                    />
                  )
                })
              }
            </div>
            <div className = 'character-display'>
              <h2>{characterData.name}</h2>
              <img src = {characterData.image_url}/>
            </div>
          </>
      }
    </div>
  )
}

export default CharacterPage