import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from './context/user'

function Login() {
  const { setUser } = useContext(UserContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()

    const userData = {
      username,
      password
    }
    
    fetch('/api/login', {
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
      <h2 className = 'form-header'>Login</h2>
      <input
        className = 'form-input'
        onChange = {(e) => setUsername(e.target.value)}
        value = {username}
        placeholder = "Username"
      />
      <input
        className = 'form-input'
        type= 'password'
        onChange = {(e) => setPassword(e.target.value)}
        value = {password}
        placeholder = "Password"
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

export default Login