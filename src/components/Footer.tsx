import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-zinc-500 font-bold tracking-widest text-sm uppercase mb-20">
           <div className="flex items-center gap-4">
              <span>Email:</span>
              <a href="mailto:vishva@veebran.com" className="text-white hover:text-orange-500 transition-colors">vishva@veebran.com</a>
           </div>
           <div className="flex items-center gap-4">
              <span>Location:</span>
              <span className="text-white">India</span>
           </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 text-sm font-black uppercase tracking-widest text-zinc-600 mb-20">
           <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
           <a href="#mission" className="hover:text-white transition-colors">Mission</a>
           <a href="#works" className="hover:text-white transition-colors">Works</a>
           <a href="#services" className="hover:text-white transition-colors">Services</a>
           <a href="#contact" className="hover:text-white transition-colors">Contact</a>
           <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>

        <div className="pt-20 border-t border-white/5">
           <p className="text-zinc-500 text-xs font-medium tracking-widest uppercase">
              Copyright "VeeBran". All right reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};
