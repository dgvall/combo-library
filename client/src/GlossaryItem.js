import React from 'react'
import './GlossaryItem.css'

function GlossaryItem({img, description}) {
  return (
    <div className = 'glossary-item'>
      <img src = {img}/>
      <p>{description}</p>
    </div>
  )
}

export default GlossaryItem