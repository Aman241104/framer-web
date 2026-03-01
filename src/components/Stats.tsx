'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const stats = [
  { label: 'Brands Automated', value: '10+', sub: 'Founders with fully running brand and sales systems.', numeric: 10, suffix: '+' },
  { label: 'AI Touchpoints', value: '7,000+', sub: 'AI-powered interactions managed across client businesses.', numeric: 7000, suffix: '+' },
  { label: 'Hours Saved Weekly', value: '15+', sub: 'Average time saved per client through smart automation.', numeric: 15, suffix: '+' },
  { label: 'Client Retention', value: '95%', sub: 'Because the work we do actually delivers.', numeric: 95, suffix: '%' },
];

const DigitalCounter = ({ endValue, suffix }: { endValue: number, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const springValue = useSpring(0, { stiffness: 50, damping: 20, mass: 1 });

  useEffect(() => {
    if (isInView) {
      springValue.set(endValue);
    }
  }, [isInView, endValue, springValue]);

  const displayValue = useTransform(springValue, (current) => {
    return Math.floor(current).toLocaleString() + suffix;
  });

  return <motion.span ref={ref} className="font-mono text-[#d4ff00] tabular-nums">{displayValue}</motion.span>;
};

export const Stats = () => {
  return (
    <section className="py-24 bg-background overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#d4ff0015_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d4ff00] font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Terminal Output
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#3b82f6] italic uppercase">System Metrics Simulated</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-16 border-t border-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center px-8 mb-12 lg:mb-0 ${index < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4 leading-none italic drop-shadow-[0_0_15px_rgba(212,255,0,0.3)]">
                <DigitalCounter endValue={stat.numeric} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-tight text-white mb-4">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-medium leading-relaxed italic max-w-[160px]">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
