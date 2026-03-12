"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { FooterCustom } from '@/components/FooterCustom';
import { FAQ } from '@/components/FAQ';
import { motion } from 'framer-motion';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
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
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Schedule',
    value: 'Book a Call',
    href: 'https://calendly.com/vishva-veebran/30min'
  },
];

const formFields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'David Johnson' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'example@mail.com' },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
  { id: 'companyname', label: 'Company Name', type: 'text', placeholder: 'Ex. StartoMania' },
  { id: 'website', label: 'Website', type: 'url', placeholder: 'https://example.com' },
];

const serviceOptions = [
  "Personal Branding with AI",
  "AI-Powered Sales & Marketing",
  "Custom AI Tool Development",
  "Other"
];

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyname: '',
    website: '',
    service: serviceOptions[0],
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    console.log('Submitting form data:', formData);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz3XHG8UTiToZZA4TmfAR0WyXYJ6jtuxyaHmzzcKr3LHVNx_Uj-ED2f7mEi89OQ_HhnQA/exec";

    try {
      // Use URLSearchParams for much more reliable delivery to Google Apps Script
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });
      params.append('timestamp', new Date().toLocaleString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', companyname: '', website: '', service: serviceOptions[0], message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

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
          className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-4"
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
        {infoCards.map((card, i) => {
          const content = (
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/50">
                {card.icon}
              </div>
              <div>
                <p className="text-white/40 text-xs font-normal">{card.label}</p>
                <p className="text-white text-sm font-normal">{card.value}</p>
              </div>
            </div>
          );

          return (
            <motion.div
              key={card.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)' }}
              className="bg-[#111] border border-white/8 rounded-2xl px-6 py-4 cursor-default"
            >
              {card.href ? (
                <a href={card.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : content}
            </motion.div>
          );
        })}
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
            className="text-2xl font-medium text-white mb-8 relative z-10"
          >
            {status === 'success' ? 'Message Sent!' : 'Send us a message'}
          </motion.h2>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 relative z-10"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-medium mb-2">Thank you for reaching out!</h3>
              <p className="text-white/60">We&apos;ve received your message and will get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-[#3B82F6] font-medium text-sm hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field, i) => (
                <motion.div
                  key={field.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.5}
                  className="flex flex-col gap-2"
                >
                  <label className="text-xs font-medium text-white/60 tracking-wider">{field.label}</label>
                  <input
                    required
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === field.id
                      ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                      : 'border-white/8 hover:border-white/15'
                      }`}
                  />
                </motion.div>
              ))}

              {/* Services Dropdown */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2.5}
                className="flex flex-col gap-2 md:col-span-2"
              >
                <label className="text-xs font-medium text-white/60 tracking-wider">Interested Service</label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocused('service')}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all duration-300 appearance-none ${focused === 'service'
                    ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                    : 'border-white/8 hover:border-white/15'
                    }`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                >
                  {serviceOptions.map(option => (
                    <option key={option} value={option} className="bg-[#0a0a0a]">
                      {option}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Textarea */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className="flex flex-col gap-2 md:col-span-2"
              >
                <label className="text-xs font-medium text-white/60 tracking-wider">What are you looking for?</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.03, backgroundColor: '#bce600' }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-8 py-3.5 rounded-xl bg-[#D4FF00] text-black font-medium text-sm transition-colors flex items-center gap-2 ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  {status !== 'loading' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </motion.button>
                {status === 'error' && (
                  <p className="text-red-500 text-xs font-normal">Something went wrong. Please try again.</p>
                )}
                <div className="text-white/35 text-xs text-right">
                  <p>Mail: vishva@veebran.com</p>
                </div>
              </motion.div>
            </form>
          )}
        </motion.div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <FooterCustom />
    </main>
  );
}
