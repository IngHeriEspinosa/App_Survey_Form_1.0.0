import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from './themes/lightTheme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
)
