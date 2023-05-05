import React from 'react'

import './Icon.css'

function Icon( {url, handleClick} ) {

  console.log(url)
  return (
    <div>
      {
        handleClick
        ?
          <img
            onClick = {() => handleClick(url)}
            className = 'icon'
            src = {url}
          />
        :
          <img
            className = 'icon'
            src = {url}
          />
        }
      
    </div>
  )
}

export default Icon