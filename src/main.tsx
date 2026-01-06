import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n' // Initialize i18n
import './styles/tokens.css'
import './styles/reset.css'
import './styles/global.css'
import './styles/animations.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
