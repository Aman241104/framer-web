'use client';

import React, { useState } from 'react';
import LabelFramerComponent from '@/framer/element/label';

const Label = LabelFramerComponent as any;

const faqs = [
  {
    question: "What makes VeeBran different from other automation agencies?",
    answer: "We combine deep AI expertise with a personal touch—ensuring every solution is tailored, transparent, and impactful."
  },
  {
    question: "How does the LinkedIn First Approach work?",
    answer: "We use AI-driven insights to craft your LinkedIn profile, create engaging content, and build authentic connections that drive real business results."
  },
  {
    question: "Can I customize my plan?",
    answer: "Absolutely! Every business is unique. Let's discuss your needs and create a plan that fits."
  },
  {
    question: "Is this only for tech businesses?",
    answer: "Nope. We work with coaches, agencies, creators, SaaS founders, eComm brands, and more."
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
      <div className="flex flex-col items-center mb-12">
        {LabelComp && <LabelComp label="Need to Know" variant="Secondary" />}
      </div>
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-[48px] font-bold text-[#3B82F6] tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-[854px] mx-auto mt-[60px] flex flex-col gap-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border border-[#222] bg-[#111] rounded-[16px] overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#141414]' : 'hover:border-[#333]'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none cursor-pointer"
                onClick={() => toggleOpen(idx)}
              >
                <h3 className="text-[20px] md:text-[24px] font-bold text-white tracking-tight leading-snug">
                  {faq.question}
                </h3>
                <div className={`shrink-0 ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#333] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E5A800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 md:p-8 pt-0 text-[#888] text-[16px] md:text-[18px] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
