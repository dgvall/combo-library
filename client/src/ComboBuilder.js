import React, {useState, useEffect} from 'react'
import IconPicker from './IconPicker'
import Icon from './Icon'
import './ComboBuilder.css'

function ComboBuilder({selectedGame, characterData, combo, inputs, setInputs}) {
  const [imageUrls, setImageUrls] = useState([])
  // const [inputs, setInputs] = useState("")

  useEffect(() => {
    if (combo) {
      setImageUrls(combo.image_urls)
      // setInputs(combo.inputs)
    }
  }, [combo])

  function handleClick(src, name) {
    setImageUrls(() => [...imageUrls, src])
    if (inputs.length > 0) {
      setInputs(() => `${inputs} ${name}`)
    }
    else setInputs(name)
  }

  function handleSpace() {
    // set spaceUrl from game data later!
    const spaceUrl = "https://i.imgur.com/IxEwf4u.png"
    setImageUrls(() => [...imageUrls, spaceUrl])
    setInputs(() => `${inputs} -`)
  }

  function handleKeyDown(e) {
    if (e.code === 'Space') {
      handleSpace()
    }

    if (e.keyCode === 8) {
      handleBackspace()
    }
  }

  function handleClear() {
    setImageUrls([])
    setInputs("")
  }

  function handleBackspace() {
    const updatedImageUrls = imageUrls.slice(0, imageUrls.length - 1)
    setImageUrls(updatedImageUrls)

    const inputsArray = inputs.split(" ")
    const updatedInputs = inputsArray.slice(0, inputsArray.length - 1).join(" ")
    setInputs(updatedInputs)
  }

  return(
    <div
    className = 'combo-builder-container'
    tabIndex = {0}
    onKeyDown = {handleKeyDown}
  >
    <h2>Combo Builder</h2>
    <div className = 'combo-display'>
      <div className = 'icons-container'>
        {
          imageUrls.map((url, index) => {
            return (
              <Icon
                key = {index}
                url = {url}
              />
            )
          })
        }   
      </div>

      <div className = "edit-combo-buttons">
        <img
          className = "backspace"
          src = {"https://cdn-icons-png.flaticon.com/512/318/318218.png"}
          alt = { "backspace" }
          onClick = {handleBackspace}
        />
        <button
          className = 'clear-button'
          onClick = {handleClear}
        >
      Clear</button>
      </div>
    </div>
      <IconPicker
        extraInputs = {selectedGame.inputs["Extra"]}
        buttonInputs = {selectedGame.inputs["Button"]}
        // motionInputs = {characterData.inputs["Motion"]}
        handleClick = {handleClick}
        handleSpace = {handleSpace}
        gameSlug = {selectedGame.slug.toUpperCase()}
      />
  </div>
  )
}

export default ComboBuilder