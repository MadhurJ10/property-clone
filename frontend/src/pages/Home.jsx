import React from "react";
import Footer from "../components/Footer";
import TryLaunchSection from "./TryLaunchSection";
import WhyInvestSection from "../components/WhyInvestSection";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Home = () => {

  // ✅ DATA (correct JS object)
  const launchSlides = [
    {
      img: img1,
      title: "SHAHRUKHZ",
      subtitle: "The Beginning",
      description: "Experience the arrival of a new era...",
    },
    {
      img: img2,
      title: "THE LOBBY",
      subtitle: "Grand Entrance",
      description: "A triple-height atrium...",
    },
    {
      img: img3,
      title: "SKY LOUNGE",
      subtitle: "Elevated Living",
      description: "Connect and collaborate...",
    },
    {
      img: img4,
      title: "WORKSPACE",
      subtitle: "Productivity Redefined",
      description: "Ergonomic designs...",
    },
    {
      img: img5,
      title: "THE VIEW",
      subtitle: "Panoramic Horizons",
      description: "Uninterrupted vistas...",
    },
  ];

  return (
    <div className="w-full">

      {/* HERO VIDEO */}
      <section className="h-screen w-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/videos/homevideo.webm"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* INTRO */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6">

        <div className="mt-24 mb-40">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-6">
            LATEST LAUNCH
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] text-[#c4ab8c] mb-14">
            BANSAL ONE
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-[#5a5a5a] text-white tracking-wider hover:bg-black transition">
              ↗ DISCOVER
            </button>

            <button className="px-10 py-4 bg-[#c4ab8c] text-white tracking-wider hover:bg-[#b89c7a] transition">
              REGISTER INTEREST
            </button>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-6">
            FEATURED
          </h2>

          <h1 className="text-4xl md:text-5xl tracking-[0.25em] text-[#c4ab8c]">
            PROJECTS
          </h1>
        </div>
      </div>

      {/* ✅ PASS DATA HERE */}
      <TryLaunchSection slides={launchSlides} />

      <WhyInvestSection />
      <Footer />
    </div>
  );
};

export default Home;
