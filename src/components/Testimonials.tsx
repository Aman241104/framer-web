'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCardFramerComponent from '@/framer/section-testimonial/testimonial-card';
import LabelFramerComponent from '@/framer/element/label';

const TestimonialCard = TestimonialCardFramerComponent as any;
const Label = LabelFramerComponent as any;

const testimonials = [
  {
    text: '"VeeBran made personal branding effortless. Now, I get consistent inbound leads just from LinkedIn."',
    name1: 'Ripal',
    detail: 'Coach',
  },
  {
    text: '"The AI workflows Vishva and her team built saved us 15+ hours a week. What felt like chaos is now structured and scalable."',
    name1: 'Noam',
    detail: 'Founder',
  },
];

export const Testimonials = () => {
  const TestimonialCardComp = TestimonialCard?.Responsive || TestimonialCard;
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="testimonials" className="pt-[20px] pb-[60px] container mx-auto px-6 relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-20"
      >
        {LabelComp && <LabelComp label="What Our Clients Say" variant="Secondary" />}
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TestimonialCardComp && testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="bg-[#0A0A0A] border border-white/5 rounded-[32px] p-8 md:p-10 h-full flex flex-col relative overflow-hidden group hover:border-white/10 transition-all duration-300 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <TestimonialCardComp
                text={t.text}
                name1={t.name1}
                detail={t.detail}
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};
