'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Target, Cpu, MessageSquareText, Presentation } from 'lucide-react';
import LabelFramerComponent from '@/framer/element/label';
import StatisticFramerComponent from '@/framer/section-work/statistic';

const Label = LabelFramerComponent as any;
const Statistic = StatisticFramerComponent as any;

export const Founder = () => {
  return (
    <section className="pt-[60px] pb-[80px] bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <Label.Responsive label="Our Team" variant="Secondary" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl md:text-[56px] font-bold mb-20 text-[#3B82F6] tracking-tight uppercase"
        >
          MEET THE FOUNDER
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] max-w-6xl mx-auto text-left items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full md:max-w-[420px] mx-auto md:ml-auto aspect-[4/5] relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src="/founder.jpg"
              alt="Vishva Ambasana"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <div className="w-full relative z-10 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
              className="flex flex-col gap-5"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center mb-4"
              >
                <img
                  src="https://framerusercontent.com/images/Z6aYVOMp3JvPzbDPEtSwnu3aEmQ.png"
                  alt="VeeBran Logo"
                  className="h-[32px] w-auto object-contain"
                />
              </motion.div>

              <motion.h2
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-2xl md:text-[32px] font-bold mb-10 leading-snug text-white tracking-tight italic"
              >
                &ldquo;My Mission Is Simple: Help You Achieve Your Boldest Business Goals Through Clarity, Creativity, And Tech That Actually Works.&rdquo;
              </motion.h2>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col mb-12"
              >
                <span className="text-[#3B82F6] font-bold text-[20px]">Vishva Ambasana</span>
                <span className="text-zinc-500 font-medium text-[16px]">Founder & Chief Executive Officer</span>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } } }}
                className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-12 relative w-full items-start"
              >
                <div className="absolute top-0 left-0 w-full md:w-[200%] h-px bg-gradient-to-r from-white/30 via-white/5 to-transparent"></div>
                <div className="flex items-center gap-4 group cursor-default">
                  <span className="text-4xl md:text-[48px] font-black text-white group-hover:text-[#3B82F6] transition-all duration-300" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>73%</span>
                  <span className="text-[#afafaf] text-sm md:text-base font-medium tracking-wide max-w-[120px] leading-snug group-hover:text-white transition-all duration-300">Sales increase in first 3 months.</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                  <span className="text-4xl md:text-[48px] font-black text-white group-hover:text-[#3B82F6] transition-all duration-300" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>2X</span>
                  <span className="text-[#afafaf] text-sm md:text-base font-medium tracking-wide max-w-[120px] leading-snug group-hover:text-white transition-all duration-300">Faster customer resolutions.</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
