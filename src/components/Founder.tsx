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
    <section className="pt-[20px] pb-[40px] bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <Label.Responsive label="Our Team" variant="Secondary" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[56px] font-bold mb-20 text-[#3B82F6] tracking-tight uppercase"
        >
          MEET THE FOUNDER
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] max-w-6xl mx-auto text-left items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:max-w-[420px] ml-auto aspect-[4/5] relative z-10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
              alt="Vishva Ambasana"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="w-full relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10L20 35L35 10" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 10L20 25L28 10" stroke="#D9FF00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[20px] font-black tracking-tighter text-white leading-none">VeeBran</span>
              </div>
              <h2 className="text-2xl md:text-[32px] font-bold mb-10 leading-snug text-white tracking-tight italic">
                My Mission Is Simple: Help You Achieve Your Boldest Business Goals Through Clarity, Creativity, And Tech That Actually Works.
              </h2>

              <div className="flex flex-col mb-12">
                <span className="text-[#3B82F6] font-bold text-[20px]">Vishva Ambasana</span>
                <span className="text-zinc-500 font-medium text-[16px]">Founder & Chief Executive Officer</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-12 relative w-full items-start">
                <div className="absolute top-0 left-0 w-full md:w-[200%] h-px bg-gradient-to-r from-white/30 via-white/5 to-transparent"></div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl md:text-[48px] font-black text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>73%</span>
                  <span className="text-[#afafaf] text-sm md:text-base font-medium tracking-wide max-w-[120px] leading-snug">Sales increase in first 3 months.</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl md:text-[48px] font-black text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>2X</span>
                  <span className="text-[#afafaf] text-sm md:text-base font-medium tracking-wide max-w-[120px] leading-snug">Faster customer resolutions.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
