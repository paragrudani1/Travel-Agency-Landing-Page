"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CulturalBackground from "../components/CulturalBackground";

type Region = {
  id: string;
  name: string;
  description: string;
  image: string;
  culturalHighlights: string[];
  experiences: Array<{
    title: string;
    description: string;
    duration: string;
  }>;
  keyAttractions: string[];
  localInsights: string;
  historicalContext: string;
  travelRecommendations: string;
};

const regions: Region[] = [
  {
    id: "north-india",
    name: "North India",
    description:
      "Experience the grandeur of Mughal architecture, spiritual ghats of Varanasi, and the majestic Himalayas.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071",
    culturalHighlights: [
      "Taj Mahal and Mughal Heritage",
      "Sacred City of Varanasi",
      "Golden Temple of Amritsar",
      "Rajasthani Folk Culture",
      "Himalayan Buddhism",
      "Traditional Kathak Dance",
    ],
    experiences: [
      {
        title: "Golden Triangle Tour",
        description: "Explore Delhi, Agra, and Jaipur's iconic landmarks",
        duration: "7 Days",
      },
      {
        title: "Spiritual Varanasi",
        description: "Witness the ancient rituals along the Ganges",
        duration: "3 Days",
      },
      {
        title: "Himalayan Adventure",
        description:
          "Trek through scenic mountain trails and visit Buddhist monasteries",
        duration: "10 Days",
      },
    ],
    keyAttractions: [
      "Taj Mahal",
      "Varanasi Ghats",
      "Golden Temple",
      "Jaipur City Palace",
    ],
    localInsights:
      "North India is known for its vibrant festivals, bustling markets, and rich culinary traditions. The region offers a blend of historical grandeur and spiritual depth.",
    historicalContext:
      "North India has been the seat of various empires, including the Mughals and the British. The region is dotted with historical monuments and ancient cities that tell the story of India's past.",
    travelRecommendations:
      "Best time to visit is from October to March. Be prepared for diverse weather conditions, from the cold in the Himalayas to the heat in Rajasthan.",
  },
  {
    id: "south-india",
    name: "South India",
    description:
      "Discover ancient temples, pristine backwaters, and rich cultural traditions.",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069",
    culturalHighlights: [
      "Kerala Backwaters",
      "Meenakshi Temple",
      "Mysore Palace",
      "Classical Dance Forms",
      "Spice Plantations",
      "Hoysala Architecture",
    ],
    experiences: [
      {
        title: "Kerala Experience",
        description: "Explore backwaters, tea plantations, and beaches",
        duration: "6 Days",
      },
      {
        title: "Temple Trail",
        description: "Journey through ancient architectural marvels",
        duration: "5 Days",
      },
      {
        title: "Wellness Retreat",
        description: "Experience traditional Ayurveda and yoga",
        duration: "8 Days",
      },
    ],
    keyAttractions: [
      "Backwaters of Kerala",
      "Meenakshi Temple",
      "Mysore Palace",
      "Hampi Ruins",
    ],
    localInsights:
      "South India is renowned for its classical music and dance forms, lush landscapes, and delicious cuisine. The region is a haven for nature lovers and spiritual seekers.",
    historicalContext:
      "South India has a rich history of powerful dynasties, including the Cholas, Cheras, and Vijayanagara Empire. The region's temples and monuments reflect its architectural brilliance.",
    travelRecommendations:
      "Best time to visit is from November to February. The monsoon season (June to September) brings heavy rains, especially in Kerala.",
  },
  {
    id: "east-india",
    name: "East India",
    description:
      "Explore the cultural mosaic of tea gardens, tribal heritage, and Buddhist monasteries.",
    image:
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=2014",
    culturalHighlights: [
      "Darjeeling Tea Gardens",
      "Sundarbans Mangroves",
      "Living Root Bridges",
      "Tribal Communities",
      "Buddhist Monasteries",
      "Bengali Literature",
    ],
    experiences: [
      {
        title: "Northeast Explorer",
        description: "Discover the untouched beauty of Seven Sisters",
        duration: "12 Days",
      },
      {
        title: "Bengal Heritage",
        description:
          "Experience the cultural richness of Kolkata and surroundings",
        duration: "5 Days",
      },
      {
        title: "Tea and Tigers",
        description: "Visit tea estates and explore wildlife sanctuaries",
        duration: "7 Days",
      },
    ],
    keyAttractions: [
      "Darjeeling",
      "Sundarbans",
      "Kaziranga National Park",
      "Konark Sun Temple",
    ],
    localInsights:
      "East India is a melting pot of cultures, with a unique blend of tribal traditions, colonial heritage, and natural beauty. The region is known for its warm hospitality and vibrant festivals.",
    historicalContext:
      "East India has a diverse history, from ancient kingdoms to colonial rule. The region's historical sites and cultural practices offer a glimpse into its rich past.",
    travelRecommendations:
      "Best time to visit is from October to March. The region experiences heavy rainfall during the monsoon season (June to September).",
  },
  {
    id: "west-india",
    name: "West India",
    description:
      "Immerse yourself in vibrant Gujarat and majestic Maharashtra.",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=2014",
    culturalHighlights: [
      "Rann of Kutch",
      "Ajanta Ellora Caves",
      "Goan Beaches",
      "Warli Art",
      "Gujarati Textiles",
      "Portuguese Heritage",
    ],
    experiences: [
      {
        title: "Gujarat Discovery",
        description: "Explore the White Desert and indigenous crafts",
        duration: "8 Days",
      },
      {
        title: "Maharashtra Heritage",
        description: "Visit ancient caves and historical forts",
        duration: "6 Days",
      },
      {
        title: "Goan Paradise",
        description:
          "Experience beaches, spice plantations, and Portuguese culture",
        duration: "5 Days",
      },
    ],
    keyAttractions: [
      "Rann of Kutch",
      "Ajanta and Ellora Caves",
      "Goa Beaches",
      "Mumbai City",
    ],
    localInsights:
      "West India is a land of contrasts, from the bustling metropolis of Mumbai to the serene beaches of Goa. The region is known for its diverse culture, vibrant festivals, and delicious cuisine.",
    historicalContext:
      "West India has a rich history, with influences from ancient civilizations, colonial powers, and modern developments. The region's historical sites and cultural practices reflect its diverse heritage.",
    travelRecommendations:
      "Best time to visit is from November to February. The region experiences hot summers and heavy monsoon rains from June to September.",
  },
];

export default function Destinations() {
  const [activeRegion, setActiveRegion] = useState<string>(regions[0].id);

  return (
    <div className="min-h-screen bg-[var(--bg-cream)] flex flex-col">
      <CulturalBackground />

      {/* Hero Section */}
      <section className="section-padding relative pt-24 pb-8 flex-grow">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            {/* Decorative motif above heading */}
            <div className="w-20 h-10 mx-auto mb-4">
              <svg viewBox="0 0 100 50" className="opacity-60">
                <path
                  d="M10,25 C25,5 75,5 90,25 C75,45 25,45 10,25 Z"
                  fill="none"
                  stroke="var(--accent-gold)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <h1 className="heading-primary mb-6">
              Explore India&apos;s <br />
              <span className="text-gradient">Diverse Landscapes</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the snow-capped Himalayas to the tropical shores of Kerala,
              discover the incredible diversity of India's regions
            </p>
          </motion.div>

          {/* Region Navigation */}
          <div className="grid grid-cols-2 md:flex md:justify-center gap-4 mb-12 px-4 md:px-0">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`px-4 md:px-6 py-2 rounded-full border-2 transition-all duration-300 text-sm md:text-base ${
                  activeRegion === region.id
                    ? "border-[var(--primary-orange)] bg-[var(--primary-orange)] text-white"
                    : "border-[var(--primary-orange)] text-[var(--primary-orange)] hover:bg-[var(--primary-orange)] hover:text-white"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Region Content */}
      {regions.map((region) => (
        <motion.section
          key={region.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeRegion === region.id ? 1 : 0,
            display: activeRegion === region.id ? "block" : "none",
          }}
          transition={{ duration: 0.5 }}
          className="section-padding pb-16 flex-grow"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image Section */}
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-[var(--accent-gold)] rounded-xl transform -rotate-1"></div>
                <Image
                  src={region.image}
                  alt={`Scenic view of ${region.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
                {/* Cultural Pattern Overlay */}
                <div className="absolute inset-0 rangoli-bg opacity-30"></div>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <h2 className="heading-secondary mb-4">{region.name}</h2>
                  <p className="text-lg text-gray-600">{region.description}</p>
                </div>

                {/* Cultural Highlights */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-playfair">
                    Cultural Highlights
                  </h3>
                  <ul className="grid grid-cols-2 gap-4">
                    {region.culturalHighlights.map((highlight, index) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--primary-orange)]"
                          viewBox="0 0 16 16"
                        >
                          <circle cx="8" cy="8" r="4" fill="currentColor" />
                        </svg>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Featured Experiences */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-playfair">
                    Featured Experiences
                  </h3>
                  <div className="space-y-4">
                    {region.experiences.map((experience, index) => (
                      <motion.div
                        key={experience.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-4 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-[var(--primary-orange)]"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-lg">
                              {experience.title}
                            </h4>
                            <p className="text-gray-600">
                              {experience.description}
                            </p>
                          </div>
                          <span className="text-[var(--accent-gold)] font-semibold">
                            {experience.duration}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Attractions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-playfair">
                    Key Attractions
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {region.keyAttractions.map((attraction) => (
                      <li key={attraction}>{attraction}</li>
                    ))}
                  </ul>
                </div>

                {/* Local Insights */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-playfair">
                    Local Insights
                  </h3>
                  <p className="text-gray-600">{region.localInsights}</p>
                </div>

                {/* Historical Context */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-playfair">
                    Historical Context
                  </h3>
                  <p className="text-gray-600">{region.historicalContext}</p>
                </div>

                {/* Travel Recommendations */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-playfair">
                    Travel Recommendations
                  </h3>
                  <p className="text-gray-600">
                    {region.travelRecommendations}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
