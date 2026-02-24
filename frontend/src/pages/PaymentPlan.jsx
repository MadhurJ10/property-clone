import React from 'react';
import Footer from '../components/Footer';

const PaymentPlan = () => {
    return (
        <div className="pt-24 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80')` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">1% PAYMENT PLAN</h1>
                    <p className="text-xl md:text-3xl font-light max-w-3xl mx-auto uppercase tracking-widest text-[#b79b75]">
                        OWN YOUR DREAM HOME WITH EASE
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold leading-tight">
                            Revolutionizing Real Estate <br />
                            <span className="text-[#b79b75]">Investment in Dubai</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Danube Properties introduced the legendary 1% payment plan to make home ownership accessible to everyone.
                            Instead of bulky payments, you pay just 1% per month towards your own property.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Low initial down payment",
                                "Interest-free monthly installments",
                                "High return on investment",
                                "Flexible exit options",
                                "Prime locations in Dubai"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <span className="bg-[#b79b75] text-white rounded-full p-1 text-xs">✓</span>
                                    <span className="text-gray-800 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-100 p-12 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#b79b75]/10 rounded-full -mr-16 -mt-16"></div>
                        <h3 className="text-3xl font-bold mb-8">Why Invest with 1%?</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-6xl font-black text-[#b79b75]/20 mb-[-2rem]">01</h4>
                                <h5 className="text-xl font-bold relative z-10">Financial Freedom</h5>
                                <p className="text-gray-500 mt-2">Manage your cash flow better with predictable monthly payments.</p>
                            </div>
                            <div>
                                <h4 className="text-6xl font-black text-[#b79b75]/20 mb-[-2rem]">02</h4>
                                <h5 className="text-xl font-bold relative z-10">Capital Appreciation</h5>
                                <p className="text-gray-500 mt-2">Benefit from property value growth while paying just 1% monthly.</p>
                            </div>
                            <div>
                                <h4 className="text-6xl font-black text-[#b79b75]/20 mb-[-2rem]">03</h4>
                                <h5 className="text-xl font-bold relative z-10">Hassle-Free Process</h5>
                                <p className="text-gray-500 mt-2">Simple documentation and direct developer association.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black text-white py-24">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to take the first step?</h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Speak to our property consultants today and find out which project fits your budget.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="bg-[#b79b75] text-white px-10 py-4 rounded-full font-bold hover:bg-[#a68a64] transition-all">
                            ENQUIRE NOW
                        </button>
                        <button className="border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
                            DOWNLOAD BROCHURE
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PaymentPlan;
