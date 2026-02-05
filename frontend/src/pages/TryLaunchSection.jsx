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
        img: img1,
        title: "SHAHRUKHZ",
        subtitle: "The Beginning",
        description: "Experience the arrival of a new era in luxury commercial spaces.",
    },
    {
        img: img2,
        title: "THE LOBBY",
        subtitle: "Grand Entrance",
        description: "A triple-height atrium that leaves a lasting impression on every guest.",
    },
    {
        img: img3,
        title: "SKY LOUNGE",
        subtitle: "Elevated Living",
        description: "Connect and collaborate in spaces designed for the modern visionary.",
    },
    {
        img: img4,
        title: "WORKSPACE",
        subtitle: "Productivity Redefined",
        description: "Ergonomic designs meeting aesthetic brilliance for peak performance.",
    },
    {
        img: img5,
        title: "THE VIEW",
        subtitle: "Panoramic Horizons",
        description: "Uninterrupted vistas that inspire your next big idea.",
    },
];

const TryLaunchSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    // Arrays to store refs for animations
    const imagesRef = useRef([]);
    const textsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=400%", // Longer scroll for smoother reading
                    scrub: 0.5,
                    pin: true,
                },
            });

            // Initial setup: Hide all texts except the first one
            // We push other texts down and make them invisible
            slides.forEach((_, i) => {
                if (i !== 0) {
                    gsap.set(textsRef.current[ i ], { autoAlpha: 0, y: 50 });
                }
            });

            // Loop through slides starting from the second one (index 1)
            slides.forEach((_, i) => {
                if (i === 0) return;

                // 1. ANIMATE IMAGE REVEAL (Curtain Effect)
                // Set initial clipped state
                gsap.set(imagesRef.current[ i ], { clipPath: "inset(100% 0% 0% 0%)" });

                // Add to timeline
                tl.to(imagesRef.current[ i ], {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 1,
                    ease: "none",
                })

                    // 2. PARALLAX EFFECT FOR IMAGE (Subtle Zoom)
                    .fromTo(imagesRef.current[ i ].querySelector("img"),
                        { scale: 1.3, yPercent: -10 },
                        { scale: 1, yPercent: 0, duration: 1, ease: "power1.out" },
                        "<"
                    )

                    // 3. TEXT TRANSITION
                    // Hide Previous Text (Fade Out + Move Up)
                    .to(textsRef.current[ i - 1 ], {
                        autoAlpha: 0,
                        y: -50, // Moves up as it disappears
                        duration: 0.5, // Faster than image for snappy feel
                        ease: "power2.in",
                    }, "<")

                    // Show Current Text (Fade In + Move Up from bottom)
                    .to(textsRef.current[ i ], {
                        autoAlpha: 1,
                        y: 0, // Settle to center
                        duration: 0.7,
                        ease: "power2.out",
                    }, "<+=0.2"); // Slight delay so it enters after previous text leaves
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black text-white">
            <div ref={triggerRef} className="relative h-screen w-full overflow-hidden">

                {/* --- LEFT SIDE: TEXT CONTENT STACK --- */}
                {/* We use mix-blend-difference to ensure text is visible on light/dark images */}
                <div className="absolute inset-0 z-50 flex flex-col justify-center px-[8%] pointer-events-none">

                    {/* Map through slides to create stacked text layers */}
                    {/* TEXT */}
                    <div className="absolute inset-0 z-20 flex items-center px-[8%] pointer-events-none">
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                ref={(el) => (textsRef.current[ i ] = el)}
                                className="absolute max-w-xl"
                            >
                                <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4">
                                    {slide.subtitle}
                                </p>

                                <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-6">
                                    {slide.title}
                                </h1>

                                <p className="text-white/80 text-sm leading-relaxed mb-8">
                                    {slide.description}
                                </p>

                                <button className="pointer-events-auto bg-white/90 text-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-white transition">
                                    Discover
                                </button>
                            </div>
                        ))}
                    </div>

                </div>

                {/* --- RIGHT/FULL SIDE: IMAGE STACK --- */}

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            ref={(el) => (imagesRef.current[ i ] = el)}
                            className="absolute inset-0 w-full h-full will-change-[clip-path]"
                            style={{ zIndex: i }}
                        >
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="h-full w-full object-cover will-change-transform"
                            />
                            {/* Standard Overlay for consistency */}
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TryLaunchSection;