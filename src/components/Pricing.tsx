'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, TrendingUp, Crown, Users, Building2, Target, GraduationCap, Cpu } from 'lucide-react';
import ButtonFramerComponent from '@/framer/button/button';

const Button = ButtonFramerComponent as any;

const brandingPlans = {
  individual: [
    {
      name: 'Starter Authority',
      description: 'Ideal for early-stage founder positioning.',
      features: [
        'LinkedIn profile full rewrite & optimization',
        '8-10 ghostwritten posts/month',
        'Monthly content calendar',
        'Headline & banner redesign',
        'Keyword SEO for discovery',
        'Basic engagement management',
        'Monthly performance report',
        '1 strategy onboarding call'
      ],
      icon: <Shield className="w-5 h-5 text-blue-400" />
    },
    {
      name: 'Growth Authority',
      description: 'Strong authority + investor visibility.',
      features: [
        'Everything in Starter Authority',
        '16 posts + 2 long-form articles/month',
        'AI-powered outreach sequences',
        'Bi-weekly strategy calls (30 min)',
        'Engagement & reply management',
        'Competitor positioning analysis',
        'Detailed monthly analytics report'
      ],
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      popular: true
    },
    {
      name: 'Category Leader',
      description: 'Investor + ecosystem positioning.',
      features: [
        'Everything in Growth Authority',
        'Unlimited content creation',
        'Full personal brand audit & strategy',
        'Podcast & speaking outreach',
        'Dedicated brand manager',
        'Personal website/bio page creation',
        'Brand visual identity brief',
        'Weekly strategy calls'
      ],
      icon: <Crown className="w-5 h-5 text-blue-600" />
    }
  ],
  company: [
    {
      name: 'Team Presence',
      description: 'For executive alignment and shared voice.',
      features: [
        '2 founder/executive profiles managed',
        'Company LinkedIn page optimization',
        'Shared brand voice & strategy',
        '24 ghostwritten posts/month',
        'Unified content calendar',
        'Cross-profile alignment',
        'Basic engagement management',
        'Combined monthly analytics',
        '1 team strategy call/month'
      ],
      icon: <Users className="w-5 h-5 text-emerald-400" />
    },
    {
      name: 'Corporate Authority',
      description: 'Full company content engine.',
      features: [
        'Everything in Team Presence',
        'Unlimited executive profiles',
        'Full company content engine',
        'AI thought leadership strategy',
        'PR & media integration',
        'Investor visibility campaigns',
        'Dedicated manager + content team',
        'Weekly executive strategy calls',
        '24/7 priority support'
      ],
      icon: <Building2 className="w-5 h-5 text-emerald-500" />
    }
  ]
};

const salesPlans = [
  {
    name: 'Pre-Sales Systems',
    description: 'Lead generation and outreach frameworks.',
    features: [
      'Market research & competitive analysis',
      'Ideal customer profile (ICP) building',
      'Cold calling & outreach frameworks',
      'Cold email sequences (written/auto)',
      'LinkedIn outreach campaigns',
      'Lead Generation list building',
      'CRM setup & configuration',
      'Sales funnel mapping',
      'Weekly pipeline reporting',
      '1 strategy call/month'
    ],
    icon: <Target className="w-5 h-5 text-amber-400" />
  },
  {
    name: 'Post-Sales & Retention',
    description: 'Client onboarding and relationship systems.',
    features: [
      'Client onboarding preparation',
      'Documentation, SOPs & templates',
      'Project delivery oversight',
      'Relationship management & check-ins',
      'Retention strategy design',
      'Upsell & cross-sell identification',
      'Escalation & resolution workflows',
      'Monthly client health report'
    ],
    icon: <Users className="w-5 h-5 text-amber-500" />
  },
  {
    name: 'Sales Training',
    description: 'End-to-end sales cycle mastery.',
    features: [
      'End-to-end sales cycle training',
      'Lead generation to closing techniques',
      'Inbound & outbound methodology',
      'Objection handling & negotiation',
      'Discovery call & demo best practices',
      'CRM usage & pipeline hygiene',
      'Monthly billing workflows',
      'Custom team sessions',
      'Role-play & live call reviews',
      'Performance assessment reports'
    ],
    icon: <GraduationCap className="w-5 h-5 text-amber-600" />
  }
];

export const Pricing = () => {
  const renderCard = (plan: any, index: number, colorClass: string) => (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col h-full p-6 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-500 relative group"
    >
      {plan.popular && (
        <div className={`absolute top-4 right-6 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-medium text-blue-400 tracking-widest`}>
          Recommended
        </div>
      )}
      
      <div className="mb-6">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {plan.icon}
        </div>
        <h4 className="text-[20px] font-medium text-white tracking-tight mb-2">{plan.name}</h4>
        <p className="text-zinc-500 text-[14px] leading-relaxed">{plan.description}</p>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {plan.features.slice(0, 8).map((f: string) => (
          <div key={f} className="flex items-start gap-2.5">
            <Check className={`w-3.5 h-3.5 ${colorClass} shrink-0 mt-0.5`} />
            <span className="text-zinc-400 text-[13px] font-medium leading-tight">{f}</span>
          </div>
        ))}
        {plan.features.length > 8 && (
          <span className="text-zinc-600 text-[11px] font-medium tracking-wider pl-6">+ More features</span>
        )}
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
  );

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-medium tracking-[0.4em] text-[10px] mb-4"
          >
            Investment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[48px] font-medium text-white tracking-tighter"
          >
            Choose Your <span className="text-zinc-500">Growth Path.</span>
          </motion.h2>
        </div>

        {/* 1. PERSONAL BRANDING WITH AI */}
        <div className="mb-32">
          <div className="mb-12">
            <h3 className="text-[30px] font-medium text-white tracking-tight mb-2">1. Personal Branding With AI</h3>
            <p className="text-zinc-500 font-normal">Positioning your brand for the premium market.</p>
          </div>
          
          <div className="mb-8">
            <span className="text-[10px] font-medium text-zinc-600 tracking-[0.3em] mb-6 block">Individual Plans</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {brandingPlans.individual.map((p, i) => renderCard(p, i, 'text-blue-500'))}
            </div>
          </div>

          <div>
            <span className="text-[10px] font-medium text-zinc-600 tracking-[0.3em] mb-6 mt-12 block">Company Plans</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {brandingPlans.company.map((p, i) => renderCard(p, i, 'text-emerald-500'))}
            </div>
          </div>
        </div>

        {/* 2. SALES & ENGAGEMENT SOLUTIONS */}
        <div className="mb-32">
          <div className="mb-12">
            <h3 className="text-[30px] font-medium text-white tracking-tight mb-2">2. Sales & Engagement Solutions</h3>
            <p className="text-zinc-500 font-normal">End-to-end sales systems for sustainable revenue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salesPlans.map((p, i) => renderCard(p, i, 'text-amber-500'))}
          </div>
        </div>

        {/* 3. AI TOOL DEVELOPMENT */}
        <div>
          <div className="mb-12">
            <h3 className="text-[30px] font-medium text-white tracking-tight mb-2">3. AI Tool Development</h3>
            <p className="text-zinc-500 font-normal">Total Customisation.</p>
          </div>
          <div className="max-w-md">
            {renderCard({
              name: 'Custom AI Solutions',
              description: 'Tailored AI tools built specifically for your internal workflows.',
              features: [
                'Custom AI Agent development',
                'Workflow automation design',
                'Internal tool integration',
                'AI-powered data analysis',
                'Scalable system architecture',
                'Legacy system AI integration',
                'Custom training & documentation',
                'Ongoing optimization & support'
              ],
              icon: <Cpu className="w-5 h-5 text-purple-500" />
            }, 0, 'text-purple-500')}
          </div>
        </div>

      </div>
    </section>
  );
};
