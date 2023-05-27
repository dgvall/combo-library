import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'

import Icon from './Icon'

import './Combo.css'

function Combo( { id, starter, hitType, location, imageUrls, youtubeId, authorNotes, canEdit, handleClickEdit, isBookmarked, user, addBookmark, removeBookmark, madeCombo} ) {
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
    <div className = 
      {
        madeCombo
        ? 'owns-combo-container'
        :  'combo-container'
      }>
        <div className = 'combo-top-display'>
          <div className = 'buttons-container'>
            {
              authorNotes &&
                // <button
                //   onClick = {() => setShowNotes(() => !showNotes)}
                // >🗒️</button>

                <img
                  className = "bookmark-icon"
                  onClick = {() => setShowNotes(() => !showNotes)}
                  src = "https://i.imgur.com/wmSZLTt.png"
                  alt = "author notes button"
                />
            }

            {/* <button
              onClick = {() => setShowVideo(() => !showVideo)}
            >▶️</button> */}

            <img
              className = "bookmark-icon"
              onClick = {() => setShowVideo(() => !showVideo)}
              src = "https://i.imgur.com/jfFgTr3.png"
              alt = "open video button"
            />
          </div>
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
        <div className = 'combo-bottom-display'>
          <div className = 'combo-info'>
            <h3>{hitType} {starter}</h3>
            <h3>{location}</h3>
          </div>
          <div className = 'buttons-container'>
            {
              canEdit &&
              // <button
              //   onClick = {() => handleClickEdit(id)}
              // >⚙️</button>
              <img
                className = "bookmark-icon"
                onClick = {() => handleClickEdit(id)}
                src = "https://i.imgur.com/v8uIZRI.png"
                alt = "settings"
              />
            }
            {
              bookmarked
              ?
              // <button
              //   onClick = {handleRemoveBookmark}
              // >🔖</button>

              <img
                className = "bookmark-icon"
                src = "https://i.imgur.com/0DyMeol.png"
                alt = "bookmark"
                onClick = {handleRemoveBookmark}
              />
              
              
              :
              // <button
              //   onClick = {handleBookmark}
              // >x</button>
              <img
                className = "bookmark-icon"
                src = "https://i.imgur.com/G2oUrm9.png"
                alt = "bookmark"
                onClick = {handleBookmark}
              />
            }
          </div>
        </div>
        : 
        <div className = 'combo-bottom-display'>
          <div className = 'combo-info'>
            <h3>{hitType} {starter}</h3>
            <h3>{location}</h3>
          </div>
        </div>
      }
    </div>
  )
}
export default Combo

