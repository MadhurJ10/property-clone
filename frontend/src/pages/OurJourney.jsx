import React from 'react';
import Footer from '../components/Footer';

const OurJourney = () => {
    const milestones = [
        {
            year: "1993",
            title: "The Beginning",
            description: "Danube Group was established as a small trading enterprise in Dubai.",
            image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800&q=80"
        },
        {
            year: "2014",
            title: "Real Estate Entry",
            description: "Launched Danube Properties, redefining affordable luxury in the UAE.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
        },
        {
            year: "2017",
            title: "Fastest Growing Developer",
            description: "Recognized as the fastest-growing private real estate developer in the UAE.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        },
        {
            year: "2021",
            title: "Global Expansion",
            description: "Successful delivery of multiple landmark projects across Dubai.",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
        },
        {
            year: "2025",
            title: "Today & Beyond",
            description: "Continuing to innovate with AI-integrated smart homes and sustainable living.",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="pt-24 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">OUR JOURNEY</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Three decades of building trust, quality, and dreams.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block"></div>

                    <div className="space-y-24">
                        {milestones.map((m, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1">
                                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                                        <img
                                            src={m.image}
                                            alt={m.title}
                                            className="w-full h-[300px] object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Center Circle */}
                                <div className="relative hidden md:flex items-center justify-center z-10">
                                    <div className="w-12 h-12 bg-white border-4 border-[#b79b75] rounded-full flex items-center justify-center font-bold text-xs">
                                        {m.year}
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4 text-center md:text-left">
                                    <span className="text-[#b79b75] font-black text-6xl opacity-20 block md:hidden">{m.year}</span>
                                    <h3 className="text-3xl font-bold">{m.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {m.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OurJourney;
