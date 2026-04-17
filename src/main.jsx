import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MetaProvider from './contexts/MetaProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetaProvider>
      <App />
    </MetaProvider>
  </StrictMode>,
)
