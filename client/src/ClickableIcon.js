import React from 'react'

import './Icon.css'

function ClickableIcon( {url, name, handleClick, spaceIcon} ) {
  return (
    <div>
      {
        !spaceIcon
        ?
        <img
          onClick = {() => handleClick(url, name)}
          className = 'icon'
          src = {url}
          alt = {name}
        />
        :
        <img
          onClick = {() => handleClick(url, name)}
          className = 'spaced-icon'
          src = {url}
          alt = {name}
        />
      }
    </div>
  )
}

export default ClickableIcon