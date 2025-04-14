import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './page/landing page/LandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
