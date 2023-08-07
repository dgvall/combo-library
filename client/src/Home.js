import React from 'react'
import './Home.css'

function Home() {
  
  return (
    <div className = 'home'>
      <div className = 'home-column'>
        <h2>READING A COMBO</h2>
        <p>At the combo library, we use iconography to display combos in an easy to read fashion.</p>
        <p>Directions and motion inputs are shown with an image of a dpad.</p>
        <div className = 'home-icon-row'>
          <img src = "https://i.imgur.com/HwKpXDr.png" />
          <img src = "https://i.imgur.com/gyfnDrv.png" />
          <img src = "https://i.imgur.com/F0hNuQt.png" />
          <img src = "https://i.imgur.com/FGoSIYq.png" />
        </div>
        <p>Button icons are implemented on a per game basis.</p>
        <div className = 'home-icon-row'>
          <img src = "https://i.imgur.com/KtvFf0G.png" />
          <img src = "https://i.imgur.com/Ki3AR78.png" />
          <img src = "https://i.imgur.com/aCCMFrY.png" />
          <img src = "https://i.imgur.com/ptI0QQ8.png" />
        </div>
        <p>By combining directions/motion inputs and buttons, you can now read fighting game notation!</p>

        <div className = 'home-icon-row'>
          <img src = "https://i.imgur.com/KtvFf0G.png" />
          <img src = "https://i.imgur.com/IxEwf4u.png" />
          <img src = "https://i.imgur.com/gyfnDrv.png" />
          <img src = "https://i.imgur.com/Ki3AR78.png" />
          <img src = "https://i.imgur.com/IxEwf4u.png" />
          <img src = "https://i.imgur.com/FGoSIYq.png" />
          <img src = "https://i.imgur.com/Ki3AR78.png" />
        </div>
        <p>You can find more advanced notation in the glossary!</p>
        <div className = 'home-icon-row'>
          <img src = "https://i.imgur.com/rXmq6Ps.png"/>
          <img src = "https://i.imgur.com/HwKpXDr.png"/>
          <img src = "https://i.imgur.com/HgDolUR.png"/>
          <img src = "https://i.imgur.com/gyfnDrv.png"/>
          <img src = "https://i.imgur.com/IxEwf4u.png" />
          <img src = "https://i.imgur.com/AREXTeF.png" />
        </div>
      </div>

      <div className = 'home-column'>
        <h2>WHAT MAKES A COMBO?</h2>
        <p>A combo is a way to extend a hit into extra damage by linking/chaining normal moves, command normals, special moves, and supers.</p>
        <p>Normals are performed with a button</p>
        <div className = 'home-icon-row'>
        <img src = "https://i.imgur.com/Ki3AR78.png" />
        </div>
        <p>Command normals are performed with a direction and a button</p>
        <div className = 'home-icon-row'>
          <img src = "https://i.imgur.com/gyfnDrv.png" />
          <img src = "https://i.imgur.com/Ki3AR78.png" />
        </div>
        <p>Special moves are performed with a motion input and a button</p>
        <div className = 'home-icon-row'>
          <img src = "https://i.imgur.com/FGoSIYq.png" />
          <img src = "https://i.imgur.com/Ki3AR78.png" />
        </div>
        <p>Supers are performed with a complicated motion input and a button</p>
        <div className = 'home-icon-row'>
          <img src = "https://i.imgur.com/iocDwKJ.png" />
          <img src = "https://i.imgur.com/gyfnDrv.png" />
          <img src = "https://i.imgur.com/Ki3AR78.png" />
        </div>
      </div>

      <div className = 'home-column'>
        <h2>WHY SAVE COMBOS?</h2>
        <p>Saving combos provides resources for other fighting game players to help them learn and improve. Whether it be learning a new character or a new fighting game, sharing combos makes the learning process easier for everyone.</p>
        <img src = "https://i.imgur.com/YSM5bS6.png" alt = "Anji Portrait"/>
      </div>
    </div>
  )
}

export default Home