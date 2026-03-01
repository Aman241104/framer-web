'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import FaultyTerminal from './FaultyTerminal';
import { BlurText } from './react-bits/BlurText';

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Terminal Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <FaultyTerminal
          scale={1.2}
          gridMul={[3, 2]}
          digitSize={1.5}
          timeScale={0.1}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#d4ff00"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
          <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase">We Are Online To Chat</span>
        </motion.div>

        <h1 className="text-5xl md:text-[90px] font-black italic tracking-tighter mb-8 leading-[1] md:leading-[0.9] uppercase flex flex-col items-center justify-center -mt-4">
          <BlurText
            text="Branding & Automation"
            delay={50}
            className="text-[#d4ff00]"
          />
          <BlurText
            text="That Moves"
            delay={50}
            className="text-[#3b82f6]"
          />
          <BlurText
            text="Business Forward."
            delay={50}
            className="text-white"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-2xl text-zinc-500 max-w-4xl mx-auto mb-12 leading-relaxed font-medium italic"
        >
          We blend human-first strategy with AI-powered systems to grow your brand, automate your sales, and help you scale with clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Link href="/contact">
            <button className="flex items-center gap-3 px-10 py-5 rounded-full bg-[#d4ff00] text-black text-xl font-black uppercase tracking-widest hover:bg-[#c4ed00] transition-all group">
              Get in Touch
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
