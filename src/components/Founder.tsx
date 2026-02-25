'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Founder = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4"
        >
          Our Team
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-20 text-[#3b82f6]"
        >
          MEET THE FOUNDER
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-16 bg-[#0a0a0a] border border-white/5 p-8 md:p-16 rounded-[4rem] max-w-7xl mx-auto relative overflow-hidden">
          {/* Card Grid Background */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-square md:w-[400px] md:h-[400px] rounded-[3rem] bg-zinc-800 overflow-hidden shrink-0 relative z-10"
          >
            {/* Founder Image Placeholder */}
            <div className="w-full h-full bg-gradient-to-tr from-blue-600/30 to-purple-600/30 flex items-center justify-center p-12">
               <div className="w-full h-full bg-zinc-700/50 rounded-full animate-pulse blur-3xl" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-6xl font-black italic">FOUNDER</span>
               </div>
            </div>
          </motion.div>

          <div className="flex-1 text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#3b82f6] rounded-full flex items-center justify-center">
                   <span className="text-white text-xs font-black">V</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">VeeBran</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-10 leading-snug text-white">
                My Mission Is Simple: Help You Achieve <br />
                Your Boldest Business Goals Through <br />
                Clarity, Creativity, And Tech That Actually <br />
                Works.
              </h2>
              
              <div className="flex items-center gap-2 mb-12">
                <span className="text-[#3b82f6] font-black text-lg">Vishva Ambasana</span>
                <span className="text-zinc-600 font-medium">| Founder & Chief Executive Officer</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-12 pt-12 border-t border-white/10">
                 <div className="flex flex-col">
                    <span className="text-5xl font-black text-white mb-2">73%</span>
                    <span className="text-zinc-500 font-medium text-xs leading-relaxed max-w-[140px]">
                       Sales increase in <br /> first 3 month
                    </span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-5xl font-black text-white mb-2">2X</span>
                    <span className="text-zinc-500 font-medium text-xs leading-relaxed max-w-[140px]">
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
