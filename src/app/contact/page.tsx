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
      return { isValid: false, errors: {} }; 
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name is too short';
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.countryCode === '+91') {
      if (phoneClean.length !== 10) {
        newErrors.phone = 'India phone number must be exactly 10 digits';
      }
    } else if (phoneClean.length < 7 || phoneClean.length > 15) {
      newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
    }
    
    if (!formData.companyname.trim()) newErrors.companyname = 'Company name is required';
    
    if (formData.website.trim()) {
      // Stricter URL pattern: requires a domain and at least a 2-character TLD (e.g., .com, .in, .co)
      const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/i;
      if (!urlPattern.test(formData.website.trim())) {
        newErrors.website = 'Enter a valid format (e.g., www.example.com or example.in)';
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
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Sanitize phone input to only allow numbers, spaces, and hyphens
    let finalValue = value;
    if (type === 'tel') {
      finalValue = value.replace(/[^0-9\s-]/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
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
    
    const validation = validateForm();
    if (!validation.isValid) {
      const firstError = Object.keys(validation.errors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) element.focus();
      return;
    }
    
    setStatus('loading');
    
    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      // Prepend a single quote to prevent Google Sheets from interpreting + as a formula
      phone: `'${formData.countryCode} ${formData.phone.trim()}`,
      company: formData.companyname.trim(),
      // Ensure website has a protocol for clickability in Sheets and trim it
      website: formData.website.trim().startsWith('http') 
        ? formData.website.trim() 
        : `https://${formData.website.trim()}`,
      service: formData.service,
      message: formData.message.trim(),
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
            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6" noValidate>
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
                <label htmlFor="name" className="text-xs font-medium text-white/60 tracking-wider flex items-center gap-1">
                  Name
                  <span className="text-red-500" aria-hidden="true">*</span>
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
                  onBlur={() => setTimeout(() => setFocused(null), 100)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'name'
                    ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                    : errors.name ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.name && (
                  <span id="name-error" className="text-[10px] text-red-500 font-medium">{errors.name}</span>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium text-white/60 tracking-wider flex items-center gap-1">
                  Email
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setTimeout(() => setFocused(null), 100)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'email'
                    ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                    : errors.email ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.email && (
                  <span id="email-error" className="text-[10px] text-red-500 font-medium">{errors.email}</span>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-medium text-white/60 tracking-wider flex items-center gap-1">
                  Phone Number
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    aria-label="Country Code"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-24 bg-[#0a0a0a] border border-white/8 rounded-xl px-2 py-3 text-white text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-all"
                  >
                    {countryCodes.map(c => (
                      <option key={`${c.country}-${c.code}`} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setTimeout(() => setFocused(null), 100)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`flex-1 bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'phone'
                      ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                      : errors.phone ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                      }`}
                  />
                </div>
                {errors.phone && (
                  <span id="phone-error" className="text-[10px] text-red-500 font-medium">{errors.phone}</span>
                )}
              </motion.div>

              {/* Website */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label htmlFor="website" className="text-xs font-medium text-white/60 tracking-wider flex items-center gap-1">
                  Website
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={handleChange}
                  onFocus={() => setFocused('website')}
                  onBlur={() => setTimeout(() => setFocused(null), 100)}
                  aria-invalid={!!errors.website}
                  aria-describedby={errors.website ? "website-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'website'
                    ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                    : errors.website ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.website && (
                  <span id="website-error" className="text-[10px] text-red-500 font-medium">{errors.website}</span>
                )}
              </motion.div>

              {/* Services Dropdown */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-2 md:col-span-2"
              >
                <label htmlFor="service" className="text-xs font-medium text-white/60 tracking-wider flex items-center gap-1">
                  Interested Service
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocused('service')}
                  onBlur={() => setTimeout(() => setFocused(null), 100)}
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

              {/* Company Name */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="companyname" className="text-xs font-medium text-white/60 tracking-wider flex items-center gap-1">
                  Company Name
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="companyname"
                  name="companyname"
                  type="text"
                  placeholder="Ex. StartoMania"
                  value={formData.companyname}
                  onChange={handleChange}
                  onFocus={() => setFocused('companyname')}
                  onBlur={() => setTimeout(() => setFocused(null), 100)}
                  aria-invalid={!!errors.companyname}
                  aria-describedby={errors.companyname ? "company-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 ${focused === 'companyname'
                    ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                    : errors.companyname ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.companyname && (
                  <span id="company-error" className="text-[10px] text-red-500 font-medium">{errors.companyname}</span>
                )}
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-xs font-medium text-white/60 tracking-wider flex items-center gap-1">
                  What are you looking for?
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're working on and how we can help..."
                  rows={4}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setTimeout(() => setFocused(null), 100)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none transition-all duration-300 resize-none ${focused === 'message'
                    ? 'border-[#3B82F6]/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
                    : errors.message ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
                    }`}
                />
                {errors.message && (
                  <span id="message-error" className="text-[10px] text-red-500 font-medium">{errors.message}</span>
                )}
              </motion.div>

              {/* Submit Row */}
              <motion.div
                variants={fadeUp}
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
