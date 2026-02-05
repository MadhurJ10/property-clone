import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "When is the expected completion date for Breez by Danube?",
      answer:
        "Breez by Danube is scheduled for completion and handover in 2029.",
    },
    {
      question: "Where is Breez by Danube located?",
      answer:
        "Breez by Danube is located in a prime area of Dubai, offering excellent connectivity and accessibility.",
    },
    {
      question: "What makes Breez by Danube unique?",
      answer:
        "Breez by Danube offers premium amenities, strategic location, and thoughtfully designed spaces curated for modern living.",
    },
  ];

  return (
    <section className="w-full bg-white py-32">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-20">
        <p className="tracking-widest text-gray-500">MORE INFORMATION</p>
        <h2 className="mt-4 text-4xl tracking-[0.35em] text-[#b79b75]">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      {/* ================= FAQ LIST ================= */}
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        {faqs.map((faq, index) => (
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
                {faq.question}
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
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQSection;
