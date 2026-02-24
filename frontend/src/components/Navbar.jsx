import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("latest");
  const hoverTimeout = useRef(null);
  const projects = Object.values(portfolioData);

  const categories = [
    { key: "latest", label: "LATEST" },
    { key: "ongoing", label: "ONGOING" },
    { key: "completed", label: "COMPLETED" },
  ];

  const filteredProjects = projects.filter((p) => p.status === activeCategory);

  const handleCategoryHover = (key) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setActiveCategory(key), 100);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8 px-8">
      {/* ROUNDED GLASS PANEL */}
      <nav className="relative w-full max-w-[98%] bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.05)] rounded-xl px-12 py-3 flex items-center justify-between transition-all duration-500 hover:bg-white/80">

        {/* LOGO: Circular & Minimal */}
        <Link to="/" className="group flex items-center gap-4">
          <div className="w-10 h-10 bg-black flex items-center justify-center text-white text-[10px] font-bold rounded-full transition-transform duration-500 group-hover:rotate-[90deg]">
            LV
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[13px] tracking-[0.3em] text-black">LOTUS VALLEY</span>
            <span className="text-[8px] tracking-[0.4em] text-black/40 mt-1 uppercase">Properties</span>
          </div>
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <div className="relative group">
            <button className="text-[10px] font-bold tracking-[0.2em] text-black/60 hover:text-black transition-all py-2">
              PORTFOLIO
            </button>

            {/* MEGA MENU: Soft Rounded Pane */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
              <div className="w-[700px] bg-white/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white p-3 flex overflow-hidden text-black">
                {/* Sidebar */}
                <div className="w-1/3 bg-gray-50/80 rounded-[2rem] p-6 flex flex-col gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onMouseEnter={() => handleCategoryHover(cat.key)}
                      className={`text-left px-6 py-4 rounded-full text-[9px] font-bold tracking-[0.15em] transition-all ${activeCategory === cat.key
                        ? "bg-white text-black shadow-sm scale-105"
                        : "text-black/30 hover:text-black/50"
                        }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
                {/* Project List */}
                <div className="w-2/3 p-10 grid grid-cols-1 gap-3">
                  {filteredProjects.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/portfolio/${p.slug}`}
                      className="group/item flex justify-between items-center text-[13px] font-medium text-black/60 hover:text-black transition-all border-b border-transparent hover:border-black/5 pb-2"
                    >
                      {p.intro.title}
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-[-10px] group-hover/item:translate-x-0 transition-all">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" className="text-[10px] font-bold tracking-[0.2em] text-black/60 hover:text-black transition-all py-2">ABOUT</Link>
          <Link to="/media" className="text-[10px] font-bold tracking-[0.2em] text-black/60 hover:text-black transition-all py-2">MEDIA</Link>
        </div>

        {/* ACTION: Full rounded pill */}
        <div className="flex items-center gap-6">
          <Link to="/contact" className="hidden md:block bg-black text-white text-[9px] font-bold tracking-[0.25em] px-10 py-4 rounded-full hover:bg-black/90 transition-all active:scale-[0.98]">
            GET IN TOUCH
          </Link>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <div className={`h-0.5 bg-black transition-all ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <div className={`h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : 'w-6'}`} />
            <div className={`h-0.5 bg-black transition-all ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
          </button>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;