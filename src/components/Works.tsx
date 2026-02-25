'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'LinkedIn Authority Build',
    category: 'Personal Branding',
    image: 'bg-zinc-800', // Placeholder
    description: 'Scaled a founder’s presence from 500 to 10k+ followers in 3 months.',
  },
  {
    title: 'Sales Automation Engine',
    category: 'AI Automation',
    image: 'bg-zinc-700', // Placeholder
    description: 'Built a custom lead-gen bot that books 15+ meetings per month.',
  },
  {
    title: 'Brand Identity v2',
    category: 'Design',
    image: 'bg-zinc-600', // Placeholder
    description: 'Complete visual overhaul for a series-A fintech startup.',
  },
];

export const Works = () => {
  return (
    <section id="works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold uppercase tracking-widest text-sm mb-4"
            >
              Our Works
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black leading-tight"
            >
              Projects That Speak <br /> For Themselves.
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/3] rounded-[2.5rem] ${project.image} mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold">{project.category}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
