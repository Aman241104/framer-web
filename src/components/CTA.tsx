'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="relative rounded-[5rem] bg-[#070707] border border-white/5 p-12 md:p-32 text-center overflow-hidden group hover:border-white/10 transition-all duration-700">
          {/* Card Grid Background */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-6 mb-16 group-hover:scale-105 transition-transform duration-700">
               <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10L20 30L30 10" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 15L20 25L25 15" stroke="#d4ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               <span className="text-5xl md:text-7xl font-black tracking-tight text-white italic">VeeBran</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-black mb-12 tracking-tighter italic text-[#3b82f6] uppercase leading-none"
            >
              LET'S SUCCEED TOGETHER
            </motion.h2>

            <p className="text-zinc-500 italic max-w-xl mx-auto mb-16 text-lg font-bold">
               We bring your vision to life with creativity <br />
               and precision. Let's make it happen.
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-orange-500 font-black text-2xl underline underline-offset-[12px] decoration-orange-500/20 hover:decoration-orange-500 transition-all duration-300"
            >
              Book A Call
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
