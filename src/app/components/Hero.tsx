"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HomeCulturalBackground from "./HomeCulturalBackground";

const Hero = () => {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2070"
          alt="Scenic view of an Indian palace with traditional architecture"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"
          aria-hidden="true"
        />
      </div>

      {/* Cultural background patterns */}
      <HomeCulturalBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div
          className="relative text-center text-white max-w-4xl mx-auto py-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative top border element */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg viewBox="0 0 120 20" className="w-full h-full">
              <path
                d="M0,10 C20,0 40,20 60,10 C80,0 100,20 120,10"
                stroke="var(--accent-gold)"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <motion.p
            className="text-[var(--accent-gold)] uppercase tracking-widest mb-4 mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Journey Through Incredible India
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Discover India&apos;s{" "}
            <span className="text-[var(--accent-gold)]">Magic</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Experience the colors, culture, and traditions of incredible India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="relative inline-block"
          >
            <Link
              href="/packages"
              className="btn-primary text-lg inline-block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary-orange)] px-8 py-3"
              role="button"
              aria-label="Browse our travel packages"
            >
              Explore Packages
            </Link>

            {/* Decorative dots around button */}
            <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-[var(--accent-gold)]" />
            <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[var(--accent-gold)]" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[var(--accent-gold)]" />
            <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-[var(--accent-gold)]" />
          </motion.div>

          {/* Decorative bottom border element */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg viewBox="0 0 120 20" className="w-full h-full">
              <path
                d="M0,10 C20,20 40,0 60,10 C80,20 100,0 120,10"
                stroke="var(--accent-gold)"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
