import React from "react";
import Footer from "../components/Footer";
import TryLaunchSection from "./TryLaunchSection";
import WhyInvestSection from "../components/WhyInvestSection";


const Home = () => {

  // ✅ DATA (correct JS object)
  const launchSlides = [
    {
      img: "/images/Lotus_Valley_Image_1.png",
      title: "SERENE SPACES",
      subtitle: "NATURE'S RETREAT",
      description: "Find tranquility amidst lush landscapes and soothing water features designed for ultimate relaxation.",
    },
    {
      img: "/images/Lotus_Valley_Image_25.png",
      title: "RECREATION HUB",
      subtitle: "LEISURE & FUN",
      description: "Unwind and socialize in our world-class entertainment and gaming zones tailored for all ages.",
    },
    {
      img: "/images/Lotus_Valley_Image_26.png",
      title: "ELITE BANQUETS",
      subtitle: "GRAND CELEBRATIONS",
      description: "Host unforgettable events in our sophisticated and elegantly designed banquet spaces.",
    },
    {
      img: "/images/Lotus_Valley_Image_29.png",
      title: "MODERN LIVING",
      subtitle: "AESTHETIC DESIGNS",
      description: "Experience architectural brilliance with ergonomic designs tailored for luxury and comfort.",
    },
    {
      img: "/images/Lotus_Valley_Image_27.png",
      title: "PARKSIDE VISTAS",
      subtitle: "OPEN AIR ART",
      description: "Enjoy breathtaking views and artistic installations in our expansive community parks.",
    },
  ];

  return (
    <div className="w-full">

      {/* HERO IMAGE */}
      <section className="h-screen w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/Lotus_Valley_Image_34.png"
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
