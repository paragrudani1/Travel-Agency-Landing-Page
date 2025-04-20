import Image from "next/image";
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import SearchInterface from "./components/SearchInterface";
import ExclusiveDeals from "./components/ExclusiveDeals";
import TravelPackages from "./components/TravelPackages";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import SocialFeed from "./components/SocialFeed";


export default function Home() {
  return (
    <>
      <Hero />
      <SearchInterface />
      <FeaturedDestinations />
      <ExclusiveDeals />
      <TravelPackages />
      <Testimonials />
      <BlogPreview />
      <SocialFeed />
    </>
  );
}
