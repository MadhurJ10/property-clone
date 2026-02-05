import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <a href="#">ABOUT US ▾</a>
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
          <a href="#" className="border-b border-gray-400 pb-2">ABOUT US</a>
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
