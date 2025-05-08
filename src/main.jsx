import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from "react"
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import { ScoreProvider } from './contexts/ScoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </BrowserRouter>,
)
