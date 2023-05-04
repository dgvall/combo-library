import React from 'react'
import Icon from './Icon'

import './Combo.css'

function Combo( { id, imageUrls, youtubeId} ) {
  console.log(imageUrls)
  return (
    <div className = 'combo-container'>
      <h1>Combo</h1>
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
    </div>
  )
}

export default Combo

