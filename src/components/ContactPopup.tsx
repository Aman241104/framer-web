'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageSquare, Zap } from 'lucide-react';
import Link from 'next/link';

export const ContactPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem('contact_popup_shown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleScroll = () => {
      if (hasShown) return;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const servicesSection = document.getElementById('services');
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();
      
      // TRIGGER CONDITION:
      // 1. Bottom of services is above the viewport (scrolled past it)
      // 2. We are scrolling DOWN (to avoid popping when scrolling back up)
      // 3. We are NOT yet at the very bottom (footer area)
      const isPastServices = rect.bottom < 0;
      const isNotAtBottom = (window.innerHeight + window.scrollY) < document.documentElement.scrollHeight - 300;

      if (isPastServices && scrollingDown && isNotAtBottom && !hasShown) {
        // Wait 1.5 seconds before showing to make it feel less like a "jump scare"
        const timer = setTimeout(() => {
          setIsVisible(true);
          setHasShown(true);
          sessionStorage.setItem('contact_popup_shown', 'true');
        }, 1500);
        
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[200] md:max-w-[400px] w-auto"
        >
          <div className="relative group">
            {/* Ultra-thin gradient border for premium feel */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/40 via-emerald-500/40 to-blue-500/40 rounded-[24px] md:rounded-[32px] blur-[1px]"></div>
            
            <div className="relative bg-[#050505]/80 border border-white/10 rounded-[24px] md:rounded-[32px] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-[24px] overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[40px] rounded-full pointer-events-none animate-pulse"></div>
              
              <button 
                onClick={closePopup}
                className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/10 text-zinc-500 hover:text-white transition-all duration-300 z-20"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Human Touch: Founder Avatar + Icon Hybrid */}
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      <Zap className="w-6 h-6 fill-current" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-[17px] md:text-xl font-medium text-white tracking-tight leading-tight">
                      Ready to build your AI roadmap?
                    </h3>
                    <p className="text-zinc-500 text-[11px] md:text-xs uppercase tracking-[0.1em] font-semibold mt-1">
                      Strategy Team Online
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <Link 
                    href="/contact"
                    onClick={closePopup}
                    className="flex-[1.5] h-11 flex items-center justify-center gap-2 bg-white text-black rounded-xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn shadow-lg"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a 
                    href="https://calendly.com/vishva-veebran/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closePopup}
                    className="flex-1 h-11 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white rounded-xl font-medium text-[13px] hover:bg-white/10 transition-all duration-300"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
