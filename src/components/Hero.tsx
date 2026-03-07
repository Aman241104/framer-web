'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import BackgroundDotsXlFramerComponent from '@/framer/element/background-dots-xl';
import LabelFramerComponent from '@/framer/element/label';
import ButtonFramerComponent from '@/framer/button/button';
import RunningStrokeFramerComponent from '@/framer/button/running-stroke';
import { LogoMarquee } from '@/components/Marquee';

const BackgroundDots = BackgroundDotsXlFramerComponent as any;
const Label = LabelFramerComponent as any;
const Button = ButtonFramerComponent as any;
const RunningStroke = RunningStrokeFramerComponent as any;

const logos = [
  {
    name: 'jasper',
    icon: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_white]" />
        </div>
        <span className="text-white text-[20px] font-bold tracking-tight">Jasper</span>
      </div>
    ),
  },
  {
    name: 'chatgpt',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" className="fill-white">
          <path d="M22.28 9.82a5.98 5.98 0 0 0-.51-4.91 6.04 6.04 0 0 0-6.51-2.9 6.06 6.06 0 0 0-10.28 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.98 5.98 0 0 0 10.28-2.17 5.99 5.99 0 0 0 4-2.9 6.05 6.05 0 0 0-.74-7.1zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.15-1.64zM2.34 7.9a4.48 4.48 0 0 1 2.37-1.97v5.67c0 .28.15.53.39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79a4.5 4.5 0 0 1-1.65-6.11zm16.6 3.86l-5.84-3.37 2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.68zm2.01-3.03l-.14-.08-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23v-2.33a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V5.56a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.4.68v6.73zM9.4 10.5l2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5v-3z" />
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">ChatGPT</span>
      </div>
    ),
  },
  {
    name: 'make',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto fill-white">
          <circle cx="20" cy="12" r="4" fill="white" />
          <circle cx="12" cy="20" r="4" fill="white" />
          <circle cx="28" cy="20" r="4" fill="white" />
          <circle cx="20" cy="28" r="4" fill="white" />
        </svg>
        <span className="text-white text-[22px] font-bold tracking-tighter">make</span>
      </div>
    ),
  },
  {
    name: 'lemlist',
    icon: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-[#4353FF] flex items-center justify-center text-white text-[10px] font-black">L</div>
        <span className="text-white text-[20px] font-bold tracking-tighter lowercase">lemlist</span>
      </div>
    ),
  },
  {
    name: 'perplexity',
    icon: (
      <div className="flex items-center gap-1.5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mb-0.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" strokeWidth="1.5" />
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">perplexity</span>
      </div>
    ),
  },
];

export const Hero = () => {
  const BackgroundDotsComp = BackgroundDots?.Responsive || BackgroundDots;
  const LabelComp = Label?.Responsive || Label;
  const RunningStrokeComp = RunningStroke?.Responsive || RunningStroke;

  const containerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo('.hero-text-line',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  return (
    <section ref={containerRef} className="relative pt-48 pb-[180px] flex flex-col items-center z-10 overflow-hidden">
      {/* Hero Background Dots - Absolute to this section only */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full flex justify-center overflow-hidden opacity-50">
        {BackgroundDotsComp && <BackgroundDotsComp className="w-full h-full object-cover" />}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[rgba(33,33,33,0.4)] backdrop-blur-md text-sm font-medium text-white/80 shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            We Are Online To Chat
          </div>
        </div>

        <h1
          className="text-[41px] md:text-[72px] font-extrabold tracking-[-0.02em] mb-8 leading-[1.05] flex flex-col items-center justify-center relative z-10"
        >
          <span className="hero-text-line bg-gradient-to-r from-[#10B981] to-[#FBBF24] bg-clip-text text-transparent opacity-0 translate-y-4">Branding & Automation</span>
          <span className="hero-text-line text-[#3B82F6] opacity-0 translate-y-4">That Moves</span>
          <span className="hero-text-line bg-gradient-to-r from-[#10B981] to-[#FBBF24] bg-clip-text text-transparent opacity-0 translate-y-4">Business Forward.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/65 text-[16px] md:text-[18px] max-w-[520px] mx-auto mb-10 leading-relaxed font-medium relative z-10"
        >
          We blend human-first strategy with AI-powered systems to grow your brand, automate your sales, and help you scale with clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4 relative z-10 mb-24"
        >
          <Link
            ref={buttonRef}
            href="/contact"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-[#050505] text-white text-base font-medium hover:bg-white/10 transition-colors shadow-lg"
          >
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </Link>
        </motion.div>

      </div>

      {/* Logos inserted into bottom of Hero Background */}
      <div className="absolute bottom-6 w-full z-0">
        <LogoMarquee />
      </div>

    </section>
  );
};
