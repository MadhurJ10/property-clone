import dum1 from "../assets/dum1.jpg";
import dum2 from "../assets/dum2.jpg";
import dum3 from "../assets/dum3.jpg";
import dum4 from "../assets/dum4.jpg";
import dum5 from "../assets/dum5.jpg";
import bansalone2 from "../assets/bansalone2.jpg";
import office1 from "../assets/office1.jpg";
import parking1 from "../assets/parking1.jpg";
import raasta1 from "../assets/raasta1.png";
import rest1 from "../assets/rest1.png";
import romeolane from "../assets/romeolane.png";
import hospital1 from "../assets/hospital1.jpg";
import hospital2 from "../assets/hospital2.jpg";
import hospital3 from "../assets/hospital3.jpg";
import bansalone from "../assets/bansalone.png"

export const portfolioData = {
  BANSALONE: {
    slug: "BANSALONE",
    status: "latest",

    heroVideo: "/videos/homevideo.webm",

    intro: {
      title: "BANSAL ONE",
      description: `Bansal One aspires to be the best corporate and commercial property in Bhopal, with luxurious, state-of-the-art infrastructure and spaces for offices and dining services. Founded by visionary entrepreneurs Anil Bansal and Sunil Bansal and brought to life under the leadership of CEO Avnish Hasija, Bansal One is a magnificent 16-storey tower designed to impress and inspire. Spanning 4 lakh sqft, Bansal One showcases safety and environmental responsibility through earthquake resistance structures, advanced fire safety measures, 3-tier security, and a sustainability certificate by ASSOCHAM with a GEM 3 rating.`,
    },

    stats: [
      { title: "STARTING PRICE", value: "AED 1.9 MILLION" },
      { title: "COMPLETION", value: "2029" },
      { title: "PAYMENT PLAN", value: "PAY 1% MONTHLY" },
      { title: "UNITS", value: "615" },
      { title: "COMMERCIAL UNITS", value: "EXECUTIVE, PREMIUM, PRESTIGE" },
      { title: "LOCATION", value: "SHEIKH ZAYED ROAD, DUBAI" },
    ],

    why: {
      title: "SHEIKH ZAYED ROAD",
      items: [
        "5 MINS PALM JUMEIRAH",
        "8 MINS DUBAI MARINA",
        "8 MINS MALL OF EMIRATES",
        "20 MINS DUBAI INTERNATIONAL AIRPORT",
        "20 MINS DUBAI EXPO",
        "8 MINS BURJ AL ARAB",
      ],
    },

    launchSlides: [
      {
        img: bansalone,
        title: "SHAHRUKHZ",
        subtitle: "The Beginning",
        description: "Experience the arrival of a new era...",
      },
      {
        img: bansalone2,
        title: "THE LOBBY",
        subtitle: "Grand Entrance",
        description: "A triple-height atrium...",
      },
      {
        img: dum3,
        title: "SKY LOUNGE",
        subtitle: "Elevated Living",
        description: "Connect and collaborate...",
      },
      {
        img: dum4,
        title: "WORKSPACE",
        subtitle: "Productivity Redefined",
        description: "Ergonomic designs...",
      },
      {
        img: dum5,
        title: "THE VIEW",
        subtitle: "Panoramic Horizons",
        description: "Uninterrupted vistas...",
      },
    ],

    amenities: [
      { src: bansalone, title: "Prime Location & Excellent Connectivity" },
      { src: office1, title: "20+ Commercial Spaces" },
      { src: parking1, title: "5-LEVEL RFID Parking" },
    ],

    gallery: [
      raasta1, rest1, romeolane
    ],

    map: {
      location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5573009568443!2d77.4381391!3d23.2227988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4330fee03bab%3A0xcce3a5419045691d!2sBansal%20One!5e0!3m2!1sen!2sin!4v1770284621710!5m2!1sen!2sin",

    },

    faqs: [
      {
        q: "When is the expected completion date?",
        a: "Scheduled for completion in 2029.",
      },
      {
        q: "Where is it located?",
        a: "Prime location in Dubai.",
      },
    ],
  },


  breez: {
    slug: "breez",
    status: "ongoing",
    heroVideo: "/videos/homevideo.webm",

    intro: {
      title: "BREEZ",
      description: `Rising on the iconic Sheikh Zayed Road...
Inspired by the self-made journey of Shahrukh Khan...`,
    },

    stats: [
      { title: "STARTING PRICE", value: "AED 1.9 MILLION" },
      { title: "COMPLETION", value: "2029" },
      { title: "PAYMENT PLAN", value: "PAY 1% MONTHLY" },
      { title: "UNITS", value: "615" },
      { title: "COMMERCIAL UNITS", value: "EXECUTIVE, PREMIUM, PRESTIGE" },
      { title: "LOCATION", value: "SHEIKH ZAYED ROAD, DUBAI" },
    ],

    why: {
      title: "SHEIKH ZAYED ROAD",
      items: [
        "5 MINS PALM JUMEIRAH",
        "8 MINS DUBAI MARINA",
        "8 MINS MALL OF EMIRATES",
        "20 MINS DUBAI INTERNATIONAL AIRPORT",
        "20 MINS DUBAI EXPO",
        "8 MINS BURJ AL ARAB",
      ],
    },

    launchSlides: [
      {
        img: dum1,
        title: "SHAHRUKHZ",
        subtitle: "The Beginning",
        description: "Experience the arrival of a new era...",
      },
      {
        img: dum2,
        title: "THE LOBBY",
        subtitle: "Grand Entrance",
        description: "A triple-height atrium...",
      },
      {
        img: dum3,
        title: "SKY LOUNGE",
        subtitle: "Elevated Living",
        description: "Connect and collaborate...",
      },
      {
        img: dum4,
        title: "WORKSPACE",
        subtitle: "Productivity Redefined",
        description: "Ergonomic designs...",
      },
      {
        img: dum5,
        title: "THE VIEW",
        subtitle: "Panoramic Horizons",
        description: "Uninterrupted vistas...",
      },
    ],

    amenities: [
      { src: dum1, title: "BREEZ LAGOON" },
      { src: dum2, title: "INFINITY POOL" },
      { src: dum3, title: "SKY LOUNGE" },
    ],

    gallery: [
      dum1, dum2, dum3
    ],

    map: {
      location: "ANWA BY OMNIYAT Dubai",
    },

    faqs: [
      {
        q: "When is the expected completion date?",
        a: "Scheduled for completion in 2029.",
      },
      {
        q: "Where is it located?",
        a: "Prime location in Dubai.",
      },
    ],
  },
  Bansalhospital: {
    slug: "Bansalhospital",
    status: "completed",
    heroVideo: "/videos/homevideo.webm",

    intro: {
      title: "Bansal Hospital",
      description: `At Bansal Hospital, we are pledged to provide best-in-class diagnosis and treatment facilities without compromising an inch on the safety of our patients. Bansal owns a wide range of technology from the most exclusive ones to the most basic ones. The Achieva 3.0T X-Series (a complete body scanner), Advance Elkta Infinity Radiotherapy (Best-in-class precision radiation therapy), Neuronavigation (An advanced surgical technology based on image guidance), Allura XPER FD20 Cath Lab (Performs a full spectrum of cardiac and vascular interventions), and PET-CT (Detects and stages most cancers accurately) are just a few names from the list.

We have a 300 bedded super specialty and provisions of 24*7 patient-focused care, all committed to provide unmatched healthcare services to our patients. Today, we stand as the leading and most trusted organ transplantation center in central India. The hospital is strategically located in the center of the city, making it accessible from all parts of Bhopal. Bansal Hospital has been successfully serving patients since 2014 and has emerged as the city’s most integrated healthcare service provider.`,
    },

    stats: [
      { title: "STARTING PRICE", value: "AED 1.9 MILLION" },
      { title: "COMPLETION", value: "2029" },
      { title: "PAYMENT PLAN", value: "PAY 1% MONTHLY" },
      { title: "UNITS", value: "615" },
      { title: "COMMERCIAL UNITS", value: "EXECUTIVE, PREMIUM, PRESTIGE" },
      { title: "LOCATION", value: "SHEIKH ZAYED ROAD, DUBAI" },
    ],

    why: {
      title: "SHEIKH ZAYED ROAD",
      items: [
        "5 MINS PALM JUMEIRAH",
        "8 MINS DUBAI MARINA",
        "8 MINS MALL OF EMIRATES",
        "20 MINS DUBAI INTERNATIONAL AIRPORT",
        "20 MINS DUBAI EXPO",
        "8 MINS BURJ AL ARAB",
      ],
    },

    launchSlides: [
      {
        img: dum1,
        title: "SHAHRUKHZ",
        subtitle: "The Beginning",
        description: "Experience the arrival of a new era...",
      },
      {
        img: dum2,
        title: "THE LOBBY",
        subtitle: "Grand Entrance",
        description: "A triple-height atrium...",
      },
      {
        img: dum3,
        title: "SKY LOUNGE",
        subtitle: "Elevated Living",
        description: "Connect and collaborate...",
      },
      {
        img: dum4,
        title: "WORKSPACE",
        subtitle: "Productivity Redefined",
        description: "Ergonomic designs...",
      },
      {
        img: dum5,
        title: "THE VIEW",
        subtitle: "Panoramic Horizons",
        description: "Uninterrupted vistas...",
      },
    ],

    amenities: [
      { src: dum1, title: "BREEZ LAGOON" },
      { src: dum2, title: "INFINITY POOL" },
      { src: dum3, title: "SKY LOUNGE" },
    ],

    gallery: [
      hospital1, hospital2, hospital3
    ],

    map: {
      location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.197293811038!2d77.4199205!3d23.199479500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43bc9994d78d%3A0x7a01333cf1304a82!2sBansal%20Hospital%20Bhopal!5e0!3m2!1sen!2sin!4v1770284457204!5m2!1sen!2sin",
    },

    faqs: [
      {
        q: "When is the expected completion date?",
        a: "Scheduled for completion in 2029.",
      },
      {
        q: "Where is it located?",
        a: "Prime location in Dubai.",
      },
    ],
  },
};
