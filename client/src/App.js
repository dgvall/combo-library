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
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })

    fetch("/games").then((r) => {
      if (r.ok) {
        r.json().then((gamesData) => setGames(gamesData) )
      }
    })
  }, [])

  function handleGameSelection(abbreviation) {
    if (games) {
      const game = games.find((g) => g.abbreviation = abbreviation)
      setSelectedGame(game)
    }
  }

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
          <CharactersPage
            handleGameSelection = {handleGameSelection}
            selectedGame = {selectedGame}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
