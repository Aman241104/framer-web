'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { BlurText } from '@/components/react-bits/BlurText';

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Background dots */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-8 flex justify-center">
            <BlurText text="LET'S TALK" delay={40} className="text-[#3b82f6]" />
          </h1>
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
              className="lg:col-span-2 bg-[#0d0d0d]/60 backdrop-blur-xl border border-white/5 p-8 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl"
            >
              {/* Form grid background */}
              <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

              <form className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Name <span className="text-[#d4ff00]">*</span></label>
                  <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] focus:shadow-[0_1px_10px_rgba(212,255,0,0.1)] outline-none transition-all italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Email <span className="text-[#d4ff00]">*</span></label>
                  <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] focus:shadow-[0_1px_10px_rgba(212,255,0,0.1)] outline-none transition-all italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Phone <span className="text-[#d4ff00]">*</span></label>
                  <input type="text" placeholder="Phone Number" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] focus:shadow-[0_1px_10px_rgba(212,255,0,0.1)] outline-none transition-all italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Company Name <span className="text-[#d4ff00]">*</span></label>
                  <input type="text" placeholder="Company Name" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] focus:shadow-[0_1px_10px_rgba(212,255,0,0.1)] outline-none transition-all italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Website</label>
                  <input type="text" placeholder="Your Website" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] focus:shadow-[0_1px_10px_rgba(212,255,0,0.1)] outline-none transition-all italic font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Position</label>
                  <input type="text" placeholder="Your Position" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] focus:shadow-[0_1px_10px_rgba(212,255,0,0.1)] outline-none transition-all italic font-medium" />
                </div>
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">What are you looking for?</label>
                  <textarea rows={4} placeholder="Tell us about your goals" className="bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4ff00] focus:shadow-[0_1px_10px_rgba(212,255,0,0.1)] outline-none transition-all resize-none italic font-medium" />
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
              className="flex flex-col gap-8"
            >
              <div className="bg-[#0d0d0d]/60 backdrop-blur-xl border border-white/5 p-10 rounded-[3rem] flex-1 hover:border-white/10 transition-all shadow-2xl">
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

              <div className="bg-[#3b82f6]/90 backdrop-blur-xl p-10 rounded-[3rem] shadow-[0_0_40px_rgba(59,130,246,0.2)] border border-[#3b82f6]/50">
                <h3 className="text-black font-black uppercase tracking-widest text-[10px] mb-4">Quick Response</h3>
                <p className="text-white/90 font-bold italic leading-relaxed">
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
