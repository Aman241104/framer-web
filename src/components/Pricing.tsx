'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Target, Cpu } from 'lucide-react';
import ButtonFramerComponent from '@/framer/button/button';
import Link from 'next/link';

const Button = ButtonFramerComponent as any;

const pricingServices = [
  {
    name: 'Personal Branding with AI',
    description: 'Build a LinkedIn presence and personal brand that attracts clients - consistently and on autopilot.',
    tag: 'LinkedIn • Content • Thought Leadership',
    icon: <Linkedin className="w-6 h-6 text-[#3B82F6]" />,
    color: 'from-blue-600/20 to-transparent'
  },
  {
    name: 'AI-Powered Sales & Marketing',
    description: 'From finding the right leads to keeping your best clients - we build the system that runs your revenue.',
    tag: 'Lead Generation • Sales • Client Retention',
    icon: <Target className="w-6 h-6 text-[#10B981]" />,
    color: 'from-green-600/20 to-transparent'
  },
  {
    name: 'Custom AI Tool Development',
    description: 'We build AI tools and automation workflows tailored to your business - so you do more with less.',
    tag: 'AI Tools • Automation • Workflows',
    icon: <Cpu className="w-6 h-6 text-[#8B5CF6]" />,
    color: 'from-purple-600/20 to-transparent'
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#3B82F6] font-black uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic mb-6"
          >
            Three Focused Services. <br /><span className="text-zinc-500">One Trusted Partner.</span>
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="h-full flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-[#080808] border border-white/5 hover:border-white/15 transition-all duration-500 relative overflow-hidden">
                
                {/* Subtle Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Tag */}
                <span className="text-[#3B82F6] text-[10px] font-black uppercase tracking-widest mb-6 block">
                  {service.tag}
                </span>

                {/* Icon & Title */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Spacer to push CTA to bottom */}
                <div className="flex-grow" />

                {/* CTA */}
                <div className="mt-10">
                  <Button.Responsive
                    labelButton="Get in Touch"
                    variant={index === 1 ? "Primary" : "Accent"}
                    link="/contact"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
