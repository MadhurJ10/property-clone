import { useState } from "react";

const FAQSection = ({ faqs = [], title, subtitle }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-32">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-20">
        {subtitle && (
          <p className="tracking-widest text-gray-500">
            {subtitle}
          </p>
        )}
        {title && (
          <h2 className="mt-4 text-4xl tracking-[0.35em] text-[#b79b75]">
            {title}
          </h2>
        )}
      </div>

      {/* ================= FAQ LIST ================= */}
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`border transition ${
              openIndex === index
                ? "border-blue-400"
                : "border-gray-300"
            }`}
          >
            {/* QUESTION */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
              className="w-full flex justify-between items-center px-6 py-6 text-left"
            >
              <span className="text-lg text-gray-800">
                {item.q}
              </span>

              <span
                className={`text-2xl transition-transform ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* ANSWER */}
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-600 leading-7">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
