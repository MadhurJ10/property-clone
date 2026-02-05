import { useState } from "react";

const AmenitiesSection = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full">

      {/* TITLE */}
      <div className="w-full py-32 text-center bg-white">
        <h2 className="text-4xl tracking-[0.4em] text-[#b79b75]">
          AMENITIES
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={items[current].src}
          alt={items[current].title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-16 left-16 text-white">
          <h3 className="text-3xl tracking-widest">
            {items[current].title}
          </h3>
        </div>

        <div className="absolute bottom-16 right-16 flex gap-6 text-white text-3xl">
          <button onClick={prevSlide}>←</button>
          <button onClick={nextSlide}>→</button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
