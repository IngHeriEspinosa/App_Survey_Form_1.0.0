import { useState } from 'react'

import './App.css'
import { Login, Signup } from './components'



function App() {

  const [LoginBool, setLoginBool] = useState(true)

  return (
    <div className='contentApp'>
      {!LoginBool ?
        <Signup />

        :
        <Login />


      }
    </div>
  )
}

export default App
