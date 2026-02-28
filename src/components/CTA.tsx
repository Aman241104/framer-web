'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background border-t border-white/5">
      <div className="container mx-auto">
        <div className="relative rounded-[5rem] bg-[#0d0d0d] border border-white/5 p-12 md:p-32 text-center overflow-hidden group hover:border-white/10 transition-all duration-700">
          {/* Card Grid Background */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-black mb-12 tracking-tighter italic text-[#3b82f6] uppercase leading-none"
            >
              Ready to Grow?
            </motion.h2>

            <p className="text-zinc-500 italic max-w-xl mx-auto mb-16 text-xl font-bold uppercase tracking-widest">
              Let&apos;s talk about what&apos;s possible for your business. <br />
              No pressure — just a real conversation.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-10 py-5 bg-[#d4ff00] text-black font-black uppercase tracking-widest text-xl rounded-2xl hover:bg-[#c4ed00] transition-all"
              >
                Get in Touch
                <ArrowUpRight size={24} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
