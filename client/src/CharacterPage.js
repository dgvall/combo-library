import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { CharacterDataContext } from './context/CharacterData'
import Combo from './Combo'

import './CharacterPage.css'
import ComboFilter from './ComboFilter'

function CharacterPage({ dataRetrieved, selectedGame, handleGameSelection }) {
  const { game, character } = useParams()
  const history = useHistory()
  const { characterData, setCharacterData } = useContext(CharacterDataContext)
  const [ displayedCombos, setDisplayedCombos ] = useState([])

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved])

  useEffect(() => {
    if (characterData) {
      setDisplayedCombos(characterData.combos)
    }
  }, [characterData])

  // function getFilters(obj) {
  //   return obj
  // }

  return (
    <div className = 'character-page' >
      {
        characterData &&
          <>
          <div className = 'combos-filter-container'>
            <ComboFilter
              characterData = {characterData}
              selectedGame = {selectedGame}
              setDisplayedCombos = {setDisplayedCombos}
            />
          </div>

            <div className = "combos-container">
              <button
                className = 'upload-button'
                onClick = {() => history.push(`/${game}/${character}/upload`)}
              >+</button>
              {
                displayedCombos.map((c) => {
                  console.log(c)
                  return (
                    <Combo
                      key = {c.id}
                      id = {c.id}
                      imageUrls = {c.image_urls}
                      youtubeId = {c.youtube_id}
                      authorNotes = {c.author_notes}
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
