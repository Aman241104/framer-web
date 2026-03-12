'use client';

import React, { useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ServiceSmallFramerComponent from '@/framer/section-service/service-small';
import LabelFramerComponent from '@/framer/element/label';
import ServiceModal, { ServiceData } from './ServiceModal';

gsap.registerPlugin(ScrollTrigger);

const ServiceSmall = ServiceSmallFramerComponent as any;
const Label = LabelFramerComponent as any;

const servicesData: ServiceData[] = [
  {
    id: "personal-branding",
    title: "Personal Branding with AI",
    description: "Build a LinkedIn presence and personal brand that attracts clients - consistently and on autopilot.",
    tags: ["LinkedIn", "Content", "Thought Leadership"],
    image: "/service-1.png",
    glowColor: "bg-blue-600",
  },
  {
    id: "ai-sales",
    title: "AI-Powered Sales & Marketing",
    description: "From finding the right leads to keeping your best clients - we build the system that runs your revenue.",
    tags: ["Lead Generation", "Sales", "Client Retention"],
    image: "/service-2.png",
    glowColor: "bg-amber-500",
  },
  {
    id: "custom-ai",
    title: "Custom AI Tool Development",
    description: "We build AI tools and automation workflows tailored to your business - so you do more with less.",
    tags: ["AI Tools", "Automation", "Workflows"],
    image: "/service-3.png",
    glowColor: "bg-blue-500",
  }
];

export const Services = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const ServiceSmallComp = ServiceSmall?.Responsive || ServiceSmall;
  const LabelComp = Label?.Responsive || Label;

  useGSAP(() => {
    // Stagger entrance of service cards
    gsap.to('.service-card-wrapper', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Continuous slow Ken Burns effect on card images
    gsap.utils.toArray('.ken-burns-img').forEach((img: any) => {
      gsap.to(img, {
        scale: 1.15,
        rotation: 1,
        xPercent: 1.5,
        yPercent: 1.5,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="pt-[20px] md:pt-[40px] pb-[40px] md:pb-[60px] container mx-auto px-6 relative z-10 scroll-mt-32">
      <div className="flex flex-col items-center mb-8 md:mb-12">
        {LabelComp && <LabelComp label="What We Do" variant="Secondary" />}
      </div>
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-[48px] font-medium text-[#3B82F6] tracking-tight leading-tight mb-4">
          Expertise That Drives Quality
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-lg font-normal">
          Three focused services. One trusted partner.
        </p>
      </div>

      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 w-full max-w-6xl mx-auto">
        {servicesData.map((service, index) => {
          // Dynamic shadow colors derived from glowColor class for Tilt wrapper
          const shadowColorMap: Record<string, string> = {
            'bg-blue-600': 'rgba(59,130,246,0.1)',
            'bg-amber-500': 'rgba(245,158,11,0.1)',
            'bg-blue-500': 'rgba(59,130,246,0.1)'
          };

          return (
            <Tilt
              key={service.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
              gyroscope={true}
              className="service-card-wrapper opacity-0 translate-y-16 cursor-pointer"
            >
              <div
                className="bg-[#121212] rounded-[24px] md:rounded-[28px] p-6 md:p-10 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-2xl hover:bg-[#161616] border border-white/5 h-full relative overflow-hidden group"
                onClick={() => setSelectedService(service)}
              >
                <div className="absolute top-0 left-0 w-full h-[60%] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)] pointer-events-none z-0"></div>

                {/* Dynamic Glow */}
                <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] ${service.glowColor}/15 blur-[50px] rounded-full pointer-events-none z-0 group-hover:${service.glowColor}/30 transition-colors duration-700`}></div>

                <h3
                  className="text-lg md:text-[30px] font-medium text-white mb-4 md:mb-6 leading-snug tracking-tight relative z-10"
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />

                <div
                  className="w-full aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-8 border border-white/10 relative z-10"
                  style={{ boxShadow: `0 0 30px ${shadowColorMap[service.glowColor]}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.title.replace('<br />', ' ')} className="ken-burns-img w-full h-full object-cover origin-center scale-[1.05]" />
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-4 relative z-10 md:hidden">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#a1a1aa] text-xs md:text-[15px] leading-relaxed max-w-[280px] relative z-10 line-clamp-2">
                  {service.description.split('.')[0]}.
                </p>

                {/* Arrow indicator for interactivity */}
                <div className="mt-4 md:mt-6 flex items-center gap-2 text-[#E5A800] text-xs md:text-sm font-medium opacity-100 md:opacity-0 translate-y-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10">
                  <span>Learn more</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Tilt>
          );
        })}
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

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
};
