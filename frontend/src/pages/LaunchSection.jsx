import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: img1,
        title: "SHAHRUKHZ BY DANUBE",
        subtitle: "PREMIUM COMMERCIAL OFFICES",
    },
    {
        image: img2,
        title: "ELEVATE BY DANUBE",
        subtitle: "LUXURY BUSINESS SPACES",
    },
    {
        image: img3,
        title: "OPULENCE BY DANUBE",
        subtitle: "MODERN WORK ENVIRONMENTS",
    },
    {
        image: img4,
        title: "VISION BY DANUBE",
        subtitle: "FUTURE READY OFFICES",
    },
    {
        image: img5,
        title: "ICONIC BY DANUBE",
        subtitle: "WHERE BUSINESS MEETS PRESTIGE",
    },
];

const LaunchSection = () => {
    const sectionRef = useRef(null);
    const imagePanelsRef = useRef([]);
    const textPanelsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const images = imagePanelsRef.current;
            const texts = textPanelsRef.current;

            // Initial states
            gsap.set(images, { yPercent: 100, scale: 1.05 });
            gsap.set(images[ 0 ], { yPercent: 0, scale: 1 });
            gsap.set(texts, { autoAlpha: 0, y: 20 });
            gsap.set(texts[ 0 ], { autoAlpha: 1, y: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${slides.length * 120}%`, // more breathing room
                    pin: true,
                    scrub: 1.2, // smoother response
                    snap: {
                        snapTo: 1 / (slides.length - 1),
                        duration: 0.6,
                        ease: "power2.inOut",
                    },
                },
            });

            slides.forEach((_, i) => {
                if (i === 0) return;

                // IMAGE comes in EARLIER and smoother
                tl.to(
                    images[ i ],
                    {
                        yPercent: 0,
                        scale: 1,
                        ease: "power3.out",
                        duration: 1.2,
                    },
                    i - 0.35 // 🔥 key fix (starts earlier)
                );

                // Previous image subtly moves up
                tl.to(
                    images[ i - 1 ],
                    {
                        scale: 0.98,
                        ease: "power2.out",
                        duration: 1,
                    },
                    i - 0.35
                );

                // TEXT out
                tl.to(
                    texts[ i - 1 ],
                    {
                        autoAlpha: 0,
                        y: -20,
                        ease: "power2.out",
                        duration: 0.4,
                    },
                    i - 0.15
                );

                // TEXT in
                tl.to(
                    texts[ i ],
                    {
                        autoAlpha: 1,
                        y: 0,
                        ease: "power2.out",
                        duration: 0.6,
                    },
                    i + 0.05
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-black"
        >
            {/* TEXT PANELS */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        ref={(el) => (textPanelsRef.current[ i ] = el)}
                        className="absolute left-[8%] top-[38%] max-w-xl text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-[0.22em] text-[#c4ab8c] mb-6">
                            {slide.title}
                        </h1>

                        <h2 className="text-white tracking-widest mb-10">
                            {slide.subtitle}
                        </h2>

                        <button className="pointer-events-auto px-10 py-4 bg-[#5a5a5a] text-white tracking-wider hover:bg-black transition">
                            DISCOVER ↗
                        </button>
                    </div>
                ))}
            </div>

            {/* IMAGE PANELS */}
            <div className="absolute inset-0">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        ref={(el) => (imagePanelsRef.current[ i ] = el)}
                        className="absolute inset-0 h-full w-full"
                        style={{ zIndex: i }}
                    >
                        <img
                            src={slide.image}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LaunchSection;
