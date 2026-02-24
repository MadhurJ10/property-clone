import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImage from "../assets/1993.png"
import AWARDS from "../assets/img13.jpg"
import Recognition from "../assets/img8.png"
import Recognition2 from "../assets/img9.png"
import Recognition3 from "../assets/img10.png"
import Recognition4 from "../assets/img11.png"
import Recognition5 from "../assets/img12.png"
import Recognition6 from "../assets/img19.png"
import bannerImg from "../assets/img6.jpg"
import Footer from "../components/Footer";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const bannerRef = useRef(null);
  const overviewRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  useGSAP(() => {
    // Banner animation
    gsap.from(bannerRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Content sections animation
    const sections = [overviewRef, visionRef, missionRef, teamRef];
    sections.forEach((ref) => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">

      {/* Banner Section */}
      <section className="w-full h-[420px] relative overflow-hidden flex items-center justify-center">
        <div
          ref={bannerRef}
          className="w-11/12 md:w-3/4 h-full bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden"
        >
          <span className="text-gray-400 text-xl">Lotus Valley Banner</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11/12 md:w-full h-full flex items-center justify-center">
            <img src="/images/Lotus_Valley_Image_24.png" alt="Lotus Valley Banner" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" ref={overviewRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Lotus Valley is a meticulously planned riverside community located in the heart of Bhopal. Designed to blend the tranquility of nature with the convenience of the city, it offers premium river-facing plots, modern amenities, and a smart, secure environment. The project is thoughtfully developed to foster Community, Health, and Celebration while delivering a peaceful and connected lifestyle.
              </p>
            </div>
            <div className="w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/Lotus_Valley_Image_1.png" alt="Lotus Valley Overview" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" ref={visionRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-4xl font-bold text-[#c4ab8c] mb-6 tracking-wide">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To create a green, secure, and modern residential community that harmonizes riverside serenity with urban accessibility. Lotus Valley envisions a lifestyle where nature, smart infrastructure, and premium amenities come together to offer lasting value and well-being.
              </p>
            </div>
            <div className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/Lotus_Valley_Image_13.png" alt="Lotus Valley Vision" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" ref={missionRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/Lotus_Valley_Image_14.png" alt="Lotus Valley Mission" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-4xl font-bold text-[#c4ab8c] mb-6 tracking-wide">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission is to deliver a master-planned community that prioritizes safety, connectivity, and quality living. Through 24x7 security, smart gate access, Wi-Fi-enabled infrastructure, and thoughtfully designed amenities, we aim to provide residents with comfort, convenience, and long-term growth potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Team
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Lotus Valley is developed by ECOSTAR INFRA, committed to building well-planned communities with attention to detail and quality. The team focuses on creating sustainable layouts, integrating modern infrastructure, and ensuring a secure environment that enhances everyday living.
              </p>
            </div>
            <div className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/Lotus_Valley_Image_17.png" alt="ECOSTAR INFRA Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default About;