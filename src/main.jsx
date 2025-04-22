import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomeLayout from './components/layout/HomeLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeLayout>
      <App />
    </HomeLayout>
  </StrictMode>,
)
