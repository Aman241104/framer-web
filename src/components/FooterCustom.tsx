'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Mission', href: '/#mission' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms & Conditions', href: '/terms' },
];

const EASE: Easing = [0.25, 1, 0.5, 1];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
    }),
} as const;

export const FooterCustom = () => {
    return (
        <footer className="relative w-full bg-black border-t border-white/5 overflow-hidden">
            {/* Background image / glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-12 flex flex-col items-center text-center">
                {/* Logo */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={0}
                    className="mb-10"
                >
                    <Image
                        src="/images/logo.png"
                        alt="VeeBran Logo"
                        width={160}
                        height={60}
                        className="object-contain"
                        onError={(e) => {
                            // Fallback to text logo if image not found
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                                parent.innerHTML = '<span class="text-white font-black text-3xl tracking-tight">VeeBran</span>';
                            }
                        }}
                    />
                </motion.div>

                {/* CTA Headline */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={1}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6"
                    style={{ fontStyle: 'italic' }}
                >
                    <span className="text-[#3B82F6]">LET&apos;S SUCCEED</span> TOGETHER
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={2}
                    className="text-zinc-400 text-base max-w-md mb-10"
                >
                    We bring your vision to life with creativity and precision. Let&apos;s make it happen.
                </motion.p>

                {/* Book A Call */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={3}
                    className="mb-14"
                >
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 text-[#E5A800] font-bold text-lg hover:gap-3 transition-all duration-300"
                    >
                        Book A Call
                        <svg
                            className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </Link>
                </motion.div>

                {/* Divider */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={3.5}
                    className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"
                />

                {/* Contact Info */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={4}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-10 text-zinc-400 text-sm"
                >
                    <span>Email: <a href="mailto:vishva@veebran.com" className="text-white hover:text-[#E5A800] transition-colors">vishva@veebran.com</a></span>
                    <span className="hidden sm:block w-px h-4 bg-white/10" />
                    <span>Location: India</span>
                </motion.div>

                {/* Nav Links */}
                <motion.nav
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={5}
                    className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.nav>

                {/* Copyright */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={6}
                    className="text-zinc-600 text-xs"
                >
                    Copyright &ldquo;VeeBran&rdquo;. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
};
