import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css'

function NavBar() {
  return (
    <nav className = 'navbar'>
      <div className = 'navbar-left'>
        <NavLink
          className = 'navbar-header'
          exact to = '/games'
        >GAMES</NavLink>

        <NavLink
          className = 'navbar-header'
          exact to = '/home'
        >HOME</NavLink>
      </div>

      <div className = 'navbar-center'>
        <h1 className = 'navbar-title'>COMBO LIBRARY</h1>
      </div>

      <div className = 'navbar-right'>
        <NavLink
          className = 'navbar-header'
          exact to = '/signup'
        >Signup</NavLink>

        <NavLink
          className = 'navbar-header'
          exact to = '/login'
        >Login</NavLink>
      </div>
    </nav>
  )
}

export default NavBar