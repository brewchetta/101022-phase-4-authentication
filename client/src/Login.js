import { useState } from 'react'

function Login({user, setUser}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
  }

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  if (user && user.id) {
    return (
      <div>
      Already logged in!
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleLogin}>

        <p style={{color: 'red'}}>{error ? error : null}</p>

        <p>Login:</p>

        <input
          type="text" onChange={handleChangeUsername} value={username} placeholder='username'
        />

        <input
          type="text" onChange={handleChangePassword} value={password} placeholder='password'
        />

        <input
          type="submit" value="Login"
        />

      </form>
    </div>
  )
}

export default Login
