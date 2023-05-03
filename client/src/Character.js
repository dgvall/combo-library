import React from 'react'
import { useHistory } from 'react-router-dom'

import './Character.css'

function Character({ id, imageUrl, name, game }) {
  const history = useHistory()
  return (
    <div
      className = 'character'
      onClick = {() => history.push(`/${game}/${name}`)}
    >
      <img 
        src = {imageUrl}
        alt = {name}
      />
    </div>
  )
}

export default Character
