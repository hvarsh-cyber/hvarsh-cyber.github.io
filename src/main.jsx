import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Restore the real path after GitHub Pages' 404.html redirect trick
const redirectPath = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirectPath && redirectPath !== window.location.pathname) {
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
