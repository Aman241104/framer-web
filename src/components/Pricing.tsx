'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, TrendingUp, Crown, Users, Building2, Target, GraduationCap, Cpu, Zap, Star, Rocket, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

type Plan = {
  name: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  impact?: string;
  color: string;
  ctaLabel?: string;
};

const pricingData = {
  branding: {
    individual: [
      {
        name: 'Starter Authority',
        description: 'Ideal for early-stage founder positioning.',
        impact: 'Foundation Build',
        features: [
          'LinkedIn profile full rewrite & optimization',
          '8-10 ghostwritten posts/month',
          'Monthly content calendar',
          'Headline & banner redesign',
          'Keyword SEO for LinkedIn discoverability',
          'Basic engagement management',
          'Monthly performance report',
          '1 strategy onboarding call'
        ],
        icon: <Shield className="w-5 h-5" />,
        color: '#3B82F6'
      },
      {
        name: 'Growth Authority',
        description: 'Strong authority + investor visibility.',
        impact: 'ROI Focused',
        features: [
          'Everything in Starter Authority',
          '16 ghostwritten posts + 2 long-form articles/month',
          'AI-powered outreach sequences',
          'Bi-weekly strategy calls (30 min each)',
          'Engagement & comment reply management',
          'Competitor positioning analysis',
          'Detailed monthly analytics report'
        ],
        icon: <TrendingUp className="w-5 h-5" />,
        popular: true,
        color: '#3B82F6'
      },
      {
        name: 'Category Leader',
        description: 'Investor + ecosystem positioning.',
        impact: 'Scale Ready',
        features: [
          'Everything in Growth Authority',
          'Unlimited content creation',
          'Full personal brand audit & strategy',
          'Podcast & speaking outreach',
          'Dedicated brand manager',
          'Personal website/bio page creation',
          'Brand visual identity (banners, headshots brief)',
          'Weekly strategy calls'
        ],
        icon: <Crown className="w-5 h-5" />,
        color: '#3B82F6'
      }
    ],
    company: [
      {
        name: 'Team Presence',
        description: 'For executive alignment and shared voice.',
        impact: 'Voice Alignment',
        features: [
          '2 founder/executive profiles managed',
          'Company LinkedIn page full optimisation',
          'Shared brand voice & content strategy',
          '24 ghostwritten posts/month (8 per profile)',
          'Unified content calendar for all profiles',
          'Cross-profile content alignment & consistency',
          'Basic engagement management per profile',
          'Combined monthly analytics report',
          '1 team strategy call/month'
        ],
        icon: <Users className="w-5 h-5" />,
        color: '#10B981'
      },
      {
        name: 'Corporate Authority',
        description: 'Full company content engine.',
        impact: 'Full Engine',
        features: [
          'Everything in Team Presence',
          'Unlimited executive profiles managed',
          'Full company content engine (posts, articles, newsletters)',
          'AI-powered thought leadership strategy',
          'PR & media integration — press releases, features',
          'Investor & ecosystem visibility campaigns',
          'Dedicated brand manager + content team',
          'Weekly executive strategy calls',
          '24/7 priority support & turnaround'
        ],
        icon: <Building2 className="w-5 h-5" />,
        popular: true,
        color: '#10B981'
      }
    ]
  },
  sales: [
    {
      name: 'Pre-Sales Systems',
      description: 'Lead generation and outreach frameworks.',
      impact: 'Pipeline Growth',
      features: [
        'Market research & competitive analysis',
        'Ideal customer profile (ICP) & target persona building',
        'Cold calling scripts & outreach frameworks',
        'Cold email sequences — written & automated',
        'LinkedIn outreach campaigns (connection + DM strategy)',
        'Lead Generation list building',
        'CRM setup & configuration (HubSpot / Zoho)',
        'Sales funnel mapping',
        'Weekly pipeline review & reporting',
        '1 strategy call/month'
      ],
      icon: <Target className="w-5 h-5" />,
      color: '#F59E0B'
    },
    {
      name: 'Post-Sales & Retention',
      description: 'Client onboarding and relationship systems.',
      impact: 'LTV Focused',
      features: [
        'Client onboarding preparation',
        'Documentation, SOPs & quotation templates',
        'Project delivery oversight & milestone tracking',
        'Client relationship management & check-ins',
        'Retention strategy design & execution',
        'Upsell & cross-sell opportunity identification',
        'Escalation handling & issue resolution workflows',
        'Monthly client health report'
      ],
      icon: <Star className="w-5 h-5" />,
      popular: true,
      color: '#F59E0B'
    },
    {
      name: 'Sales Training',
      description: 'End-to-end sales cycle mastery.',
      impact: 'Team Mastery',
      features: [
        'End-to-end sales cycle training',
        'Lead generation to closing techniques',
        'Inbound & outbound sales methodology',
        'Objection handling & negotiation skills',
        'Discovery call & demo best practices',
        'CRM usage & pipeline hygiene training',
        'Monthly billing & invoicing workflows',
        'Custom team sessions tailored to your product',
        'Role-play exercises & live call reviews',
        'Post-training performance report'
      ],
      icon: <GraduationCap className="w-5 h-5" />,
      color: '#F59E0B'
    }
  ],
  ai: [
    {
      name: 'Total AI Customization',
      description: 'Bespoke end-to-end AI infrastructure designed for your specific business logic.',
      impact: 'Bespoke Solutions',
      ctaLabel: 'Build Your AI Roadmap',
      features: [
        'Custom AI Agent & Chatbot development',
        'Internal Workflow automation design',
        'Cross-platform Tool integrations',
        'AI-powered Data Analysis systems',
        'Scalable Infrastructure architecture',
        'Legacy System AI modernization',
        'Custom Team Training & Documentation',
        'Ongoing ROI Auditing & Support'
      ],
      icon: <Sparkles className="w-5 h-5" />,
      popular: true,
      color: '#A855F7'
    }
  ]
};

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'branding' | 'sales' | 'ai'>('branding');
  const [brandingType, setBrandingType] = useState<'individual' | 'company'>('individual');

  const CustomCTAButton = ({ label, href, primary, color }: { label: string, href: string, primary?: boolean, color: string }) => (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative w-full h-14 flex items-center justify-center rounded-2xl font-medium text-sm transition-all duration-300 overflow-hidden group/btn ${
        primary 
          ? 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
      }`}
    >
      <div className="absolute top-[-50%] left-[-60%] w-[20%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[30deg] transition-all duration-700 group-hover/btn:left-[130%]" />
      
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </span>
    </motion.a>
  );

  const renderCard = (plan: Plan, index: number, isCentered: boolean = false) => (
    <motion.div
      key={plan.name}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        delay: index * 0.05,
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      className={`flex flex-col h-full p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#080808] border transition-all duration-500 relative group overflow-hidden ${isCentered ? 'max-w-3xl mx-auto w-full' : ''} ${
        plan.popular ? 'border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : 'border-white/5 hover:border-white/10'
      }`}
    >
      {plan.popular && (
        <div 
          className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] rounded-full pointer-events-none opacity-20" 
          style={{ backgroundColor: plan.color }}
        />
      )}

      <div className="flex justify-between items-start mb-8 relative z-10">
        <div 
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
          style={{ backgroundColor: `${plan.color}15`, color: plan.color, border: `1px solid ${plan.color}30` }}
        >
          {plan.icon}
        </div>
        <div className="flex flex-col items-end gap-1.5 md:gap-2">
          {plan.popular && (
            <span 
              className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border text-[8px] md:text-[9px] font-medium uppercase tracking-widest"
              style={{ backgroundColor: `${plan.color}10`, borderColor: `${plan.color}30`, color: plan.color }}
            >
              {activeTab === 'ai' ? 'Bespoke' : 'Recommended'}
            </span>
          )}
          <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-white/5 border border-white/10 text-[8px] md:text-[9px] font-medium text-zinc-400 uppercase tracking-widest">
            {plan.impact}
          </span>
        </div>
      </div>

      <div className="mb-6 md:mb-8 relative z-10">
        <h4 className="text-[22px] md:text-[28px] font-medium text-white tracking-tight mb-2 md:mb-3">{plan.name}</h4>
        <p className="text-zinc-500 text-[13px] md:text-[16px] leading-relaxed">{plan.description}</p>
      </div>

      <div className={`grid ${isCentered ? 'md:grid-cols-2' : 'grid-cols-1'} gap-x-10 gap-y-4 mb-10 relative z-10`}>
        {plan.features.map((f: string) => (
          <div key={f} className="flex items-start gap-3 group/item">
            <div className="mt-1 flex-shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-white/30 transition-colors">
              <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-white" />
            </div>
            <span className="text-zinc-400 text-[13px] md:text-[14px] font-normal leading-tight group-hover/item:text-zinc-200 transition-colors">{f}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto relative z-10">
        <CustomCTAButton 
          label={plan.ctaLabel || "Get Started"} 
          href="/contact" 
          primary={plan.popular} 
          color={plan.color} 
        />
      </div>
    </motion.div>
  );

  return (
    <section id="pricing" className="py-20 md:py-32 bg-black relative overflow-hidden scroll-mt-32">
      <motion.div 
        animate={{
          backgroundColor: activeTab === 'branding' ? 'rgba(59, 130, 246, 0.05)' : activeTab === 'sales' ? 'rgba(245, 158, 11, 0.05)' : 'rgba(168, 85, 247, 0.05)'
        }}
        className="absolute top-0 left-1/4 w-[800px] h-[800px] blur-[180px] rounded-full pointer-events-none transition-colors duration-1000" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A800] animate-pulse" />
            <span className="text-[#E5A800] font-medium tracking-widest text-[10px] uppercase">Investment</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[56px] font-medium text-white tracking-tight mb-8 md:mb-12"
          >
            Choose Your <span className="text-zinc-500">Growth Path.</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl md:rounded-3xl w-fit mx-auto backdrop-blur-md">
            {[
              { id: 'branding', label: 'Branding', icon: <Star className="w-3.5 h-3.5" /> },
              { id: 'sales', label: 'Sales', icon: <Target className="w-3.5 h-3.5" /> },
              { id: 'ai', label: 'AI Tools', icon: <Zap className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-2xl text-[12px] md:text-sm font-medium transition-all duration-300 relative ${
                  activeTab === tab.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-lg md:rounded-2xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'branding' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 flex justify-center items-center gap-4"
              >
                <span className={`text-xs uppercase tracking-widest font-medium transition-colors ${brandingType === 'individual' ? 'text-blue-400' : 'text-zinc-600'}`}>For Founders</span>
                <button
                  onClick={() => setBrandingType(prev => prev === 'individual' ? 'company' : 'individual')}
                  className="w-14 h-7 rounded-full bg-white/10 border border-white/10 relative p-1 transition-colors hover:border-white/20"
                >
                  <motion.div
                    animate={{ x: brandingType === 'individual' ? 0 : 28 }}
                    className="w-5 h-5 rounded-full bg-white shadow-lg"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
                <span className={`text-xs uppercase tracking-widest font-medium transition-colors ${brandingType === 'company' ? 'text-emerald-400' : 'text-zinc-600'}`}>For Teams</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + (activeTab === 'branding' ? brandingType : '')}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`grid gap-8 items-stretch ${activeTab === 'ai' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
            >
              {activeTab === 'branding' && (
                <>
                  {brandingType === 'individual' 
                    ? pricingData.branding.individual.map((p, i) => renderCard(p as any, i))
                    : pricingData.branding.company.map((p, i) => renderCard(p as any, i))
                  }
                </>
              )}
              {activeTab === 'sales' && pricingData.sales.map((p, i) => renderCard(p as any, i))}
              {activeTab === 'ai' && pricingData.ai.map((p, i) => renderCard(p as any, i, true))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/5 text-center relative overflow-hidden group hover:border-white/10 transition-colors"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-medium text-white mb-4">Don&apos;t see what you need?</h3>
            <p className="text-zinc-500 mb-8 text-lg leading-relaxed">We offer custom packages for high-growth startups and unique enterprise requirements. Let&apos;s build a custom roadmap together.</p>
            
            <div className="max-w-sm mx-auto">
              <CustomCTAButton 
                label="Consult Our Strategy Team" 
                href="/contact" 
                primary 
                color="#ffffff" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
