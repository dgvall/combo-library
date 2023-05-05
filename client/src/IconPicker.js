import React from 'react'
import Icon from './Icon'
import './IconPicker.css'


function IconPicker({extraUrls, buttonUrls, directionUrls, motionUrls, spacebarUrl, handleClick, handleSpace}) {
  console.log(extraUrls)
  return (
    <div className = 'picker-container'>
      <div className = 'picker-rows'>
        <div className = 'picker-column'>
        <h2>Extras</h2>
      <div className = 'picker-row'>
        {
          extraUrls.map((u, index) => {
            return (
              <Icon
                handleClick = {handleClick}
                key = {index}
                url = {u}
              />
            )
          })
        }
      </div>

      <h2>Buttons</h2>
      <div className = 'picker-row'>
        {
          buttonUrls.map((u, index) => {
            return (
              <Icon
                handleClick = {handleClick}
                key = {index}
                url = {u}
              />
            )
          })
        }
      </div>
        </div>

        <div className = 'picker-column'>
        <h2>Directions</h2>
      <div className = 'picker-row-directions'>
        {
          directionUrls.map((u, index) => {
            return (
              <Icon
                handleClick = {handleClick}
                key = {index}
                url = {u}
              />
            )
          })
        }
      </div>  

      <h2>Motions</h2>
      <div className = 'picker-row'>
        {
          motionUrls.map((u, index) => {
            return (
              <Icon
                handleClick = {handleClick}
                key = {index}
                url = {u}
              />
            )
          })
        }
      </div>
        </div>
      </div>
      

    

      <img
        src = "https://miketips.files.wordpress.com/2013/04/spacebar-pagedown.png"
        onClick = {handleSpace}
      />

      
    </div>
  )
}

export default IconPicker