import React from 'react'
import Icon from './Icon'
import './IconPicker.css'

import ClickableIcon from './ClickableIcon'


function IconPicker({extraInputs, buttonInputs, motionInputs, spacebarUrl, handleClick, handleSpace}) {

  const directionInputs = [
    {
      name: "7",
      image_url: "https://i.imgur.com/2rO9chH.png"
    },
    {
      name: "8",
      image_url: "https://i.imgur.com/8fY51s7.png"
    },
    {
      name: "9",
      image_url: "https://i.imgur.com/UqYEenq.png"
    },
    {
      name: "4",
      image_url: "https://i.imgur.com/HwKpXDr.png"
    },
    {
      name: "5",
      image_url: "https://i.imgur.com/OfO6HKV.png"
    },
    {
      name: "6",
      image_url: "https://i.imgur.com/gyfnDrv.png"
    },
    {
      name: "1",
      image_url: "https://i.imgur.com/Fby15hF.png"
    },
    {
      name: "2",
      image_url: "https://i.imgur.com/KezFbHr.png"
    },
    {
      name: "3",
      image_url: "https://i.imgur.com/06D3AyK.png"
    }
  ]
  return (
    <div className = 'picker-container'>
      <div className = 'picker-rows'>
        <div className = 'picker-column'>
          <h2>Extras</h2>
          <div className = 'picker-row'>
            {
              extraInputs.map((u) => {
                return (
                  <ClickableIcon
                    handleClick = {handleClick}
                    key = {u.id}
                    url = {u.image_url}
                    name = {u.name}
                  />
                )
              })
            }
          </div>
          <h2>Buttons</h2>
          <div className = 'picker-row'>
            {
              buttonInputs.map((u, index) => {
                return (
                  <ClickableIcon
                    handleClick = {handleClick}
                    key = {u.id}
                    url = {u.image_url}
                    name = {u.name}
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
              directionInputs.map((u, index) => {
                return (
                  <ClickableIcon
                    handleClick = {handleClick}
                    key = {index}
                    url = {u.image_url}
                    name = {u.name}
                  />
                )
              })
            }
          </div>  
          <h2>Motions</h2>
          <div className = 'picker-row'>
            {
              motionInputs.map((u, index) => {
                return (
                  <ClickableIcon
                    handleClick = {handleClick}
                    key = {index}
                    url = {u.image_url}
                    name = {u.name}
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