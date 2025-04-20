import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | India Untamed - Your Gateway to Authentic Indian Experiences',
  description: 'Get in touch with India Untamed for personalized travel experiences across India. Contact our team for tour inquiries, customized packages, and travel assistance.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}