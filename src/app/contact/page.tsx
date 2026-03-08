"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden font-sans relative">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#3B82F6] tracking-tight mb-4">
          Let's Talk
        </h1>
        <p className="text-[#A6A6A6] text-sm md:text-base max-w-2xl mx-auto">
          Tell us a little about your business and what you're working on. We'll take it from there.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 pb-20 flex justify-center">
        <div className="w-full max-w-4xl bg-[#111111] rounded-[24px] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Subtle Grid Background for the form card if needed, or pure dark */}
          <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />

          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/90">Name</label>
              <input
                type="text"
                placeholder="David Johnson"
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E5A800]/50 transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/90">Email</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E5A800]/50 transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label className="text-sm font-medium text-white/90">Phone</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E5A800]/50 transition-colors"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label className="text-sm font-medium text-white/90">Company Name</label>
              <input
                type="text"
                placeholder="Ex. StartoMania"
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E5A800]/50 transition-colors"
              />
            </div>

            {/* Website */}
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label className="text-sm font-medium text-white/90">Website</label>
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E5A800]/50 transition-colors"
              />
            </div>

            {/* Position */}
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label className="text-sm font-medium text-white/90">Position</label>
              <input
                type="text"
                placeholder="Founder, CEO, etc."
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E5A800]/50 transition-colors"
              />
            </div>

            {/* What are you looking for? */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-white/90">What are you looking for?</label>
              <textarea
                placeholder="Tell us what you're working on and how we can help"
                rows={4}
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#E5A800]/50 transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Row */}
            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#D4FF00] hover:bg-[#bce600] text-black font-bold text-sm transition-colors"
              >
                Send Message
              </button>
              <div className="text-white/40 text-xs text-center sm:text-right">
                <p>Or WhatsApp us directly: +91 88668 33360</p>
                <p>Mail us at vishva@veebran.com</p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Info Cards Row */}
      <section className="px-6 pb-24 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
        {/* Head Office */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white/40">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-1">Head Office</h4>
            <p className="text-white/50 text-xs">Gujarat, India</p>
          </div>
        </div>

        {/* Divider line (hidden on mobile) */}
        <div className="hidden md:block w-px h-16 bg-white/10"></div>

        {/* Email */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white/40">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
            <p className="text-white/50 text-xs">vishva@veebran.com</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
