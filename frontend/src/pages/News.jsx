import React from "react";
import bansalone from "../assets/bansalone.png";
import NewsCard from "../components/NewsCard";

import dum1 from "../assets/dum1.jpg";
import dum2 from "../assets/dum2.jpg";

const newsData = [
  {
    id: 1,
    image: dum1,
    date: "December 22, 2025   5:50:14",
    title:
      "Historic Milestone: ‘SHAHRUKHZ by Danube’ AED 2.1 Billion Development Completely SOLD OUT on Launch Day",
    description:
      "Dubai, December 9, 2025: Following the viral unveiling in Mumbai, the much-anticipated ‘SHAHRUKHZ by Danube’ – a premium commercial tower named in honour of Bollywood...",
  },
  {
    id: 2,
    image: dum2,
    date: "January 10, 2026   11:20:00",
    title:
      "Danube Group Announces New Waterfront Residential Project in Dubai",
    description:
      "The Danube Group has unveiled its latest luxury waterfront residential development, offering world-class amenities and stunning views...",
  },
];

const News = () => {
  return (
    <section className="w-full bg-white">
      
      {/* ===== TOP BANNER ===== */}
      <div className="w-full h-[420px] overflow-hidden">
        <img
          src={bansalone}
          alt="News Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== TITLE ===== */}
      <div className="text-center mt-20 mb-16">
        <p className="tracking-[0.35em] text-[#c4ab8c] text-sm">
          NEWS & EVENTS
        </p>
      </div>

      {/* ===== NEWS LIST ===== */}
      <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </section>
  );
};

export default News;
