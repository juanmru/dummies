import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import DOMVirtualDOM from './pages/DOMVirtualDOM'
import CSS from './pages/CSS'
import JavaScript from './pages/JavaScript'
import Variables from './pages/Variables'
import Operators from './pages/Operators'
import ControlStructures from './pages/ControlStructures'
import Loops from './pages/Loops'
import Functions from './pages/Functions'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="app">
      {currentPage === 'home' && (
        <Home onNavigate={handleNavigate} />
      )}
      {currentPage === 'dom-virtual-dom' && (
        <DOMVirtualDOM onBack={() => handleNavigate('home')} />
      )}
      {currentPage === 'css' && (
        <CSS onBack={() => handleNavigate('home')} />
      )}
      {currentPage === 'javascript' && (
        <JavaScript onBack={() => handleNavigate('home')} />
      )}
      {currentPage === 'variables' && (
        <Variables onBack={() => handleNavigate('home')} />
      )}
      {currentPage === 'operators' && (
        <Operators onBack={() => handleNavigate('home')} />
      )}
      {currentPage === 'control-structures' && (
        <ControlStructures onBack={() => handleNavigate('home')} />
      )}
      {currentPage === 'loops' && (
        <Loops onBack={() => handleNavigate('home')} />
      )}
      {currentPage === 'functions' && (
        <Functions onBack={() => handleNavigate('home')} />
      )}
    </div>
  )
}

export default App
