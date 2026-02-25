'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ThumbsUp, Users } from 'lucide-react';

const features = [
  {
    title: 'AI-Driven, But Human-Led',
    description: 'We blend the power of automation with strategy, storytelling, and emotional intelligence—so your brand feels real, not robotic.',
    icon: <Brain className="text-white" size={28} />,
    color: 'bg-blue-600',
  },
  {
    title: 'Personal Branding Meets Sales Execution',
    description: "We don't stop at making you look good—we build smart systems that bring in leads, nurture them, and help you close faster.",
    icon: <ThumbsUp className="text-white" size={28} />,
    color: 'bg-blue-600',
  },
  {
    title: 'Custom Tools, Not Cookie-Cutter Tactics',
    description: "Every business is different. That's why we build tailored AI workflows and branded automations that actually fit your style, speed, and goals.",
    icon: <Users className="text-white" size={28} />,
    color: 'bg-blue-600',
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
        >
          Why VeeBran?
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-6 max-w-4xl mx-auto tracking-tight leading-[1.1]"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 rounded-[3rem] bg-[#070707] border border-white/5 flex flex-col items-center text-center group relative overflow-hidden"
            >
              {/* Card Grid Background */}
              <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px]" />
              
              <div className={`mb-10 p-7 rounded-full ${feature.color} relative z-10 shadow-[0_0_30px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight relative z-10 leading-tight">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed relative z-10 text-sm font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
