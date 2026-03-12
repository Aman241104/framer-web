'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageSquare, Zap } from 'lucide-react';
import Link from 'next/link';

export const ContactPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem('contact_popup_shown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleScroll = () => {
      if (hasShown) return;

      const servicesSection = document.getElementById('services');
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();
      // If the bottom of the services section has passed the top of the viewport
      // and we're scrolling down (rect.bottom < 0)
      if (rect.bottom < 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('contact_popup_shown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 z-[200] md:max-w-[380px] w-full mx-auto md:mx-0"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
              
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col gap-5 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                  <Zap className="w-6 h-6 fill-current" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                    Ready to scale?
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    Found the service you need? Let&apos;s build your custom AI roadmap and start growing.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <Link 
                    href="/contact"
                    onClick={closePopup}
                    className="w-full h-12 flex items-center justify-center gap-2 bg-white text-black rounded-2xl font-semibold text-sm hover:bg-blue-50 transition-colors group/btn"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a 
                    href="https://calendly.com/vishva-veebran/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closePopup}
                    className="w-full h-12 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white rounded-2xl font-medium text-sm hover:bg-white/10 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book a Strategy Call
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
