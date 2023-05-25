import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'

import Character from './Character'
import './CharactersPage.css'

function CharactersPage({ dataRetrieved, selectedGame, handleGameSelection, isBookmarks }) {
  const { game, username } = useParams()
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!isBookmarks) {
      handleGameSelection(game)
    }
  }, [game, selectedGame, dataRetrieved, handleGameSelection, isBookmarks])

  return (
    <div>
      {
        isBookmarks
        ?
        <div className = 'characters-container'>
          {
            user&&
              user.bookmarks.map((b) => {
                return (
                  <Character
                    key = {b.character.id}
                    // id = {b.character.id}
                    imageUrl = {b.character.image_url}
                    name = {b.character.name}
                    slug = {b.character.slug}
                    game = {b.character.game_slug}
                    isBookmarks = {isBookmarks}
                    username = {username}
                  />
                )
              })
          }
        </div>
        :
        <div className = 'characters-container'>
          {
            selectedGame&&
              selectedGame.characters.map((c) => {
                return (
                  <Character
                    key = {c.id}
                    id = {c.id}
                    imageUrl = {c.image_url}
                    name = {c.name}
                    slug = {c.slug}
                    game = {game}
                  />
                )
              })
          }
      </div>
      }
    </div>
  )
}

export default CharactersPage