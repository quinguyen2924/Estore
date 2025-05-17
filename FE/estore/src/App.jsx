import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Stores from './pages/Stores'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <div className="flex-1 pt-[88px] md:pt-11 w-full">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/store" element={<Stores />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
