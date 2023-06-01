import React from 'react'
import { useHistory } from 'react-router-dom'
import './Character.css'

function Character({ imageUrl, name, game, slug, isBookmarks, username }) {
  const history = useHistory()

  function handleClick() {
    if (isBookmarks) {
      history.push(`/${username}/bookmarks/${game}/${slug}`)
    }
    else {
      history.push(`/${game}/${slug}`)
    }
  }
  return (
    <div
      className = 'character'
      onClick = {handleClick}
    >
      <img 
        src = {imageUrl}
        alt = {name}
      />
    </div>
  )
}

export default Character
