import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Footer from '../components/Footer';

const ProjectsGallery = () => {
    const [filter, setFilter] = useState('all');
    const projects = Object.values(portfolioData);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.status === filter);

    const categories = [
        { key: 'all', label: 'All Projects' },
        { key: 'latest', label: 'Latest Launches' },
        { key: 'ongoing', label: 'Ongoing Projects' },
        { key: 'completed', label: 'Completed Projects' },
    ];

    return (
        <div className="pt-24 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-black text-white py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">OUR PROJECTS</h1>
                    <p className="text-xl text-gray-400 font-light">
                        Discover our portfolio of luxury residences across Dubai's most prestigious locations.
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <div className="max-w-7xl mx-auto px-6 py-12 flex justify-center flex-wrap gap-8 border-b">
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => setFilter(cat.key)}
                        className={`text-sm font-bold tracking-widest uppercase pb-2 transition-all border-b-2 ${filter === cat.key
                                ? 'text-[#b79b75] border-[#b79b75]'
                                : 'text-gray-400 border-transparent hover:text-black'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((p) => (
                        <Link
                            to={`/portfolio/${p.slug}`}
                            key={p.slug}
                            className="group relative h-[500px] overflow-hidden rounded-xl shadow-lg"
                        >
                            <img
                                src={p.intro.image}
                                alt={p.intro.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="text-[#b79b75] text-xs font-bold uppercase tracking-widest block mb-2">
                                            {p.status.replace('-', ' ')}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-2">{p.intro.title}</h3>
                                        <p className="text-gray-300 text-sm italic">{p.intro.location}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full group-hover:bg-[#b79b75] transition-colors">
                                        <span className="text-white text-xl">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProjectsGallery;
