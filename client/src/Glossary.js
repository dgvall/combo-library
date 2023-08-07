import React from 'react'
import GlossaryItem from './GlossaryItem'
import './Glossary.css'


function Glossary() {
  return (
    <div className = 'glossary-page'>
      <GlossaryItem
        img = "https://i.imgur.com/VvCULEF.png"
        description = "Can only be executed in a sequence"
      />
      <div className = 'glossary-item-manual'>
        <div className = 'glossary-icons-row'>
          <img src = "https://i.imgur.com/rXmq6Ps.png"/>
          <img src = "https://i.imgur.com/AREXTeF.png"/>
          <img src = "https://i.imgur.com/HgDolUR.png"/>
        </div>
        <p>Hold a button</p>
      </div>
      <div className = 'glossary-item-manual'>
        <div className = 'glossary-icons-row'>
          <img src = "https://i.imgur.com/HgDolUR.png"/>
          <img src = "https://i.imgur.com/AREXTeF.png"/>
          <img src = "https://i.imgur.com/rXmq6Ps.png"/>
        </div>
        <p>Release a button</p>
      </div>
      <div className = 'glossary-item-manual'>
        <div className = 'glossary-icons-row'>
          <img src = "https://i.imgur.com/X4u3eOL.png"/>
          <img src = "https://i.imgur.com/AREXTeF.png"/>
        </div>
        <p>Aerial / jumping attack</p>
      </div>
      <GlossaryItem
        img = "https://i.imgur.com/gnDR9rY.png"
        description = "Jump cancel"
      />
      <GlossaryItem
        img = "https://i.imgur.com/zTALYJv.png"
        description = "Double jump"
      />
      <GlossaryItem
        img = "https://i.imgur.com/o8VUuQr.png"
        description = "Super jump"
      />
       <GlossaryItem
        img = "https://i.imgur.com/3Yiy3t1.png"
        description = "Delay"
      />
       <GlossaryItem
        img = "https://i.imgur.com/o8VUuQr.png"
        description = "Super jump"
      />
      <GlossaryItem
        img = "https://i.imgur.com/e92KV5m.png"
        description = "Micro-dash"
      />
      <GlossaryItem
        img = "https://i.imgur.com/dDhnIA9.png"
        description = "(Tiger knee) Buffer input while rising"
      />
      <GlossaryItem
        img = "https://i.imgur.com/KTDY9lc.png"
        description = "Land from the air to the ground"
      />
      <GlossaryItem
        img = "https://i.imgur.com/hE5DELK.png"
        description = "(On the ground) Input after opponent has been knocked down"
      />

      
    </div>
  )
}

export default Glossary