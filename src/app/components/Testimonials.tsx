'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Testimonial = {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
  date: string;
  images?: string[];
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'United States',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
    text: 'Our journey through Rajasthan was absolutely magical! The attention to detail in planning, the luxurious accommodations, and our knowledgeable guide made this trip unforgettable. The cultural experiences were authentic and immersive.',
    trip: 'Royal Rajasthan Heritage Tour',
    date: 'March 2024',
    images: [
      'https://images.unsplash.com/photo-1598001810017-6cd9e016c664',
      'https://images.unsplash.com/photo-1613067532651-7075a620c400'
    ]
  },
  {
    id: '2',
    name: 'David Chen',
    location: 'Singapore',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    text: 'The Kerala backwaters experience exceeded all expectations. The houseboat stay was serene, and the Ayurvedic treatments were rejuvenating. India Untamed really knows how to create a perfect balance of relaxation and adventure.',
    trip: 'Kerala Wellness Retreat',
    date: 'February 2024',
    images: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'
    ]
  },
  {
    id: '3',
    name: 'Emma Wilson',
    location: 'United Kingdom',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    text: 'Trekking in the Himalayas was a life-changing experience. The team ensured our safety while providing incredible insights into the local culture and traditions. The monastery visits and mountain views were breathtaking.',
    trip: 'Himalayan Adventure Trek',
    date: 'January 2024',
    images: [
      'https://images.unsplash.com/photo-1585516482738-d081d0a8e16c',
      'https://images.unsplash.com/photo-1626715185005-0666dd368762'
    ]
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      {/* Images Grid */}
      {testimonial.images && (
        <div className="grid grid-cols-2 gap-1">
          {testimonial.images.map((image, index) => (
            <div key={index} className="relative h-48">
              <Image
                src={image}
                alt={`Trip photo ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-600 mb-6">"{testimonial.text}"</p>

        {/* Trip Info */}
        <div className="text-sm text-gray-500 mb-4">
          <p className="font-medium text-[var(--primary-orange)]">{testimonial.trip}</p>
          <p>{testimonial.date}</p>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="heading-secondary mb-4">
            Traveler <span className="text-[var(--primary-orange)]">Stories</span>
          </h2>
          <p className="text-gray-600">
            Read about the experiences of our guests and their unforgettable journeys across India
          </p>
        </motion.div>

        {/* Testimonials Grid/Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between z-10 pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  opacity: Math.abs(index - activeIndex) <= 2 ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[var(--primary-orange)] w-6'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}