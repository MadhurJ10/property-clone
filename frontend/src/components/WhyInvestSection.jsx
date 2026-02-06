import React from "react";
import FAQSection from "./FAQSection";
import founder1 from "../assets/founder1.jpg"

const WhyInvestSection = () => {

  const faqData = [
    {
      q: "When is the expected completion date?",
      a: "Scheduled for completion in 2029.",
    },
    {
      q: "Where is it located?",
      a: "Prime location in Bhopal",
    },
  ];
  return (
    <section className="w-full bg-white">

      {/* ================= WHY SECTION ================= */}
      <div className="relative px-6 md:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300" />

          <WhyBlock
            title="BANSAL PROPERTIES?"
            items={[
              "0% INTEREST",
              "1% PER MONTH",
              "80 MONTHS PAYMENT PLAN",
              "HIGH RETURN ON INVESTMENT",
              "TIMELY DELIVERY",
              "PRIME LOCATIONS",
              "LUXURY FURNISHING",
              "40+ AMENITIES",
            ]}
          />

          <WhyBlock
            title="INVEST IN BHOPAL?"
            items={[
              "SAFEST CITY IN THE WORLD",
              "FASTEST GROWING ECONOMY",
              "HIGH CAPITAL APPRECIATION",
              "EASE OF INVESTMENT",
              "FREEHOLD OWNERSHIP",
              "100% TAX FREE INCOME",
              "LONG-TERM GOLDEN VISA",
              "WORLDWIDE CONNECTIVITY",
            ]}
          />
        </div>
      </div>

      {/* ================= FOUNDER SECTION ================= */}
      <div className="px-6 md:px-20 py-24 bg-[#fafafa]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* Image Placeholder */}
          <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center text-gray-600">
            <img src={founder1} alt="" />
          </div>

          <div>
            <p className="tracking-widest text-sm mb-4">
              Chairman, Bansal Group
            </p>

            <h2 className="text-4xl tracking-[0.25em] text-[#c4ab8c] mb-10">
              Shri. Anil Bansal
            </h2>

            <button className="px-10 py-4 bg-[#5a5a5a] text-white tracking-wider hover:bg-black transition">
              WATCH COMPLETE STORY
            </button>
          </div>
        </div>
      </div>

      {/* ================= BLOGS ================= */}
      <div className="px-6 md:px-20 py-24 text-center">
        <p className="tracking-widest text-sm mb-4">LATEST BLOGS</p>

        <h2 className="text-4xl tracking-[0.25em] text-[#c4ab8c] mb-16">
          NEWS & EVENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <BlogCard date="22 Dec, 2025" />
          <BlogCard date="19 Nov, 2025" />
          <BlogCard date="18 Nov, 2025" />
          <BlogCard date="23 Sep, 2025" />
        </div>

        <button className="mt-16 px-14 py-4 bg-[#c4ab8c] text-white tracking-wider hover:opacity-90 transition">
          VIEW MORE
        </button>
      </div>

      <FAQSection  faqs={faqData}
      title="FREQUENTLY ASKED QUESTIONS"
      subtitle="MORE INFORMATION"/>
    </section>
  );
};

/* ================= SUB COMPONENTS ================= */

const WhyBlock = ({ title, items }) => (
  <div>
    <p className="tracking-widest text-sm text-center mb-6">WHY</p>

    <h2 className="text-center text-4xl tracking-[0.25em] text-[#c4ab8c] mb-16">
      {title}
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 text-center text-sm">
      {items.map((item, i) => (
        <div key={i} className="opacity-80">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const BlogCard = ({ date }) => (
  <div className="text-left">
    {/* Image Placeholder */}
    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 mb-4">
      Blog Image
    </div>

    <p className="text-sm opacity-70 mb-2">{date}</p>
    <p className="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
);

export default WhyInvestSection;
