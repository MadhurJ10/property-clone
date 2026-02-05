import React from "react";


const GetInTouch = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= CARD ================= */}
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden shadow-lg">

          {/* ================= LEFT : FORM ================= */}
          <div className="p-12">
            <h2 className="text-4xl tracking-[0.35em] text-[#b79b75] mb-12">
              GET IN TOUCH
            </h2>

            <form className="space-y-8">

              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full border px-5 py-4 outline-none focus:border-black"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full border px-5 py-4 outline-none focus:border-black"
                />
              </div>

              {/* Phone */}
              <div className="flex border">
                <div className="flex items-center gap-2 px-4 border-r bg-gray-50">
                  <span>🇦🇪</span>
                  <span className="text-sm">+971</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full px-5 py-4 outline-none"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email*"
                className="w-full border px-5 py-4 outline-none focus:border-black"
              />

              {/* Budget */}
              <select className="w-full border px-5 py-4 outline-none text-gray-500 focus:border-black">
                <option>Select a Budget*</option>
                <option>AED 500k - 1M</option>
                <option>AED 1M - 2M</option>
                <option>AED 2M+</option>
              </select>

              {/* Button */}
              <button
                type="button"
                className="mt-6 px-10 py-4 border border-[#b79b75] text-[#b79b75] tracking-widest hover:bg-[#b79b75] hover:text-white transition"
              >
                SUBMIT
              </button>

            </form>
          </div>

          {/* ================= RIGHT : IMAGE ================= */}
          <div className="hidden lg:block">
            <img
              src="/images/get-in-touch.jpg"
              alt="Get in touch"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
