'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Linkedin, Zap, Search, Cog, PenTool, LayoutTemplate, MousePointer2, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Personal Branding with AI',
    description: 'Build a LinkedIn presence and personal brand that attracts clients — consistently and on autopilot.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1074&auto=format&fit=crop',
    tags: ['LinkedIn', 'Content', 'Thought Leadership']
  },
  {
    title: 'AI-Powered Sales & Marketing',
    description: 'From finding the right leads to keeping your best clients — we build the system that runs your revenue.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop',
    tags: ['Lead Generation', 'Sales', 'Client Retention']
  },
  {
    title: 'Custom AI Tool Development',
    description: 'We build AI tools and automation workflows tailored to your business — so you do more with less.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1070&auto=format&fit=crop',
    tags: ['AI Tools', 'Automation', 'Workflows']
  },
];

const allTags = [
  { icon: <Bot size={14} />, label: 'AI-Driven Solutions' },
  { icon: <Linkedin size={14} />, label: 'LinkedIn Optimization' },
  { icon: <Search size={14} />, label: 'Automated Lead Generation' },
  { icon: <Zap size={14} />, label: 'AI Sales Automation' },
  { icon: <MousePointer2 size={14} />, label: 'Sales Funnel Optimization' },
  { icon: <Cog size={14} />, label: 'Workflow Automation' },
  { icon: <PenTool size={14} />, label: 'Real-Time' },
  { icon: <LayoutTemplate size={14} />, label: 'Content Creation AI' },
];

export const Services = () => {
  return (
    <section id="services" className="pt-20 pb-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#d4ff00] font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-8 text-[#3b82f6] tracking-tight uppercase italic"
        >
          Three focused services. One trusted partner.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-500 font-black italic mb-20 text-sm max-w-2xl mx-auto leading-relaxed uppercase tracking-widest"
        >
          Expertise That Drives Quality <br />
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
              className="p-10 rounded-[3rem] bg-[#0d0d0d] border border-white/5 flex flex-col items-center text-center group overflow-hidden hover:border-white/10 transition-all duration-500"
            >
              <h3 className="text-2xl font-black mb-10 tracking-tight leading-tight text-zinc-100 italic uppercase">{service.title}</h3>

              <div className="w-full aspect-video rounded-[2rem] mb-10 relative overflow-hidden border border-white/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-8 italic">{service.description}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-zinc-700 bg-white/5 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <Link href="/contact" className="mt-auto">
                <button className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-[#d4ff00] hover:bg-[#d4ff00] hover:text-black transition-all group">
                  Get in Touch
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {allTags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#111111] text-zinc-500 border border-white/5 rounded-full hover:bg-white/5 hover:text-white transition-colors cursor-default"
            >
              <span className="font-bold">{tag.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.1em]">{tag.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
