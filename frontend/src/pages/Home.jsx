import React from "react";
import Footer from "../components/Footer";
import LaunchSection from "./LaunchSection";
import TryLaunchSection from "./TryLaunchSection";
import WhyInvestSection from "../components/WhyInvestSection";


const Home = () => {
    return (
        <div className="w-full">

            {/* Video Section */}
            <section className="h-screen w-full overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    src="/videos/homevideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </section>



            <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6">

                {/* Latest Launch Section */}
                <div className="mt-24 mb-40">
                    <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-6">
                        LATEST LAUNCH
                    </h2>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] text-[#c4ab8c] mb-14">
                        SHAHRUKHZ BY DANUBE
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-4 bg-[#5a5a5a] text-white tracking-wider hover:bg-black transition">
                            ↗ DISCOVER
                        </button>

                        <button className="px-10 py-4 bg-[#c4ab8c] text-white tracking-wider hover:bg-[#b89c7a] transition">
                            REGISTER INTEREST
                        </button>
                    </div>
                </div>

                {/* Featured Projects */}
                <div className="mb-20">
                    <h2 className="text-sm tracking-[0.3em] text-gray-500 mb-6">
                        FEATURED
                    </h2>

                    <h1 className="text-4xl md:text-5xl tracking-[0.25em] text-[#c4ab8c]">
                        PROJECTS
                    </h1>
                </div>

            </div>


            {/* Scroll-Pinned Launch Section */}
            <TryLaunchSection />
            {/* <LaunchSection/> */}
            <WhyInvestSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
