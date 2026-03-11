'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Mission', href: '/#mission' },
  { label: 'Services', href: '/#services' },
  { label: 'Blog', href: '/blog' },
];

const Navbar = () => {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      // Only intercept if we're already on the homepage
      if (window.location.pathname === '/') {
        e.preventDefault();
        const id = href.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
      closeMobileMenu();
    }
  };

  return (
    <>
      <div className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[854px]">
        <div
          className="w-full h-[56px] flex items-center justify-between px-[18px] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          style={{
            background: 'rgba(5, 5, 5, 0.4)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)'
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center h-full shrink-0" onClick={closeMobileMenu}>
            <img
              src="https://framerusercontent.com/images/Z6aYVOMp3JvPzbDPEtSwnu3aEmQ.png"
              alt="VeeBran"
              className="h-[26px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-[30px]">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-[#afafaf] hover:text-white transition-colors text-base font-normal tracking-wide"
              >
                {item.label}
              </Link>
            ))}

            {/* Contact Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsContactDropdownOpen(true)}
              onMouseLeave={() => setIsContactDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-[#afafaf] hover:text-white transition-colors text-base font-normal tracking-wide py-4 cursor-pointer outline-none">
                Contact Us
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isContactDropdownOpen ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className={`absolute top-[45px] left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${isContactDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div
                  className="w-48 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col"
                  style={{
                    background: 'rgba(5, 5, 5, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.06)'
                  }}
                >
                  <Link href="/contact" className="px-5 py-3 text-base text-[#afafaf] hover:text-white hover:bg-[#1a1a1a] transition-colors font-normal">
                    Contact Us
                  </Link>
                  <Link href="/terms" className="px-5 py-3 text-base text-[#afafaf] hover:text-white hover:bg-[#1a1a1a] transition-colors border-t border-white/5 font-normal">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-3 h-full shrink-0">
            {/* Let's Talk button (desktop only) */}
            <div className="hidden md:block">
              <a 
                href="https://calendly.com/vishva-veebran/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-talk-wrap group"
              >
                <div className="nav-talk-border"></div>
                <div className="nav-talk-glow"></div>
                <div className="nav-talk-btn">
                  <span className="font-normal">Let's Talk</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="19" x2="19" y2="5"></line>
                    <polyline points="9 5 19 5 19 15"></polyline>
                  </svg>
                </div>
              </a>
            </div>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 transition-colors gap-[5px] shrink-0"
              aria-label="Toggle menu"
            >
              <span className={`block w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
              <span className={`block w-[18px] h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[98] md:hidden"
              onClick={closeMobileMenu}
            />

            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-[76px] left-1/2 -translate-x-1/2 w-[95%] max-w-[400px] z-[99] md:hidden rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              style={{
                background: 'rgba(8, 8, 8, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.07)'
              }}
            >
              <div className="p-5 flex flex-col gap-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#afafaf] hover:text-white hover:bg-white/5 transition-all text-[16px] font-normal"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="h-px bg-white/5 my-2" />

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                >
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#afafaf] hover:text-white hover:bg-white/5 transition-all text-[16px] font-normal"
                  >
                    Contact Us
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 + 0.05 }}
                >
                  <Link
                    href="/terms"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#afafaf] hover:text-white hover:bg-white/5 transition-all text-[16px] font-normal"
                  >
                    Terms & Conditions
                  </Link>
                </motion.div>

                <div className="pt-2 flex w-full">
                  <a
                    href="https://calendly.com/vishva-veebran/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="nav-talk-wrap group w-full flex"
                  >
                    <div className="nav-talk-border"></div>
                    <div className="nav-talk-glow"></div>
                    <div className="nav-talk-btn w-full flex justify-center py-3 font-normal">
                      <span>Let's Talk</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="19" x2="19" y2="5"></line>
                        <polyline points="9 5 19 5 19 15"></polyline>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
