'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="w-12 h-px bg-[#3b82f6]"></div>
                <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs">Who We Are</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="text-4xl md:text-6xl font-black text-white tracking-tight italic uppercase leading-[1.1]"
              >
                We Help You Grow — <br /><span className="text-zinc-600">With Strategy, Systems & AI.</span>
              </motion.h2>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md"
            >
              <p className="text-lg md:text-2xl text-zinc-400 font-medium leading-relaxed italic mb-8">
                VeeBran is a business consulting partner for founders, coaches, and startup builders. We work at the intersection of personal branding, sales, and AI — helping you show up confidently, attract the right clients, and build systems that scale.
              </p>
              <p className="text-lg md:text-2xl text-zinc-400 font-medium leading-relaxed italic">
                Whether you&apos;re just starting out or ready to grow faster — we make it simple, strategic, and real.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
