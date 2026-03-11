'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Target, TrendingUp, Cpu, Workflow, MessageSquareText, Presentation } from 'lucide-react';
import Link from 'next/link';
import { BlurText } from './react-bits/BlurText';
import LabelFramerComponent from '@/framer/element/label';
import ButtonFramerComponent from '@/framer/button/button';

const Label = LabelFramerComponent as any;
const Button = ButtonFramerComponent as any;

export const Mission = () => {
  return (
    <section id="mission" className="pt-[20px] pb-[40px] bg-transparent relative overflow-hidden scroll-mt-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
        <div className="flex flex-col items-center mb-12">
          <Label.Responsive label="Our Mission" variant="Secondary" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-[clamp(40px,5vw,64px)] font-bold leading-[1.1] text-white tracking-tighter max-w-5xl mx-auto"
        >
          We Help <span className="text-[#3B82F6] relative inline-block group" style={{ textShadow: '0 0 20px rgba(0,140,255,0.4)' }}>
            Founders & Brands
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-1 left-0 h-1 bg-[#3B82F6]/30 -z-10"
            />
          </span> Stand Out <span className="text-[#3B82F6]" style={{ textShadow: '0 0 20px rgba(0,140,255,0.4)' }}>Online</span> & Scale Smarter With Strategy Driven <span className="text-[#3B82F6]" style={{ textShadow: '0 0 20px rgba(0,140,255,0.4)' }}>AI Automation.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-zinc-500 text-lg md:text-[18px] leading-relaxed font-medium mt-12 max-w-2xl mx-auto"
        >
          Because growth shouldn&apos;t mean doing more — it should mean doing it better, faster, and more intentionally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://calendly.com/vishva-veebran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-[#10B981] font-bold text-lg hover:text-[#FBBF24] transition-all flex items-center gap-2"
          >
            Book A Call
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.div>
          </a>
        </motion.div>


      </div>
    </section>
  );
};
