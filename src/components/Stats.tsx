'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StatisticFramerComponent from '@/framer/section-work/statistic';
import LabelFramerComponent from '@/framer/element/label';

import CountUp from './react-bits/CountUp';

const Statistic = StatisticFramerComponent as any;
const Label = LabelFramerComponent as any;

const statsData = [
  { amount: 10, suffix: "+", title: "Brands Automated" },
  { amount: 7000, separator: ",", title: "AI Touchpoints" },
  { amount: 15, suffix: "+", title: "Hours Saved Weekly" },
  { amount: 95, suffix: "%", title: "Client Retention" }
];

export const Stats = () => {
  const StatisticComp = Statistic?.Responsive || Statistic;
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="stats" className="py-[40px] md:py-[60px] bg-black border-y border-white/5 relative z-10 scroll-mt-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center mb-10 md:mb-20"
        >
          {LabelComp && <LabelComp label="When VeeBran Steps In" variant="Secondary" />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-[48px] font-medium text-[#3B82F6] tracking-tight">
            Real Work. Real Results.
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-2 lg:flex lg:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-y-8 md:gap-y-12 lg:gap-y-0 capitalize-stats py-4">
          {StatisticComp && (
            <>
              {/* Mobile Cross Dividers */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:hidden pointer-events-none"></div>
              <div className="absolute top-1/2 left-4 right-4 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent lg:hidden pointer-events-none"></div>

              {statsData.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
                    className="w-full md:w-1/2 lg:w-auto flex justify-center relative group scale-[0.85] md:scale-95 lg:scale-100"
                  >
                    <div className="relative">
                      {/* The Framer component provides the styling and title */}
                      <StatisticComp amount=" " title={stat.title} />
                      
                      {/* Overlay the animated number */}
                      <div className="absolute top-[18px] md:top-[24px] left-0 w-full flex justify-center pointer-events-none">
                        <span className="text-[26px] md:text-[30px] font-medium text-white tracking-tighter leading-none">
                          <CountUp 
                            to={stat.amount} 
                            from={stat.amount > 100 ? Math.floor(stat.amount * 0.8) : 0}
                            suffix={stat.suffix || ""} 
                            separator={stat.separator || ""}
                            duration={2}
                            delay={idx * 0.1}
                          />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  {idx < statsData.length - 1 && (
                    <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
