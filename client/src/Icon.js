import React from 'react'

import './Icon.css'

function Icon( {url} ) {

  return (
    <div>
      <img
        className = 'icon'
        src = {url}
      />
    </div>
  )
}

export default Icon