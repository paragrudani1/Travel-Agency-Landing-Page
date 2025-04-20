"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaHotel, FaUtensils, FaCar, FaMountain, FaDrum, FaMusic, FaLeaf } from "react-icons/fa";

// Traditional Indian ornamental divider
const OrnamentalDivider = () => (
  <div className="relative h-20 w-full my-6">
    <svg
      className="absolute left-1/2 -translate-x-1/2 opacity-70"
      width="300"
      height="20"
      viewBox="0 0 300 20"
    >
      <path
        d="M0,10 H120 M180,10 H300"
        stroke="#D1913C"
        strokeWidth="1"
      />
      <circle
        cx="150"
        cy="10"
        r="8"
        fill="none"
        stroke="#D1913C"
        strokeWidth="1"
      />
      <circle cx="150" cy="10" r="4" fill="#E6C281" />
      <path
        d="M125,10 C130,5 140,0 150,0 C160,0 170,5 175,10"
        fill="none"
        stroke="#D1913C"
        strokeWidth="1"
      />
      <path
        d="M125,10 C130,15 140,20 150,20 C160,20 170,15 175,10"
        fill="none"
        stroke="#D1913C"
        strokeWidth="1"
      />
    </svg>
  </div>
);

// Paisley pattern SVG for decorative elements
const PaisleyPattern = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,10 C60,30 80,20 50,50 C20,80 40,90 50,70 C60,90 80,80 50,50 C20,20 40,30 50,10Z" 
      fill="#D1913C" fillOpacity="0.2" stroke="#8B4513" strokeWidth="0.5" />
  </svg>
);

const packages = [
  {
    id: "royal-rajasthan",
    title: "Royal Rajasthan Explorer",
    description:
      "Experience the grandeur of royal palaces and the magic of the Thar Desert.",
    imageUrl: "https://images.unsplash.com/photo-1598001810017-6cd9e016c664",
    price: 75000,
    duration: "7 Days",
    rating: 5,
    highlights: [
      "Palace stays in Udaipur",
      "Desert safari in Jaisalmer",
      "City tour of Jaipur",
      "Traditional Rajasthani cuisine",
    ],
    discount: 10,
    destinations: ["Jaipur", "Udaipur", "Jaisalmer"],
    accommodation: "5-star heritage hotels",
    culturalExperience: "Traditional folk dance performance",
    localCraft: "Block printing workshop",
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters Bliss",
    description:
      "Serene backwaters, pristine beaches, and ayurvedic experiences.",
    imageUrl: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
    price: 45000,
    duration: "5 Days",
    rating: 4,
    highlights: [
      "Houseboat cruise",
      "Ayurvedic spa treatments",
      "Spice plantation tour",
      "Cultural performances",
    ],
    discount: 15,
    destinations: ["Kochi", "Alleppey", "Kumarakom"],
    accommodation: "Houseboats and beach resorts",
    culturalExperience: "Kathakali dance performance",
    localCraft: "Coir product making demonstration",
  },
  {
    id: "himalayan-adventure",
    title: "Himalayan Adventure",
    description:
      "Trek through breathtaking mountain landscapes and experience local culture.",
    imageUrl: "https://images.unsplash.com/photo-1585516482738-d081d0a8e16c",
    price: 65000,
    duration: "8 Days",
    rating: 5,
    highlights: [
      "Guided treks",
      "Monastery visits",
      "Mountain village stays",
      "Adventure activities",
    ],
    discount: 0,
    destinations: ["Manali", "Shimla", "Dharamshala"],
    accommodation: "Mountain lodges and homestays",
    culturalExperience: "Buddhist prayer ceremony",
    localCraft: "Traditional Kullu shawl weaving",
  },
  {
    id: "varanasi-spiritual",
    title: "Spiritual Journey of Varanasi",
    description:
      "Experience the spiritual heart of India through ancient rituals and ceremonies.",
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
    price: 38000,
    duration: "5 Days",
    rating: 5,
    highlights: [
      "Morning Ganges boat ride",
      "Evening Ganga Aarti",
      "Meditation sessions",
      "Ancient temple tours",
    ],
    discount: 8,
    destinations: ["Varanasi", "Sarnath"],
    accommodation: "Heritage riverfront haveli",
    culturalExperience: "Traditional music concert",
    localCraft: "Banarasi silk weaving demonstration",
  },
  {
    id: "golden-triangle",
    title: "Golden Triangle Cultural Tour",
    description:
      "Explore the iconic cities of Delhi, Agra and Jaipur with their rich historical heritage.",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
    price: 55000,
    duration: "6 Days",
    rating: 4,
    highlights: [
      "Taj Mahal sunrise visit",
      "Delhi heritage walk",
      "Amber Fort exploration",
      "Local bazaar experience",
    ],
    discount: 12,
    destinations: ["Delhi", "Agra", "Jaipur"],
    accommodation: "Luxury heritage properties",
    culturalExperience: "Classical music evening",
    localCraft: "Marble inlay workshop",
  },
  {
    id: "odisha-temple-trail",
    title: "Odisha Temple & Tribal Tour",
    description:
      "Discover the magnificent temples and vibrant tribal cultures of Eastern India.",
    imageUrl: "https://images.unsplash.com/photo-1623074477002-f4c57e24f043",
    price: 42000,
    duration: "7 Days",
    rating: 4,
    highlights: [
      "Konark Sun Temple",
      "Tribal village visits",
      "Chilika Lake boat trip",
      "Odissi dance performance",
    ],
    discount: 0,
    destinations: ["Bhubaneswar", "Puri", "Konark"],
    accommodation: "Beach resorts and heritage hotels",
    culturalExperience: "Tribal dance ceremony",
    localCraft: "Pattachitra painting workshop",
  },
];

// Cultural icon mapping based on the experience type
const CulturalIcon = ({ type }: { type: string }) => {
  if (type.includes("dance") || type.includes("performance"))
    return <FaDrum className="text-[#D1913C]" />;
  if (type.includes("music") || type.includes("concert"))
    return <FaMusic className="text-[#D1913C]" />;
  if (type.includes("meditation") || type.includes("yoga") || type.includes("prayer"))
    return <FaLeaf className="text-[#D1913C]" />;
  return <FaMountain className="text-[#D1913C]" />;
};

const PackageCard = ({ pkg }: { pkg: (typeof packages)[0] }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group border border-[#E6C281]/30"
    >
      {/* Decorative corner patterns */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-40 pointer-events-none">
        <div className="w-full h-full">
          <PaisleyPattern />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-40 pointer-events-none transform rotate-180">
        <div className="w-full h-full">
          <PaisleyPattern />
        </div>
      </div>

      <div className="relative h-64">
        <Image
          src={pkg.imageUrl}
          alt={`Scenic view of ${pkg.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          style={{ objectFit: "cover" }}
          className="transform transition-transform duration-500 group-hover:scale-105"
        />

        {/* Cultural pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-repeat" 
               style={{ backgroundImage: "url('/patterns/paisley-pattern.svg')" }} />
        </div>

        {pkg.discount > 0 && (
          <div className="absolute top-4 right-4 bg-[#D1913C] text-white px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm font-medium">SAVE {pkg.discount}%</span>
          </div>
        )}
        
        {/* Cultural region badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <span className="text-xs font-medium text-[#8B4513]">{pkg.destinations[0]}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Enhanced decorative divider */}
        <div className="flex items-center mb-4 opacity-70">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D1913C] to-transparent"></div>
          <div className="mx-2">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="3" fill="#E6C281" />
            </svg>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D1913C] to-transparent"></div>
        </div>

        <h3 className="text-2xl font-semibold mb-3 text-[#8B4513] group-hover:text-[#D1913C] transition-colors duration-300">
          {pkg.title}
        </h3>

        <div
          className="flex items-center gap-2 text-[#5F4B32] mb-4"
          aria-label="Package duration"
        >
          <FaClock
            className="text-[#D1913C]"
            aria-hidden="true"
          />
          <span>{pkg.duration}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.destinations.map((dest) => (
            <span
              key={dest}
              className="bg-[#FDF5E6] px-3 py-1 rounded-full text-sm border border-[#E6C281]/20 text-[#8B4513]"
              role="listitem"
            >
              {dest}
            </span>
          ))}
        </div>

        <dl className="space-y-3 mb-6 text-[#5F4B32]">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Accommodation</dt>
            <FaHotel
              className="text-[#D1913C]"
              aria-hidden="true"
            />
            <dd>{pkg.accommodation}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Cultural Experience</dt>
            <CulturalIcon type={pkg.culturalExperience} />
            <dd>{pkg.culturalExperience}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Local Craft</dt>
            <svg className="w-4 h-4 text-[#D1913C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <dd>{pkg.localCraft}</dd>
          </div>
        </dl>

        <div className="mt-6 border-t border-dashed border-[#E6C281]/40 pt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-sm text-[#5F4B32]">Starting from</span>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-[#D1913C]">
                  ₹{pkg.price.toLocaleString()}
                </span>
                {pkg.discount > 0 && (
                  <span className="text-sm text-[#5F4B32] line-through">
                    ₹{Math.round(pkg.price * (1 + pkg.discount / 100)).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
            <Link
              href={`/packages/${pkg.id}`}
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-[#D1913C] rounded-lg hover:bg-[#8B4513] group/btn"
            >
              <span className="relative text-white">View Details</span>
              <svg
                className="w-4 h-4 ml-1 text-white transform transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function TravelPackages() {
  return (
    <div className="container mx-auto px-4 mb-16">
      {/* Ornamental heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#8B4513] relative inline-block">
          <span className="relative z-10">Handcrafted Indian Journeys</span>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#E6C281]/30 -z-[1]"></div>
        </h2>
        <OrnamentalDivider />
        <p className="text-[#5F4B32] max-w-2xl mx-auto">
          Each package is thoughtfully designed to immerse you in India's rich cultural tapestry, 
          from artisan workshops to traditional performances and authentic culinary experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>
      
      {/* View all packages button */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-white border-2 border-[#D1913C] text-[#8B4513] rounded-lg hover:bg-[#FDF5E6] transition-colors duration-300 inline-flex items-center">
          View All Cultural Experiences
          <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
