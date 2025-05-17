import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <div className="flex-1 pt-[88px] md:pt-11 w-full">
        <div className="w-full">
          <HomePage />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
