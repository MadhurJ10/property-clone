import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import LeadershipTeam from './pages/LeadershipTeam'
import PortfolioLayout from './components/PortfolioLayout'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PortfolioLayout/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/leadership-team" element={<LeadershipTeam/>} />
      </Routes>
    </Router>
  )
}

export default App
