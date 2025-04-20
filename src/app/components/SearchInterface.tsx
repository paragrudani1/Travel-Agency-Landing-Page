'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type SearchFilters = {
  destination?: string;
  duration?: string;
  budget?: string;
  travelStyle?: string;
  month?: string;
};

const destinations = [
  'North India',
  'South India',
  'East India',
  'West India',
  'Central India',
  'Himalayas',
  'Kerala Backwaters',
  'Rajasthan',
  'Goa'
];

const durations = [
  '3-5 days',
  '6-9 days',
  '10-15 days',
  '15+ days'
];

const budgets = [
  'Under $1000',
  '$1000-$2000',
  '$2000-$3000',
  '$3000+'
];

const travelStyles = [
  'Cultural',
  'Adventure',
  'Spiritual',
  'Wildlife',
  'Heritage',
  'Wellness',
  'Food & Culinary',
  'Beach'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default function SearchInterface() {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    // Convert filters to URL parameters and navigate to packages page
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    window.location.href = `/packages?${params.toString()}`;
  };

  return (
    <section className="relative -mt-24 z-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-xl p-6 md:p-8"
        >
          <div className="space-y-6">
            {/* Main Search */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <select
                  value={filters.destination || ''}
                  onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[var(--primary-orange)] focus:ring-2 focus:ring-[var(--primary-orange)]/20 outline-none"
                >
                  <option value="">Any Destination</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <select
                  value={filters.duration || ''}
                  onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[var(--primary-orange)] focus:ring-2 focus:ring-[var(--primary-orange)]/20 outline-none"
                >
                  <option value="">Any Duration</option>
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range
                </label>
                <select
                  value={filters.budget || ''}
                  onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[var(--primary-orange)] focus:ring-2 focus:ring-[var(--primary-orange)]/20 outline-none"
                >
                  <option value="">Any Budget</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Month
                </label>
                <select
                  value={filters.month || ''}
                  onChange={(e) => setFilters({ ...filters, month: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[var(--primary-orange)] focus:ring-2 focus:ring-[var(--primary-orange)]/20 outline-none"
                >
                  <option value="">Any Month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Advanced Search Options */}
            <motion.div
              initial={false}
              animate={{ height: showAdvanced ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Travel Style
                    </label>
                    <select
                      value={filters.travelStyle || ''}
                      onChange={(e) => setFilters({ ...filters, travelStyle: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[var(--primary-orange)] focus:ring-2 focus:ring-[var(--primary-orange)]/20 outline-none"
                    >
                      <option value="">Any Style</option>
                      {travelStyles.map((style) => (
                        <option key={style} value={style}>{style}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-[var(--primary-orange)] text-sm font-medium flex items-center gap-1"
              >
                {showAdvanced ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    Less Options
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    More Options
                  </>
                )}
              </button>

              <div className="flex gap-4">
                <button
                  onClick={() => setFilters({})}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Reset
                </button>
                <button
                  onClick={handleSearch}
                  className="px-8 py-2 bg-[var(--primary-orange)] text-white rounded-lg hover:bg-[var(--primary-orange)]/90 transition-colors duration-200"
                >
                  Search Packages
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}