'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StatisticFramerComponent from '@/framer/section-work/statistic';
import LabelFramerComponent from '@/framer/element/label';

const Statistic = StatisticFramerComponent as any;
const Label = LabelFramerComponent as any;

const statsData = [
  { amount: "10+", title: "Brands Automated" },
  { amount: "4.9", title: "Rating out of 5" },
  { amount: "7k+", title: "AI-Powered Messages" },
  { amount: "95%", title: "Client Retention" }
];

export const Stats = () => {
  const StatisticComp = Statistic?.Responsive || Statistic;
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="works" className="py-[60px] bg-black border-y border-white/5 relative z-10 scroll-mt-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-20"
        >
          {LabelComp && <LabelComp label="When VeeBran Steps In" variant="Secondary" />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-[48px] font-bold text-[#3B82F6] tracking-tight">
            Real Work. Real Results.
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-2 md:flex md:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-y-16 md:gap-y-0 capitalize-stats py-4">
          {StatisticComp && (
            <>
              {/* Mobile Cross Dividers */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent md:hidden pointer-events-none"></div>
              <div className="absolute top-1/2 left-8 right-8 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent md:hidden pointer-events-none"></div>

              {statsData.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="w-full md:w-auto flex justify-center"
                  >
                    <StatisticComp amount={stat.amount} title={stat.title} />
                  </motion.div>
                  {idx < statsData.length - 1 && (
                    <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
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
