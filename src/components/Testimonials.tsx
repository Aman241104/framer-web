'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Noam',
    role: 'Founder',
    content: 'VeeBran completely changed the way we approached LinkedIn. From content to outreach, their systems run like clockwork',
  },
  {
    name: 'Nirav',
    role: 'CEO',
    content: 'The AI workflows Vishva and her team built saved us 15+ hours a week. What felt like chaos is now structured, and scalable',
  },
  {
    name: 'Ripal',
    role: 'Coach',
    content: 'VeeBran made personal branding effortless. Now, I get consistent inbound leads just from LinkedIn.',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
        >
          Testimonials
        </motion.h3>
        <h2 className="text-4xl md:text-6xl font-black text-[#3b82f6] tracking-tight">Real Clients. Real Growth.</h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-10 rounded-[2.5rem] bg-[#070707] border border-white/5 relative group hover:border-white/10 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
               <Quote className="text-zinc-800 group-hover:text-blue-600/40 transition-colors duration-500" size={48} strokeWidth={1} />
            </div>
            <p className="text-lg mb-10 text-zinc-400 font-medium leading-relaxed italic group-hover:text-zinc-300 transition-colors">
               "{t.content}"
            </p>
            <div className="pt-8 border-t border-white/5">
              <div className="font-black text-white text-lg tracking-tight mb-1">{t.name}</div>
              <div className="text-xs font-black uppercase tracking-widest text-blue-600">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
