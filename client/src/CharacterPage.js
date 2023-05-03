import React from 'react'
import { useParams } from 'react-router-dom'

function CharacterPage() {
  const { character } = useParams()
  console.log(character)
  return (
    <div>

    </div>
  )
}

export default CharacterPage
