'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Target, TrendingUp, Cpu, Workflow, MessageSquareText, Presentation } from 'lucide-react';
import { BlurText } from './react-bits/BlurText';
import LabelFramerComponent from '@/framer/element/label';
import ButtonFramerComponent from '@/framer/button/button';

const Label = LabelFramerComponent as any;
const Button = ButtonFramerComponent as any;

export const Mission = () => {
  return (
    <section id="eCxvIfBt6" className="py-[120px] bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">

        <div className="flex flex-col items-center mb-12">
          <Label.Responsive label="Our Mission" variant="Secondary" />
        </div>

        <h2 className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.1] text-white tracking-tighter max-w-5xl mx-auto">
          We Help <span className="text-[#3B82F6]" style={{ textShadow: '0 0 20px rgba(0,140,255,0.4)' }}>Founders & Brands</span> Stand Out <span className="text-[#3B82F6]" style={{ textShadow: '0 0 20px rgba(0,140,255,0.4)' }}>Online</span> & Scale Smarter With Strategy Driven <span className="text-[#3B82F6]" style={{ textShadow: '0 0 20px rgba(0,140,255,0.4)' }}>AI Automation.</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-500 text-lg md:text-[18px] leading-relaxed font-medium mt-12 max-w-2xl mx-auto"
        >
          Because growth shouldn&apos;t mean doing more — it should mean doing it better, faster, and more intentionally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Button.Responsive 
            labelButton="Book A Call" 
            variant="Primary" 
            link="/contact" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ y: 20 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="mt-24 text-[#E5A800] flex justify-center w-full"
        >
          <div className="w-px h-24 bg-gradient-to-b from-[#E5A800] to-transparent relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 border-r-2 border-b-2 border-[#E5A800] rotate-45" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
