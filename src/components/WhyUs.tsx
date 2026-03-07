'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ThumbsUp, Users } from 'lucide-react';
import LabelFramerComponent from '@/framer/element/label';

const Label = LabelFramerComponent as any;

const features = [
  {
    title: 'AI-Driven, But Human-Led',
    description: 'We blend the power of automation with strategy, storytelling, and emotional intelligence - so your brand feels real, not robotic.',
    icon: <Brain className="w-6 h-6 text-[#3B82F6]" />
  },
  {
    title: 'Personal Branding Meets Sales Execution',
    description: "We don't stop at making you look good - we build smart systems that bring in leads, nurture them, and help you close faster.",
    icon: <ThumbsUp className="w-6 h-6 text-[#3B82F6]" />
  },
  {
    title: 'Custom Tools, Not Cookie-Cutter Tactics',
    description: 'Every business is different. That\'s why we build tailored AI workflows and branded automations that actually fit your style, speed, and goals.',
    icon: <Users className="w-6 h-6 text-[#3B82F6]" />
  }
];

export const WhyUs = () => {
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="uTrHOqYco" className="pt-[20px] pb-[40px] bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          {LabelComp && <LabelComp label="Why VeeBran?" variant="Secondary" />}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[56px] font-bold mb-4 max-w-4xl mx-auto tracking-tight leading-[1.1] text-white"
        >
          Experience The Benefits <br /> Of Our Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-500 mb-16 text-sm md:text-[15px]"
        >
          Strategies that drive impactful and powerful results
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-[24px] bg-[#0A0A0A] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors shadow-2xl"
            >
              {/* Subtle grid background */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center mb-6 border border-[#3B82F6]/20 relative z-10 group-hover:bg-[#3B82F6]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                {feature.title}
              </h3>
              <p className="text-[#afafaf] text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
