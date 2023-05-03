import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Character from './Character'
import './CharactersPage.css'

function CharactersPage({ dataRetrieved, selectedGame, handleGameSelection }) {
  const { game } = useParams()

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame, dataRetrieved])

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
              slug = {c.slug}
              game = {game}
            />
          )
        })
      }
    </div>
  )
}

export default CharactersPage