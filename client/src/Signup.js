import React, { useState } from 'react'

import './Signup.css'

function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  return (
    <div>
      <form className = 'form-container'>
        <h2 className = 'form-header'>Signup</h2>
        <input
          className = 'form-input'
          onChange = {(e) => setUsername(e.target.value)}
          value = {username}
          placeholder = "Username"
        />
        <input
          className = 'form-input'
          onChange = {(e) => setPassword(e.target.value)}
          value = {password}
          placeholder = "Password"
        />
        <input
          className = 'form-input'
          onChange = {(e) => setPasswordConfirmation(e.target.value)}
          value = {passwordConfirmation}
          placeholder = "Confirm Password"
        />
        <button className = 'form-button'>Submit</button>
      </form>
    </div>
  )
}

export default Signup