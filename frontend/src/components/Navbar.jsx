import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#6f6a67e9] text-white px-6 md:px-10 py-4 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-red-600 font-bold text-xl">Companys</span>
          <span className="font-semibold tracking-wide">Logo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#">PROJECTS ▾</a>
          <a href="#">DANUBE ASSIST ▾</a>
          <div className="relative group">
            <button className="flex items-center gap-1 cursor-pointer">ABOUT US ▾</button>
            <div className="absolute left-0 mt-0 w-48 bg-[#5a5550] text-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/about" className="block px-4 py-3 hover:bg-[#6f6a67] rounded-t-lg">Company Profile</Link>
              <Link to="/leadership-team" className="block px-4 py-3 hover:bg-[#6f6a67]">Leadership Team</Link>
              <a href="#" className="block px-4 py-3 hover:bg-[#6f6a67]">Management Team</a>
              <a href="#" className="block px-4 py-3 hover:bg-[#6f6a67] rounded-b-lg">Our Journey</a>
            </div>
          </div>
          <a href="#">MEDIA ▾</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-white px-5 py-2 rounded-md text-sm hover:bg-white hover:text-black transition">
            📞 CONTACT US
          </button>

          <button className="bg-green-500 px-5 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition">
            💬 WHATSAPP
          </button>

          <span className="text-sm font-semibold cursor-pointer">EN</span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#" className="border-b border-gray-400 pb-2">PROJECTS</a>
          <a href="#" className="border-b border-gray-400 pb-2">DANUBE ASSIST</a>
          <Link to="/about" className="border-b border-gray-400 pb-2">ABOUT US</Link>
          <a href="#" className="border-b border-gray-400 pb-2">MEDIA</a>

          <button className="border border-white py-2 rounded-md">
            📞 CONTACT US
          </button>

          <button className="bg-green-500 py-2 rounded-md font-semibold">
            💬 WHATSAPP
          </button>

          <span className="font-semibold">EN</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
