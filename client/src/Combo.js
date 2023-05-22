import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'

import Icon from './Icon'

import './Combo.css'

function Combo( { id, imageUrls, youtubeId, authorNotes, canEdit, handleClickEdit, isBookmarked, user, addBookmark, removeBookmark} ) {
  const [showVideo, setShowVideo] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [bookmarked, setBookmarked] = useState(isBookmarked)
  
  useEffect(() => {
    setBookmarked(isBookmarked)
  }, [isBookmarked])

  function handleRemoveBookmark() {
    fetch(`/api/users/${user.id}/user_bookmarks/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          setBookmarked(false)
          removeBookmark(id)
        }
      })
  }

  function handleBookmark() {
    fetch(`/api/users/${user.id}/user_bookmarks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({combo_id: id})
    })
      .then((r) => {
        if (r.ok) {
          setBookmarked(true)
          r.json().then((comboData) => {
            addBookmark(comboData)
          })
        }
      })
  }

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
      {
        user
        ?
          <div className = 'buttons-container'>
            {
              canEdit &&
              <button
                onClick = {() => handleClickEdit(id)}
              >⚙️</button>
            }
            {
              bookmarked
              ?
              <button
                onClick = {handleRemoveBookmark}
              >🔖</button>
              :
              <button
                onClick = {handleBookmark}
              >x</button>
            }
          </div>
        : <></>
      }
    </div>
  )
}

export default Combo

