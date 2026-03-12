'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LabelFramerComponent from '@/framer/element/label';

const Label = LabelFramerComponent as any;

const faqs = [
  {
    question: "Who is VeeBran for?",
    answer: "Founders, coaches, consultants, and startup builders who want to grow smarter — not harder."
  },
  {
    question: "What services do you offer?",
    answer: "Personal Branding with AI, Pre-Sales & Post-Sales Solutions, and Custom AI Tool Development."
  },
  {
    question: "How do we get started?",
    answer: "Simple — hit 'Get in Touch' and we'll schedule a free discovery call to understand your goals."
  },
  {
    question: "Do you work with clients outside India?",
    answer: "Yes. We work with founders and businesses globally."
  },
  {
    question: "How is VeeBran different from a regular agency?",
    answer: "We don't offer one-size-fits-all packages. Every engagement is scoped around your specific business and goals."
  }
];

export const FAQ = () => {
  const LabelComp = Label?.Responsive || Label;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-[40px] pb-[60px] container mx-auto px-6 relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8 md:mb-12"
      >
        {LabelComp && <LabelComp label="Quick Answers" variant="Secondary" />}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-3xl md:text-[48px] font-medium text-[#3B82F6] tracking-tight">
          Frequently Asked Questions
        </h2>
      </motion.div>
      <div className="max-w-[854px] mx-auto mt-8 md:mt-[60px] flex flex-col gap-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className={`border bg-[#111] rounded-[16px] overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#E5A800]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#141414]' : 'border-[#222] hover:border-[#333]'}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-8 text-left outline-none cursor-pointer"
                onClick={() => toggleOpen(idx)}
              >
                <h3 className="text-[18px] md:text-[24px] font-medium text-white tracking-tight leading-snug pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] border border-[#333]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E5A800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="p-5 md:p-8 pt-0 text-[#888] text-[15px] md:text-[18px] leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
