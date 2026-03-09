"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const infoCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: 'Head Office',
    value: 'Gujarat, India',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'vishva@veebran.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 88668 33360',
  },
];

const formFields = [
  { label: 'Name', type: 'text', placeholder: 'David Johnson', span: 1 },
  { label: 'Email', type: 'email', placeholder: 'example@mail.com', span: 1 },
  { label: 'Phone', type: 'tel', placeholder: '+91 XXXXX XXXXX', span: 1 },
  { label: 'Company Name', type: 'text', placeholder: 'Ex. StartoMania', span: 1 },
  { label: 'Website', type: 'url', placeholder: 'https://example.com', span: 1 },
  { label: 'Position', type: 'text', placeholder: 'Founder, CEO, etc.', span: 1 },
];

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden font-sans relative">
      <Navbar />

      {/* Hero */}
      <section className="pt-44 pb-20 px-6 text-center relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/60 text-xs font-medium tracking-wide">We are online to chat</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4"
        >
          Let&apos;s <span className="text-[#3B82F6]">Talk</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[#A6A6A6] text-base max-w-xl mx-auto"
        >
          Tell us about your business and what you&apos;re working on. We&apos;ll take it from there.
        </motion.p>
      </section>

      {/* Info Cards */}
      <section className="px-6 pb-12 flex flex-wrap justify-center gap-6">
        {infoCards.map((card, i) => (
          <motion.div
            key={card.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)' }}
            className="flex items-center gap-4 bg-[#111] border border-white/8 rounded-2xl px-6 py-4 cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/50">
              {card.icon}
            </div>
            <div>
              <p className="text-white/40 text-xs font-medium">{card.label}</p>
              <p className="text-white text-sm font-semibold">{card.value}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-24 flex justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-[#0d0d0d] rounded-[28px] p-8 md:p-12 border border-white/6 shadow-2xl relative overflow-hidden"
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 relative z-10"
          >
            Send us a message
          </motion.h2>

          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field, i) => (
              <motion.div
                key={field.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="flex flex-col gap-2"
              >
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  onFocus={() => setFocused(field.label)}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === field.label
                      ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                      : 'border-white/8 hover:border-white/15'
                    }`}
                />
              </motion.div>
            ))}

            {/* Textarea */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="flex flex-col gap-2 md:col-span-2"
            >
              <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">What are you looking for?</label>
              <textarea
                placeholder="Tell us what you're working on and how we can help..."
                rows={4}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 resize-none ${focused === 'message'
                    ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                    : 'border-white/8 hover:border-white/15'
                  }`}
              />
            </motion.div>

            {/* Submit Row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, backgroundColor: '#bce600' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-xl bg-[#D4FF00] text-black font-bold text-sm transition-colors flex items-center gap-2"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.button>
              <div className="text-white/35 text-xs">
                <p>WhatsApp: +91 88668 33360</p>
                <p className="mt-0.5">Mail: vishva@veebran.com</p>
              </div>
            </motion.div>
          </form>
        </motion.div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
