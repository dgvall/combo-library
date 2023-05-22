import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const CharacterDataContext = React.createContext()

function CharacterDataProvider({ children }) {
  const { game, character } = useParams();
  const [characterData, setCharacterData] = useState(null)
  
  useEffect(() => {
    if (game && character) {
      fetch(`/api/games/${game}/characters/${character}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => setCharacterData(data))
        }
      })
    }
  }, [character, game])

  useEffect(() => {
    console.log(characterData)
  }, [characterData])

  return (
    <CharacterDataContext.Provider value ={{ characterData, setCharacterData }}>
      { children }
    </CharacterDataContext.Provider>
  )
}

export { CharacterDataContext, CharacterDataProvider}