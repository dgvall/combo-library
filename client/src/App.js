import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'

import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = '/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
