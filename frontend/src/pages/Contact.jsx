import React from 'react';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';

const Contact = () => {
    return (
        <div className="pt-24 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80')` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">CONTACT US</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        We are here to help you find your dream home. Get in touch with our experts.
                    </p>
                </div>
            </section>

            {/* Offices Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <div className="text-4xl text-[#b79b75]">📍</div>
                        <h3 className="text-2xl font-bold">Main Office</h3>
                        <p className="text-gray-600">
                            Danube Properties HQ,<br />
                            Sheikh Zayed Road, Dubai, UAE
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-4xl text-[#b79b75]">📞</div>
                        <h3 className="text-2xl font-bold">Call Center</h3>
                        <p className="text-gray-600">
                            Toll Free: 800 5757<br />
                            International: +971 4 312 2222
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-4xl text-[#b79b75]">✉️</div>
                        <h3 className="text-2xl font-bold">Email Us</h3>
                        <p className="text-gray-600">
                            info@danubeproperties.com<br />
                            sales@danubeproperties.com
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="bg-gray-50 py-20">
                <GetInTouch />
            </section>

            {/* Map Section */}
            <section className="h-[500px] bg-gray-200">
                <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178653974415!2d55.2704383!3d25.197197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e247%3A0x83d28f0c24b73527!2sDanube%20Properties!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                    className="w-full h-full border-0 grayscale invert contrast-[1.2] brightness-90"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
