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
          className="text-[41px] md:text-[72px] font-medium tracking-[-1px] mb-8 leading-[1.25] flex flex-col items-center justify-center relative z-10"
        >
          {["Grow Your Brand,", "Build Your Pipeline,", "and Scale with AI."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + (i * 0.15), 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className={`block ${i === 1 ? 'text-[#3B82F6]' : 'bg-gradient-to-r from-[#10B981] to-[#FBBF24] bg-clip-text text-transparent'} text-center`}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/65 text-[16px] md:text-[24px] max-w-[800px] mx-auto mb-10 leading-relaxed font-normal relative z-10 text-center"
        >
          VeeBran helps founders, coaches, and entrepreneurs build a powerful personal brand, attract the right clients, and grow smarter - with the help of AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4 relative z-10 mb-24"
        >
          <a
            ref={buttonRef}
            href="/contact"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-[#050505] text-white text-base font-medium hover:bg-white/10 transition-colors shadow-lg"
          >
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>

      </div>

      {/* Logos inserted into bottom of Hero Background */}
      <div className="absolute bottom-6 w-full z-0">
        <LogoMarquee />
      </div>

    </section>
  );
};
