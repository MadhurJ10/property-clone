import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PortfolioLayout from "./components/PortfolioLayout";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ DYNAMIC PORTFOLIO ROUTE */}
        <Route path="/portfolio/:slug" element={<PortfolioLayout />} />

      </Routes>
    </>
  );
};

export default App;
