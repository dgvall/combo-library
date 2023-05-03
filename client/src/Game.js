import React from 'react'
import { useHistory } from 'react-router-dom'
import './Game.css'

function Game({ imageUrl, name, slug }) {
  const history = useHistory()
  return (
    <div
      className = 'game'
      onClick = {() => history.push(`/${slug}`)}
    >
      <img 
        src = {imageUrl}
        alt = {name}
      />
    </div>
  )
}

export default Game