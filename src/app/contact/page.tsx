'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import CulturalBackground from '../components/CulturalBackground';

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    content: "+91 98765 43210",
    description: "Available daily from 9 AM to 8 PM IST for personalized travel advice",
    href: "tel:+919876543210"
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    content: "info@indiaunttamed.com",
    description: "We respond to all inquiries within 24 hours",
    href: "mailto:info@indiaunttamed.com"
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Visit Us",
    content: "123 Tourism Street, New Delhi, India",
    description: "Drop by for a cup of masala chai and travel inspiration",
    href: "https://maps.google.com"
  }
];

export default function Contact() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 bg-gradient-to-br from-[#FFF9F2] via-white to-[#FFF5E9]">
      <CulturalBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-[var(--primary-orange)]">
              <path 
                fill="currentColor" 
                d="M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 54C16.7 54 6 43.3 6 30S16.7 6 30 6s24 10.7 24 24-10.7 24-24 24z"
                opacity="0.2"
              />
              <path 
                fill="currentColor" 
                d="M30 12c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 30c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"
                opacity="0.4"
              />
            </svg>
          </div>
          <h1 className="heading-primary mb-4 bg-gradient-to-r from-[var(--primary-orange)] via-[var(--primary-red)] to-[var(--accent-gold)] text-transparent bg-clip-text">
            Namaste! Let's Plan Your Journey
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Every great adventure begins with a conversation. Whether you're dreaming of sacred temples, 
            bustling markets, or serene backwaters, our team is here to transform your Indian travel dreams into reality.
          </p>
          <p className="text-base text-gray-500">
            Share your vision with us, and let's craft an unforgettable journey through incredible India together.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              target={info.title === "Visit Us" ? "_blank" : undefined}
              rel={info.title === "Visit Us" ? "noopener noreferrer" : undefined}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              aria-label={`Contact us via ${info.title.toLowerCase()}`}
            >
              <div className="text-[var(--primary-orange)] mb-4">
                {info.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-red)] text-transparent bg-clip-text">
                {info.title}
              </h2>
              <p className="text-gray-600 mb-2">{info.content}</p>
              <p className="text-sm text-gray-500">{info.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-orange)] to-[var(--primary-red)] opacity-10 blur-2xl rounded-3xl transform -rotate-6" />
            <div className="relative">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}