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
    <section className="py-24 bg-[#020617] overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#E5A800] text-center text-[14px] font-bold uppercase tracking-[0.2em] mb-12"
        >
          Our Solutions Leverage Tools Trusted By
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              {logo.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
