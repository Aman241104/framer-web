'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'chatgpt',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" className="fill-white">
          <path d="M22.28 9.82a5.98 5.98 0 0 0-.51-4.91 6.04 6.04 0 0 0-6.51-2.9 6.06 6.06 0 0 0-10.28 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.98 5.98 0 0 0 10.28-2.17 5.99 5.99 0 0 0 4-2.9 6.05 6.05 0 0 0-.74-7.1zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.15-1.64zM2.34 7.9a4.48 4.48 0 0 1 2.37-1.97v5.67c0 .28.15.53.39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79a4.5 4.5 0 0 1-1.65-6.11zm16.6 3.86l-5.84-3.37 2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.68zm2.01-3.03l-.14-.08-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23v-2.33a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V5.56a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.4.68v6.73zM9.4 10.5l2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5v-3z" />
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">ChatGPT</span>
      </div>
    ),
  },
  {
    name: 'perplexity',
    icon: (
      <div className="flex items-center gap-1.5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mb-0.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" strokeWidth="1.5" />
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">perplexity</span>
      </div>
    ),
  },
  {
    name: 'claude',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M3.127 10.604 6.262 8.844l.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.367z"/>
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">Claude</span>
      </div>
    ),
  },
  {
    name: 'make',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto fill-white">
          <circle cx="20" cy="12" r="4" fill="white" />
          <circle cx="12" cy="20" r="4" fill="white" />
          <circle cx="28" cy="20" r="4" fill="white" />
          <circle cx="20" cy="28" r="4" fill="white" />
        </svg>
        <span className="text-white text-[22px] font-bold tracking-tighter">make</span>
      </div>
    ),
  },
  {
    name: 'elevenlabs',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M0 0h2v10H0zm4 0h2v10H4z"/>
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">ElevenLabs</span>
      </div>
    ),
  },
  {
    name: 'tata',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M9.774 11.568c.193-1.322.168-2.013-1.768-1.906-2.223.124-4.476.265-7.849 1.027A5.63 5.63 0 0 0 0 12c0 1.52.618 2.99 1.787 4.254 1.06 1.144 2.556 2.095 4.326 2.752a15.48 15.48 0 0 0 2.014.588c.13-.527.959-3.907 1.616-7.823l.03-.202m14.07-.88c-3.372-.762-5.624-.902-7.846-.778-1.936.107-1.961.798-1.768 2.12l.03.202c.657 3.916 1.486 7.296 1.616 7.823a15.48 15.48 0 0 0 2.014-.588c1.77-.657 3.266-1.608 4.326-2.752C23.382 14.99 24 13.52 24 12c0-.145-.008-.288-.023-.43a11.5 11.5 0 0 0-.133-.882z"/>
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">TATA</span>
      </div>
    ),
  },
  {
    name: 'clickup',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 1000 1000" fill="white">
          <path d="M298.67 649.36 377.42 589c41.82 54.6 86.23 79.76 135.72 79.76 49.21 0 92.41-24.87 132.35-79l79.84 58.88C667.74 726.74 596.08 768 513.14 768c-82.66 0-154.98-41-214.47-118.64zm214.22-262.17L372.72 508 308 432.82 513.17 256l203.61 177-65.08 74.83z"/>
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">ClickUp</span>
      </div>
    ),
  },
  {
    name: 'jasper',
    icon: (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_white]" />
        </div>
        <span className="text-white text-[20px] font-bold tracking-tight">Jasper</span>
      </div>
    ),
  },
  {
    name: 'n8n',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v10h-2V7zm-4 4h2v6H7v-6zm8 0h2v6h-2v-6z"/>
        </svg>
        <span className="text-white text-[20px] font-bold tracking-tighter">n8n</span>
      </div>
    ),
  },
  {
    name: 'make-2',
    icon: (
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto fill-white">
          <circle cx="20" cy="12" r="4" fill="white" />
          <circle cx="12" cy="20" r="4" fill="white" />
          <circle cx="28" cy="20" r="4" fill="white" />
          <circle cx="20" cy="28" r="4" fill="white" />
        </svg>
        <span className="text-white text-[22px] font-bold tracking-tighter">make</span>
      </div>
    ),
  },
];

export const LogoMarquee = () => {
  return (
    <div className="w-full flex justify-center pb-8 pt-0 z-0 opacity-80 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-[1400px]">
        <p className="text-[#E5A800] text-center text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] mb-10">
          Our Solutions Leverage Tools Trusted By
        </p>

        {/* Horizontal Marquee Container */}
        <div className="w-full relative flex items-center overflow-hidden h-[40px]">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            className="flex items-center w-max"
          >
            {/* Duplicated exactly for a perfect -50% seamless loop. Padding is used instead of gap for accurate width calculation */}
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center shrink-0 px-8 md:px-12"
              >
                {logo.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
