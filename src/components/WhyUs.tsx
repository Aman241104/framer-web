'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ThumbsUp, Users } from 'lucide-react';
import LabelFramerComponent from '@/framer/element/label';

const Label = LabelFramerComponent as any;

const particles = [
  { top: '15%', left: '20%', delay: '0s' },
  { top: '80%', left: '15%', delay: '1s' },
  { top: '35%', left: '85%', delay: '0.5s' },
  { top: '75%', left: '75%', delay: '1.5s' },
  { top: '45%', left: '10%', delay: '2s' },
  { top: '20%', left: '70%', delay: '0.8s' },
];

const FloatingParticles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {particles.map((p, i) => (
      <div
        key={i}
        className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-[0.25] motion-safe:animate-pulse"
        style={{
          top: p.top,
          left: p.left,
          animationDelay: p.delay
        }}
      />
    ))}
  </div>
);

const features = [
  {
    title: 'AI-Driven,\nBut Human-Led',
    description: 'We blend the power of automation with strategy, storytelling, and emotional intelligence—so your brand feels real, not robotic.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10 motion-safe:animate-pulse">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.002 6.5a3 3 0 0 1-.399-1.375" />
        <path d="M11.83 12a2.5 2.5 0 0 0-1.63-2.45" />
        <path d="M13.8 12a2.5 2.5 0 0 1 1.63-2.45" />
      </svg>
    )
  },
  {
    title: 'Personal Branding\nMeets Sales Execution',
    description: "We don't stop at making you look good—we build smart systems that bring in leads, nurture them, and help you close faster.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10 motion-safe:animate-[bounce_2s_infinite]">
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
      </svg>
    )
  },
  {
    title: 'Custom Tools, Not\nCookie-Cutter Tactics',
    description: "Every business is different. That's why we build tailored AI workflows and branded automations that actually fit your style, speed, and goals.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10 motion-safe:animate-pulse">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

export const WhyUs = () => {
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="uTrHOqYco" className="pt-[20px] pb-[40px] bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          {LabelComp && <LabelComp label="Why VeeBran?" variant="Secondary" />}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[56px] font-bold mb-4 max-w-4xl mx-auto tracking-tight leading-[1.1] text-white"
        >
          Experience The Benefits <br /> Of Our Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-500 mb-16 text-sm md:text-[15px]"
        >
          Strategies that drive impactful and powerful results
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-4 md:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-[#111111] border border-white/5 shadow-2xl group transition-all duration-300 hover:border-white/10"
            >
              <div className="w-full aspect-[4/3] rounded-[20px] bg-[#0A0A0A] border border-white/5 mb-8 relative overflow-hidden flex items-center justify-center">
                {/* Background Grid */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff1a 1px, transparent 1px), linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                  }}
                />

                <FloatingParticles />

                {/* Image/Icon Area */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#0055FF] flex items-center justify-center shadow-[0_0_40px_rgba(0,85,255,0.4)] relative before:absolute before:inset-[-20%] before:rounded-full before:bg-[#0055FF] before:blur-[30px] before:opacity-30 before:-z-10 group-hover:before:opacity-60 before:transition-opacity before:duration-500">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-[20px] md:text-[22px] font-medium text-white mb-4 leading-snug tracking-tight whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-[#a1a1aa] text-[15px] leading-relaxed max-w-[300px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
