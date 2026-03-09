'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, Target, Bot, Users, Building2 } from 'lucide-react';
import Link from 'next/link';

import ButtonFramerComponent from '@/framer/button/button';

const Button = ButtonFramerComponent as any;

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
    icon: <Target className="w-6 h-6 text-[white]" />,
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
    icon: <Users className="w-6 h-6 text-[white]" />,
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
    icon: <Building2 className="w-6 h-6 text-white" />,
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
    <section id="pricing" className="pt-[40px] pb-[60px] bg-black relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Investment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] font-extrabold mb-8 text-white tracking-[-0.03em] uppercase leading-tight"
          >
            Transparent Pricing. <span className="text-zinc-500">No Fluff.</span>
          </motion.h2>
        </div>

        {/* 1. Personal Branding Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="text-left">
              <h3 className="text-3xl font-black text-white uppercase mb-2">1. Personal Branding with AI</h3>
              <p className="text-zinc-500 font-medium">Positioning your brand for the premium market.</p>
            </div>

            <div className="relative flex bg-[#0d0d0d] p-1.5 rounded-full border border-white/5 w-full md:w-auto">
              <motion.div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-lg"
                initial={false}
                animate={{
                  left: pbTab === 'individual' ? '6px' : '50%',
                  width: 'calc(50% - 6px)'
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
              <button
                onClick={() => setPbTab('individual')}
                className={`relative z-10 w-1/2 px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors ${pbTab === 'individual' ? 'text-black' : 'text-zinc-500 hover:text-white'}`}
              >
                Individual
              </button>
              <button
                onClick={() => setPbTab('company')}
                className={`relative z-10 w-1/2 px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors ${pbTab === 'company' ? 'text-black' : 'text-zinc-500 hover:text-white'}`}
              >
                Company
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <AnimatePresence mode="wait">
              {personalBranding[pbTab].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    plan.popular
                      ? { opacity: 1, y: 0, scale: 1.06, border: '2px solid #1aa8ff', boxShadow: ['0 20px 60px rgba(0,120,255,0.2)', '0 20px 60px rgba(0,120,255,0.35)', '0 20px 60px rgba(0,120,255,0.2)'] }
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={
                    plan.popular
                      ? {
                        delay: index * 0.1,
                        boxShadow: {
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }
                      }
                      : { delay: index * 0.1 }
                  }
                  layout
                  className={`p-10 rounded-[3rem] bg-[#0d0d0d] border ${plan.popular ? 'border-[#1aa8ff]' : 'border-white/5'} flex flex-col relative overflow-hidden group hover:border-[#1aa8ff]/50 transition-all`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#1aa8ff] text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-3xl">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-8">
                    <h4 className="text-white text-2xl font-black uppercase tracking-tight mb-3">{plan.name}</h4>
                    <p className="text-zinc-500 text-sm">{plan.description}</p>
                  </div>

                  <div className="flex flex-col gap-4 mb-10">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button.Responsive
                      labelButton="Select Plan"
                      variant={plan.popular ? "Primary" : "Accent"}
                      link="/contact"
                      className="w-full"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* 2. Sales Solutions Section */}
        <div className="mb-32">
          <div className="mb-16">
            <h3 className="text-3xl font-black text-white uppercase mb-2">2. Sales & Engagement Solutions</h3>
            <p className="text-zinc-500 font-medium">End-to-end sales systems for sustainable revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {salesSolutions.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: index === 1 ? 1.06 : 1,
                  border: index === 1 ? '2px solid #1aa8ff' : '1px solid rgba(255,255,255,0.05)',
                  boxShadow: index === 1 ? '0 20px 60px rgba(0,120,255,0.35)' : 'none'
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-10 rounded-[3rem] bg-[#0d0d0d] border ${index === 1 ? 'border-[#1aa8ff]' : 'border-white/5'} flex flex-col group transition-all hover:border-[#1aa8ff]/50`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <div className="text-white">{plan.icon}</div>
                </div>
                <h4 className="text-2xl font-black text-white uppercase mb-3">{plan.name}</h4>

                <div className="flex flex-col gap-4 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-zinc-500 mt-2 shrink-0" />
                      <span className="text-zinc-400 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button.Responsive
                    labelButton="Inquire Now"
                    variant={index === 1 ? "Primary" : "Accent"}
                    link="/contact"
                    className="w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. AI Development Section */}
        <div>
          <div className="mb-16">
            <h3 className="text-3xl font-black text-white uppercase mb-2">3. Custom AI Tool Development</h3>
            <p className="text-zinc-500 font-medium mb-10 leading-relaxed">
              Every business is unique. We build tailored AI agents, workflow automations, and custom models designed specifically for your stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {aiTools.tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: index === 1 ? 1.06 : 1,
                  border: index === 1 ? '2px solid #1aa8ff' : '1px solid rgba(255,255,255,0.05)',
                  boxShadow: index === 1 ? '0 20px 60px rgba(0,120,255,0.35)' : 'none'
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-10 rounded-[3rem] bg-[#0d0d0d] border ${index === 1 ? 'border-[#1aa8ff]' : 'border-white/5'} flex flex-col group transition-all hover:border-[#1aa8ff]/50`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-black text-white uppercase mb-3">{tier.name}</h4>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-8">{tier.info}</p>

                <div className="mt-auto">
                  <Button.Responsive
                    labelButton="Inquire Now"
                    variant={index === 1 ? "Primary" : "Accent"}
                    link="/contact"
                    className="w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
