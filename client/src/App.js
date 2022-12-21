import { useState, useEffect } from 'react'

import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'

function App() {

  const [user, setUser] = useState({})

  const handleLogout = () => {
    setUser({})
  }

  return (
    <div className="App">
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <button onClick={handleLogout}>Logout</button>

      <Profile user={user} />

    </div>
  );
}

export default App;
