'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'ChatGPT',
    src: '/company/chatgpt.png',
    invert: true,
  },
  {
    name: 'Perplexity',
    src: '/company/perplexity.png',
  },
  {
    name: 'Claude',
    src: '/company/claude.png',
  },
  {
    name: 'Make',
    isSvg: true,
    color: '#EE2FEE',
    icon: (
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="make_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B02DE9" />
            <stop offset="100%" stopColor="#EE2FEE" />
          </linearGradient>
        </defs>
        <rect x="22" y="35" width="14" height="45" rx="7" transform="rotate(-15 22 35)" fill="currentColor" />
        <rect x="43" y="25" width="14" height="45" rx="7" transform="rotate(-15 43 25)" fill="currentColor" />
        <rect x="64" y="15" width="14" height="45" rx="7" transform="rotate(-15 64 15)" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'ElevenLabs',
    isSvg: true,
    color: '#ffffff',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 4h3v16H7V4zm7 0h3v16h-3V4z" />
      </svg>
    ),
  },
  {
    name: 'TATA',
    isSvg: true,
    color: '#005a9c',
    icon: (
      <svg width="24" height="24" viewBox="0 0 451 414" fill="currentColor">
        <path d="M225.7 45.4c-58.4 0-105.7 36.8-105.7 82.2 0 24.8 14.1 47 36.6 62.1l-11.4 44.4c-1.1 4.3 2.1 8.5 6.5 8.5h14.1c3.1 0 5.8-2 6.7-5l11.4-44.4c13.1 4.1 27.3 6.4 41.8 6.4s28.7-2.3 41.8-6.4l11.4 44.4c0.9 3 3.6 5 6.7 5h14.1c4.4 0 7.6-4.2 6.5-8.5l-11.4-44.4c22.5-15.1 36.6-37.3 36.6-62.1 0-45.4-47.3-82.2-105.7-82.2zm0 134.4c-41.4 0-75-23.4-75-52.2s33.6-52.2 75-52.2 75 23.4 75 52.2-33.6 52.2-75 52.2z"/>
      </svg>
    ),
  },
  {
    name: 'ClickUp',
    isSvg: true,
    color: '#7b68ee',
    icon: (
      <svg width="24" height="24" viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M298.67 649.36 377.42 589c41.82 54.6 86.23 79.76 135.72 79.76 49.21 0 92.41-24.87 132.35-79l79.84 58.88C667.74 726.74 596.08 768 513.14 768c-82.66 0-154.98-41-214.47-118.64zm214.22-262.17L372.72 508 308 432.82 513.17 256l203.61 177-65.08 74.83z" />
      </svg>
    ),
  },
  {
    name: 'Jasper',
    src: '/company/jasper.png',
  },
  {
    name: 'n8n',
    src: '/company/n8n.png',
  },
];

export const LogoMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full flex justify-center pb-8 pt-0 z-0 opacity-90 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-[1400px]">
        <p className="text-[#E5A800] text-center text-[12px] md:text-[14px] font-normal tracking-[0.2em] mb-10">
          Our Solutions Leverage Tools Trusted By
        </p>

        <div 
          className="w-full relative flex items-center overflow-hidden h-[80px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Enhanced Fading Mask */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: isPaused ? 120 : 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center w-max will-change-transform"
          >
            {/* Duplicated for seamless loop */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center shrink-0 px-10 md:px-16 group"
              >
                <div 
                  className="flex items-center gap-4 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-90 group-hover:scale-105"
                  style={{ '--hover-color': (logo as any).color || '#ffffff' } as any}
                >
                  {logo.isSvg ? (
                    <div className="text-white group-hover:text-[var(--hover-color)] transition-colors duration-500">
                      {logo.icon}
                    </div>
                  ) : (
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`h-[32px] md:h-[40px] w-auto object-contain transition-all duration-500`}
                      style={logo.invert ? { filter: 'brightness(0) invert(1)' } : {}}
                    />
                  )}
                  <span className="text-white text-[18px] md:text-[22px] font-medium tracking-tighter transition-colors duration-500 group-hover:text-[var(--hover-color)]">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
