import { useParams } from "react-router-dom";
import { PortfolioProvider, usePortfolio } from "../context/PortfolioContext";
import TryLaunchSection from "../pages/TryLaunchSection";
import AmenitiesSection from "./AmenitiesSection";
import ImageGallery from "./ImageGallery";
import LocationMap from "./LocationMap";
import FAQSection from "./FAQSection";
import GetInTouch from "./GetInTouch";

const PortfolioLayout = () => {
  const { slug } = useParams();

  return (
    <PortfolioProvider slug={slug}>
      <PortfolioContent />
    </PortfolioProvider>
  );
};

const PortfolioContent = () => {
  const data = usePortfolio();

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="h-screen">
        <video
          src={data.heroVideo}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-[#f7f7f7] pt-32 pb-20 text-center">
        <h1 className="text-[42px] md:text-5xl tracking-[0.35em] text-[#b79b75]">
          {data.intro.title}
        </h1>

        <div className="max-w-4xl mx-auto mt-14 space-y-8 text-gray-500 text-[17px] leading-8">
          {data.intro.description
            .split("\n\n")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>

        <button className="mt-16 px-12 py-4 bg-[#c4ab8a] text-white tracking-[0.25em] text-sm hover:opacity-90 transition">
          VIRTUAL TOUR
        </button>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-[#f7f7f7] pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-300">

          {data.stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-4 px-10 py-16 border-r border-b border-gray-300 text-center"
            >
              <p className="text-sm tracking-[0.25em] text-gray-500">
                {s.title}
              </p>

              <p className="text-xl tracking-wide text-[#b79b75]">
                {s.value}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* GSAP SECTION */}
      <TryLaunchSection slides={data.launchSlides} />

      <AmenitiesSection items={data.amenities} />
      <ImageGallery images={data.gallery} />
      <LocationMap location={data.map.location} />
      <FAQSection faqs={data.faqs} />
      <GetInTouch />
    </div>
  );
};

export default PortfolioLayout;
