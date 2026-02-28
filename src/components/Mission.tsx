'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { BlurText } from './react-bits/BlurText';

export const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#d4ff00] font-bold uppercase tracking-widest text-xs mb-4"
        >
          Our Mission
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-8 text-white italic tracking-tighter flex flex-col justify-center items-center gap-1">
            <div className="flex flex-wrap justify-center gap-[0.3em]"><BlurText text="We Help " delay={40} /><span className="text-[#3b82f6]"><BlurText text="Founders & Brands" delay={40} /></span></div>
            <div className="flex flex-wrap justify-center gap-[0.3em]"><BlurText text="Stand Out " delay={40} /><span className="text-[#3b82f6]"><BlurText text="Online " delay={40} /></span><BlurText text="& Scale Smarter" delay={40} /></div>
            <div className="flex justify-center"><BlurText text="With Strategy Driven" delay={40} /></div>
            <div className="flex flex-wrap justify-center gap-[0.3em]"><BlurText text="AI " delay={40} /><span className="text-[#3b82f6]"><BlurText text="Automation." delay={40} /></span></div>
          </h2>
          <p className="text-zinc-500 italic max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Because growth shouldn&apos;t mean doing more — it <br />
            should mean doing it better, faster, and more intentionally.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#d4ff00] font-black text-2xl underline underline-offset-8 decoration-[#d4ff00]/30 hover:decoration-[#d4ff00] transition-colors"
          >
            Book A Call
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            className="mt-24 flex justify-center text-orange-500/50"
          >
            <ArrowDown size={120} strokeWidth={0.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
