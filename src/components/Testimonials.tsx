'use client';

import React from 'react';
import TestimonialCardFramerComponent from '@/framer/section-testimonial/testimonial-card';
import LabelFramerComponent from '@/framer/element/label';

const TestimonialCard = TestimonialCardFramerComponent as any;
const Label = LabelFramerComponent as any;

export const Testimonials = () => {
  const TestimonialCardComp = TestimonialCard?.Responsive || TestimonialCard;
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="testimonials" className="pt-[20px] pb-[60px] container mx-auto px-6 relative z-10 scroll-mt-32">
      <div className="flex flex-col items-center mb-20">
        {LabelComp && <LabelComp label="What Our Clients Say" variant="Secondary" />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TestimonialCardComp && (
          <>
            <TestimonialCardComp
              text='"VeeBran completely changed the way we approached LinkedIn. From content to outreach, their systems run like clockwork"'
              name1="Noam"
              detail="Founder"
            />
            <TestimonialCardComp
              text='"The AI workflows Vishva and her team built saved us 15+ hours a week. What felt like chaos is now structured, and scalable"'
              name1="Nirav"
              detail="CEO"
            />
            <TestimonialCardComp
              text='"VeeBran made personal branding effortless. Now, I get consistent inbound leads just from LinkedIn."'
              name1="Ripal"
              detail="Coach"
            />
          </>
        )}
      </div>
    </section>
  );
};
