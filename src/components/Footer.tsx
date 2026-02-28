import React from 'react';
import Link from 'next/link';

export const Footer = () => {
   return (
      <footer className="py-24 bg-background relative overflow-hidden border-t border-white/5">
         <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="flex flex-col items-center mb-16">
               <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
                  <path d="M10 10L20 30L30 10" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 15L20 25L25 15" stroke="#d4ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               <span className="text-4xl font-bold tracking-tight text-white mb-6 italic uppercase italic tracking-tighter">VeeBran</span>
               <span className="text-[#3b82f6] font-black text-2xl uppercase tracking-tighter italic">Let&apos;s Succeed Together</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 text-sm font-black uppercase tracking-widest text-zinc-500 mb-16">
               <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
               <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-zinc-500 font-bold tracking-widest text-sm uppercase mb-16">
               <div className="flex items-center gap-4">
                  <span className="text-zinc-700">Email:</span>
                  <a href="mailto:vishva@veebran.com" className="text-white hover:text-[#3b82f6] transition-colors">vishva@veebran.com</a>
               </div>
               <div className="flex items-center gap-4">
                  <span className="text-zinc-700">Phone:</span>
                  <a href="tel:+918866833360" className="text-white hover:text-[#3b82f6] transition-colors">+ 91 88668 33360</a>
               </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 text-xs font-black uppercase tracking-widest text-zinc-600 mb-16">
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors">LinkedIn</a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4ff00] transition-colors">Instagram</a>
            </div>

            <div className="pt-12 border-t border-white/5">
               <p className="text-zinc-700 text-[10px] font-black uppercase tracking-widest">
                  &copy; 2025 VeeBran. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};
