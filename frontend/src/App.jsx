import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PortfolioLayout from "./components/PortfolioLayout";
import About from "./pages/About"
import LeadershipTeam from "./pages/LeadershipTeam";


import Media from "./pages/Media";
import Contact from "./pages/Contact";
import OurJourney from "./pages/OurJourney";
import ProjectsGallery from "./pages/ProjectsGallery";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<LeadershipTeam />} />
        <Route path="/our-journey" element={<OurJourney />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsGallery />} />

        {/* ✅ DYNAMIC PORTFOLIO ROUTE */}
        <Route path="/portfolio/:slug" element={<PortfolioLayout />} />

      </Routes>
    </>
  );
};


export default App;
