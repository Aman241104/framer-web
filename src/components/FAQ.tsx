'use client';

import React from 'react';
import AccordionFramerComponent from '@/framer/section-faq/accordion';
import LabelFramerComponent from '@/framer/element/label';

const Accordion = AccordionFramerComponent as any;
const Label = LabelFramerComponent as any;

export const FAQ = () => {
  const AccordionComp = Accordion?.Responsive || Accordion;
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="faq" className="py-[120px] container mx-auto px-6 relative z-10 scroll-mt-32">
      <div className="flex flex-col items-center mb-12">
        {LabelComp && <LabelComp label="Need to Know" variant="Secondary" />}
      </div>
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-[48px] font-bold text-[#3B82F6] tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-3xl mx-auto mt-[60px]">
        {AccordionComp && <AccordionComp />}
      </div>
    </section>
  );
};
