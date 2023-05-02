import React from 'react'
import { useHistory } from 'react-router-dom'
import './Game.css'

function Game({ imageUrl, name, abbreviation }) {
  const history = useHistory()
  return (
    <div
      className = 'game'
      onClick = {() => history.push(`/${abbreviation}`)}
    >
      <img 
        src = {imageUrl}
        alt = {name}
      />
    </div>
  )
}

export default Game