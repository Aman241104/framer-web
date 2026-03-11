'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'LinkedIn Authority Build',
    category: 'Personal Branding',
    color: 'from-blue-600/20 to-indigo-600/20',
    description: 'Scaled a founder’s presence from 500 to 10k+ followers in 3 months.',
    stat: '10k+ Followers'
  },
  {
    title: 'Sales Automation Engine',
    category: 'AI Automation',
    color: 'from-amber-600/20 to-orange-600/20',
    description: 'Built a custom lead-gen bot that books 15+ meetings per month.',
    stat: '15+ Meetings/mo'
  },
  {
    title: 'Brand Identity v2',
    category: 'Design',
    color: 'from-purple-600/20 to-pink-600/20',
    description: 'Complete visual overhaul for a series-A fintech startup.',
    stat: 'Series-A Ready'
  },
];

export const Works = () => {
  return (
    <section id="works" className="py-32 bg-black relative overflow-hidden scroll-mt-32">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A800] animate-pulse" />
              <span className="text-[#E5A800] font-medium tracking-widest text-[10px] uppercase">Our Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[56px] font-medium leading-[1.1] text-white tracking-tight"
            >
              Projects That Speak <br /> <span className="text-zinc-500">For Themselves.</span>
            </motion.h2>
          </div>
          <motion.a
            href="https://calendly.com/vishva-veebran/30min"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-medium hover:bg-white/10 transition-all text-white flex items-center gap-3 group"
          >
            Start Your Project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br ${project.color} mb-8 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all duration-500`}>
                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                {/* Floating Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[12px] text-white/80 font-medium">
                      {project.category}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white text-4xl font-medium mb-2 tracking-tighter">{project.stat}</div>
                    <div className="text-white/40 text-sm uppercase tracking-widest font-medium">Outcome achieved</div>
                  </div>
                </div>

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              
              <h3 className="text-2xl font-medium mb-3 text-white group-hover:text-[#E5A800] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
