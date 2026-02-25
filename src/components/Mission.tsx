'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4"
        >
          Our Mission
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            We Help <span className="text-[#3b82f6]">Founders & Brands</span> <br />
            Stand Out <span className="text-[#3b82f6]">Online</span> & Scale Smarter <br />
            With Strategy Driven <br />
            AI <span className="text-[#d4ff00]">Automation</span>.
          </h2>
          <p className="text-zinc-500 italic max-w-3xl mx-auto mb-10 leading-relaxed">
            Because growth shouldn't mean doing more — it <br />
            should mean doing it better, faster, and more intentionally.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-orange-500 font-bold text-lg underline underline-offset-8 decoration-orange-500/30 hover:decoration-orange-500 transition-colors"
          >
            Book A Call
          </motion.a>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            className="mt-20 flex justify-center text-orange-500"
          >
            <ArrowDown size={64} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
