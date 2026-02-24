import React from "react";
import Footer from "../components/Footer";
import TryLaunchSection from "./TryLaunchSection";
import WhyInvestSection from "../components/WhyInvestSection";


const Home = () => {

  // ✅ DATA (correct JS object)
  const launchSlides = [
    {
      img: "/images/Lotus_Valley_Image_1.png",
      title: "SHAHRUKHZ",
      subtitle: "The Beginning",
      description: "Experience the arrival of a new era in luxury living at Lotus Valley.",
    },
    {
      img: "/images/Lotus_Valley_Image_25.png",
      title: "THE LOBBY",
      subtitle: "Grand Entrance",
      description: "A triple-height atrium that leaves a lasting impression on every guest.",
    },
    {
      img: "/images/Lotus_Valley_Image_26.png",
      title: "SKY LOUNGE",
      subtitle: "Elevated Living",
      description: "Connect and collaborate in spaces designed for the modern visionary.",
    },
    {
      img: "/images/Lotus_Valley_Image_29.png",
      title: "WORKSPACE",
      subtitle: "Productivity Redefined",
      description: "Ergonomic designs meeting aesthetic brilliance for peak performance.",
    },
    {
      img: "/images/Lotus_Valley_Image_27.png",
      title: "THE VIEW",
      subtitle: "Panoramic Horizons",
      description: "Uninterrupted vistas that inspire your next big idea.",
    },
  ];

  return (
    <div className="w-full">

      {/* HERO IMAGE */}
      <section className="h-screen w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/Lotus_Valley_Image_14.png"
          alt="Lotus Valley Hero"
        />
      </section>

      {/* INTRO */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6">

        <div className="mt-24 mb-40">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-6">
            LATEST LAUNCH
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] text-[#c4ab8c] mb-14">
            LOTUS VALLEY ONE
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
