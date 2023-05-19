import React from 'react'

import './Icon.css'

function ClickableIcon( {url, name, handleClick} ) {
  return (
    <div>
      <img
        onClick = {() => handleClick(url, name)}
        className = 'icon'
        src = {url}
        alt = {name}
      />
    </div>
  )
}

export default ClickableIcon