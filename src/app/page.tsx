"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';
import { Mission } from '@/components/Mission';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Founder } from '@/components/Founder';
import { FAQ } from '@/components/FAQ';
import { FooterCustom } from '@/components/FooterCustom';
import Navbar from '@/components/Navbar';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 0.8 },
      filter: { duration: 0.8 }
    } 
  }
};

const Section = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <motion.div
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={revealVariants}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans relative overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar />
      
      {/* 2. Hero */}
      <Hero />

      {/* 3. Why Us */}
      <Section id="why-us">
        <WhyUs />
      </Section>

      {/* 4. Mission & Statistics */}
      <Section id="mission">
        <Mission />
      </Section>
      <Section id="stats">
        <Stats />
      </Section>

      {/* 5. What We Do (Services) */}
      <Section id="services">
        <Services />
      </Section>

      {/* 6. Pricing */}
      <Section id="pricing">
        <Pricing />
      </Section>

      {/* 7. Meet the Founder */}
      <Section id="founder">
        <Founder />
      </Section>

      {/* 8. FAQ */}
      <Section id="faq">
        <FAQ />
      </Section>

      {/* 9. Footer */}
      <FooterCustom />
    </main>
  );
}
