import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from './context/user'

import './Signup.css'

function Signup() {
  const { setUser } = useContext(UserContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()

    const userData = {
      username,
      password,
      password_confirmation: passwordConfirmation
    }
    
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    })
      .then(r => {
        if (r.ok) {
          r.json().then((user)=> {
            setUser(user)
            history.push('/home')
          })
        }
        else {
          r.json().then((error) => {
            setErrors(error.errors)
          })
        }
      })
  }
  return (
    <div>
      <form
        className = 'form-container'
        onSubmit = {handleSubmit}
      >
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
        <ul className = 'errors-list'>
          {
            errors.map((e, index) => {
              return (
                <li
                  key = {index}
                >{e}</li>
              )
            })
          }
      </ul>
      </form>
    </div>
  )
}

export default Signup