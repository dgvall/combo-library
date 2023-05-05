import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const CharacterDataContext = React.createContext()

function CharacterDataProvider({ children }) {
  const { game, character } = useParams();
  const [characterData, setCharacterData] = useState(null)
  
  useEffect(() => {
    fetch(`/characters/${character}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => setCharacterData(data))
        }
      })
  }, [character])

  return (
    <CharacterDataContext.Provider value ={{ characterData, setCharacterData }}>
      { children }
    </CharacterDataContext.Provider>
  )
}

export { CharacterDataContext, CharacterDataProvider}