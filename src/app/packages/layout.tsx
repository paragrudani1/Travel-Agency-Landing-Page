import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Packages | India Untamed - Curated Travel Experiences',
  description: 'Discover our handpicked collection of authentic Indian travel experiences. From cultural expeditions to spiritual journeys, find your perfect adventure.',
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}