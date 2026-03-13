'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
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

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dots = gsap.utils.toArray('.floating-dot');
    dots.forEach((dot: any) => {
      gsap.to(dot, {
        x: 'random(-20, 20)',
        y: 'random(-20, 20)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 'random(0, 2)'
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="floating-dot absolute w-[3px] h-[3px] bg-white rounded-full opacity-[0.4]"
          style={{
            top: p.top,
            left: p.left,
          }}
        />
      ))}
    </div>
  );
};

const SpotlightCard = ({ feature, index }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full w-full"
    >
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.01}
        gyroscope={true}
        className="h-full w-full"
      >
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          className="flex flex-col items-center text-center p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-[#111111] border border-white/5 shadow-2xl group transition-all duration-300 h-full relative overflow-hidden"
        >
          {/* Spotlight Glow */}
          <div
            className="pointer-events-none absolute -inset-[1px] opacity-0 transition duration-300 z-0"
            style={{
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.1), transparent 40%)`,
            }}
          />

          <div className="w-full aspect-[4/3] rounded-[20px] bg-[#0A0A0A] border border-white/5 mb-8 relative overflow-hidden flex items-center justify-center relative z-10">
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
            <div className="relative z-10 w-20 h-20 rounded-full bg-[#0055FF] flex items-center justify-center shadow-[0_0_40px_rgba(0,85,255,0.4)] before:absolute before:inset-[-20%] before:rounded-full before:bg-[#0055FF] before:blur-[30px] before:opacity-30 before:-z-10 group-hover:before:opacity-60 before:transition-opacity before:duration-500">
              {feature.icon}
            </div>
          </div>

          <h3 className="text-[20px] md:text-[30px] font-medium text-white mb-4 leading-snug tracking-tight whitespace-pre-line relative z-10">
            {feature.title}
          </h3>
          <p className="text-[#a1a1aa] text-[18px] font-normal leading-relaxed max-w-[300px] relative z-10">
            {feature.description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

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
    <section id="why-us" className="pt-[20px] pb-[40px] bg-transparent overflow-hidden relative scroll-mt-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 }
            }
          }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mb-8 md:mb-12">
            {LabelComp && <LabelComp label="Why VeeBran?" variant="Secondary" />}
          </motion.div>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
            className="text-3xl md:text-[48px] font-medium mb-4 max-w-4xl mx-auto tracking-tight leading-[1.2] md:leading-[1.25] text-white"
          >
            Experience The Benefits <br className="hidden md:block" /> Of Our Expertise
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } } }}
            className="text-zinc-500 text-xs md:text-[18px] font-normal tracking-normal"
          >
            Strategies that drive impactful and powerful results
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto px-4 md:px-0">
          {features.map((feature, index) => (
            <SpotlightCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
