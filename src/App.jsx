import { useState } from 'react'

import './App.css'
import { Login, Signup } from './components/auth'
import Home from './pages/Home'



function App() {

  const [LoginBool, setLoginBool] = useState(true)

  return (
    <div className='contentApp'>
      {/* {!LoginBool ?
        <Signup />

        :
        <Login />


      } */}

      {/* <Login /> */}
      {/* <Signup /> */}
      <Home />
    </div>
  )
}

export default App
