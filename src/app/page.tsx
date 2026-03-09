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
import { FooterCustom } from '@/components/FooterCustom';

const ScrollArrow = ScrollArrowFramerComponent as any;
const ScrollArrowComp = ScrollArrow?.Responsive || ScrollArrow;

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans relative">
      <Hero />
      <WhyUs />
      <Mission />
      <div className="flex justify-center pt-4 pb-4 bg-black relative z-10 -mt-20">
        {ScrollArrowComp && <ScrollArrowComp variant="Variant 1" link="#stats" />}
      </div>
      <Stats />
      <Services />
      <Founder />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FooterCustom />
    </main>
  );
}
