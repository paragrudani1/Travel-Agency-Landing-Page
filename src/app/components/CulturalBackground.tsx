'use client';

const CulturalBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Mandala Pattern Top Right */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g fill="var(--primary-orange)">
            <path d="M100,10 L100,190 M10,100 L190,100" strokeWidth="1" stroke="currentColor"/>
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor"/>
            <path d="M100,20 C140,60 140,140 100,180 C60,140 60,60 100,20" fill="none" stroke="currentColor"/>
            <path d="M20,100 C60,140 140,140 180,100 C140,60 60,60 20,100" fill="none" stroke="currentColor"/>
          </g>
        </svg>
      </div>

      {/* Paisley Pattern Bottom Left */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-10 transform -rotate-45">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50,5 C70,5 85,20 85,40 C85,60 70,75 50,75 C30,75 15,60 15,40 C15,20 30,5 50,5 Z"
            fill="var(--primary-red)"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M50,15 C65,15 75,25 75,40 C75,55 65,65 50,65 C35,65 25,55 25,40 C25,25 35,15 50,15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Henna Pattern Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="var(--accent-gold)" strokeWidth="0.5">
            <circle cx="200" cy="200" r="150"/>
            <circle cx="200" cy="200" r="120"/>
            <circle cx="200" cy="200" r="90"/>
            <path d="M200,50 C300,150 300,250 200,350 C100,250 100,150 200,50"/>
            <path d="M50,200 C150,300 250,300 350,200 C250,100 150,100 50,200"/>
            <path d="M200,80 C280,160 280,240 200,320 C120,240 120,160 200,80"/>
            <path d="M80,200 C160,280 240,280 320,200 C240,120 160,120 80,200"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CulturalBackground;