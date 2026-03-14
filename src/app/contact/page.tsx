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
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '555-000-0000' },
  { id: 'companyname', label: 'Company Name', type: 'text', placeholder: 'Ex. StartoMania' },
  { id: 'website', label: 'Website', type: 'url', placeholder: 'https://example.com' },
];

const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+1', country: 'Canada', flag: '🇨🇦' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+972', country: 'Israel', flag: '🇮🇱' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+212', country: 'Morocco', flag: '🇲🇦' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+30', country: 'Greece', flag: '🇬🇷' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
].sort((a, b) => a.country.localeCompare(b.country));

const serviceOptions = [
  "Personal Branding with AI",
  "AI-Powered Sales & Marketing",
  "Custom AI Tool Development",
  "AI Integration Strategy",
  "AI Chatbot Development",
  "Workflow Automation",
  "Other"
];

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    companyname: '',
    website: '',
    service: serviceOptions[0],
    message: '',
    _hp: '' // Honeypot field for spam prevention
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Check honeypot
    if (formData._hp) {
      console.warn('Spam detected via honeypot');
      return false; 
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name is too short';
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phoneClean.length < 7 || phoneClean.length > 15) {
      newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
    }
    
    if (!formData.companyname.trim()) newErrors.companyname = 'Company name is required';
    
    if (formData.website.trim()) {
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!urlPattern.test(formData.website)) {
        newErrors.website = 'Please enter a valid URL (e.g., example.com)';
      }
    } else {
      newErrors.website = 'Website URL is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help you';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message is too short (min 10 characters)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstError = Object.keys(errors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) element.focus();
      return;
    }
    
    setStatus('loading');
    
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      company: formData.companyname,
      website: formData.website,
      service: formData.service,
      message: formData.message,
      timestamp: new Date().toLocaleString()
    };
    
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz3XHG8UTiToZZA4TmfAR0WyXYJ6jtuxyaHmzzcKr3LHVNx_Uj-ED2f7mEi89OQ_HhnQA/exec";

    try {
      const params = new URLSearchParams();
      Object.entries(submissionData).forEach(([key, value]) => {
        params.append(key, String(value));
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      setStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        countryCode: '+91',
        phone: '', 
        companyname: '', 
        website: '', 
        service: serviceOptions[0], 
        message: '',
        _hp: ''
      });
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <span className="text-white/60 text-xs font-medium tracking-wide">Strategy Team is Live</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4"
        >
          Let&apos;s Build <span className="text-[#3B82F6]">Something Big</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[#A6A6A6] text-base md:text-lg max-w-2xl mx-auto"
        >
          Ready to scale your business with custom AI solutions? 
          Drop us a message and we&apos;ll get back to you within 24 hours.
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
                <p className="text-white/40 text-[10px] uppercase tracking-wider font-semibold">{card.label}</p>
                <p className="text-white text-sm font-medium">{card.value}</p>
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
              whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)', backgroundColor: 'rgba(255,255,255,0.02)' }}
              className="bg-[#111] border border-white/8 rounded-2xl px-6 py-4 cursor-default transition-all duration-300"
            >
              {card.href ? (
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="block">
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
          className="w-full max-w-4xl bg-[#0d0d0d] rounded-[32px] p-8 md:p-12 border border-white/6 shadow-2xl relative overflow-hidden"
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          {/* Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-medium text-white mb-10 relative z-10 tracking-tight"
          >
            {status === 'success' ? 'Message Sent Successfully' : 'Tell us about your project'}
          </motion.h2>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 relative z-10"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-medium mb-3">Check your inbox!</h3>
              <p className="text-white/60 max-w-md mx-auto">We&apos;ve received your message and will review it with our strategy team. Expect a response shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-10 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" noValidate>
              {/* Honeypot field - hidden from users */}
              <div className="hidden" aria-hidden="true">
                <input 
                  type="text" 
                  name="_hp" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  value={formData._hp} 
                  onChange={handleChange} 
                />
              </div>

              {/* Name */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold text-white/50 uppercase tracking-widest flex items-center gap-1">
                  Full Name
                  <span className="text-[#3B82F6]" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="David Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-2xl px-5 py-3.5 text-white text-[15px] placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'name'
                    ? 'border-[#3B82F6]/60 bg-[#0c0c0c] shadow-[0_0_0_4px_rgba(59,130,246,0.06)]'
                    : errors.name ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.name && (
                  <span id="name-error" className="text-[11px] text-red-500/80 font-medium ml-1">{errors.name}</span>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold text-white/50 uppercase tracking-widest flex items-center gap-1">
                  Work Email
                  <span className="text-[#3B82F6]" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="david@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-2xl px-5 py-3.5 text-white text-[15px] placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'email'
                    ? 'border-[#3B82F6]/60 bg-[#0c0c0c] shadow-[0_0_0_4px_rgba(59,130,246,0.06)]'
                    : errors.email ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.email && (
                  <span id="email-error" className="text-[11px] text-red-500/80 font-medium ml-1">{errors.email}</span>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-semibold text-white/50 uppercase tracking-widest flex items-center gap-1">
                  Phone Number
                  <span className="text-[#3B82F6]" aria-hidden="true">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative group/select min-w-[110px]">
                    <select
                      name="countryCode"
                      aria-label="Country Code"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/8 rounded-2xl pl-4 pr-8 py-3.5 text-white text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-all appearance-none cursor-pointer"
                    >
                      {countryCodes.map(c => (
                        <option key={`${c.country}-${c.code}`} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`flex-1 bg-[#0a0a0a] border rounded-2xl px-5 py-3.5 text-white text-[15px] placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'phone'
                      ? 'border-[#3B82F6]/60 bg-[#0c0c0c] shadow-[0_0_0_4px_rgba(59,130,246,0.06)]'
                      : errors.phone ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                      }`}
                  />
                </div>
                {errors.phone && (
                  <span id="phone-error" className="text-[11px] text-red-500/80 font-medium ml-1">{errors.phone}</span>
                )}
              </motion.div>

              {/* Website */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label htmlFor="website" className="text-xs font-semibold text-white/50 uppercase tracking-widest flex items-center gap-1">
                  Company Website
                  <span className="text-[#3B82F6]" aria-hidden="true">*</span>
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="yourcompany.com"
                  value={formData.website}
                  onChange={handleChange}
                  onFocus={() => setFocused('website')}
                  onBlur={() => setFocused(null)}
                  aria-invalid={!!errors.website}
                  aria-describedby={errors.website ? "website-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-2xl px-5 py-3.5 text-white text-[15px] placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'website'
                    ? 'border-[#3B82F6]/60 bg-[#0c0c0c] shadow-[0_0_0_4px_rgba(59,130,246,0.06)]'
                    : errors.website ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.website && (
                  <span id="website-error" className="text-[11px] text-red-500/80 font-medium ml-1">{errors.website}</span>
                )}
              </motion.div>

              {/* Services */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="service" className="text-xs font-semibold text-white/50 uppercase tracking-widest flex items-center gap-1">
                  How can we help?
                  <span className="text-[#3B82F6]" aria-hidden="true">*</span>
                </label>
                <div className="relative group/select">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocused('service')}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-[#0a0a0a] border rounded-2xl px-5 py-3.5 text-white text-[15px] focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${focused === 'service'
                      ? 'border-[#3B82F6]/60 bg-[#0c0c0c] shadow-[0_0_0_4px_rgba(59,130,246,0.06)]'
                      : 'border-white/8 hover:border-white/15'
                      }`}
                  >
                    {serviceOptions.map(option => (
                      <option key={option} value={option} className="bg-[#0a0a0a]">
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
              </motion.div>

              {/* Company Name */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="companyname" className="text-xs font-semibold text-white/50 uppercase tracking-widest flex items-center gap-1">
                  Company Name
                  <span className="text-[#3B82F6]" aria-hidden="true">*</span>
                </label>
                <input
                  id="companyname"
                  name="companyname"
                  type="text"
                  placeholder="StartoMania Inc."
                  value={formData.companyname}
                  onChange={handleChange}
                  onFocus={() => setFocused('companyname')}
                  onBlur={() => setFocused(null)}
                  aria-invalid={!!errors.companyname}
                  aria-describedby={errors.companyname ? "company-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-2xl px-5 py-3.5 text-white text-[15px] placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'companyname'
                    ? 'border-[#3B82F6]/60 bg-[#0c0c0c] shadow-[0_0_0_4px_rgba(59,130,246,0.06)]'
                    : errors.companyname ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.companyname && (
                  <span id="company-error" className="text-[11px] text-red-500/80 font-medium ml-1">{errors.companyname}</span>
                )}
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold text-white/50 uppercase tracking-widest flex items-center gap-1">
                  Project Details
                  <span className="text-[#3B82F6]" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and what you're looking to achieve with AI..."
                  rows={5}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-2xl px-5 py-4 text-white text-[15px] placeholder-white/20 focus:outline-none transition-all duration-300 resize-none ${focused === 'message'
                    ? 'border-[#3B82F6]/60 bg-[#0c0c0c] shadow-[0_0_0_4px_rgba(59,130,246,0.06)]'
                    : errors.message ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.message && (
                  <span id="message-error" className="text-[11px] text-red-500/80 font-medium ml-1">{errors.message}</span>
                )}
              </motion.div>

              {/* Submit Row */}
              <motion.div
                variants={fadeUp}
                className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-8 mt-4"
              >
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02, backgroundColor: '#D4FF00', color: '#000' }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative overflow-hidden px-10 py-4 rounded-2xl bg-white text-black font-bold text-sm tracking-wide transition-all ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {status === 'loading' ? 'Processing...' : 'Schedule Strategy Call'}
                    <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </motion.button>

                <div className="flex flex-col items-end text-white/30 text-[11px] tracking-wide uppercase font-bold">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <p>Response time: ~2 Hours</p>
                  </div>
                  <p>Email: vishva@veebran.com</p>
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
