'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type SocialPost = {
  id: string;
  image: string;
  caption: string;
  likes: number;
  platform: 'instagram' | 'facebook';
  username: string;
  avatar: string;
  location: string;
  hashtags: string[];
};

const socialPosts: SocialPost[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1598001810017-6cd9e016c664',
    caption: 'Sunrise at the majestic Taj Mahal. A dream come true! 🕌 ✨',
    likes: 1234,
    platform: 'instagram',
    username: 'worldtraveler',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    location: 'Taj Mahal, Agra',
    hashtags: ['IndiaUntamed', 'TajMahal', 'IncredibleIndia', 'Heritage']
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
    caption: 'Tranquil morning in the Kerala backwaters. Pure bliss! 🌿 🛶',
    likes: 892,
    platform: 'instagram',
    username: 'naturelover',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'Alleppey Backwaters',
    hashtags: ['KeralaBackwaters', 'Serenity', 'IndiaUntamed', 'Travel']
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1585516482738-d081d0a8e16c',
    caption: 'Reaching new heights in the Himalayas! Unforgettable trek with @india_untamed 🏔️',
    likes: 1567,
    platform: 'instagram',
    username: 'adventureseeker',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    location: 'Ladakh, India',
    hashtags: ['Himalayas', 'Adventure', 'IndiaUntamed', 'Mountains']
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
    caption: 'Spiritual evening at the Ganges. The energy here is indescribable 🙏',
    likes: 2103,
    platform: 'instagram',
    username: 'souljourney',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    location: 'Varanasi, India',
    hashtags: ['Varanasi', 'Spiritual', 'GangaAarti', 'IndiaUntamed']
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1623841675698-8a9fad452288',
    caption: 'Finding peace in the ancient temples of Hampi 🕉️',
    likes: 945,
    platform: 'instagram',
    username: 'culturexplorer',
    avatar: 'https://randomuser.me/api/portraits/women/89.jpg',
    location: 'Hampi, Karnataka',
    hashtags: ['Hampi', 'Heritage', 'Architecture', 'IndiaUntamed']
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1579793160362-ccf01e44d54d',
    caption: 'Desert camping under the stars in Jaisalmer 🐪 ⭐',
    likes: 1876,
    platform: 'instagram',
    username: 'desertdreamer',
    avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
    location: 'Jaisalmer, Rajasthan',
    hashtags: ['Rajasthan', 'Desert', 'Camping', 'IndiaUntamed']
  }
];

const SocialCard = ({ post }: { post: SocialPost }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={post.image}
          alt={post.caption}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm line-clamp-2">{post.caption}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={post.avatar}
                alt={post.username}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="text-white text-sm">@{post.username}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">{post.likes}</span>
        </div>
        <span className="text-xs text-gray-500">{post.location}</span>
      </div>
    </motion.div>
  );
};

export default function SocialFeed() {
  const [activeTag, setActiveTag] = useState<string>('all');

  const tags = Array.from(
    new Set(socialPosts.flatMap(post => post.hashtags))
  ).sort();

  const filteredPosts = activeTag === 'all'
    ? socialPosts
    : socialPosts.filter(post => post.hashtags.includes(activeTag));

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
            Share Your <span className="text-[var(--primary-orange)]">Journey</span>
          </h2>
          <p className="text-gray-600">
            Join our community of travelers and share your Indian adventure stories. Tag your posts with #IndiaUntamed
          </p>
        </motion.div>

        {/* Tags Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 justify-center min-w-max px-4">
            <button
              onClick={() => setActiveTag('all')}
              className={`px-4 py-1 rounded-full text-sm transition-colors duration-200 ${
                activeTag === 'all'
                  ? 'bg-[var(--primary-orange)] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Posts
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1 rounded-full text-sm transition-colors duration-200 ${
                  activeTag === tag
                    ? 'bg-[var(--primary-orange)] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredPosts.map((post) => (
            <SocialCard key={post.id} post={post} />
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="https://instagram.com/india_untamed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow us on Instagram
          </Link>
        </motion.div>
      </div>
    </section>
  );
}