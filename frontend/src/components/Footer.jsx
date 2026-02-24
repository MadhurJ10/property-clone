import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2f2f2f] text-gray-300">

      {/* Main Footer */}
      <div className="px-6 md:px-16 pt-16 pb-12">
        {/* Logo + Social */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="text-2xl font-bold">
            <span className="text-red-600 italic">DANUBE</span>{" "}
            <span className="text-white">PROPERTIES</span>
          </div>

          <div>
            <p className="text-sm mb-2 text-gray-400">FOLLOW US ON:</p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/bansalgroup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <FaFacebookF />
                </IconWrapper>
              </a>

              <a
                href="https://x.com/BansalGroup_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <FaXTwitter />
                </IconWrapper>
              </a>

              <a
                href="https://www.instagram.com/bansal_group_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <FaInstagram />
                </IconWrapper>
              </a>

              <a
                href="https://www.linkedin.com/company/bansalgroupofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <FaLinkedinIn />
                </IconWrapper>
              </a>
            </div>
          </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10 text-sm">

          <FooterColumn title="ABOUT US" items={[
            { label: "Company Profile", to: "/about" },
            { label: "Leadership Team", to: "/leadership" },
            { label: "Our Journey", to: "/our-journey" },
            { label: "Contact", to: "/contact" },
          ]} />

          <FooterColumn title="PROJECTS" items={[
            { label: "All Projects", to: "/projects" },
            { label: "Latest Launches", to: "/projects" },
            { label: "Ongoing Projects", to: "/projects" },
            { label: "Completed Projects", to: "/projects" },
          ]} />

          <FooterColumn title="MEDIA" items={[
            { label: "News", to: "/media" },
            { label: "Video", to: "/media" },
            { label: "Blog", to: "/media" },
          ]} />


          <FooterColumn title="POPULAR AREAS" items={[
            { label: "Al Furjan", to: "#" },
            { label: "Arjan", to: "#" },
            { label: "Business Bay", to: "#" },
            { label: "Downtown", to: "#" },
            { label: "Dubai Marina", to: "#" },
            { label: "JLT", to: "#" },
            { label: "JVC", to: "#" },
          ]} />

          <FooterColumn title="RECENT SEARCHES" items={[
            { label: "Apartments for Sale Dubai", to: "#" },
            { label: "Studio Apartments Dubai", to: "#" },
            { label: "Villas for Sale Dubai", to: "#" },
          ]} />
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#262626] px-6 md:px-16 py-4 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-600">Lotus Valley</span>. All Rights
            Reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">TERMS CONDITIONS</a>
            <span>|</span>
            <a href="#" className="hover:text-white">COOKIE POLICY</a>
            <span>|</span>
            <a href="#" className="hover:text-white">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Reusable Components */

const FooterColumn = ({ title, items }) => (
  <div>
    <h4 className="text-white font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i}>
          {item.to !== "#" ? (
            <Link to={item.to} className="hover:text-white cursor-pointer transition">
              {item.label}
            </Link>
          ) : (
            <span className="hover:text-white cursor-pointer transition">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const IconWrapper = ({ children }) => (
  <div className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:border-white hover:text-white transition cursor-pointer">
    {children}
  </div>
);

export default Footer;

