import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerImg from "../assets/img18.jpg"; 
import logoImage from "../assets/1993.png"
import AWARDS from "../assets/img13.jpg"
import Recognition from "../assets/img8.png"
import Recognition2 from "../assets/img9.png"
import Recognition3 from "../assets/img10.png"
import Recognition4 from "../assets/img11.png"
import Recognition5 from "../assets/img12.png"
import Recognition6 from "../assets/img19.png"
import bannerImg from "../assets/img6.jpg"
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const bannerRef = useRef(null);
  const contentRef = useRef(null);
  const awardsRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(() => {
    // Banner animation
    gsap.from(bannerRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Content animation
    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
      },
    });

    // Vision / Mission / Awards animation
    gsap.from(awardsRef.current.querySelectorAll(".vision-text, .mission-text, .award-badge"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: awardsRef.current,
        start: "top 80%",
      },
    });

    // New: Contact form section animation
    gsap.from(contactRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 75%",
      },
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
          <span className="text-gray-400 text-xl">Banner Image Here</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11/12 md:w-full h-full flex items-center justify-center">
            <img src={bannerImg} alt="About Banner" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div
          ref={contentRef}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-[#FE2D2D]">Danube</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Danube Group has grown from a single store started in Deira, Dubai 30 years ago to one of the most trusted and household brands in the Middle East. The multi-million dollar Group has been consistently increasing its global footprint and annual revenue supported by an ever-growing family of over 3,500 staff. Danube Group is headquartered in Dubai and operates in 9 countries across the Middle East & Asia.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              The Group owns many award-winning business verticals. Danube Building Materials is the No.1 Building Materials company in the region offering more than 25,000 products under one roof. Danube Home is the fastest-growing furniture retail brand currently present across UAE, KSA, Oman, Bahrain, Qatar, Kuwait, India, and Africa. Alucopanel is the only factory manufacturing A2-grade facade cladding panels in the UAE.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Danube Properties, the property development arm of the business, is rated amongst the top 5 developers in the UAE. The company’s major achievements include on-time delivery of exceptional quality assets with record sales success.
            </p>
          </div>

          <div className="w-full h-80 md:h-[500px] bg-#F9FAFB rounded-2xl overflow-hidden ">
            <div className="w-full h-full flex items-center justify-center">
          <img src={logoImage} alt="Logo Image" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Awards Section */}
      <section ref={awardsRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="vision-text bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-4xl font-bold text-[#EFC990] mb-6 tracking-wide">
                VISION
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be a Leading Property Developer in the region delivering affordable and sustainable development with high standards of construction.
              </p>
            </div>

            <div className="mission-text bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-4xl font-bold text-[#EFC990] mb-6 tracking-wide">
                MISSION
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Conduct value engineering for each project. Deliver quality construction at extremely competitive rates. On-Time Delivery of the projects.
              </p>
            </div>
          </div>

          <h3 className="text-4xl flex md:text-5xl font-bold text-gray-900 mb-2">
        <img src={Recognition} alt="Recognition" />
                <img src={Recognition2} alt="Recognition" />
<img src={Recognition3} alt="Recognition" />
<img src={Recognition4} alt="Recognition" />
<img src={Recognition5} alt="Recognition" />
<img src={Recognition6} alt="Recognition" />
          </h3>

         
        </div>
      </section>

      {/* Our Group Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-[#EFC990]">Group</span>
          </h2>
          
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <img src={AWARDS} alt="Our Group" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;