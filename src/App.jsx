import { useEffect, useState } from 'react'

import { Login, Signup } from './components/auth'
import Home from './pages/Home'
import "toastify-js/src/toastify.css"
import { PreviewForm } from './pages/PreviewForm'
import './App.css'
import PublicForm from './pages/PublicForm'
import { Forms } from './pages/Forms'
import { usePreviewForm } from './global'



function App() {

  const [LoginBool, setLoginBool] = useState(true);
  const { preview } = usePreviewForm();

  return (
    <div className='contentApp'>
      {/* {!LoginBool ?
        <Signup />

        :
        <Login />
      } */}

      {/* <Login /> */}
      {/* <Signup /> */}
      {
        preview ?
          <PreviewForm />
          :
          <Home />
      }
      {/* <PublicForm /> */}
    </div>
  )
}

export default App
