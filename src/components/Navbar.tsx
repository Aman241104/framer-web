'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Why Us', href: '/#why-us' },
  { name: 'Mission', href: '/#mission' },
  { name: 'Works', href: '/#works' },
  { name: 'Services', href: '/#services' },
  { 
    name: 'Contact Us', 
    href: '#', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'Contact', href: '/contact' },
      { name: 'Term & Conditions', href: '/terms-and-conditions' }
    ]
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
      <div className={`container mx-auto px-6 max-w-6xl transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
        <div className="flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-2 px-8 shadow-2xl">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform">
                <path d="M10 10L20 30L30 10" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 15L20 25L25 15" stroke="#d4ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">VeeBran</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1 py-4"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className={`opacity-50 transition-transform ${hoveredLink === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {link.hasDropdown && (
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2"
                      >
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Let's Talk Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-white/10 border border-white/10 text-white font-semibold rounded-full text-sm hover:bg-white/20 transition-all flex items-center gap-2 group"
              >
                Let's Talk
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="fixed inset-0 top-[100px] bg-black/95 backdrop-blur-2xl z-40 md:hidden m-6 rounded-[2rem] border border-white/10 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 p-10 items-center">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="flex flex-col items-center">
                  <Link
                    href={link.href}
                    className="text-3xl font-bold tracking-tight text-white hover:text-accent"
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="flex flex-col items-center mt-4 gap-4">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-xl font-medium text-zinc-500 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="w-full max-w-xs" onClick={() => setIsOpen(false)}>
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full py-5 bg-white text-black font-bold rounded-2xl text-xl mt-4 flex items-center justify-center gap-2"
                >
                  Let's Talk
                  <ArrowUpRight size={24} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
