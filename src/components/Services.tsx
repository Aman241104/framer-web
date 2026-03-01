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
    icon: <Bot size={36} className="text-[#3b82f6]" />,
    color: '#3b82f6',
    tags: ['LinkedIn', 'Content', 'Thought Leadership']
  },
  {
    title: 'AI-Powered Sales & Marketing',
    description: 'From finding the right leads to keeping your best clients — we build the system that runs your revenue.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop',
    icon: <Search size={36} className="text-[#d4ff00]" />,
    color: '#d4ff00',
    tags: ['Lead Generation', 'Sales', 'Client Retention']
  },
  {
    title: 'Custom AI Tool Development',
    description: 'We build AI tools and automation workflows tailored to your business — so you do more with less.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1070&auto=format&fit=crop',
    icon: <Cog size={36} className="text-[#10b981]" />,
    color: '#10b981',
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

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// We reuse the existing icons/tags
export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Close modal when clicking outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedService(null);
    }
  };

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
          className="text-4xl md:text-6xl font-black mb-16 text-[#3b82f6] tracking-tight uppercase italic"
        >
          Three focused services.<br /><span className="text-white">One trusted partner.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 cursor-pointer">
          {services.map((service, index) => (
            <motion.div
              layoutId={`service-${service.title}`}
              onClick={() => setSelectedService(service)}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 h-[280px] hover:h-[350px] rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group overflow-hidden transition-all duration-700 backdrop-blur-md"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]"
                style={{ boxShadow: `inset 0 0 0 1px ${service.color}40` }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none z-0">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              </div>

              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)] text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight leading-[1.1] text-zinc-100 italic uppercase">
                  {service.title}
                </h3>
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 mt-6 absolute bottom-10">
                  <span className="text-xs font-black uppercase text-white tracking-widest bg-white/10 px-4 py-2 rounded-full border border-white/10">
                    Click to learn more
                  </span>
                </div>
              </div>
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

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
            onClick={handleOverlayClick}
          >
            <motion.div
              layoutId={`service-${selectedService.title}`}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col md:flex-row"
              style={{ boxShadow: `0 0 50px ${selectedService.color}20` }}
            >
              {/* Image side */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[300px]">
                <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10 text-white">
                    {selectedService.icon}
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 relative flex flex-col">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:rotate-90 transition-all z-10 text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <h3 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tight mb-6 pr-10">
                  {selectedService.title}
                </h3>

                <p className="text-zinc-300 text-lg leading-relaxed font-medium mb-10">
                  {selectedService.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                  {selectedService.tags.map(tag => (
                    <span key={tag} className="text-xs font-black uppercase tracking-widest text-[#d4ff00] bg-[#d4ff00]/10 px-4 py-2 rounded-full border border-[#d4ff00]/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                  <Link href="/contact" onClick={() => setSelectedService(null)}>
                    <button
                      className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black uppercase tracking-widest transition-all text-black hover:scale-105"
                      style={{ backgroundColor: selectedService.color }}
                    >
                      Book this service
                      <ArrowUpRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
