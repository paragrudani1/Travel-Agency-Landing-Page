'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Destinations', path: '/destinations' },
    { title: 'Packages', path: '/packages' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  // Handle keyboard navigation
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Add event listener for Escape key
  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            aria-label="India Untamed - Home"
          >
            <span className="text-2xl font-bold text-[var(--primary-orange)]">
              India Untamed
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-gray-700 hover:text-[var(--primary-orange)] transition-colors duration-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-offset-2"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-offset-2"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <RiCloseLine size={24} aria-hidden="true" /> : <RiMenu3Line size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile menu"
            aria-modal="true"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <nav role="navigation" aria-label="Mobile navigation">
              <ul className="px-4 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[var(--primary-orange)] hover:bg-gray-50 transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;