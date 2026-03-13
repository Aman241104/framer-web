'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ButtonFramerComponent from '@/framer/button/button';

const Button = ButtonFramerComponent as any;

export const CTA = () => {
  return (
    <section id="contact" className="py-[120px] px-6 bg-transparent border-t border-white/5">
      <div className="container mx-auto">
        <div className="relative rounded-[40px] bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/10 p-12 md:p-[80px] text-center overflow-hidden hover:border-white/20 transition-all duration-700 shadow-2xl">
          {/* Card Grid Background */}
          <div className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Lockup replacing Label */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-2 mb-2">
                <img src="/VB1.png" alt="VeeBran" className="h-[28px] w-auto object-contain" />
                <span className="text-[24px] font-medium tracking-tighter text-white leading-none">VeeBran</span>
              </div>
              <span className="text-[#afafaf] text-sm tracking-[0.2em] font-medium">Business Consulting</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-[80px] font-medium mb-12 tracking-tighter leading-none text-transparent"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                backgroundImage: 'linear-gradient(to bottom, #ffffff, #888888)',
                WebkitBackgroundClip: 'text'
              }}
            >
              Ready to Grow?
            </motion.h2>

            <p className="text-zinc-500 max-w-xl mx-auto mb-16 text-lg md:text-xl font-normal tracking-widest leading-relaxed">
              Let&apos;s talk about what&apos;s possible for your business. <br />
              No pressure  -  just a real conversation.
            </p>

            <div className="flex justify-center">
              <Link href="/contact" className="text-[#10B981] font-medium text-lg hover:text-[#FBBF24] transition-colors flex items-center gap-2">
                Get in Touch
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
