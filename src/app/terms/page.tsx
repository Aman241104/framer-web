"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { FooterCustom } from '@/components/FooterCustom';
import { motion } from 'framer-motion';

const fadeUp: any = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.07, ease: "easeOut" },
    }),
};

const sections = [
    {
        number: '01',
        title: 'Acceptance of Terms',
        body: `By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.`,
    },
    {
        number: '02',
        title: 'Services Overview',
        body: `VeeBran specializes in AI-powered personal branding and automation solutions. We offer services including but not limited to content creation, audience growth strategies, and performance optimization to help brands thrive in the digital landscape.`,
    },
    {
        number: '03',
        title: 'Intellectual Property Rights',
        body: `All content, trademarks, logos, and intellectual property displayed on our website are the property of VeeBran or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.`,
    },
    {
        number: '04',
        title: 'User Conduct',
        body: `Users agree not to use our services for any unlawful purposes, attempt to gain unauthorized access to our systems, or disrupt the security or functionality of our services. We reserve the right to suspend accounts that violate this policy.`,
    },
    {
        number: '05',
        title: 'Payment Terms',
        body: `Payments for our services are to be made as per the agreed-upon terms. Failure to make timely payments may result in suspension or termination of services without prior notice.`,
    },
    {
        number: '06',
        title: 'Limitation of Liability',
        body: `VeeBran shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our liability is limited to the amount paid for the specific service in question.`,
    },
    {
        number: '07',
        title: 'Termination',
        body: `We reserve the right to terminate or suspend access to our services at our discretion, without prior notice, for conduct that we believe violates these Terms & Conditions or is harmful to other users.`,
    },
    {
        number: '08',
        title: 'Changes to Terms',
        body: `VeeBran reserves the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the revised terms.`,
    },
    {
        number: '09',
        title: 'Governing Law',
        body: `These Terms & Conditions are governed by and construed in accordance with the applicable laws of India, without regard to conflict of law principles. If you have any questions, please contact us at vishva@veebran.com.`,
    },
];

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#050505] overflow-x-hidden font-sans relative">
            <Navbar />

            {/* Hero */}
            <section className="pt-44 pb-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-amber-500/8 rounded-full blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-4 py-1.5 mb-6"
                >
                    <span className="text-[#E5A800] text-xs">⚖️</span>
                    <span className="text-white/60 text-xs font-medium tracking-wide">Legal Agreement</span>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="text-4xl md:text-[72px] font-medium text-white tracking-tight mb-4"
                >
                    Terms &amp; <span className="text-[#E5A800]">Conditions</span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    className="text-[#A6A6A6] text-sm md:text-base leading-relaxed max-w-xl mx-auto"
                >
                    Welcome to VeeBran. By accessing or using our website and services, you agree to comply
                    with and be bound by the following terms and conditions.
                </motion.p>

                {/* Last updated */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    className="text-white/20 text-xs mt-6"
                >
                    Last updated: March 2026
                </motion.p>
            </section>

            {/* Terms Sections */}
            <section className="px-6 pb-28 flex justify-center">
                <div className="w-full max-w-3xl flex flex-col gap-6">
                    {sections.map((s, i) => (
                        <motion.div
                            key={s.number}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            custom={i * 0.3}
                            whileHover={{ x: 4 }}
                            className="group flex gap-6 bg-[#0d0d0d] border border-white/6 rounded-2xl p-6 md:p-8 hover:border-[#E5A800]/25 transition-all duration-300"
                        >
                            {/* Number */}
                            <div className="shrink-0 text-[#E5A800]/30 font-medium text-2xl md:text-3xl tabular-nums group-hover:text-[#E5A800]/60 transition-colors duration-300 select-none">
                                {s.number}
                            </div>
                            <div>
                                <h2 className="text-white font-medium text-base md:text-[30px] mb-2 group-hover:text-[#E5A800] transition-colors duration-300">
                                    {s.title}
                                </h2>
                                <p className="text-[#A6A6A6] text-sm md:text-[16px] leading-relaxed">
                                    {s.body}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={5}
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0d0d0d] border border-[#E5A800]/20 rounded-2xl p-6 md:p-8 mt-4"
                    >
                        <div>
                            <p className="text-white font-normal text-sm">Have questions about our terms?</p>
                            <p className="text-white/40 text-xs mt-1">We&apos;re happy to clarify anything.</p>
                        </div>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            className="shrink-0 px-6 py-2.5 bg-[#E5A800] hover:bg-[#d49600] text-black font-medium text-sm rounded-xl transition-colors"
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <FooterCustom />
        </main>
    );
}
