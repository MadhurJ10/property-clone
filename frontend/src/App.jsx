import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PortfolioLayout from "./components/PortfolioLayout";
import About from "./pages/About"
import LeadershipTeam from "./pages/LeadershipTeam";
import Footer from "./components/Footer";
import News from "./pages/News";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<LeadershipTeam />} />
        <Route path="/news" element={<News />} />

        {/* ✅ DYNAMIC PORTFOLIO ROUTE */}
        <Route path="/portfolio/:slug" element={<PortfolioLayout />} />

      </Routes>
      <Footer/>
    </>
  );
};

export default App;
