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
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[200] md:max-w-[360px] w-auto"
        >
          <div className="relative group">
            {/* Subtle glow border */}
            <div className="absolute -inset-px bg-gradient-to-r from-blue-600/50 to-emerald-500/50 rounded-2xl md:rounded-3xl blur-[2px] opacity-40"></div>
            
            <div className="relative bg-[#080808]/95 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Background accent - reduced size on mobile */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-3xl rounded-full -mr-12 -mt-12 pointer-events-none"></div>
              
              <button 
                onClick={closePopup}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors z-20"
                aria-label="Close popup"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex flex-col gap-4 md:gap-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg md:text-2xl font-medium text-white tracking-tight leading-none mb-1">
                      Ready to scale?
                    </h3>
                    <p className="text-zinc-500 text-[11px] md:text-xs uppercase tracking-widest font-medium">
                      Tailored AI Solutions
                    </p>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed hidden sm:block">
                  Found the service you need? Let&apos;s build your custom AI roadmap and start growing.
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 md:pt-2">
                  <Link 
                    href="/contact"
                    onClick={closePopup}
                    className="flex-1 h-11 md:h-12 flex items-center justify-center gap-2 bg-white text-black rounded-xl md:rounded-2xl font-semibold text-sm hover:bg-blue-50 transition-colors group/btn"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a 
                    href="https://calendly.com/vishva-veebran/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closePopup}
                    className="flex-1 h-11 md:h-12 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white rounded-xl md:rounded-2xl font-medium text-xs md:text-sm hover:bg-white/10 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>Book Call</span>
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
