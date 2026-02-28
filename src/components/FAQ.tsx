'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: 'Who is VeeBran for?',
    answer: 'Founders, coaches, consultants, and startup builders who want to grow smarter — not harder.',
  },
  {
    question: 'What services do you offer?',
    answer: 'Personal Branding with AI, Pre-Sales & Post-Sales Solutions, and Custom AI Tool Development.',
  },
  {
    question: 'How do we get started?',
    answer: "Simple — hit 'Get in Touch' and we'll schedule a free discovery call to understand your goals.",
  },
  {
    question: 'Do you work with clients outside India?',
    answer: 'Yes. We work with founders and businesses globally.',
  },
  {
    question: 'How is VeeBran different from a regular agency?',
    answer: "We don't offer one-size-fits-all packages. Every engagement is scoped around your specific business and goals.",
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
        <span className="text-xl md:text-2xl font-black text-zinc-400 group-hover:text-white transition-colors tracking-tight italic uppercase">{question}</span>
        {isOpen ? <Minus size={20} className="text-[#3b82f6]" /> : <ChevronRight size={20} className="text-zinc-600 group-hover:text-white" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="bg-white/5 rounded-2xl p-6 mb-6">
              <p className="text-zinc-500 leading-relaxed font-medium italic">{answer}</p>
            </div>
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
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#d4ff00] font-bold uppercase tracking-[0.4em] text-[10px] mb-6 text-center"
        >
          Quick Answers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-20 text-[#3b82f6] text-center italic uppercase"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-col border-t border-white/5">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
