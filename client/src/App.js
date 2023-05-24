import React, {useContext, useState, useEffect} from 'react'
import { UserContext } from './context/user'
import { CharacterDataProvider } from './context/CharacterData'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import GamesPage from './GamesPage'
import CharactersPage from './CharactersPage'
import CharacterPage from './CharacterPage'
import UploadComboPage from './UploadComboPage'
import EditComboPage from './EditComboPage'
import './App.css'
import BookmarkCharacterPage from './BookmarkCharacterPage'

function App() {
  const { user, setUser } = useContext(UserContext)
  const [games, setGames] = useState(null)
  const [selectedGame, setSelectedGame] = useState(null)
  const [dataRetrieved, setDataRetrieved] = useState(false)

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })

    fetch("/api/games").then((r) => {
      if (r.ok) {
        r.json().then((gamesData) => {
          setGames(gamesData)
          setDataRetrieved(true)
          console.log(gamesData)
        })
      }
    })
  }, [setUser])

  useEffect(() => {
    console.log(user)
  }, [user])

  function handleGameSelection(slug) {
    if (dataRetrieved) {
      const game = games.find((g) => g.slug === slug)
      setSelectedGame(game)
    }
  }

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

        <Route exact path = '/:username/bookmarks/:character'>
          <CharacterDataProvider>
            < BookmarkCharacterPage
              handleGameSelection = {handleGameSelection}
              selectedGame = {selectedGame}
              dataRetrieved = {dataRetrieved}
              isBookmarks = {true}
            />
          </CharacterDataProvider>
        </Route>

        {/* <Route exact path = '/:username/bookmarks/:character'>
          <CharacterDataProvider>
            < CharacterPage
              handleGameSelection = {handleGameSelection}
              selectedGame = {selectedGame}
              dataRetrieved = {dataRetrieved}
              isBookmarks = {true}
            />
          </CharacterDataProvider>
        </Route> */}

        <Route exact path = '/:game/:character/upload'>
          <CharacterDataProvider>
            <UploadComboPage
              isEdit = {false}
              handleGameSelection = {handleGameSelection}
              selectedGame = {selectedGame}
              dataRetrieved = {dataRetrieved}
            />
          </CharacterDataProvider>
        </Route>

        {/* <Route exact path = '/:game/:character/:comboId'>
          <CharacterDataProvider>
            <ComboForm
              isEdit = {true}
              handleGameSelection = {handleGameSelection}
              selectedGame = {selectedGame}
              dataRetrieved = {dataRetrieved}
            />
          </CharacterDataProvider>
        </Route> */}

        <Route exact path = '/:game/:character/:comboId/edit'>
          <CharacterDataProvider>
            <EditComboPage
              handleGameSelection = {handleGameSelection}
              selectedGame = {selectedGame}
              dataRetrieved = {dataRetrieved}
            />
          </CharacterDataProvider>
        </Route>
        
        <Route exact path = '/:game'>
          <CharactersPage
            handleGameSelection = {handleGameSelection}
            selectedGame = {selectedGame}
            dataRetrieved = {dataRetrieved}
            isBookmarks = {false}
          />
        </Route>

        <Route exact path = '/:username/bookmarks'>
          <CharactersPage
            handleGameSelection = {handleGameSelection}
            selectedGame = {selectedGame}
            dataRetrieved = {dataRetrieved}
            isBookmarks = {true}
          />
        </Route>

        <Route exact path = '/:game/:character'>
          <CharacterDataProvider>
            < CharacterPage
              handleGameSelection = {handleGameSelection}
              selectedGame = {selectedGame}
              dataRetrieved = {dataRetrieved}
              isBookmarks = {false}
            />
          </CharacterDataProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
