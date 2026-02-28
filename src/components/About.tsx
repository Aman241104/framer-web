'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-10 text-[#3b82f6] tracking-tight italic uppercase"
          >
            We Help You Grow — With Strategy, Systems & AI.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed italic"
          >
            VeeBran is a business consulting partner for founders, coaches, and startup builders. We work at the intersection of personal branding, sales, and AI — helping you show up confidently, attract the right clients, and build systems that scale.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mt-6 italic"
          >
            Whether you&apos;re just starting out or ready to grow faster — we make it simple, strategic, and real.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
