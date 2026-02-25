'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: 'What Makes VeeBran Different From Other Automation Agencies?',
    answer: 'We focus on a strategy-first approach, combining human creativity with AI efficiency to build custom solutions that actually move the needle.',
  },
  {
    question: 'How Does The LinkedIn First Approach Work?',
    answer: 'We leverage LinkedIn as the primary channel for authority building and lead generation, then use automation to scale that impact across your sales funnel.',
  },
  {
    question: 'Can I Customize My Plan?',
    answer: 'Yes. Every business is unique, and we tailor our workflows and AI agents to match your specific goals and budget.',
  },
  {
    question: 'Is This Only For Tech Businesses?',
    answer: 'No. Any founder or brand looking to scale smarter and automate repetitive tasks can benefit from our AI-driven strategies.',
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-white transition-colors"
      >
        <span className="text-xl md:text-2xl font-bold text-zinc-400 group-hover:text-white transition-colors tracking-tight">{question}</span>
        {isOpen ? <Minus size={20} className="text-[#3b82f6]" /> : <ChevronRight size={20} className="text-zinc-600 group-hover:text-white" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white/5 rounded-2xl p-6 mb-6"
          >
            <p className="text-zinc-500 leading-relaxed font-medium">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4 text-center"
        >
          Need to Know
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-20 text-[#3b82f6] text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
