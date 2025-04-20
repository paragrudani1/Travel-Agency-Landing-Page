"use client";

import { motion, useAnimate } from "framer-motion";

const HomeCulturalBackground = () => {
  const [scope, animate] = useAnimate();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large mandala pattern - right side */}
      <div className="absolute -right-32 top-1/4 w-96 h-96 opacity-10">
        <motion.svg
          ref={scope}
          layoutId="mandala"
          viewBox="0 0 200 200"
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          style={{ originX: "50%", originY: "50%" }}
        >
          {/* Outer rings */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />

          {/* Geometric patterns */}
          <path
            d="M10,100 H190"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />
          <path
            d="M100,10 V190"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />
          <path
            d="M29.3,29.3 L170.7,170.7"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />
          <path
            d="M29.3,170.7 L170.7,29.3"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />

          {/* Inner lotus pattern */}
          <g>
            {[...Array(16)].map((_, i) => {
              const angle = (i * Math.PI) / 8;
              const x1 = 100 + 40 * Math.cos(angle);
              const y1 = 100 + 40 * Math.sin(angle);
              const x2 = 100 + 60 * Math.cos(angle);
              const y2 = 100 + 60 * Math.sin(angle);
              return (
                <path
                  key={i}
                  d={`M${x1},${y1} Q${100 + 70 * Math.cos(angle + 0.2)},${
                    100 + 70 * Math.sin(angle + 0.2)
                  } ${x2},${y2}`}
                  fill="none"
                  stroke="var(--accent-gold)"
                  strokeWidth="0.5"
                />
              );
            })}
          </g>

          {/* Central pattern */}
          <circle
            cx="100"
            cy="100"
            r="20"
            fill="none"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="10"
            fill="none"
            stroke="var(--accent-gold)"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="5"
            fill="var(--accent-gold)"
            opacity="0.3"
          />
        </motion.svg>
      </div>

      {/* Vertical paisley pattern - left side */}
      <div className="absolute -left-16 top-1/3 w-64 h-96 opacity-10">
        <motion.svg
          layoutId="paisley"
          viewBox="0 0 100 200"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* Paisley motifs arranged vertically */}
          <g stroke="var(--primary-red)" fill="none" strokeWidth="0.5">
            <path d="M50,20 C70,20 80,35 70,50 C60,65 30,65 20,50 C10,35 20,20 40,20 Z" />
            <path d="M50,80 C70,80 80,95 70,110 C60,125 30,125 20,110 C10,95 20,80 40,80 Z" />
            <path d="M50,140 C70,140 80,155 70,170 C60,185 30,185 20,170 C10,155 20,140 40,140 Z" />
          </g>

          {/* Connecting ornamental vines */}
          <path
            d="M50,40 C55,45 55,55 50,60 C45,65 45,75 50,80"
            stroke="var(--primary-orange)"
            fill="none"
            strokeWidth="0.5"
            strokeDasharray="1,2"
          />
          <path
            d="M50,100 C55,105 55,115 50,120 C45,125 45,135 50,140"
            stroke="var(--primary-orange)"
            fill="none"
            strokeWidth="0.5"
            strokeDasharray="1,2"
          />
        </motion.svg>
      </div>

      {/* Horizontal border pattern - bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 opacity-15">
        <motion.svg
          layoutId="border"
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, delay: 0.8 }}
        >
          <pattern
            id="border-pattern"
            width="40"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,10 C5,5 10,0 20,0 S35,5 40,10 S50,20 60,10 S70,0 80,10"
              fill="none"
              stroke="var(--accent-gold)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="1000" height="10" fill="url(#border-pattern)" />
          <rect
            y="20"
            width="1000"
            height="1"
            fill="var(--primary-orange)"
            opacity="0.3"
          />
          <rect
            y="30"
            width="1000"
            height="1"
            fill="var(--primary-red)"
            opacity="0.2"
          />

          {/* Small decorative elements */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={50 * i}
              cy="15"
              r="2"
              fill="var(--accent-gold)"
              opacity="0.3"
            />
          ))}
        </motion.svg>
      </div>

      {/* Lotus flower pattern - top left */}
      <div className="absolute -top-20 -left-20 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200">
          <g transform="translate(100,100)">
            {/* Lotus petals */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI) / 4;
              return (
                <path
                  key={i}
                  d={`M0,0 C10,${-20} 30,${-40} 0,${-70} C${-30},${-40} ${-10},${-20} 0,0`}
                  fill="var(--primary-orange)"
                  opacity="0.2"
                  transform={`rotate(${(angle * 180) / Math.PI})`}
                />
              );
            })}
            <circle
              cx="0"
              cy="0"
              r="10"
              fill="var(--accent-gold)"
              opacity="0.3"
            />
          </g>
        </svg>
      </div>

      {/* Rangoli-inspired pattern overlay */}
      <div className="absolute inset-0 rangoli-bg opacity-30"></div>
    </div>
  );
};

export default HomeCulturalBackground;
