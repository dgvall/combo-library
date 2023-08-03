import React from 'react'
import GlossaryItem from './GlossaryItem'
import './Glossary.css'


function Glossary() {
  return (
    <div className = 'glossary-page'>
      <GlossaryItem
        img = "https://i.imgur.com/VvCULEF.png"
        description = "Represents moves that can only be executed in a sequence"
      />
      <GlossaryItem
        img = "e"
        description = "hello"
      />
      
    </div>
  )
}

export default Glossary