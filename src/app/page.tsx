"use client";

import React from 'react';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';
import { Mission } from '@/components/Mission';
import ScrollArrowFramerComponent from '@/framer/element/scroll-arrow';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Founder } from '@/components/Founder';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

const ScrollArrow = ScrollArrowFramerComponent as any;
const ScrollArrowComp = ScrollArrow?.Responsive || ScrollArrow;

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden font-sans relative">
      <Hero />
      <WhyUs />
      <Mission />
      <div className="flex justify-center pt-2 pb-6 bg-black relative z-10 gap-0 -mt-10">
        {ScrollArrowComp && <ScrollArrowComp variant="Variant 1" link="#stats" />}
      </div>
      <Stats />
      <Services />
      <Founder />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
