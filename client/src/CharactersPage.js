import React from 'react'
import { useParams } from 'react-router-dom'

function CharactersPage() {
  const { game } = useParams()
  console.log(game)
  return (
    <div>
      
    </div>
  )
}

export default CharactersPage