import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "When is the expected completion date for Lotus Valley?",
      answer:
        "Lotus Valley is a meticulously planned community designed to foster Community, Health, and Celebration. For construction timelines and possession details, please contact ECOSTAR INFRA to book your exclusive site visit.",
    },
    {
      question: "Where is Lotus Valley located?",
      answer:
        "Lotus Valley is located in the heart of Bhopal, offering a rare riverside setting. The project is strategically positioned close to:\n\n0.2 km from Billabong School\n\n4 km from Sage University\n\n10 km from AIIMS Medical College & Hospital\n\n7 km from Capital Mall\n\n8 km from Ashima Mall\n\n25 km from Bhopal Airport\n\nIt combines the tranquility of the river with the convenience of the city.",
    },
    {
      question: "What makes Lotus Valley unique?",
      answer:
        "Lotus Valley stands out for its:\n\nPremium river-facing plots\n\nSmart & Secure Community with 24x7 CCTV\n\nSmart Gate System & Wi-Fi coverage\n\nCentral Clubhouse with Banquet Hall\n\nDedicated Jogging Park & Green Spaces\n\nSecure Children's Play Area\n\nMaster-planned layout blending nature with modern living\n\nIt is designed to offer a peaceful, green lifestyle with modern amenities.",
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
