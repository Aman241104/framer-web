'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, Layers } from 'lucide-react';
import LabelFramerComponent from '@/framer/element/label';
import ServiceCardFramerComponent from '@/framer/section-service/service-card';

const Label = LabelFramerComponent as any;
const ServiceCard = ServiceCardFramerComponent as any;

const features = [
  {
    title: 'AI-Driven, But Human-Led',
    description: 'We blend the power of automation with strategy, storytelling, and emotional intelligence - so your brand feels real, not robotic.',
    variant: 'Desktop Service Widget - A'
  },
  {
    title: 'Personal Branding Meets Sales Execution',
    description: "We don't stop at making you look good - we build smart systems that bring in leads, nurture them, and help you close faster.",
    variant: 'Desktop Service Widget - B'
  },
  {
    title: 'Custom Tools, Not Cookie-Cutter Tactics',
    description: 'Every business is different. That\'s why we build tailored AI workflows and branded automations that actually fit your style, speed, and goals.',
    variant: 'Desktop Service Widget - C'
  }
];

export const WhyUs = () => {
  const LabelComp = Label?.Responsive || Label;
  const ServiceCardComp = ServiceCard?.Responsive || ServiceCard;

  return (
    <section id="uTrHOqYco" className="py-[120px] bg-transparent overflow-hidden relative">
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
            ServiceCardComp && (
              <ServiceCardComp
                key={index}
                variant={feature.variant}
                title={feature.title}
                text={feature.description}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
};
