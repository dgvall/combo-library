import React from 'react'

import './Icon.css'

function Icon( {url} ) {
  console.log(url)
  return (
      <img
      className = 'icon'
      src = {url}
    />
  )
}

export default Icon