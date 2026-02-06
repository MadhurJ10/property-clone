import React from "react";

const NewsCard = ({ image, date, title, description }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT IMAGE */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="text-gray-400 text-sm mb-4">
          {date}
        </p>

        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6 leading-snug">
          {title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          {description}
        </p>

        <button className="px-8 py-3 border border-[#c4ab8c] text-[#c4ab8c] tracking-widest text-sm hover:bg-[#c4ab8c] hover:text-white transition">
          READ MORE
        </button>
      </div>

    </div>
  );
};

export default NewsCard;
