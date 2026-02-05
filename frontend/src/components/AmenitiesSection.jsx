import { useState } from "react";

const images = [
  {
    src: "/images/amenities1.jpg",
    title: "BREEZ LAGOON",
  },
  {
    src: "/images/amenities2.jpg",
    title: "INFINITY POOL",
  },
  {
    src: "/images/amenities3.jpg",
    title: "SKY LOUNGE",
  },
];

const AmenitiesSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full">

      {/* ================= TITLE ================= */}
      <div className="w-full py-32 text-center bg-white">
        <h2 className="text-4xl tracking-[0.4em] text-[#b79b75]">
          AMENITIES
        </h2>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative w-full h-[80vh] overflow-hidden">

        {/* IMAGE */}
        <img
          src={images[current].src}
          alt="Amenity"
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* TITLE */}
        <div className="absolute bottom-16 left-16 text-white">
          <h3 className="text-3xl tracking-widest">
            {images[current].title}
          </h3>
        </div>

        {/* ARROWS */}
        <div className="absolute bottom-16 right-16 flex gap-6 text-white text-3xl">
          <button
            onClick={prevSlide}
            className="hover:scale-110 transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="hover:scale-110 transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
