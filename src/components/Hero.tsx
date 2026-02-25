'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-[-2] bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Dynamic Floating Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] -z-10" 
      />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
          <span className="text-xs font-bold tracking-widest text-zinc-400">We Are Online To Chat</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="text-[#d4ff00]">Branding & Automation</span> <br />
          <span className="text-[#3b82f6]">That Moves</span> <br />
          <span className="text-[#d4ff00]">Business Forward.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          We blend human-first strategy with AI-powered systems to grow your brand, automate your sales, and help you scale with clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <button className="group flex items-center gap-2 text-white font-bold text-lg hover:text-accent transition-colors">
            <span className="underline underline-offset-8 decoration-white/20 group-hover:decoration-accent">Learn More</span>
            <ArrowDownRight size={24} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
