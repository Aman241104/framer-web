'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30 selection:text-accent">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-6"
          >
            Let's Talk
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-8 text-[#3b82f6] tracking-tight"
          >
            We're Here To Help
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Our team is ready to support you with expert advice & solutions.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">First Name *</label>
                <input 
                  type="text" 
                  placeholder="David" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Last Name *</label>
                <input 
                  type="text" 
                  placeholder="Johnson" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Contact Number *</label>
                <input 
                  type="text" 
                  placeholder="+xx xxxxx xxxxx" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Email *</label>
                <input 
                  type="email" 
                  placeholder="example@mail.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Company Name *</label>
                <input 
                  type="text" 
                  placeholder="Ex. StaticMania" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Select Service *</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3b82f6] transition-colors appearance-none">
                  <option className="bg-black">Select Your Service</option>
                  <option className="bg-black">AI Automation</option>
                  <option className="bg-black">Personal Branding</option>
                  <option className="bg-black">Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Project Budget *</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3b82f6] transition-colors appearance-none">
                  <option className="bg-black">Select Your Range</option>
                  <option className="bg-black">$1k - $5k</option>
                  <option className="bg-black">$5k - $10k</option>
                  <option className="bg-black">$10k+</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Project Details</label>
                <textarea 
                  placeholder="Tell us more about your project" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#3b82f6] transition-colors resize-none"
                />
              </div>
              
              <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-12 py-4 bg-[#d4ff00] text-black font-black rounded-xl uppercase tracking-widest text-xs"
                >
                  Submit
                </motion.button>
                <p className="text-zinc-500 text-xs font-medium italic">
                  We will contact you within 24 business hours.
                </p>
              </div>
            </form>

            {/* Bottom Contact Info */}
            <div className="relative z-10 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                     <MapPin size={24} className="text-[#3b82f6]" />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-2">Head Office</h4>
                  <p className="text-white font-bold">Gujarat, India</p>
               </div>
               <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                     <Mail size={24} className="text-[#3b82f6]" />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-2">Email</h4>
                  <a href="mailto:vishva@veebran.com" className="text-white font-bold hover:text-orange-500 transition-colors">vishva@veebran.com</a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default ContactPage;
