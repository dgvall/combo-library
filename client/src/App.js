import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'

import './App.css'

function App() {
  const [user, setUser] = useState(null)

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
          <Signup
            setUser = {setUser}
          />
        </Route>
        <Route exact path = '/login'>
          <Login
            setUser = {setUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
