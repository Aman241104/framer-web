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
    <section className="py-12 bg-background overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
          Our Solutions Leverage Tools Trusted By
        </p>
      </div>

      <div className="flex relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-20 items-center whitespace-nowrap px-10"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors cursor-default grayscale hover:grayscale-0 opacity-40 hover:opacity-100"
            >
              <span className="text-2xl font-bold">{logo.icon}</span>
              <span className="text-xl font-black tracking-tighter">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
