import React from 'react'
import GlossaryItem from './GlossaryItem'
import './Glossary.css'


function Glossary() {
  return (
    <div className = 'glossary-page'>
      <h1 className = "glossary-main-header">Glossary</h1>
      <img src = "https://i.imgur.com/a9owVd8.jpg"/>
      <h2>*Numpad notation assumes player is facing the right*</h2>
      <div className = 'glossary-items-container'>
      <div className = 'glossary-item-manual'>
        <div className = 'glossary-icons-row'>
          <img src = "https://i.imgur.com/AREXTeF.png"/>
          <img src = "https://i.imgur.com/VvCULEF.png"/>
          <img src = "https://i.imgur.com/AREXTeF.png"/>
        </div>
        <p>Follow up attack</p>
      </div>
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
    <h1 className = "glossary-header">Guilty Gear: Strive</h1>
    <div className = 'glossary-items-container'>
      <GlossaryItem
        img = "https://i.imgur.com/Dv8VQDw.png"
        description = "Punch"
      />
      <GlossaryItem
        img = "https://i.imgur.com/8AKrxRf.png"
        description = "Kick"
      />
      <GlossaryItem
        img = "https://i.imgur.com/KtvFf0G.png"
        description = "Slash"
      />
      <GlossaryItem
        img = "https://i.imgur.com/Ki3AR78.png"
        description = "Heavy Slash"
      />
      <GlossaryItem
        img = "https://i.imgur.com/iolwA1k.png"
        description = "Dust"
      />
      <GlossaryItem
        img = "https://i.imgur.com/ovXavcY.png"
        description = "Roman cancel"
      />
      <GlossaryItem
        img = "https://i.imgur.com/TuBfI2x.png"
        description = "Dash macro"
      />
      <GlossaryItem
        img = "https://i.imgur.com/hd22b7L.png"
        description = "Close proximity to opponent"
      />
      <GlossaryItem
        img = "https://i.imgur.com/8ux6pvT.png"
        description = "Far proximity to opponent"
      />
      <GlossaryItem
        img = "https://i.imgur.com/uDCpULE.png"
        description = "Wall splat"
      />
    </div>

    <h1 className = "glossary-header">Street Fighter 6</h1>
    <div className = 'glossary-items-container'>
      <GlossaryItem
        img = "https://i.imgur.com/6c6Pz4v.png"
        description = "Punch (Any)"
      />
      <GlossaryItem
        img = "https://i.imgur.com/uTlDrTm.png"
        description = "Kick (Any)"
      />
      <GlossaryItem
        img = "https://i.imgur.com/46kbAU5.png"
        description = "Drive Rush"
      />
      <GlossaryItem
        img = "https://i.imgur.com/aCCMFrY.png"
        description = "Light Punch"
      />
      <GlossaryItem
        img = "https://i.imgur.com/ptI0QQ8.png"
        description = "Medium Punch"
      />
      <GlossaryItem
        img = "https://i.imgur.com/AREXTeF.png"
        description = "Heavy Punch"
      />
      <GlossaryItem
        img = "https://i.imgur.com/Mc2G0nT.png"
        description = "Light Kick"
      />
      <GlossaryItem
        img = "https://i.imgur.com/NHrJZfc.png"
        description = "Medium Kick"
      />
      <GlossaryItem
        img = "https://i.imgur.com/VuPrTtO.png"
        description = "Heavy Kick"
      />
      <GlossaryItem
        img = "https://i.imgur.com/TnDZpg0.png"
        description = "Drive Impact"
      />
    </div>
    </div>
  )
}

export default Glossary