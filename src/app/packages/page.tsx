import TravelPackages from "../components/TravelPackages";

type Package = {
  id: string;
  title: string;
  description: string;
  destination: string;
  region: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  inclusions: string[];
  dates: Array<{
    startDate: string;
    endDate: string;
    availability: "available" | "limited" | "sold-out";
  }>;
  difficulty: "easy" | "moderate" | "challenging";
  groupSize: {
    min: number;
    max: number;
  };
};

const packages: Package[] = [
  {
    id: "royal-rajasthan",
    title: "Royal Rajasthan Heritage Tour",
    description:
      "Experience the grandeur of Rajasthan's royal heritage, from majestic palaces to sprawling desert landscapes.",
    destination: "Rajasthan",
    region: "North India",
    duration: "10 Days",
    price: 2499,
    image: "https://images.unsplash.com/photo-1598001810017-6cd9e016c664",
    highlights: [
      "Explore the Pink City of Jaipur",
      "Desert Safari in Jaisalmer",
      "Lake Palace of Udaipur",
      "Traditional Folk Performances",
    ],
    inclusions: [
      "Luxury Heritage Hotel Stays",
      "Private Transportation",
      "Expert Local Guides",
      "Traditional Rajasthani Meals",
    ],
    dates: [
      {
        startDate: "2024-10-15",
        endDate: "2024-10-25",
        availability: "available",
      },
      {
        startDate: "2024-11-12",
        endDate: "2024-11-22",
        availability: "limited",
      },
    ],
    difficulty: "easy",
    groupSize: {
      min: 4,
      max: 12,
    },
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters & Wellness",
    description:
      "Immerse yourself in the serene backwaters of Kerala while experiencing authentic Ayurvedic wellness treatments.",
    destination: "Kerala",
    region: "South India",
    duration: "8 Days",
    price: 1899,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
    highlights: [
      "Houseboat Cruise in Alleppey",
      "Ayurvedic Spa Treatments",
      "Tea Plantation Visit",
      "Traditional Dance Performance",
    ],
    inclusions: [
      "Luxury Houseboat Stay",
      "Daily Yoga Sessions",
      "Ayurvedic Consultations",
      "Organic Kerala Cuisine",
    ],
    dates: [
      {
        startDate: "2024-09-05",
        endDate: "2024-09-13",
        availability: "available",
      },
      {
        startDate: "2024-10-10",
        endDate: "2024-10-18",
        availability: "available",
      },
    ],
    difficulty: "easy",
    groupSize: {
      min: 2,
      max: 8,
    },
  },
  {
    id: "himalayan-expedition",
    title: "Himalayan Mountain Expedition",
    description:
      "Trek through the majestic Himalayas, visit ancient monasteries, and experience the unique culture of the mountains.",
    destination: "Ladakh",
    region: "North India",
    duration: "12 Days",
    price: 2899,
    image: "https://images.unsplash.com/photo-1585516482738-d081d0a8e16c",
    highlights: [
      "Pangong Lake Visit",
      "Buddhist Monastery Tours",
      "High-Altitude Trekking",
      "Local Home Stays",
    ],
    inclusions: [
      "Camping Equipment",
      "High-Altitude Guide",
      "Oxygen Support",
      "Local Transportation",
    ],
    dates: [
      {
        startDate: "2024-06-20",
        endDate: "2024-07-02",
        availability: "limited",
      },
      {
        startDate: "2024-07-15",
        endDate: "2024-07-27",
        availability: "available",
      },
    ],
    difficulty: "challenging",
    groupSize: {
      min: 4,
      max: 10,
    },
  },
  {
    id: "cultural-odisha",
    title: "Cultural Odyssey of Odisha",
    description:
      "Discover the rich cultural heritage of Odisha through its ancient temples, traditional dance forms, and pristine beaches.",
    destination: "Odisha",
    region: "East India",
    duration: "7 Days",
    price: 1599,
    image: "https://images.unsplash.com/photo-1623074477002-f4c57e24f043",
    highlights: [
      "Konark Sun Temple Tour",
      "Puri Jagannath Temple Visit",
      "Odissi Dance Performance",
      "Chilika Lake Exploration",
    ],
    inclusions: [
      "Heritage Hotel Accommodations",
      "Cultural Guide",
      "Traditional Dance Workshop",
      "Local Cuisine Experience",
    ],
    dates: [
      {
        startDate: "2024-08-15",
        endDate: "2024-08-22",
        availability: "available",
      },
      {
        startDate: "2024-09-20",
        endDate: "2024-09-27",
        availability: "limited",
      },
    ],
    difficulty: "easy",
    groupSize: {
      min: 2,
      max: 10,
    },
  },
  {
    id: "gujarat-heritage",
    title: "Gujarat Cultural Safari",
    description:
      "Experience the vibrant culture of Gujarat through its unique architecture, crafts, and the stunning Rann of Kutch.",
    destination: "Gujarat",
    region: "West India",
    duration: "9 Days",
    price: 1899,
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
    highlights: [
      "Rann of Kutch Night Stay",
      "Traditional Craft Villages",
      "Gir National Park Safari",
      "Ancient Stepwells",
    ],
    inclusions: [
      "Desert Luxury Camping",
      "Craft Workshop Sessions",
      "Wildlife Safari",
      "Traditional Gujarati Thali",
    ],
    dates: [
      {
        startDate: "2024-11-10",
        endDate: "2024-11-19",
        availability: "available",
      },
      {
        startDate: "2024-12-15",
        endDate: "2024-12-24",
        availability: "available",
      },
    ],
    difficulty: "moderate",
    groupSize: {
      min: 4,
      max: 12,
    },
  },
  {
    id: "karnataka-heritage",
    title: "Karnataka Heritage Trail",
    description:
      "Journey through the royal heritage of Karnataka, from the magnificent ruins of Hampi to the royal palace of Mysore.",
    destination: "Karnataka",
    region: "South India",
    duration: "8 Days",
    price: 1799,
    image: "https://images.unsplash.com/photo-1600100388713-f058f6be5263",
    highlights: [
      "Hampi UNESCO Site Tour",
      "Mysore Palace Visit",
      "Coorg Coffee Plantations",
      "Bangalore Tech Hub",
    ],
    inclusions: [
      "Heritage Hotel Stays",
      "Expert Archaeological Guide",
      "Coffee Estate Tour",
      "Royal Palace Experiences",
    ],
    dates: [
      {
        startDate: "2024-07-10",
        endDate: "2024-07-18",
        availability: "available",
      },
      {
        startDate: "2024-08-15",
        endDate: "2024-08-23",
        availability: "limited",
      },
    ],
    difficulty: "moderate",
    groupSize: {
      min: 2,
      max: 12,
    },
  },
  {
    id: "northeast-tribal",
    title: "Northeast Tribal Explorer",
    description:
      "Immerse yourself in the unique tribal cultures of Northeast India, exploring pristine landscapes and ancient traditions.",
    destination: "Nagaland & Meghalaya",
    region: "East India",
    duration: "11 Days",
    price: 2299,
    image: "https://images.unsplash.com/photo-1623511796857-853a7e989ed3",
    highlights: [
      "Hornbill Festival Visit",
      "Living Root Bridges",
      "Tribal Village Homestays",
      "Khasi Culture Experience",
    ],
    inclusions: [
      "Traditional Homestays",
      "Tribal Guide",
      "Cultural Performances",
      "Local Feast Experiences",
    ],
    dates: [
      {
        startDate: "2024-11-25",
        endDate: "2024-12-06",
        availability: "limited",
      },
      {
        startDate: "2024-12-20",
        endDate: "2024-12-31",
        availability: "available",
      },
    ],
    difficulty: "challenging",
    groupSize: {
      min: 4,
      max: 8,
    },
  },
  {
    id: "maharashtra-coast",
    title: "Maharashtra Coastal Adventure",
    description:
      "Explore the stunning Konkan coast of Maharashtra, combining beach life with historical forts and local culture.",
    destination: "Maharashtra",
    region: "West India",
    duration: "6 Days",
    price: 1499,
    image: "https://images.unsplash.com/photo-1623841675698-8a9fad452288",
    highlights: [
      "Coastal Fort Treks",
      "Beach Camping",
      "Seafood Experiences",
      "Traditional Village Visits",
    ],
    inclusions: [
      "Beach Resort Stays",
      "Fort Guide",
      "Cooking Workshops",
      "Water Activities",
    ],
    dates: [
      {
        startDate: "2024-10-05",
        endDate: "2024-10-11",
        availability: "available",
      },
      {
        startDate: "2024-11-15",
        endDate: "2024-11-21",
        availability: "available",
      },
    ],
    difficulty: "moderate",
    groupSize: {
      min: 2,
      max: 10,
    },
  },
  {
    id: "varanasi-spiritual",
    title: "Spiritual Journey of Varanasi",
    description:
      "Experience the spiritual heart of India through ancient rituals, meditation sessions, and cultural immersion in the holy city of Varanasi.",
    destination: "Varanasi",
    region: "North India",
    duration: "5 Days",
    price: 1299,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
    highlights: [
      "Morning Ganges Boat Ride",
      "Evening Ganga Aarti Ceremony",
      "Meditation Sessions",
      "Ancient Temple Tours",
    ],
    inclusions: [
      "Heritage Haveli Stay",
      "Spiritual Guide",
      "Yoga Classes",
      "Traditional Ceremonies",
    ],
    dates: [
      {
        startDate: "2024-09-15",
        endDate: "2024-09-20",
        availability: "available",
      },
      {
        startDate: "2024-10-20",
        endDate: "2024-10-25",
        availability: "limited",
      },
    ],
    difficulty: "easy",
    groupSize: {
      min: 2,
      max: 8,
    },
  },
  {
    id: "bengal-artisan",
    title: "Bengal Art & Craft Trail",
    description:
      "Discover the rich artistic heritage of Bengal through its traditional crafts, music, and cultural festivals.",
    destination: "West Bengal",
    region: "East India",
    duration: "7 Days",
    price: 1699,
    image: "https://images.unsplash.com/photo-1623073284788-0d846f75e329",
    highlights: [
      "Terracotta Temple Visit",
      "Traditional Craft Workshops",
      "Baul Music Experience",
      "Durga Puja Festival Tour",
    ],
    inclusions: [
      "Boutique Hotel Stay",
      "Art Expert Guide",
      "Craft Making Sessions",
      "Cultural Performances",
    ],
    dates: [
      {
        startDate: "2024-10-01",
        endDate: "2024-10-08",
        availability: "limited",
      },
      {
        startDate: "2024-11-05",
        endDate: "2024-11-12",
        availability: "available",
      },
    ],
    difficulty: "easy",
    groupSize: {
      min: 4,
      max: 10,
    },
  },
];

type Filters = {
  region: string;
  priceRange: string;
  duration: string;
  difficulty: string;
};

const initialFilters: Filters = {
  region: "all",
  priceRange: "all",
  duration: "all",
  difficulty: "all",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section with cultural motifs */}
      <div className="relative py-24 overflow-hidden bg-[#FBF3E4]">
        {/* Decorative Patterns - Rangoli & Paisley Background */}
        <div className="absolute inset-0 opacity-8">
          <div
            className="absolute inset-0 bg-repeat opacity-10"
            style={{ backgroundImage: "url('/patterns/paisley-pattern.svg')" }}
          />
        </div>
        
        {/* Border Patterns - Top */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-repeat-x" 
          style={{ backgroundImage: "url('/patterns/indian-border.svg')" }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-[#8B4513] font-serif">
            Sacred Journeys Through India
          </h1>
          <p className="text-lg text-[#5F4B32] text-center max-w-3xl mx-auto">
            Discover the soul of India through our handcrafted travel experiences. 
            From ancient temples to bustling bazaars, immerse yourself in the vibrant 
            culture and timeless traditions of the subcontinent.
          </p>

          {/* Traditional Indian decorative divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D1913C]" />
            <div className="mx-4">
              <svg
                className="w-10 h-10 text-[#D1913C]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
              </svg>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D1913C]" />
          </div>
        </div>
      </div>

      {/* Cultural Heritage Feature Banner */}
      <div className="container mx-auto px-4 mt-10 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-[#E6C281]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FDF5E6] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B4513]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B4513] mb-2">Authentic Experiences</h3>
              <p className="text-[#5F4B32]">Immerse yourself in age-old traditions and ceremonies guided by local experts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FDF5E6] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B4513]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B4513] mb-2">Heritage Accommodations</h3>
              <p className="text-[#5F4B32]">Stay in carefully selected heritage havelis, palaces and boutique properties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FDF5E6] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B4513]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v10M12 21v-2" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M22 12h-4M6 12H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B4513] mb-2">Curated Artisan Visits</h3>
              <p className="text-[#5F4B32]">Connect with master artisans and witness traditional crafts in their authentic settings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter section with Indian design elements */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-[#FDF5E6]/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-[#E6C281]">
          <h2 className="text-[#8B4513] text-2xl font-bold mb-6 text-center">Find Your Perfect Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#8B4513]">
                Duration
              </label>
              <select className="w-full rounded-lg border-[#E6C281] focus:border-[#D1913C] focus:ring-[#D1913C] bg-white/70">
                <option>Any duration</option>
                <option>1-3 days</option>
                <option>4-7 days</option>
                <option>8+ days</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#8B4513]">
                Budget Range
              </label>
              <select className="w-full rounded-lg border-[#E6C281] focus:border-[#D1913C] focus:ring-[#D1913C] bg-white/70">
                <option>Any budget</option>
                <option>Economy</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#8B4513]">
                Region
              </label>
              <select className="w-full rounded-lg border-[#E6C281] focus:border-[#D1913C] focus:ring-[#D1913C] bg-white/70">
                <option>All regions</option>
                <option>North India</option>
                <option>South India</option>
                <option>East India</option>
                <option>West India</option>
                <option>Northeast India</option>
                <option>Central India</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#8B4513]">
                Cultural Interest
              </label>
              <select className="w-full rounded-lg border-[#E6C281] focus:border-[#D1913C] focus:ring-[#D1913C] bg-white/70">
                <option>All experiences</option>
                <option>Festivals & Celebrations</option>
                <option>Arts & Crafts</option>
                <option>Culinary Tours</option>
                <option>Spiritual Journeys</option>
                <option>Historical Explorations</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Quote Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="relative py-10 px-8 bg-[#FBF3E4] rounded-xl text-center">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D1913C] opacity-60"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#D1913C] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#D1913C] opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#D1913C] opacity-60"></div>
          
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl italic text-[#5F4B32] mb-4">
              "India is not a country, but a home to countless cultures, traditions and stories waiting to be discovered."
            </p>
            <cite className="text-[#8B4513] font-semibold">— Ancient Indian Proverb</cite>
          </blockquote>
        </div>
      </div>

      {/* Packages grid with enhanced TravelPackages component */}
      <TravelPackages />

      {/* Cultural Festivals Callout */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-[#D1913C]/20 to-[#FFD194]/20 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 p-8">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#8B4513]">Experience India's Vibrant Festivals</h3>
                <p className="mb-6 text-[#5F4B32]">
                  Our special festival packages allow you to witness and participate
                  in India's most colorful and spiritual celebrations.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-[#D1913C] to-[#FFD194] text-white rounded-lg hover:opacity-90 transition-opacity inline-flex items-center">
                  View Festival Packages
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-span-2 relative h-80 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D1913C]/80 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1599030257544-e54c3db2a38c" 
                alt="Holi Festival Celebration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 text-white max-w-md">
                <span className="text-sm bg-[#D1913C] px-3 py-1 rounded-full">Limited Seats</span>
                <h4 className="text-xl font-bold mt-2">Holi Festival Special Package</h4>
                <p className="opacity-90">March 2025 • Mathura & Vrindavan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artisan Crafts Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#8B4513]">Discover India's Living Traditions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D1913C] to-[#FFD194] mx-auto my-4"></div>
          <p className="text-[#5F4B32] max-w-2xl mx-auto">
            Our packages include visits to artisan workshops where you can witness 
            and learn traditional crafts that have been passed down for generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              craft: "Block Printing",
              region: "Rajasthan",
              image: "https://images.unsplash.com/photo-1595493882081-a3c361b2e8c1"
            },
            {
              craft: "Pashmina Weaving",
              region: "Kashmir",
              image: "https://images.unsplash.com/photo-1573767291321-c0af2eaf5266"
            },
            {
              craft: "Bronze Casting",
              region: "Tamil Nadu",
              image: "https://images.unsplash.com/photo-1513694203232-719a280e022f"
            },
            {
              craft: "Madhubani Painting",
              region: "Bihar",
              image: "https://images.unsplash.com/photo-1581337299863-a9637fd44d31"
            },
          ].map((item, idx) => (
            <div key={idx} className="group relative rounded-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img 
                  src={item.image} 
                  alt={item.craft} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">{item.craft}</h3>
                <p className="text-white/80 text-sm">{item.region}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Culinary Experience Section */}
      <div className="container mx-auto px-4 py-16 bg-[#FBF3E4] rounded-xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#D1913C]/20 text-[#8B4513] font-medium text-sm mb-4">AUTHENTIC FLAVORS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-6">
              Culinary Journeys Through India's Regional Cuisines
            </h2>
            <p className="text-[#5F4B32] mb-6">
              Our packages include specially curated culinary experiences, from street 
              food tours to cooking classes with local chefs. Discover the rich tapestry 
              of flavors that make Indian cuisine world-renowned.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {["Street Food Tours", "Cooking Classes", "Spice Garden Visits", "Royal Cuisine"].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <svg className="w-5 h-5 text-[#D1913C] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#5F4B32]">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-[#D1913C] to-[#FFD194] text-white rounded-lg hover:opacity-90 transition-opacity">
              Explore Culinary Packages
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0" 
              alt="Indian spices" 
              className="rounded-lg h-40 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1517244683847-7456b63c5969" 
              alt="Indian street food" 
              className="rounded-lg h-40 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b" 
              alt="Traditional thali meal" 
              className="rounded-lg h-40 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db" 
              alt="Cooking class" 
              className="rounded-lg h-40 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Newsletter section with Indian design elements */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#D1913C]/10 to-[#FFD194]/10 rounded-2xl p-8 md:p-12 border border-[#E6C281]/30 relative overflow-hidden">
          {/* Decorative corner mandala patterns */}
          <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
            <div className="w-full h-full bg-no-repeat bg-contain" 
              style={{ backgroundImage: "url('/patterns/mandala-corner.svg')" }}></div>
          </div>
          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10 transform rotate-180">
            <div className="w-full h-full bg-no-repeat bg-contain" 
              style={{ backgroundImage: "url('/patterns/mandala-corner.svg')" }}></div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-[#8B4513]">
              Stay Updated with Special Cultural Journeys
            </h3>
            <p className="text-[#5F4B32] mb-6">
              Subscribe to our newsletter for exclusive travel deals, festival dates, 
              and insights into India's cultural traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 max-w-md px-4 py-3 rounded-lg border border-[#E6C281] focus:border-[#D1913C] focus:ring-[#D1913C] bg-white/80"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#D1913C] to-[#FFD194] text-white rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative footer border */}
      <div className="relative h-8 w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x transform rotate-180" 
          style={{ backgroundImage: "url('/patterns/indian-border.svg')" }}>
        </div>
      </div>
    </main>
  );
}
