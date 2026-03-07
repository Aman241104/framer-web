'use client';

import React from 'react';
import ServiceSmallFramerComponent from '@/framer/section-service/service-small';
import LabelFramerComponent from '@/framer/element/label';

const ServiceSmall = ServiceSmallFramerComponent as any;
const Label = LabelFramerComponent as any;

export const Services = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 w-full max-w-6xl mx-auto">
        <div className="bg-[#121212] rounded-[28px] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#161616] border border-white/5 group relative overflow-hidden">
          {/* Background Grid & Glow */}
          <div className="absolute top-0 left-0 w-full h-[60%] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)] pointer-events-none z-0"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-blue-600/15 blur-[50px] rounded-full pointer-events-none z-0"></div>

          <h3 className="text-xl md:text-[22px] font-medium text-white mb-6 leading-snug tracking-tight relative z-10">
            Personal Branding With<br />AI
          </h3>
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/service-1.png" alt="Personal Branding" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <p className="text-[#a1a1aa] text-sm md:text-[15px] leading-relaxed max-w-[280px] relative z-10">
            Enhance your LinkedIn presence and influence with AI-driven content and optimization.
          </p>
        </div>

        <div className="bg-[#121212] rounded-[28px] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#161616] border border-white/5 group relative overflow-hidden">
          {/* Background Grid & Glow */}
          <div className="absolute top-0 left-0 w-full h-[60%] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)] pointer-events-none z-0"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-amber-500/15 blur-[50px] rounded-full pointer-events-none z-0"></div>

          <h3 className="text-xl md:text-[22px] font-medium text-white mb-6 leading-snug tracking-tight relative z-10">
            AI-Powered Sales &<br />Marketing
          </h3>
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-[0_0_30px_rgba(245,158,11,0.1)] relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/service-2.png" alt="AI-Powered Sales" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <p className="text-[#a1a1aa] text-sm md:text-[15px] leading-relaxed max-w-[280px] relative z-10">
            Boost sales and marketing results through intelligent automation from leads to campaigns.
          </p>
        </div>

        <div className="bg-[#121212] rounded-[28px] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#161616] border border-white/5 group relative overflow-hidden">
          {/* Background Grid & Glow */}
          <div className="absolute top-0 left-0 w-full h-[60%] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)] pointer-events-none z-0"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-blue-500/15 blur-[50px] rounded-full pointer-events-none z-0"></div>

          <h3 className="text-xl md:text-[22px] font-medium text-white mb-6 leading-snug tracking-tight relative z-10">
            Custom AI Tools<br />Development
          </h3>
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/service-3.png" alt="Custom AI Tools" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <p className="text-[#a1a1aa] text-sm md:text-[15px] leading-relaxed max-w-[280px] relative z-10">
            Access bespoke AI solutions for workflow automation, data analysis, and customer engagement.
          </p>
        </div>
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
