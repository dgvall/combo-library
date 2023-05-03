import React from 'react'
import { useHistory } from 'react-router-dom'

import './Character.css'

function Character({ id, imageUrl, name, game, slug }) {
  const history = useHistory()
  return (
    <div
      className = 'character'
      onClick = {() => history.push(`/${game}/${slug}`)}
    >
      <img 
        src = {imageUrl}
        alt = {name}
      />
    </div>
  )
}

export default Character
