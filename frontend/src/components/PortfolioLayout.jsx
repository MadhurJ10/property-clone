import React from "react";
import LaunchSection from "../pages/LaunchSection";
import TryLaunchSection from "../pages/TryLaunchSection";
import AmenitiesSection from "./AmenitiesSection";
import ImageGallery from "./ImageGallery";
import LocationMap from "./LocationMap";

const PortfolioLayout = () => {
  return (
    <div className="w-full">

      {/* ================= HERO VIDEO ================= */}
      <section className="h-screen w-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/videos/homevideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="w-full bg-[#f7f7f7] py-24 px-6 text-center">
        <h1 className="text-4xl tracking-[0.3em] text-[#b79b75]">
          SHAHRUKHZ BY DANUBE
        </h1>

        <p className="max-w-4xl mx-auto mt-10 text-gray-600 leading-8">
          Rising on the iconic Sheikh Zayed Road, this premium 55-storey office
          tower offers unmatched visibility and seamless access in the heart of
          Dubai.
          <br /><br />
          Inspired by the self-made journey of Shahrukh Khan, Shahrukhz is a
          tribute to those who script their own destiny — a place for business
          leaders, founders and visionaries to build more than companies, to
          build empires.
          <br /><br />
          With world-class amenities curated for productivity, prestige and
          wellbeing… every detail elevates the way you work.
        </p>

        <button className="mt-12 px-10 py-4 border border-[#b79b75] text-[#b79b75] tracking-widest hover:bg-[#b79b75] hover:text-white transition">
          VIRTUAL TOUR
        </button>
      </section>

      {/* ================= STATS GRID ================= */}
      <section className="w-full bg-[#f7f7f7] px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-300">
          <Stat title="STARTING PRICE" value="AED 1.9 MILLION" />
          <Stat title="COMPLETION" value="2029" />
          <Stat title="PAYMENT PLAN" value="PAY 1% MONTHLY" />
          <Stat title="UNITS" value="615" />
          <Stat title="COMMERCIAL UNITS" value="EXECUTIVE, PREMIUM, PRESTIGE" />
          <Stat title="LOCATION" value="SHEIKH ZAYED ROAD, DUBAI" />
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="w-full py-28 text-center">
        <p className="tracking-widest text-gray-500">WHY?</p>

        <h2 className="text-4xl tracking-[0.3em] mt-6 text-[#b79b75]">
          SHEIKH ZAYED ROAD
        </h2>

        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 border border-gray-300">
          <WhyItem text="5 MINS PALM JUMEIRAH" />
          <WhyItem text="8 MINS DUBAI MARINA" />
          <WhyItem text="8 MINS MALL OF EMIRATES" />
          <WhyItem text="20 MINS DUBAI INTERNATIONAL AIRPORT" />
          <WhyItem text="20 MINS DUBAI EXPO" />
          <WhyItem text="8 MINS BURJ AL ARAB" />
        </div>
      </section>


      <TryLaunchSection/>
      <AmenitiesSection/>
      <ImageGallery/>
      <LocationMap/>

    </div>
  );
};

/* ================= SUB COMPONENTS ================= */

const Stat = ({ title, value }) => (
  <div className="p-12 border border-gray-300 text-center">
    <p className="text-sm tracking-widest text-gray-500">{title}</p>
    <p className="mt-4 text-xl text-[#b79b75]">{value}</p>
  </div>
);

const WhyItem = ({ text }) => (
  <div className="p-12 border border-gray-300 text-center">
    <p className="tracking-widest text-gray-600 text-sm">{text}</p>
  </div>
);

export default PortfolioLayout;
