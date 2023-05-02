import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CharactersPage({ selectedGame, handleGameSelection }) {
  const { game } = useParams()

  useEffect(() => {
    handleGameSelection(game)
  }, [game, selectedGame])
  
  return (
    <div>
      
    </div>
  )
}

export default CharactersPage