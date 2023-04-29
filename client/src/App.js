import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'

import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = '/'>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
