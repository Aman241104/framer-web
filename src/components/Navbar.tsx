'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[854px]">
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
        <Link href="/" className="flex items-center h-full shrink-0">
          <img
            src="https://framerusercontent.com/images/Z6aYVOMp3JvPzbDPEtSwnu3aEmQ.png"
            alt="VeeBran"
            className="h-[26px] w-auto object-contain"
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-[30px]">
          {['Why Us', 'Mission', 'Works', 'Services'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#afafaf] hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {item}
            </Link>
          ))}

          {/* Contact Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsContactDropdownOpen(true)}
            onMouseLeave={() => setIsContactDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[#afafaf] hover:text-white transition-colors text-sm font-medium tracking-wide py-4 cursor-pointer outline-none">
              Contact Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isContactDropdownOpen ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Dropdown Menu */}
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
                <Link href="/contact" className="px-5 py-3 text-sm text-[#afafaf] hover:text-white hover:bg-[#1a1a1a] transition-colors">
                  Contact Us
                </Link>
                <Link href="/terms" className="px-5 py-3 text-sm text-[#afafaf] hover:text-white hover:bg-[#1a1a1a] transition-colors border-t border-white/5">
                  Term & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex items-center h-full">
          <Link
            href="/contact"
            className="nav-talk-wrap group"
          >
            <div className="nav-talk-border"></div>
            <div className="nav-talk-glow"></div>
            <div className="nav-talk-btn">
              <span>Let's Talk</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
