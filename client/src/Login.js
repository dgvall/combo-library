import React, {useState} from 'react'

function Login({setUser}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const userData = {
      username,
      password
    }
    
    fetch('/login', {
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