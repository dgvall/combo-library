import React, {useContext, useState, useEffect} from 'react'
import { UserContext } from './context/user'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import GamesPage from './GamesPage'
import CharactersPage from './CharactersPage'

import './App.css'

function App() {
  const { user, setUser } = useContext(UserContext)
  const [games, setGames] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/games").then((r) => {
      if (r.ok) {
        r.json().then((gamesData) => setGames(gamesData) )
      }
    })
  }, [])

  console.log(games)

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
        <Route exact path = '/games'>
          <GamesPage
            games = {games}
          />
        </Route>
        <Route exact path = '/:game'>
          <CharactersPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
