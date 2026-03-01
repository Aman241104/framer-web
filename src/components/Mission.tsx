'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { BlurText } from './react-bits/BlurText';

export const Mission = () => {
  return (
    <section id="mission" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Sticky Column */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-40 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="w-12 h-px bg-[#d4ff00]"></div>
                <span className="text-[#d4ff00] font-bold uppercase tracking-widest text-xs">Our Mission</span>
              </motion.div>

              <p className="text-zinc-500 italic leading-relaxed font-medium hidden lg:block text-xl">
                Because growth shouldn&apos;t mean doing more — it should mean doing it better, faster, and more intentionally.
              </p>
            </div>
          </div>

          {/* Right Scrolling Column */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-white italic tracking-tighter flex flex-wrap items-center gap-x-[0.3em] gap-y-2">
              <BlurText text="We Help" delay={40} /><span className="text-[#3b82f6]"><BlurText text="Founders & Brands" delay={40} /></span>
              <BlurText text="Stand Out" delay={40} /><span className="text-[#3b82f6]"><BlurText text="Online" delay={40} /></span><BlurText text="& Scale Smarter" delay={40} />
              <BlurText text="With Strategy Driven" delay={40} />
              <BlurText text="AI" delay={40} /><span className="text-[#3b82f6]"><BlurText text="Automation." delay={40} /></span>
            </h2>

            <p className="text-zinc-400 italic text-xl leading-relaxed font-medium lg:hidden">
              Because growth shouldn&apos;t mean doing more — it should mean doing it better, faster, and more intentionally.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="/contact"
                className="inline-block text-black bg-[#d4ff00] px-10 py-5 rounded-full font-black text-xl hover:bg-[#c4ed00] transition-colors uppercase tracking-widest"
              >
                Book A Call
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="mt-12 text-zinc-500 flex justify-center w-full"
            >
              <ArrowDown size={60} strokeWidth={1.5} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
