'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Linkedin, Zap, Search, Cog, PenTool, LayoutTemplate, MousePointer2 } from 'lucide-react';

const services = [
  {
    title: 'Personal Branding With AI',
    description: 'Enhance your LinkedIn presence and influence with AI-driven content and optimization.',
    color: 'from-purple-600/20 to-blue-600/20',
    icon: <Linkedin size={40} className="text-purple-400 opacity-20" />,
  },
  {
    title: 'AI-Powered Sales & Marketing',
    description: 'Boost sales and marketing results through intelligent automation from leads to campaigns.',
    color: 'from-orange-600/20 to-red-600/20',
    icon: <Zap size={40} className="text-orange-400 opacity-20" />,
  },
  {
    title: 'Custom AI Tools Development',
    description: 'Access bespoke AI solutions for workflow automation, data analysis, and customer engagement.',
    color: 'from-teal-600/20 to-blue-600/20',
    icon: <Bot size={40} className="text-teal-400 opacity-20" />,
  },
];

const tags = [
  { icon: <Bot size={12} />, label: 'AI-Driven Solutions' },
  { icon: <Linkedin size={12} />, label: 'LinkedIn Optimization' },
  { icon: <Search size={12} />, label: 'Automated Lead Generation' },
  { icon: <Zap size={12} />, label: 'AI Sales Automation' },
  { icon: <MousePointer2 size={12} />, label: 'Sales Funnel Optimization' },
  { icon: <Cog size={12} />, label: 'Workflow Automation' },
  { icon: <PenTool size={12} />, label: 'Real-Time' },
  { icon: <LayoutTemplate size={12} />, label: 'Content Creation AI' },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
        >
          Our Services
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-8 text-[#3b82f6] tracking-tight"
        >
          Expertise That Drives Quality
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-500 font-bold italic mb-20 text-sm leading-relaxed"
        >
          With deep expertise, we deliver quality solutions that drive <br />
          success and exceed industry standards consistently.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[3rem] bg-[#070707] border border-white/5 flex flex-col items-center text-center group overflow-hidden hover:border-white/10 transition-all duration-500"
            >
              <div className={`w-full aspect-[1.5/1] rounded-[2rem] mb-10 bg-gradient-to-tr ${service.color} relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform duration-700`}>
                 <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px:16px]" />
                 <div className="p-6 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700">
                    {service.icon}
                 </div>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight leading-tight text-zinc-100">{service.title}</h3>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#d4ff00]/5 border border-[#d4ff00]/10 rounded-full hover:bg-[#d4ff00]/10 transition-colors cursor-default"
            >
              <span className="text-[#d4ff00] opacity-70">{tag.icon}</span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#d4ff00]">{tag.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
