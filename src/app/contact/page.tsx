'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Background dots */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic tracking-tighter text-[#3b82f6] uppercase mb-8"
          >
            Let&apos;s Talk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto mb-20 italic text-xl"
          >
            Tell us a little about your business and what you&apos;re working on. <br />
            We&apos;ll take it from there.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-[#0d0d0d] border border-white/5 p-8 md:p-16 rounded-[3rem] relative overflow-hidden"
            >
              {/* Form grid background */}
              <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px]" />
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Name *</label>
                  <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] outline-none transition-colors italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Email *</label>
                  <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] outline-none transition-colors italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Phone *</label>
                  <input type="text" placeholder="Phone Number" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] outline-none transition-colors italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Company Name *</label>
                  <input type="text" placeholder="Company Name" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] outline-none transition-colors italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Website</label>
                  <input type="text" placeholder="Your Website" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] outline-none transition-colors italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Position</label>
                  <input type="text" placeholder="Your Position" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] outline-none transition-colors italic font-medium" />
                </div>
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">What are you looking for?</label>
                  <textarea rows={4} placeholder="Tell us about your goals" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] outline-none transition-colors resize-none italic font-medium" />
                </div>
                
                <div className="md:col-span-2 pt-6">
                  <button type="submit" className="w-full md:w-auto bg-[#d4ff00] text-black font-black uppercase tracking-widest text-[10px] py-6 px-16 rounded-2xl hover:bg-[#c4ed00] transition-all flex items-center justify-center gap-2">
                    Send Message
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-10"
            >
              <div className="bg-[#0d0d0d] border border-white/5 p-10 rounded-[3rem] flex-1">
                <h3 className="text-[#d4ff00] font-black uppercase tracking-widest text-[10px] mb-8">Contact Info</h3>
                <div className="flex flex-col gap-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#3b82f6]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-700 mb-1">Mail Us</span>
                      <a href="mailto:vishva@veebran.com" className="text-zinc-400 hover:text-white transition-colors italic font-bold">vishva@veebran.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#3b82f6]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-700 mb-1">WhatsApp Us</span>
                      <a href="tel:+918866833360" className="text-zinc-400 hover:text-white transition-colors italic font-bold">+91 88668 33360</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#3b82f6]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-700 mb-1">Location</span>
                      <span className="text-zinc-400 italic font-bold">Gujarat, India</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#3b82f6] p-10 rounded-[3rem]">
                <h3 className="text-black font-black uppercase tracking-widest text-[10px] mb-4">Quick Response</h3>
                <p className="text-white/80 font-bold italic leading-relaxed">
                  We usually respond within 24 business hours to all inquiries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
