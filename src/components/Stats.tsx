'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Brands Automated', value: '10+' },
  { label: 'Rating out of 5', value: '4.9' },
  { label: 'AI Powered Messages', value: '7k+' },
  { label: 'Client Retention', value: '95%' },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            When VeeBran Steps In
          </motion.h3>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#3b82f6]">Real Clients. Real Growth.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-16 border-t border-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center px-8 mb-12 lg:mb-0 ${index < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4 leading-none text-white">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-tight text-zinc-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
