import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PortfolioLayout from "./components/PortfolioLayout";
import About from "./pages/About"
import LeadershipTeam from "./pages/LeadershipTeam";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<LeadershipTeam />} />


        {/* ✅ DYNAMIC PORTFOLIO ROUTE */}
        <Route path="/portfolio/:slug" element={<PortfolioLayout />} />

      </Routes>
    </>
  );
};

export default App;
