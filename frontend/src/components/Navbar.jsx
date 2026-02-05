import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("latest");

  // hover delay handler
  const hoverTimeout = useRef(null);

  const projects = Object.values(portfolioData);

  const categories = [
    { key: "latest", label: "LATEST LAUNCHES" },
    { key: "ongoing", label: "ONGOING PROJECTS" },
    { key: "completed", label: "COMPLETED PROJECTS" },
  ];

  const filteredProjects = projects.filter(
    (p) => p.status === activeCategory
  );

  const handleCategoryHover = (key) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

    hoverTimeout.current = setTimeout(() => {
      setActiveCategory(key);
    }, 150); // smooth delay
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#8a8a88b7] z-50">
      
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center text-white">

        {/* LEFT : LOGO */}
        <div className="justify-self-start">
          <Link to="/" className="font-bold text-xl tracking-wide">
            BANSAL GROUP
          </Link>
        </div>

        {/* CENTER : MENU */}
        <div className="hidden md:flex justify-self-center gap-10 text-sm font-medium">

          {/* PROJECTS MEGA MENU */}
          <div className="relative group">
            <span className="cursor-pointer">PROJECTS ▾</span>

            {/* MEGA MENU */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[900px] bg-white text-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
              onMouseLeave={() => {
                if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
              }}
            >
              <div className="grid grid-cols-3 min-h-[320px]">

                {/* LEFT : CATEGORY COLUMN */}
                <div className="bg-gray-100 p-8 space-y-6">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onMouseEnter={() => handleCategoryHover(cat.key)}
                      className={`w-full text-left font-medium tracking-wide transition ${
                        activeCategory === cat.key
                          ? "text-[#b79b75]"
                          : "text-gray-700"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* RIGHT : PROJECT LIST */}
                <div className="col-span-2 p-8 grid grid-cols-2 gap-y-4 gap-x-10">
                  {filteredProjects.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/portfolio/${p.slug}`}
                      className="hover:text-[#b79b75] transition"
                    >
                      {p.intro.title}
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <span className="cursor-pointer">ABOUT US</span>
          <span className="cursor-pointer">MEDIA</span>
        </div>

        {/* RIGHT : ACTIONS */}
        <div className="hidden md:flex justify-self-end gap-4 text-sm">
          <button className="border px-5 py-2 rounded-md">
            CONTACT US
          </button>
          <button className="bg-green-500 px-5 py-2 rounded-md font-semibold">
            WHATSAPP
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden justify-self-end text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black">

          {/* CATEGORY TABS */}
          <div className="flex border-b">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex-1 py-4 text-sm font-semibold ${
                  activeCategory === cat.key
                    ? "border-b-2 border-[#b79b75] text-[#b79b75]"
                    : ""
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* PROJECT LIST */}
          <div className="p-6 space-y-4">
            {filteredProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/portfolio/${p.slug}`}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                {p.intro.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
