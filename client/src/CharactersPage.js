import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Character from './Character'
import './CharacterPage.css'

function CharactersPage({ selectedGame, handleGameSelection }) {
  const { game } = useParams()

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame])

  return (
    <div className = 'characters-container'>
      {
        selectedGame&&
        selectedGame.characters.map((c) => {
          return (
            <Character
              key = {c.id}
              id = {c.id}
              imageUrl = {c.image_url}
              name = {c.name}
            />
          )
        })
      }
    </div>
  )
}

export default CharactersPage