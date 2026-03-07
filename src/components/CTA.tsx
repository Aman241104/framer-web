'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import LabelFramerComponent from '@/framer/element/label';
import ButtonFramerComponent from '@/framer/button/button';

const Label = LabelFramerComponent as any;
const Button = ButtonFramerComponent as any;

export const CTA = () => {
  const LabelComp = Label?.Responsive || Label;
  const ButtonComp = Button?.Responsive || Button;

  return (
    <section id="contact" className="py-[120px] px-6 bg-transparent border-t border-white/5">
      <div className="container mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/10 p-12 md:p-[70px] text-center overflow-hidden group hover:border-white/20 transition-all duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.65),0_0_40px_rgba(59,130,246,0.1)]">
          {/* Card Grid Background */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex flex-col items-center mb-12">
              {LabelComp && <LabelComp label="Join The Future" variant="Secondary" />}
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-black mb-12 tracking-tighter italic text-[#3B82F6] uppercase leading-none"
            >
              LET&apos;S SUCCEED TOGETHER
            </motion.h2>

            <p className="text-zinc-500 italic max-w-xl mx-auto mb-16 text-xl font-bold uppercase tracking-widest">
              Let&apos;s talk about what&apos;s possible for your business. <br />
              No pressure  -  just a real conversation.
            </p>

            <div className="flex justify-center">
              {ButtonComp && (
                <ButtonComp 
                  labelButton="Get in Touch" 
                  variant="Primary" 
                  link="/contact" 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
