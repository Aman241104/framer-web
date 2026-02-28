'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, Target, Bot, Users, Building2 } from 'lucide-react';
import Link from 'next/link';

const personalBranding = {
  individual: [
    {
      name: 'Starter Authority',
      price: '₹20,000',
      period: '/mo',
      description: 'Ideal for early-stage founder positioning.',
      features: [
        'LinkedIn profile full rewrite',
        '8 posts/month (ghostwritten)',
        'Monthly content calendar',
        'Basic engagement management',
        'Monthly performance report'
      ]
    },
    {
      name: 'Growth Authority',
      price: '₹35,000',
      period: '/mo',
      description: 'Strong authority + investor visibility.',
      features: [
        'Everything in Starter',
        '16 posts + 2 articles/month',
        'AI-powered outreach sequences',
        '50 targeted lead contacts/mo',
        'Bi-weekly strategy call'
      ],
      popular: true
    },
    {
      name: 'Category Leader',
      price: 'Custom',
      period: '',
      description: 'Investor + ecosystem positioning.',
      features: [
        'Everything in Growth',
        'Unlimited content creation',
        'Full personal brand audit',
        'Podcast & speaking outreach',
        'Dedicated brand manager'
      ]
    }
  ],
  company: [
    {
      name: 'Team Presence',
      price: '₹50,000',
      period: '/mo',
      description: 'For startups aligning team voices.',
      features: [
        '3 Founder profiles managed',
        'Company page optimization',
        'Shared content strategy',
        'Employee advocacy setup',
        'Combined analytics'
      ]
    },
    {
      name: 'Corporate Authority',
      price: 'Custom',
      period: '',
      description: 'Full-scale corporate brand leadership.',
      features: [
        'Unlimited executive profiles',
        'Full company content engine',
        'PR & Media integration',
        'Reputation management',
        '24/7 dedicated support'
      ],
      popular: true
    }
  ]
};

const salesSolutions = [
  {
    name: 'Pre-Sales',
    price: '₹35,000',
    period: '/mo',
    icon: <Target className="w-6 h-6 text-[#3b82f6]" />,
    features: [
      'Market Research',
      'Target Persona Building',
      'Cold Calling & Cold Emails',
      'LinkedIn Outreach',
      'Optional CRM Setup (HubSpot/Zoho)'
    ]
  },
  {
    name: 'Post-Sales',
    price: '₹25,000',
    period: '/mo',
    icon: <Users className="w-6 h-6 text-[#d4ff00]" />,
    features: [
      'Onboarding Preparations',
      'Documentation & Quotations',
      'Project Delivery Oversight',
      'Client Relationship Building',
      'Retention Strategy'
    ]
  },
  {
    name: 'Training',
    price: '$25',
    period: '/hr',
    icon: <Building2 className="w-6 h-6 text-purple-500" />,
    features: [
      'End-to-end Sales Cycle',
      'Lead Generation to Closing',
      'In-bound & Out-bound',
      'Monthly Billing',
      'Custom Team Sessions'
    ]
  }
];

const aiTools = {
  name: 'Custom AI Development',
  description: 'Totally customisable AI solutions built for your specific needs.',
  tiers: [
    { name: 'Starter Build', price: '₹55,000', info: 'Single Tool' },
    { name: 'Growth Build', price: '₹1,50,000', info: 'Multi-Tool System' },
    { name: 'Full Transformation', price: 'Custom', info: 'Complete AI Overhaul' }
  ]
};

export const Pricing = () => {
  const [pbTab, setPbTab] = useState<'individual' | 'company'>('individual');

  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d4ff00] font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Investment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-8 text-white tracking-tight uppercase italic"
          >
            Transparent Pricing. <span className="text-[#3b82f6]">No Fluff.</span>
          </motion.h2>
        </div>

        {/* 1. Personal Branding Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="text-left">
              <h3 className="text-3xl font-black text-white uppercase italic mb-2">1. Personal Branding with AI</h3>
              <p className="text-zinc-500 font-medium">Positioning your brand for the premium market.</p>
            </div>

            <div className="flex bg-[#0d0d0d] p-1.5 rounded-full border border-white/5">
              <button
                onClick={() => setPbTab('individual')}
                className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${pbTab === 'individual' ? 'bg-[#3b82f6] text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
              >
                Individual
              </button>
              <button
                onClick={() => setPbTab('company')}
                className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${pbTab === 'company' ? 'bg-[#3b82f6] text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
              >
                Company
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {personalBranding[pbTab].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-10 rounded-[3rem] bg-[#0d0d0d] border ${plan.popular ? 'border-[#3b82f6]/50 shadow-[0_0_40px_rgba(59,130,246,0.1)]' : 'border-white/5'} flex flex-col relative overflow-hidden group`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#3b82f6] text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-3xl">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-8">
                    <h4 className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-4">{plan.name}</h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-white italic">{plan.price}</span>
                      <span className="text-zinc-600 text-sm font-bold uppercase">{plan.period}</span>
                    </div>
                    <p className="text-zinc-500 text-sm mt-4 italic">{plan.description}</p>
                  </div>

                  <div className="flex flex-col gap-4 mb-10">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="mt-auto">
                    <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-[#d4ff00] text-black hover:bg-white' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                      Select Plan <ArrowUpRight size={14} />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* 2. Sales Solutions Section */}
        <div className="mb-32">
          <div className="mb-16">
            <h3 className="text-3xl font-black text-white uppercase italic mb-2">2. Sales & Engagement Solutions</h3>
            <p className="text-zinc-500 font-medium">End-to-end sales systems for sustainable revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salesSolutions.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[3rem] bg-[#0d0d0d] border border-white/5 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  {plan.icon}
                </div>
                <h4 className="text-xl font-black text-white uppercase italic mb-4">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-white italic">{plan.price}</span>
                  <span className="text-zinc-600 text-sm font-bold uppercase">{plan.period}</span>
                </div>

                <div className="flex flex-col gap-4 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#3b82f6] mt-2 shrink-0" />
                      <span className="text-zinc-400 text-sm font-medium italic">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="mt-auto">
                  <button className="w-full py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                    Inquire Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. AI Development Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[4rem] bg-[#0d0d0d] border border-white/5 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <div className="w-16 h-16 rounded-3xl bg-purple-600/10 border border-purple-600/20 flex items-center justify-center mb-10">
                  <Bot className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-6">3. Custom AI Tool Development</h3>
                <p className="text-xl text-zinc-500 font-medium italic mb-10 leading-relaxed">
                  Every business is unique. We build tailored AI agents, workflow automations, and custom models designed specifically for your stack.
                </p>
                <Link href="/contact">
                  <button className="flex items-center gap-3 px-10 py-5 bg-[#3b82f6] text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white hover:text-black transition-all">
                    Start Your Custom Build <ArrowUpRight size={18} />
                  </button>
                </Link>
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-4">Benchmark Pricing</p>
                {aiTools.tiers.map((tier) => (
                  <div key={tier.name} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-purple-600/30 transition-all">
                    <div className="flex flex-col">
                      <span className="text-white font-black uppercase italic tracking-tight">{tier.name}</span>
                      <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{tier.info}</span>
                    </div>
                    <span className="text-2xl font-black text-[#d4ff00] italic">{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
