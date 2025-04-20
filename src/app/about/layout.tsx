import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | India Untamed - Your Gateway to Authentic Indian Experiences',
  description: 'Meet our expert guides and leadership team at India Untamed. Learn about our mission to provide sustainable, authentic travel experiences across India.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}