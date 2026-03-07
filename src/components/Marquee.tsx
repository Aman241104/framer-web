'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'make',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto fill-white">
          <circle cx="20" cy="12" r="4" fill="white" />
          <circle cx="12" cy="20" r="4" fill="white" />
          <circle cx="28" cy="20" r="4" fill="white" />
          <circle cx="20" cy="28" r="4" fill="white" />
        </svg>
        <span className="text-white text-[22px] font-bold tracking-tighter">make</span>
      </div>
    ),
  },
  {
    name: 'lemlist',
    icon: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-[#4353FF] flex items-center justify-center text-white text-[10px] font-black">L</div>
        <span className="text-white text-[20px] font-bold tracking-tighter lowercase">lemlist</span>
      </div>
    ),
  },
  {
    name: 'perplexity',
    icon: (
      <div className="flex items-center gap-1.5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mb-0.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" strokeWidth="1.5" />
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">perplexity</span>
      </div>
    ),
  },
  {
    name: 'jasper',
    icon: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_white]" />
        </div>
        <span className="text-white text-[20px] font-bold tracking-tight">Jasper</span>
      </div>
    ),
  },
  {
    name: 'chatgpt',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" className="fill-white">
          <path d="M22.28 9.82a5.98 5.98 0 0 0-.51-4.91 6.04 6.04 0 0 0-6.51-2.9 6.06 6.06 0 0 0-10.28 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.98 5.98 0 0 0 10.28-2.17 5.99 5.99 0 0 0 4-2.9 6.05 6.05 0 0 0-.74-7.1zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.15-1.64zM2.34 7.9a4.48 4.48 0 0 1 2.37-1.97v5.67c0 .28.15.53.39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79a4.5 4.5 0 0 1-1.65-6.11zm16.6 3.86l-5.84-3.37 2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.68zm2.01-3.03l-.14-.08-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23v-2.33a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V5.56a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.4.68v6.73zM9.4 10.5l2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5v-3z" />
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">ChatGPT</span>
      </div>
    ),
  },
];

export const LogoMarquee = () => {
  return (
    <div className="w-full flex justify-center pb-8 pt-0 z-0 opacity-80 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-[1400px]">
        <p className="text-[#E5A800] text-center text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] mb-10">
          Our Solutions Leverage Tools Trusted By
        </p>

        {/* Horizontal Marquee Container */}
        <div className="w-full relative flex items-center overflow-hidden h-[40px]">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            className="flex items-center w-max"
          >
            {/* Duplicated exactly for a perfect -50% seamless loop. Padding is used instead of gap for accurate width calculation */}
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center shrink-0 px-8 md:px-12"
              >
                {logo.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
