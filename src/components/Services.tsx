'use client';

import React from 'react';
import ServiceCardFramerComponent from '@/framer/section-service/service-card';
import ServiceSmallFramerComponent from '@/framer/section-service/service-small';
import LabelFramerComponent from '@/framer/element/label';

const ServiceCard = ServiceCardFramerComponent as any;
const ServiceSmall = ServiceSmallFramerComponent as any;
const Label = LabelFramerComponent as any;

export const Services = () => {
  const ServiceCardComp = ServiceCard?.Responsive || ServiceCard;
  const ServiceSmallComp = ServiceSmall?.Responsive || ServiceSmall;
  const LabelComp = Label?.Responsive || Label;

  return (
    <section id="ACBgSFIb5" className="pt-[40px] pb-[60px] container mx-auto px-6 relative z-10 scroll-mt-32">
      <div className="flex flex-col items-center mb-12">
        {LabelComp && <LabelComp label="Our Services" variant="Secondary" />}
      </div>
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-[48px] font-bold text-[#3B82F6] tracking-tight leading-tight mb-4">
          Expertise That Drives Quality
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
          With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {ServiceCardComp && (
          <>
            <div className="custom-service-card custom-service-card-1">
              <ServiceCardComp
                variant="Desktop Service Widget - A"
                title="Personal Branding With AI"
                text="Enhance your LinkedIn presence and influence with AI-driven content and optimization."
              />
            </div>
            <div className="custom-service-card custom-service-card-2">
              <ServiceCardComp
                variant="Desktop Service Widget - B"
                title="AI-Powered Sales & Marketing"
                text="Boost sales and marketing results through intelligent automation from leads to campaigns."
              />
            </div>
            <div className="custom-service-card custom-service-card-3">
              <ServiceCardComp
                variant="Desktop Service Widget - C"
                title="Custom AI Tools Development"
                text="Access bespoke AI solutions for workflow automation, data analysis, and customer engagement."
              />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-4 custom-service-tags">
        {ServiceSmallComp && (
          <>
            <ServiceSmallComp labelTitle="AI-Driven Solutions" />
            <ServiceSmallComp labelTitle="LinkedIn Optimization" />
            <ServiceSmallComp labelTitle="Automated Lead Generation" />
            <ServiceSmallComp labelTitle="AI Sales Automation" />
            <ServiceSmallComp labelTitle="Sales Funnel Optimization" />
            <ServiceSmallComp labelTitle="Workflow Automation" />
            <ServiceSmallComp labelTitle="Real-Time Data" />
            <ServiceSmallComp labelTitle="Content Creation AI" />
          </>
        )}
      </div>
    </section>
  );
};
