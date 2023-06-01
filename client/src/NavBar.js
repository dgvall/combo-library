import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const { user, setUser } = useContext(UserContext)

  function handleLogout() {
    fetch('/api/logout', {
      method: "DELETE"
    })
      .then((r) => {
        if (r.ok) {
          setUser(null)
        }
      })
  }

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
      
      {
        user
        ?
          <div className = 'navbar-right'>
            <NavLink
              className = 'navbar-header'
              exact to = {`/${user.username}/bookmarks/`}
            >BOOKMARKS</NavLink>

            <NavLink
              className = 'navbar-header'
              exact to = '/home'
              onClick = {handleLogout}
            >Logout</NavLink>
          </div>
        :
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
      }
    </nav>
  )
}

export default NavBar