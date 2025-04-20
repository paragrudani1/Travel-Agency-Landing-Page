"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Decorative SVG patterns
const DecorativePattern = ({ className }: { className?: string }) => (
  <svg
    className={`absolute opacity-20 pointer-events-none ${className || ""}`}
    width="100"
    height="50"
    viewBox="0 0 100 50"
  >
    <path
      d="M0,25 C15,10 35,40 50,25 C65,10 85,40 100,25"
      stroke="var(--primary-orange)"
      fill="none"
      strokeWidth="2"
    />
    <path
      d="M0,15 C15,30 35,0 50,15 C65,30 85,0 100,15"
      stroke="var(--primary-red)"
      fill="none"
      strokeWidth="1.5"
    />
  </svg>
);

const destinations = [
  {
    id: 1,
    name: "Taj Mahal, Agra",
    description:
      "Symbol of eternal love, this marble masterpiece is a must-visit wonder.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071",
  },
  {
    id: 2,
    name: "Varanasi Ghats",
    description:
      "Experience spiritual enlightenment at the sacred banks of the Ganges.",
    image:
      "https://images.unsplash.com/photo-1646200207000-bbe62beba1e1?q=80&w=2070",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    description:
      "Cruise through serene waters surrounded by lush tropical beauty.",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069",
  },
];

const FeaturedDestinations = () => {
  return (
    <section
      className="section-padding bg-white relative"
      aria-labelledby="destinations-heading"
    >
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100">
          <path d="M0,0 L80,0 C60,0 0,60 0,80 Z" fill="var(--primary-orange)" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100">
          <path
            d="M100,100 L20,100 C40,100 100,40 100,20 Z"
            fill="var(--primary-orange)"
          />
        </svg>
      </div>

      <DecorativePattern className="top-10 right-10" />
      <DecorativePattern className="bottom-10 left-10" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          {/* Decorative motif above heading */}
          <div className="w-20 h-10 mx-auto mb-6">
            <svg viewBox="0 0 100 50">
              <path
                d="M50,0 L60,15 L80,17 L65,28 L70,45 L50,38 L30,45 L35,28 L20,17 L40,15 Z"
                fill="none"
                stroke="var(--accent-gold)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <h2
            id="destinations-heading"
            className="heading-secondary mb-4 relative inline-block"
          >
            <span className="relative z-10">Popular Destinations</span>
            {/* Decorative underline */}
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-red)]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore India's most iconic locations, each offering unique
            experiences and unforgettable memories
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Featured destinations"
        >
          {destinations.map((dest, index) => (
            <motion.article
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
              tabIndex={0}
              aria-labelledby={`destination-${dest.id}-name`}
            >
              <Link
                href={`/destinations/${dest.id}`}
                className="block focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-offset-2 rounded-lg"
                aria-label={`Learn more about ${dest.name}`}
              >
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  {/* Decorative border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--accent-gold)] transition-colors duration-300 rounded-lg z-10" />

                  <Image
                    src={dest.image}
                    alt={`Scenic view of ${dest.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Culturally-inspired overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Decorative corner elements */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3
                  id={`destination-${dest.id}-name`}
                  className="text-xl font-semibold mb-2 text-[var(--text-dark)] group-hover:text-[var(--primary-orange)] transition-colors duration-300"
                >
                  {dest.name}
                </h3>
                <p className="text-gray-600">{dest.description}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
