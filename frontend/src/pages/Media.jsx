import React from 'react';
import Footer from '../components/Footer';

const Media = () => {
    const newsItems = [
        {
            id: 1,
            title: "Danube Properties Unveils Serenz: A New Paradigm of Luxury",
            date: "Feb 20, 2026",
            category: "Press Release",
            image: "https://images.unsplash.com/photo-1545324418-f1d3ac1ef739?auto=format&fit=crop&w=800&q=80",
            description: "Experience the ultimate in waterfront living with Serenz, our latest flagship project in Dubai."
        },
        {
            id: 2,
            title: "Danube Group Celebrates 30 Years of Excellence",
            date: "Feb 15, 2026",
            category: "Corporate",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            description: "From humble beginnings to a global real estate leader, join us in celebrating our journey."
        },
        {
            id: 3,
            title: "Why Dubai remains the top choice for Global Investors",
            date: "Feb 10, 2026",
            category: "Blog",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
            description: "An in-depth analysis of the Dubai real estate market and why it continues to outperform."
        },
        {
            id: 4,
            title: "Danube Properties Wins 'Best Developer' Award 2025",
            date: "Jan 25, 2026",
            category: "Awards",
            image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&w=800&q=80",
            description: "Recognition for our commitment to quality, innovation, and customer satisfaction."
        }
    ];

    return (
        <div className="pt-24 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80')` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">MEDIA CENTRE</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Stay updated with the latest news, events, and insights from Danube Properties.
                    </p>
                </div>
            </section>

            {/* Navigation Filter */}
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap gap-4 border-b">
                {["ALL", "NEWS", "VIDEOS", "3D TOURS", "BLOG"].map((cat) => (
                    <button
                        key={cat}
                        className="px-6 py-2 border rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* News Grid */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {newsItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden aspect-video mb-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold tracking-widest uppercase">
                                    {item.category}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-500 text-sm">{item.date}</p>
                                <h3 className="text-2xl font-bold group-hover:text-[#b79b75] transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-3">
                                    {item.description}
                                </p>
                                <button className="text-[#b79b75] font-bold text-sm tracking-widest uppercase border-b-2 border-transparent hover:border-[#b79b75] transition-all pt-2">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Media;
