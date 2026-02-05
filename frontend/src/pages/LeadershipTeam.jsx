import React from 'react';

// Import your team member images from src/assets/
// Using available images from the assets folder
import rizwanImg from '../assets/anil-bansal-sir-2.png';
import anisImg   from '../assets/chirag-bansal.png';
import adelImg   from '../assets/kartik-bansal.png';
import member4Img from '../assets/kunal-bansal.png';
import member5Img from '../assets/parth-bansal.png';
import member6Img from '../assets/sunil-bansal-sir-3.png';

const teamMembers = [
  {
    name: 'MR. ANIL BANSAL',
    title: 'Chairman – Bansal Group LinkedIn',
    image: rizwanImg,
    description: 'Chairman of Bansal Group',
    about: 'Mr. Anil Bansal once said, "If you don\'t have an eye for details, you are most likely to miss out on creating a bigger impact." He is a civil engineer and has been in the business for almost 4 decades. He believes it is the details that create distinction, be it designing standard operating procedures or creating the best work culture.',
  },
  {
    name: 'MR. CHIRAG BANSAL',
    title: 'Managing Director LinkedIn',
    image: anisImg,
    description: 'Managing Director',
    about: 'Mr. Chirag Bansal embodies youthful dynamism within the esteemed Bansal Group, holding the distinction as its youngest member. With a Bachelor\'s Degree in Civil Engineering from Penn State University, he stands as a beacon of leadership in steering the trajectory of Bansal Construction Work\'s new endeavors.',
  },
  {
    name: 'MR. KARTIK BANSAL',
    title: 'Managing Director LinkedIn',
    image: adelImg,
    description: 'Managing Director',
    about: 'Mr. Kartik Bansal, a visionary leader with a degree in Industrial Engineering from Penn State University, adeptly oversees Bansal Hospital, Bansal TMT Sariya, and Bansal One. His strategic acumen and innovative marketing strategies drive remarkable success. Fostering collaboration, he aims to elevate Bansal Group to a leading conglomerate in India.',
  },
  {
    name: 'MR. KUNAL BANSAL',
    title: 'Managing Director LinkedIn',
    image: member4Img,
    description: 'Managing Director',
    about: 'Kunal Bansal, an industrious Penn State University Industrial Engineering Graduate, skillfully manages Bansal Constructions and Bansal Oil & Foods. His innovative marketing and decisive leadership are pivotal to their success. A collaborative strategist, he aims to propel Bansal Group among India\'s foremost conglomerates.',
  },
  {
    name: 'MR. PARTH BANSAL',
    title: 'Managing Director LinkedIn',
    image: member5Img,
    description: 'Managing Director',
    about: 'With a Bachelor\'s Degree in Civil Engineering from Penn State University, Mr. Parth Bansal is the CEO and Founder of TONEOP, a groundbreaking Health & Nutrition platform focused on personalized wellness guidance. He orchestrates collaboration among 8 institutions within BCI, ensuring seamless teamwork for success. Additionally, he spearheads BANSAL NEWS, a reputed news channel of MPCG.',
  },
  {
    name: 'MR. SUNIL BANSAL',
    title: 'Secretary – Bansal Group LinkedIn',
    image: member6Img,
    description: 'Secretary of Bansal Group',
    about: 'Having worked for more than 3 decades in different domains, he is seen frequently switching hats from the field of construction to manufacturing to marketing to finance, and then to construction again. He is the secretary of the Bansal Group and believes that being an entrepreneur is not just about finding the best solutions, but it is equally about having the foresight of the challenges and opportunities in the business.',
  },
];

const LeadershipTeam = () => {
  return (
    <section className="pt-20 py-16 md:py-20 bg-gray-50 min-h-screen px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 uppercase tracking-wide">
            OUR LEADER
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div> {/* accent line like many sites */}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {teamMembers.map((member, index) => (
  <div
  key={index}
  className="group relative overflow-hidden rounded-lg shadow-md bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl w-[320px] mx-auto"
>
  {/* Image container */}
  <div className="relative overflow-hidden h-[260px] flex justify-center items-center bg-gray-100">
    <img
      src={member.image}
      alt={`${member.name} - ${member.title}`}
      className="w-[220px] h-[260px] object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>

  {/* Text content */}
  <div className="p-4 text-center">
    <h3 className="text-lg font-bold text-gray-900 mb-1">
      {member.name}
    </h3>
    <p className="text-sm text-red-600 font-semibold mb-2">
      {member.title}
    </p>

    {member.description && (
      <p className="text-gray-600 text-xs mb-2">
        {member.description}
      </p>
    )}

    {member.about && (
      <p className="text-gray-700 text-xs leading-relaxed border-t pt-2 mt-2 line-clamp-4">
        {member.about}
      </p>
    )}
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
