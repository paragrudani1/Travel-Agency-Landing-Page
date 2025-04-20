'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Hidden Temples of Khajuraho: A Journey Through Time',
    excerpt: 'Discover the architectural marvels and intricate sculptures of these UNESCO World Heritage temples, representing a unique blend of art and spirituality.',
    image: 'https://images.unsplash.com/photo-1624461016650-4c6e2c8ab48f',
    category: 'Cultural Heritage',
    author: {
      name: 'Priya Sharma',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg'
    },
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'A Culinary Journey Through the Streets of Old Delhi',
    excerpt: 'Embark on a gastronomic adventure through the narrow lanes of Chandni Chowk, where centuries-old recipes tell stories of Delhi\'s rich history.',
    image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6',
    category: 'Food & Culture',
    author: {
      name: 'Rajesh Kumar',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    date: 'March 12, 2024',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: 'Spiritual Awakening: Dawn at the Ganges',
    excerpt: 'Experience the mystical morning rituals along the ghats of Varanasi, where ancient traditions continue to thrive in modern times.',
    image: 'https://images.unsplash.com/photo-1627894006066-eb9b56d4dd56',
    category: 'Spirituality',
    author: {
      name: 'Maya Patel',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    date: 'March 10, 2024',
    readTime: '4 min read'
  }
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-[var(--bg-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="heading-secondary mb-4">
            Travel <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-gray-600">
            Immerse yourself in tales of adventure, culture, and discovery from across India
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <Link href={`/blog/${post.id}`} className="block relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[var(--primary-orange)]">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-[var(--primary-orange)] transition-colors duration-200">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author and Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{post.author.name}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-orange)] text-white rounded-lg hover:bg-[var(--primary-orange)]/90 transition-colors duration-300"
          >
            View All Stories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}