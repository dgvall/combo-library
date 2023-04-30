import React, {useContext, useEffect} from 'react'
import { UserContext } from './context/user'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'

import './App.css'

function App() {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  console.log(user)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = '/home'>
          <Home />
        </Route>
        <Route exact path = '/signup'>
          <Signup />
        </Route>
        <Route exact path = '/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
