import React from "react";
import FAQSection from "./FAQSection";
import founder1 from "../assets/founder1.jpg"

const WhyInvestSection = () => {
  return (
    <section className="w-full bg-white">

      {/* ================= WHY SECTION ================= */}
      <div className="relative px-6 md:px-20 py-24">
        <div className="flex flex-col gap-24">

          <WhyBlock
            title="LOTUS VALLEY?"
            items={[
              { title: "Riverside Living", desc: "Premium river-facing plots in a serene green environment." },
              { title: "Prime Location", desc: "0.2 km from Billabong School | 4 km from Sage University | 10 km from AIIMS." },
              { title: "Smart & Secure Community", desc: "24x7 CCTV Security, Smart Gate System & Wi-Fi Enabled Campus." },
              { title: "Master-Planned Layout", desc: "Thoughtfully designed layout blending nature with modern infrastructure." },
              { title: "Modern Amenities", desc: "Clubhouse, Banquet Hall, Jogging Park & Children’s Play Area." },
              { title: "Peaceful Yet Connected", desc: "Close to Capital Mall, Ashima Mall & Bhopal Airport." },
              { title: "Green Lifestyle", desc: "Abundant open spaces, landscaped gardens & healthy surroundings." },
              { title: "High Growth Potential", desc: "Strategic location with strong future development prospects." },
            ]}
          />

          {/* Luxury Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          <WhyBlock
            title="INVEST?"
            items={[
              { title: "River-Side Rarity", desc: "Limited premium river-facing plots with long-term value." },
              { title: "High Appreciation Zone", desc: "Located in one of Bhopal’s rapidly developing corridors." },
              { title: "Smart Infrastructure", desc: "Secure gated community with modern facilities." },
              { title: "Strong Rental Potential", desc: "Close to universities, AIIMS & commercial hubs." },
              { title: "Safe & Peaceful Living", desc: "Designed for families, health, and community life." },
              { title: "Lifestyle Investment", desc: "A home that offers wellness, celebration & recreation." },
              { title: "Connectivity Advantage", desc: "Easy access to major city landmarks and transport hubs." },
              { title: "Future-Ready Community", desc: "Planned to foster Community, Health & Celebration." },
            ]}
          />
        </div>
      </div>

      {/* ================= FOUNDER SECTION commented out ================= */}
      {/* 
      <div className="px-6 md:px-20 py-24 bg-[#fafafa]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center text-gray-600">
            <img src={founder1} alt="" />
          </div>

          <div>
            <p className="tracking-widest text-sm mb-4">
              Chairman, Lotus Valley
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
      */}

      {/* ================= BLOGS ================= */}
      <div className="px-6 md:px-20 py-24 text-center">
        <p className="tracking-widest text-sm mb-4">LATEST BLOGS</p>

        <h2 className="text-4xl tracking-[0.25em] text-[#c4ab8c] mb-16">
          NEWS & EVENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <BlogCard
            date="22 Dec, 2025"
            img="/images/Lotus_Valley_Image_11.png"
            title="CONSTRUCTION MILESTONE"
            content="Lotus Valley One project reaches a new milestone in construction excellence with the completion of the main structure."
          />
          <BlogCard
            date="19 Nov, 2025"
            img="/images/Lotus_Valley_Image_12.png"
            title="MARKET TRENDS"
            content="How prime locations are driving record-breaking real estate growth and investment opportunities in the heart of the city."
          />
          <BlogCard
            date="18 Nov, 2025"
            img="/images/Lotus_Valley_Image_34.png"
            title="AVANT-GARDE DESIGN"
            content="Experience the future of community living with our iconic clubhouse, featuring bold architectural curves and integrated green landscapes."
          />
          <BlogCard
            date="23 Sep, 2025"
            img="/images/Lotus_Valley_Image_15.png"
            title="LUXURY AMENITIES"
            content="An exclusive preview of the world-class recreational facilities and clubhouses coming soon to the Lotus Valley community."
          />
        </div>

              </div>

      <FAQSection />
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

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 text-center">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <h3 className="text-[#5a5a5a] font-semibold tracking-wider mb-3 text-sm uppercase">
            {item.title}
          </h3>
          <p className="text-xs leading-relaxed opacity-70 max-w-[200px]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const BlogCard = ({ date, img, title, content, imgStyle = {} }) => (
  <div className="text-left group cursor-pointer">
    {/* Image Container */}
    <div className="w-full h-48 overflow-hidden mb-4 bg-gray-100">
      <img
        src={img}
        alt={title}
        style={imgStyle}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />
    </div>

    <p className="text-[10px] tracking-widest opacity-60 mb-2 uppercase">{date}</p>
    <h3 className="text-sm font-semibold tracking-wider mb-2 text-[#5a5a5a] group-hover:text-[#c4ab8c] transition">
      {title}
    </h3>
    <p className="text-xs leading-relaxed opacity-70 line-clamp-3">
      {content}
    </p>
  </div>
);

export default WhyInvestSection;
