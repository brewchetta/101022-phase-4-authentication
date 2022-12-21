import { useState } from 'react'

function Signup({user, setUser}) {

  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
  }

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  return (
    <div>
      <form onSubmit={handleLogin}>

        <p>Signup:</p>

        <input
          type="text" onChange={handleChangeUsername} value={username} placeholder='username'
        />

        <input
          type="text" onChange={handleChangePassword} value={password} placeholder='password'
        />

        <input
          type="submit" value="Signup"
        />

      </form>
    </div>
  )
}

export default Signup
