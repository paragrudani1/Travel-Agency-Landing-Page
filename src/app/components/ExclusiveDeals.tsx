'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

type Deal = {
  id: string;
  title: string;
  destination: string;
  description: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  validUntil: string;
  features: string[];
  highlights: {
    cuisine: string[];
    landmarks: string[];
    crafts: string[];
  };
};

const deals: Deal[] = [
  {
    id: 'rajasthan-luxury',
    title: 'Royal Rajasthan Luxury Package',
    destination: 'Rajasthan',
    description: 'Journey through the Land of Kings, where every palace tells a story. Experience royal hospitality, traditional folk performances, and the timeless beauty of desert culture.',
    image: 'https://images.unsplash.com/photo-1598001810017-6cd9e016c664',
    originalPrice: 3499,
    discountedPrice: 2799,
    discountPercentage: 20,
    validUntil: '2024-05-30',
    features: [
      '10 Days / 9 Nights',
      'Luxury Heritage Palace Hotels',
      'Traditional Rajasthani Thali Dinners',
      'Private Folk Dance Performances',
      'Desert Safari with Cultural Program',
      'Local Artisan Workshops',
      'Royal Train Journey'
    ],
    highlights: {
      cuisine: ['Dal Baati Churma', 'Laal Maas', 'Ker Sangri'],
      landmarks: ['Amber Fort', 'Mehrangarh Fort', 'Udaipur Palace'],
      crafts: ['Block Printing', 'Miniature Paintings', 'Bandhani']
    }
  },
  {
    id: 'kerala-wellness',
    title: 'Kerala Wellness Retreat',
    destination: 'Kerala',
    description: 'Immerse yourself in the healing traditions of God\'s Own Country. Experience authentic Ayurveda, tranquil backwaters, and the rich cultural heritage of Kerala.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
    originalPrice: 2499,
    discountedPrice: 1999,
    discountPercentage: 20,
    validUntil: '2024-06-15',
    features: [
      '7 Days / 6 Nights',
      'Traditional Kerala House Stay',
      'Personalized Ayurvedic Treatments',
      'Kathakali Dance Performance',
      'Spice Plantation Tours',
      'Temple Visits',
      'Cooking Classes'
    ],
    highlights: {
      cuisine: ['Malabar Biryani', 'Appam with Stew', 'Kerala Fish Curry'],
      landmarks: ['Backwaters', 'Tea Plantations', 'Athirapally Falls'],
      crafts: ['Kasavu Weaving', 'Bell Metal Craft', 'Coir Products']
    }
  },
  {
    id: 'himalayan-adventure',
    title: 'Himalayan Adventure Special',
    destination: 'Ladakh',
    description: 'Discover the spiritual and natural wonders of the Himalayas, where ancient Buddhist culture meets breathtaking landscapes.',
    image: 'https://images.unsplash.com/photo-1585516482738-d081d0a8e16c',
    originalPrice: 2999,
    discountedPrice: 2399,
    discountPercentage: 20,
    validUntil: '2024-07-01',
    features: [
      '8 Days / 7 Nights',
      'Monastery Stay Experience',
      'Traditional Prayer Ceremonies',
      'Mountain Trekking',
      'Local Family Homestay',
      'Photography Tours',
      'Meditation Sessions'
    ],
    highlights: {
      cuisine: ['Thukpa', 'Momos', 'Butter Tea'],
      landmarks: ['Pangong Lake', 'Hemis Monastery', 'Khardung La'],
      crafts: ['Thangka Painting', 'Prayer Flags', 'Pashmina']
    }
  }
];

const DealCard = ({ deal }: { deal: Deal }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(deal.validUntil) - +new Date();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      if (difference > 0) {
        setTimeLeft(`${days}d ${hours}h left`);
      } else {
        setTimeLeft('Expired');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, [deal.validUntil]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--primary-orange)]/10"
    >
      {/* Image and Discount Badge */}
      <div className="relative h-56">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {deal.discountPercentage}% OFF
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {timeLeft}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-[var(--primary-orange)] bg-[var(--primary-orange)]/10 px-3 py-1 rounded-full">
            {deal.destination}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{deal.description}</p>

        {/* Cultural Highlights */}
        <div className="mb-6 space-y-4">
          <div className="p-4 bg-[var(--bg-cream)] rounded-lg">
            <h4 className="text-sm font-semibold mb-2 text-[var(--primary-orange)]">Regional Delicacies</h4>
            <div className="flex flex-wrap gap-2">
              {deal.highlights.cuisine.map((item, index) => (
                <span key={index} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--bg-cream)] rounded-lg">
              <h4 className="text-sm font-semibold mb-2 text-[var(--primary-orange)]">Must-Visit</h4>
              <div className="flex flex-col gap-1">
                {deal.highlights.landmarks.map((landmark, index) => (
                  <span key={index} className="text-xs text-gray-600">• {landmark}</span>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-[var(--bg-cream)] rounded-lg">
              <h4 className="text-sm font-semibold mb-2 text-[var(--primary-orange)]">Local Arts</h4>
              <div className="flex flex-col gap-1">
                {deal.highlights.crafts.map((craft, index) => (
                  <span key={index} className="text-xs text-gray-600">• {craft}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-[var(--primary-orange)]">
            ${deal.discountedPrice}
          </span>
          <span className="text-gray-500 line-through">
            ${deal.originalPrice}
          </span>
          <span className="text-green-600 text-sm">
            Save ${deal.originalPrice - deal.discountedPrice}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {deal.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-[var(--primary-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button 
          onClick={() => window.location.href = `/packages/${deal.id}`}
          className="w-full py-3 bg-[var(--primary-orange)] text-white rounded-lg hover:bg-[var(--primary-orange)]/90 transition-colors duration-200 relative overflow-hidden group"
        >
          <span className="relative z-10">Book Now</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
        </button>
      </div>
    </motion.div>
  );
};

export default function ExclusiveDeals() {
  return (
    <section className="section-padding bg-[var(--bg-cream)] relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-medium">
              Limited Time Offers
            </span>
          </div>
          <h2 className="heading-secondary mb-4">
            Exclusive <span className="text-[var(--primary-orange)]">Cultural Journeys</span>
          </h2>
          <p className="text-gray-600">
            Immerse yourself in India's rich heritage with our carefully curated experiences, 
            combining luxury, tradition, and authentic cultural encounters.
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}