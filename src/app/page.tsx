"use client";

import React from 'react';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';
import { Mission } from '@/components/Mission';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Founder } from '@/components/Founder';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden font-sans relative">
      <Hero />
      <WhyUs />
      <Mission />
      <Stats />
      <Services />
      <Founder />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
