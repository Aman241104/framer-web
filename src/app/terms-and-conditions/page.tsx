'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.',
  },
  {
    title: '2. Services Overview',
    content: 'VeeBran specializes in AI-powered personal branding and automation solutions. We offer services including but not limited to content creation, audience growth strategies, and performance optimization to help brands thrive in the digital landscape.',
  },
  {
    title: '3. Intellectual Property Rights',
    content: 'All content, trademarks, logos, and intellectual property displayed on our website are the property of VeeBran or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.',
  },
  {
    title: '4. User Conduct',
    content: 'Users agree not to: Use our services for any unlawful purposes; Attempt to gain unauthorized access to our systems; Disrupt or interfere with the security or functionality of our services.',
  },
  {
    title: '5. Payment Terms',
    content: 'Payments for our services are to be made as per the agreed-upon terms. Failure to make timely payments may result in suspension or termination of services.',
  },
  {
    title: '6. Limitation of Liability',
    content: 'VeeBran shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.',
  },
  {
    title: '7. Termination',
    content: 'We reserve the right to terminate or suspend access to our services at our discretion, without prior notice, for conduct that we believe violates these Terms & Conditions or is harmful to other users of our services, us, or third parties, or for any other reason.',
  },
  {
    title: '8. Changes to Terms',
    content: 'VeeBran reserves the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the revised terms.',
  },
  {
    title: '9. Governing Law',
    content: 'These Terms & Conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles.',
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Background dots */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase mb-8"
          >
            Term & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium max-w-xl mx-auto italic"
          >
            Welcome to VeeBran. By accessing or using our website and services, you <br />
            agree to comply with and be bound by the following terms and conditions.
          </motion.p>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col gap-12 text-left">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className="text-xl font-black italic mb-4 text-white uppercase tracking-tight">{section.title}</h2>
                <p className="text-zinc-500 font-medium italic leading-relaxed text-sm">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-zinc-600 font-medium italic text-xs border-t border-white/5 pt-12"
          >
            If you have any questions or concerns regarding these Terms & Conditions, Please contact us.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
