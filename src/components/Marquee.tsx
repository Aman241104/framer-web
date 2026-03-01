'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Zapier', icon: '⚡' },
  { name: 'ChatGPT', icon: '🤖' },
  { name: 'Make', icon: 'm' },
  { name: 'Lemlist', icon: 'L' },
  { name: 'Perplexity', icon: 'P' },
  { name: 'HubSpot', icon: 'H' },
];

export const LogoMarquee = () => {
  return (
    <section className="py-12 bg-background overflow-hidden border-b border-white/5 relative">
      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-50 mix-blend-overlay"></div>

      <div className="container mx-auto px-6 mb-10 text-center relative z-10">
        <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-[#3b82f6]">
          System Integrations
        </p>
      </div>

      <div className="flex relative z-10 w-full">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-24 items-center whitespace-nowrap px-10"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-[#d4ff00] opacity-60 hover:opacity-100 transition-opacity cursor-default mix-blend-screen"
            >
              <span className="text-3xl font-bold drop-shadow-[0_0_8px_rgba(212,255,0,0.8)]">{logo.icon}</span>
              <span className="text-2xl font-black tracking-widest italic uppercase drop-shadow-[0_0_8px_rgba(212,255,0,0.8)]">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
