/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.com', 'source.unsplash.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;