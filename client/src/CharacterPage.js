import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CharacterDataContext } from './context/CharacterData'
import Combo from './Combo'

import './CharacterPage.css'

function CharacterPage() {
  const { game, character } = useParams()
  const history = useHistory()
  const { characterData, setCharacterData} = useContext(CharacterDataContext)

  return (
    <div className = 'character-page' >
      {
        characterData &&
          <>
            <div className = "combos-container">
              <button
                className = 'upload-button'
                onClick = {() => history.push(`/${game}/${character}/upload`)}
              >+</button>
              {
                characterData.combos.map((c) => {
                  return (
                    <Combo
                      key = {c.id}
                      id = {c.id}
                      imageUrls = {c.image_urls}
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
