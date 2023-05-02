import React from 'react'

import './Character.css'

function Character({ id, imageUrl, name }) {
  return (
    <div className = 'character'>
      <img 
        src = {imageUrl}
        alt = {name}
      />
    </div>
  )
}

export default Character
