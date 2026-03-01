'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ripal',
    role: 'Coach',
    content: 'VeeBran made personal branding effortless. Now, I get consistent inbound leads just from LinkedIn.',
  },
  {
    name: 'Noam',
    role: 'Founder',
    content: 'The AI workflows Vishva and her team built saved us 15+ hours a week. What felt like chaos is now structured and scalable.',
  },
  {
    name: 'Sarah',
    role: 'Agency Owner',
    content: 'The LinkedIn strategy completely transformed our inbound. We went from chasing leads to fielding inquiries daily without lifting a finger.',
  },
  {
    name: 'Marcus',
    role: 'Tech Startup CEO',
    content: 'VeeBran\'s automation workflows are next level. We cut our sales cycle in half without needing to hire more sales reps.',
  },
];

export const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }

    // Recalculate on window resize
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#d4ff00]"></div>
            <span className="text-[#d4ff00] font-bold uppercase tracking-widest text-xs">Testimonials</span>
            <div className="w-12 h-px bg-[#d4ff00]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#3b82f6] tracking-tight italic uppercase">
            What Our Clients Say
          </h2>
          <p className="text-zinc-500 font-medium italic mt-6 text-sm tracking-widest uppercase">&larr; Drag to explore &rarr;</p>
        </motion.div>
      </div>

      <div className="max-w-[100vw] overflow-hidden px-6 relative z-10">
        <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing w-full py-4">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8 w-max px-[5vw]"
            whileTap={{ cursor: "grabbing" }}
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="w-[350px] md:w-[450px] flex flex-col p-12 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-[3rem] relative overflow-hidden group hover:border-[#3b82f6]/50 transition-colors duration-500 shadow-2xl"
              >
                {/* Tech background grid */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] group-hover:bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] transition-colors duration-500" />

                <div className="relative z-10 flex-col flex h-full">
                  <div className="mb-8 text-[#d4ff00] text-6xl font-serif italic leading-none absolute -top-4 -left-2 opacity-20">"</div>
                  <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed italic relative z-10 pt-4 flex-grow">
                    {t.content}
                  </p>

                  <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex flex-col">
                      <span className="font-black text-white text-lg tracking-tight uppercase italic">{t.name}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#3b82f6]">{t.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
