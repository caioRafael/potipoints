import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './service/firebase'
import { ThemeModeProvider } from './context/themeMode'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </React.StrictMode>,
)
