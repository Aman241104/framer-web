'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ripal',
    role: 'Coach',
    content: 'VeeBran made personal branding effortless. Now, I get consistent inbound leads just from LinkedIn.',
  },
  {
    name: 'Noam',
    role: 'Founder',
    content: 'The AI workflows Vishva and her team built saved us 15+ hours a week. What felt like chaos is now structured and scalable.',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#d4ff00] font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
        >
          Testimonials
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-black text-[#3b82f6] tracking-tight italic uppercase">What Our Clients Say</h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-12 bg-[#070707] border border-white/5 rounded-[3rem] relative overflow-hidden"
          >
            {/* Card Grid Background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px]" />

            <p className="text-lg md:text-xl mb-12 text-zinc-400 font-medium leading-relaxed italic relative z-10">
              &quot;{t.content}&quot;
            </p>
            <div className="flex flex-col relative z-10">
              <span className="font-black text-white text-lg tracking-tight mb-1 italic uppercase">{t.name}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
