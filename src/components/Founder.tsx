'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Founder = () => {
  return (
    <section className="py-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#d4ff00] font-bold uppercase tracking-widest text-xs mb-4"
        >
          Our Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-20 text-[#3b82f6] italic uppercase"
        >
          MEET THE FOUNDER
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-16 bg-[#0a0a0a] border border-white/5 p-8 md:p-16 rounded-[4rem] max-w-7xl mx-auto relative overflow-hidden text-left">
          {/* Card Grid Background */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-square md:w-[450px] md:h-[450px] rounded-[3rem] bg-zinc-800 overflow-hidden shrink-0 relative z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
              alt="Vishva Ambasana"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="flex-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10L20 30L30 10" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 15L20 25L25 15" stroke="#d4ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xl font-bold tracking-tight text-white italic">VeeBran</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-10 leading-snug text-white italic tracking-tight">
                My Mission Is Simple: Help You Achieve <br />
                Your Boldest Business Goals Through <br />
                Clarity, Creativity, And Tech That Actually <br />
                Works.
              </h2>
              
              <div className="flex flex-col mb-12">
                <span className="text-blue-600 font-black text-lg">Vishva Ambasana</span>
                <span className="text-zinc-600 font-medium text-xs uppercase tracking-widest">Founder & Chief Executive Officer</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-12 pt-12 border-t border-white/10">
                 <div className="flex flex-col">
                    <span className="text-5xl font-black text-white mb-2 italic">73%</span>
                    <span className="text-zinc-600 font-medium text-[10px] uppercase tracking-widest leading-relaxed max-w-[140px]">
                       Sales increase in <br /> first 3 month
                    </span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-5xl font-black text-white mb-2 italic">2X</span>
                    <span className="text-zinc-600 font-medium text-[10px] uppercase tracking-widest leading-relaxed max-w-[140px]">
                       Faster customer <br /> resolutions
                    </span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
