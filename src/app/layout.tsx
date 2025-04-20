import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Playfair_Display, Poppins } from 'next/font/google';

// Import fonts for Indian styling
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "India Untamed - Discover the Heart of India",
  description: "Experience the diverse culture, rich heritage, and breathtaking landscapes of India with our curated travel packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        <Header />
        <main className="pt-16">{children}</main>
        <footer className="bg-[var(--text-dark)] text-white py-8 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <svg width="40" height="20" viewBox="0 0 100 50" className="inline-block opacity-50">
                <path 
                  d="M10,25 C25,5 75,5 90,25 C75,45 25,45 10,25 Z"
                  fill="none"
                  stroke="var(--accent-gold)"
                  strokeWidth="1"
                />
                <circle cx="50" cy="25" r="5" fill="var(--accent-gold)" opacity="0.5" />
              </svg>
            </div>
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} India Untamed. All rights reserved.
              <br />
              <span className="font-playfair italic">Discover the soul of incredible India</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
