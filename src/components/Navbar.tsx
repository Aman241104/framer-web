'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className={`container mx-auto px-6 max-w-5xl transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
        <div className="flex items-center justify-between bg-[#050505] border border-white/5 rounded-full py-2.5 px-6 shadow-2xl relative">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer relative z-10 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10L20 30L30 10" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 15L20 25L25 15" stroke="#d4ff00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[17px] font-bold tracking-tight text-white leading-none">VeeBran</span>
              <span className="text-[6px] font-medium tracking-widest text-zinc-500 uppercase mt-1">BUSINESS CONSULTING</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {[
              { name: 'Why Us', href: '/#why-us' },
              { name: 'Mission', href: '/#mission' },
              { name: 'Works', href: '/#works' },
              { name: 'Services', href: '/#services' },
              { name: 'Blog', href: '/blog' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}

            {/* Contact Dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
            >
              <button className="text-sm font-medium text-[#8a8a8a] group-hover:text-white transition-colors flex items-center gap-1 focus:outline-none">
                Contact Us
              </button>

              <AnimatePresence>
                {contactHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#111111]/90 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl overflow-hidden z-50 p-2"
                  >
                    <Link
                      href="/contact"
                      className="block px-4 py-3 text-sm font-medium text-[#8a8a8a] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/terms"
                      className="block px-4 py-3 text-sm font-medium text-[#8a8a8a] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      Term & Conditions
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex relative z-10">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#262626' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2.5 bg-[#1a1a1a] text-[#ededed] font-medium text-[15px] rounded-[14px] transition-all hover:text-white"
              >
                Let&apos;s Talk
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2 relative z-10" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-[85px] bg-[#0a0a0a]/95 backdrop-blur-3xl z-40 md:hidden mx-4 rounded-3xl border border-white/5 overflow-y-auto h-fit shadow-2xl"
          >
            <div className="flex flex-col p-8 items-center gap-6">
              {[
                { name: 'Why Us', href: '/#why-us' },
                { name: 'Mission', href: '/#mission' },
                { name: 'Works', href: '/#works' },
                { name: 'Services', href: '/#services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-medium text-[#8a8a8a] hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="w-full h-px bg-white/5 my-2"></div>
              <Link
                href="/terms"
                className="text-lg font-medium text-[#8a8a8a] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Terms & Conditions
              </Link>
              <Link href="/contact" className="w-full mt-4" onClick={() => setIsOpen(false)}>
                <motion.button
                  className="w-full py-4 bg-[#121212] border border-white/5 text-white font-medium text-lg rounded-2xl"
                >
                  Let&apos;s Talk
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
