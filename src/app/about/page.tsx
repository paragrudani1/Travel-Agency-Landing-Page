'use client';

import { motion } from 'framer-motion';
import TeamMember from '../components/TeamMember';

const teamData = {
  ceo: {
    name: "Priya Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
    bio: "With over 20 years of experience in sustainable tourism, Priya founded India Untamed with a vision to showcase India's rich cultural heritage while promoting responsible travel practices.",
    achievements: [
      "Named Tourism Entrepreneur of the Year 2023",
      "Led initiatives resulting in 30% reduction in carbon footprint",
      "Established partnerships with 100+ local communities",
      "Featured in National Geographic's 'Tourism Leaders of Tomorrow'",
    ],
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Twitter", url: "https://twitter.com" },
    ],
  },
  guides: [
    {
      name: "Rajesh Kumar",
      role: "Senior Tour Guide - North India",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
      bio: "A history enthusiast with deep knowledge of Mughal architecture and North Indian culture. Rajesh has been leading tours for over 12 years.",
      expertise: ["Mughal History", "Architecture", "Cultural Heritage", "Photography"],
    },
    {
      name: "Maya Nair",
      role: "Senior Tour Guide - South India",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1974",
      bio: "Specializing in Kerala's backwaters and Tamil temple architecture, Maya brings southern India's rich traditions to life.",
      expertise: ["Temple Architecture", "Local Cuisine", "Traditional Arts", "Ecology"],
    },
    {
      name: "Arun Verma",
      role: "Adventure Tour Specialist",
      image: "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?q=80&w=1974",
      bio: "An experienced mountaineer and nature enthusiast, Arun leads our adventure tours and wildlife expeditions.",
      expertise: ["Trekking", "Wildlife Photography", "Survival Skills", "Conservation"],
    },
  ],
};

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Mission Section */}
      <section 
        className="section-padding bg-white"
        aria-labelledby="story-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 id="story-heading" className="heading-primary mb-6">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              At India Untamed, we believe in crafting transformative travel experiences 
              that go beyond traditional tourism. Our mission is to showcase the authentic 
              heart of India while preserving its cultural heritage and supporting local communities.
            </p>
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              role="list"
              aria-label="Company principles"
            >
              <div role="listitem">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To provide immersive travel experiences that connect 
                visitors with India's rich cultural tapestry.</p>
              </div>
              <div role="listitem">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">To become the leading sustainable tourism provider 
                while preserving and promoting India's diverse heritage.</p>
              </div>
              <div role="listitem">
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Authenticity, sustainability, and cultural 
                respect guide every journey we create.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Section */}
      <section 
        className="section-padding bg-[var(--bg-cream)]"
        aria-labelledby="leadership-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 id="leadership-heading" className="heading-secondary text-center mb-12">
              Leadership
            </h2>
            <TeamMember {...teamData.ceo} />
          </motion.div>
        </div>
      </section>

      {/* Tour Guides Section */}
      <section 
        className="section-padding bg-white"
        aria-labelledby="guides-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="guides-heading" className="heading-secondary mb-4">
              Meet Our Expert Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of passionate and knowledgeable guides brings India's history, 
              culture, and landscapes to life through their expertise and personal insights.
            </p>
          </motion.div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Tour guides"
          >
            {teamData.guides.map((guide, index) => (
              <TeamMember key={guide.name} {...guide} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}