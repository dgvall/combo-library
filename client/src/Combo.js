import React, { useState } from 'react'
import YouTube from 'react-youtube'

import Icon from './Icon'

import './Combo.css'

function Combo( { id, imageUrls, youtubeId, authorNotes, canEdit, handleClickEdit} ) {
  const [showVideo, setShowVideo] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  return (
    <div className = 'combo-container'>
      <div className = 'buttons-container'>
        {
          authorNotes &&
            <button
              onClick = {() => setShowNotes(() => !showNotes)}
            >🗒️</button>
        }

        <button
          onClick = {() => setShowVideo(() => !showVideo)}
        >▶️</button>

        
      </div>

      <div className = 'icons-container'>
        {
          imageUrls.map((url, index) => {
            return (
              <Icon
                key = {index}
                url = {url}
              />
            )
          })
        }
      </div>

      {
        showVideo &&
        <YouTube videoId = {youtubeId}/>
      }

      {
        showNotes &&
        <p className = 'author-notes'>{authorNotes}</p>
      }

      <div className = 'buttons-container'>
        {
          canEdit &&
          <button
            onClick = {() => handleClickEdit(id)}
          >⚙️</button>
        }
        <button>🔖</button>
      </div>
    </div>
  )
}

export default Combo

