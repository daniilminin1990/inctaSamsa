// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { App } from './App.tsx'
//
// ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
