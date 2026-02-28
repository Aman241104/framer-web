'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Target, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Al-Driven, But Human-Led',
    description: 'We blend the power of automation with strategy, storytelling, and emotional intelligence—so your brand feels real, not robotic.',
    icon: <Bot size={24} className="text-[#3b82f6]" />,
  },
  {
    title: 'Personal Branding Meets Sales Execution',
    description: "We don't stop at making you look good—we build smart systems that bring in leads, nurture them, and help you close faster.",
    icon: <Target size={24} className="text-[#3b82f6]" />,
  },
  {
    title: 'Custom Tools, Not Cookie-Cutter Tactics',
    description: 'Every business is different. That\'s why we build tailored AI workflows and branded automations that actually fit your style, speed, and goals.',
    icon: <Rocket size={24} className="text-[#3b82f6]" />,
  }
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#d4ff00] font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
        >
          Why VeeBran?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-6 max-w-4xl mx-auto tracking-tight leading-[1.1] text-white"
        >
          Experience The Benefits <br /> Of Our Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-600 font-bold mb-16 italic text-sm"
        >
          That drives impactful gain powerful results
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 rounded-[2rem] bg-[#070707] border border-white/5 flex flex-col items-center text-center group relative overflow-hidden"
            >
              {/* Card Grid Background */}
              <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#3b82f6]/30 transition-colors">
                {feature.icon}
              </div>

              <h3 className="text-xl font-black mb-4 relative z-10 leading-tight tracking-tight text-white italic">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed relative z-10 text-sm font-medium italic">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
