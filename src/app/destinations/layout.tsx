import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinations | India Untamed - Explore the Diversity of India',
  description: 'Discover India\'s diverse regions, from the majestic Himalayas to the serene backwaters of Kerala. Experience authentic cultural journeys curated by India Untamed.',
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}