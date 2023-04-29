import React from 'react'

import './Home.css'

function Home() {
  return (
    <div className = 'home'>
      <div className = 'home-column'>
        <h2>READING A COMBO</h2>
        <p>At the combo library, we use iconography to display combos in an easy to read fashion.</p>
        <p>Directions and motion inputs are shown with an image of a dpad.</p>
        <p>Button icons are used on a per game basis. Strive uses slash and heavy slash while Street fighter uses punches and kicks.</p>
        <p>By combining directions/motion inputs and buttons, you can now read fighting game notation!</p>
        <h2>IMPORTANT</h2>
        <p>All fighting game notation assumes the character is facing right. If your character is facing left, you will need to flip the directions and motions.</p>
      </div>

      <div className = 'home-column'>
        <h2>WHAT MAKES A COMBO?</h2>
        <p>A combo is a way to extend a hit into extra damage by linking/chaining normal moves, command normals, special moves, and supers.</p>
        <p>Normals are performed with a button</p>
        <p>Command normals are performed with a direction and a button</p>
        <p>Special moves are performed with a motion input and a button</p>
        <p>Supers are performed with a complicated motion input and a button</p>
      </div>

      <div className = 'home-column'>
        <h2>WHY SAVE COMBOS?</h2>
        <p>Saving combos provides resources for other fighting game players to help them learn and improve. Whether it be learning a new character or a new fighting game, sharing combos makes the learning process easier for everyone.</p>
      </div>
    </div>
  )
}

export default Home