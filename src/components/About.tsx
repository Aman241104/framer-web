'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.utils.toArray('.about-text').forEach((el: any) => {
      gsap.fromTo(el,
        { color: '#52525b' }, // zinc-600
        {
          color: '#ffffff',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          }
        }
      );
    });

    gsap.fromTo('.about-image',
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'power3.inOut',
        duration: 1.5,
        scrollTrigger: {
          trigger: '.about-image-container',
          start: 'top 75%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-12 md:py-32 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

          {/* Left Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40 flex flex-col gap-4 md:gap-6 px-2 md:px-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="flex items-center gap-4 mb-2 md:mb-4"
              >
                <div className="w-8 md:w-12 h-px bg-[#E5A800]"></div>
                <span className="text-[#E5A800] font-medium tracking-widest text-[10px] md:text-xs">Who We Are</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="text-3xl md:text-[48px] font-medium text-white tracking-tight leading-[1.2] md:leading-[1.25]"
              >
                We Help You Grow  -  <br className="hidden md:block" /><span className="text-zinc-500">With Strategy, Systems & AI.</span>
              </motion.h2>
            </div>
          </div>

          {/* Right Scrolling Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="p-6 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md"
            >
              <p className="about-text text-[15px] md:text-[24px] text-zinc-400 font-normal leading-relaxed mb-6 md:mb-8">
                VeeBran is a business consulting partner for founders, coaches, and startup builders. We work at the intersection of personal branding, sales, and AI - helping you show up confidently, attract the right clients, and build systems that scale.
              </p>
              <p className="about-text text-[15px] md:text-[24px] text-zinc-400 font-normal leading-relaxed">
                Whether you&apos;re just starting out or ready to grow faster - we make it simple, strategic, and real.
              </p>
            </motion.div>

            <div
              className="about-image-container mt-4 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative h-[300px] md:h-[400px]"
            >
              <motion.img
                src="/veebran-assets/image_23.jpg"
                alt="VeeBran Consulting Meeting"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="about-image w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
