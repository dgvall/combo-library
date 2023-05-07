import React from 'react'

import './Icon.css'

function ClickableIcon( {url, name, handleClick} ) {
  return (
    <div>
      <img
        onClick = {() => handleClick(url, name)}
        className = 'icon'
        src = {url}
      />
    </div>
  )
}

export default ClickableIcon