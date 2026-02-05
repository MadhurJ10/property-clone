import { useState } from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
];

const ImageGallery = () => {
  const [index, setIndex] = useState(0);

  const visibleImages = images.slice(index, index + 3);

  const next = () => {
    if (index < images.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="w-full bg-white py-32">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-20">
        <p className="tracking-widest text-gray-500">MEDIA</p>
        <h2 className="mt-4 text-4xl tracking-[0.35em] text-[#b79b75]">
          IMAGE GALLERY
        </h2>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleImages.map((img, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={img}
                alt="Gallery"
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          →
        </button>

      </div>

      {/* ================= DOTS ================= */}
      <div className="flex justify-center gap-3 mt-12">
        {Array(images.length - 2)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className={`h-1 w-10 rounded-full ${
                i === index ? "bg-[#b79b75]" : "bg-gray-300"
              }`}
            />
          ))}
      </div>

    </section>
  );
};

export default ImageGallery;
