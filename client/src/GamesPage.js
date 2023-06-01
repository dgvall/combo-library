import React from 'react'
import Game from './Game'
import './GamesPage.css'

function GamesPage({ games }) {
  return (
    <div className = 'games-container'>
      {
        games &&
        games.map((game) => {
          return (
            <Game
              key = {game.name}
              imageUrl = {game.image_url}
              name = {game.name}
              slug = {game.slug}
            />
          )
        })
      }
    </div>
  )
}

export default GamesPage