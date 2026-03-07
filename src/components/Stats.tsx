'use client';

import React from 'react';
import StatisticFramerComponent from '@/framer/section-work/statistic';
import LabelFramerComponent from '@/framer/element/label';

const Statistic = StatisticFramerComponent as any;
const Label = LabelFramerComponent as any;

export const Stats = () => {
  const StatisticComp = Statistic?.Responsive || Statistic;
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="a8kgD6gFC" className="py-[60px] bg-black border-y border-white/5 relative z-10 scroll-mt-32">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-20">
          {LabelComp && <LabelComp label="When VeeBran Steps In" variant="Secondary" />}
        </div>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-[48px] font-bold text-[#3B82F6] tracking-tight">
            Real Clients. Real Growth.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-8 md:gap-0 capitalize-stats">
          {StatisticComp && (
            <>
              <StatisticComp
                amount="10+"
                title="Brands Automated"
              />
              <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <StatisticComp
                amount="4.9"
                title="Rating out of 5"
              />
              <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <StatisticComp
                amount="7k+"
                title="AI Powered Messages"
              />
              <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <StatisticComp
                amount="95%"
                title="Client Retention"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
