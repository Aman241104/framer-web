'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30 selection:text-accent">
      <Navbar />

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black mb-12 text-center tracking-tight"
          >
            Term & Conditions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium text-lg leading-relaxed mb-20 text-center"
          >
            Welcome to VeeBran. By accessing or using our website and services, you <br />
            agree to comply with and be bound by the following terms and conditions.
          </motion.div>

          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-zinc-500 leading-relaxed font-medium">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">2. Services Overview</h2>
              <p className="text-zinc-500 leading-relaxed font-medium">
                VeeBran specializes in AI-powered personal branding and automation solutions. We offer services including but not limited to content creation, audience growth strategies, and performance optimization to help brands thrive in the digital landscape.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">3. Intellectual Property Rights</h2>
              <p className="text-zinc-500 leading-relaxed font-medium">
                All content, trademarks, logos, and intellectual property displayed on our website are the property of VeeBran or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">4. User Conduct</h2>
              <div className="space-y-4">
                <p className="text-zinc-500 leading-relaxed font-medium">Users agree not to:</p>
                <ul className="list-disc pl-6 space-y-3 text-zinc-500 font-medium">
                  <li>Use our services for any unlawful purposes.</li>
                  <li>Attempt to gain unauthorized access to our systems.</li>
                  <li>Disrupt or interfere with the security or functionality of our services.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">5. Payment Terms</h2>
              <p className="text-zinc-500 leading-relaxed font-medium">
                Payments for our services are to be made as per the agreed-upon terms. Failure to make timely payments may result in suspension or termination of services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">6. Limitation of Liability</h2>
              <p className="text-zinc-500 leading-relaxed font-medium">
                VeeBran shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">7. Termination</h2>
              <p className="text-zinc-500 leading-relaxed font-medium">
                We reserve the right to terminate or suspend access to our services at our discretion, without prior notice, for conduct that we believe violates these Terms & Conditions or is harmful to other users of our services, us, or third parties, or for any other reason.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">8. Changes to Terms</h2>
              <p className="text-zinc-500 leading-relaxed font-medium">
                VeeBran reserves the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">9. Governing Law</h2>
              <p className="text-zinc-500 leading-relaxed font-medium">
                These Terms & Conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles.
              </p>
              <p className="text-zinc-500 leading-relaxed font-medium italic mt-8">
                If you have any questions or concerns regarding these Terms & Conditions, Please contact us.
              </p>
            </section>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default TermsPage;
