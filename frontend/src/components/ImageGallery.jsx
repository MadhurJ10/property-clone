import { useState } from "react";

const ImageGallery = ({ images }) => {
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

      <div className="text-center mb-20">
        <p className="tracking-widest text-gray-500">MEDIA</p>
        <h2 className="mt-4 text-4xl tracking-[0.35em] text-[#b79b75]">
          IMAGE GALLERY
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-[350px] object-cover"
            />
          ))}
        </div>

        <button onClick={prev} className="absolute left-0 top-1/2">←</button>
        <button onClick={next} className="absolute right-0 top-1/2">→</button>
      </div>
    </section>
  );
};

export default ImageGallery;
