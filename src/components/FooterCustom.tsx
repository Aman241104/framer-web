'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Mission', href: '/#mission' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms & Conditions', href: '/terms' },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 as number },
    transition: { duration: 0.65, delay, type: 'tween' as const },
});

export const FooterCustom = () => {
    return (
        <footer className="w-full bg-black relative pt-8 pb-0">
            {/* Outer gradient border wrapper — matches Framer "Stroke" layer */}
            <div
                className="mx-auto w-[calc(100%-48px)] max-w-[1280px] rounded-[23px] p-[2px]"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(33,33,33,0.6) 0%, rgb(13,13,13) 100%)',
                }}
            >
                {/* Inner dark card — matches Framer "Footer Card" layer */}
                <div
                    className="w-full rounded-[20px] overflow-hidden relative"
                    style={{ backgroundColor: 'rgb(5,5,5)' }}
                >
                    {/* Dot grid background */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.04]"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                        }}
                    />

                    {/* Background image (sky/stars banner from Framer) */}
                    <div
                        className="absolute top-0 left-0 w-full h-[300px] pointer-events-none"
                        style={{
                            backgroundImage:
                                'url(https://framerusercontent.com/images/Z6aYVOMp3JvPzbDPEtSwnu3aEmQ.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                            opacity: 0.06,
                        }}
                    />

                    {/* Gradient overlay at bottom of background */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(17,17,17,0) 0%, rgba(5,5,5,0.87) 100%)',
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 md:pt-20 md:pb-16">
                        {/* Logo */}
                        <motion.div {...fadeUp(0)} className="mb-10">
                            <img
                                src="https://framerusercontent.com/images/Z6aYVOMp3JvPzbDPEtSwnu3aEmQ.png"
                                alt="VeeBran"
                                className="h-14 md:h-16 w-auto object-contain"
                            />
                        </motion.div>

                        {/* Big italic CTA headline */}
                        <motion.h2
                            {...fadeUp(0.1)}
                            className="text-[40px] sm:text-[56px] md:text-[72px] font-black uppercase leading-none tracking-tight mb-6"
                            style={{ fontStyle: 'italic', color: '#fff' }}
                        >
                            <span style={{ color: '#0094ff' }}>LET&apos;S SUCCEED</span>
                            <br />
                            TOGETHER
                        </motion.h2>

                        {/* Sub-text */}
                        <motion.p
                            {...fadeUp(0.15)}
                            className="text-zinc-400 text-sm md:text-base max-w-xs md:max-w-md mb-8"
                        >
                            We bring your vision to life with creativity and precision.
                            Let&apos;s make it happen.
                        </motion.p>

                        {/* Book A Call CTA */}
                        <motion.div {...fadeUp(0.2)} className="mb-14">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 text-[#E5A800] font-bold text-base md:text-lg hover:gap-3 transition-all duration-300"
                            >
                                Book A Call
                                <svg
                                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
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
                            {...fadeUp(0.25)}
                            className="w-full h-px mb-8"
                            style={{
                                background:
                                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                            }}
                        />

                        {/* Contact info + Nav links row */}
                        <motion.div
                            {...fadeUp(0.3)}
                            className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
                        >
                            {/* Email + Location */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-zinc-400 text-sm">
                                <span>
                                    Email:{' '}
                                    <a
                                        href="mailto:vishva@veebran.com"
                                        className="text-white hover:text-[#E5A800] transition-colors"
                                    >
                                        vishva@veebran.com
                                    </a>
                                </span>
                                <span className="hidden sm:inline text-zinc-700">|</span>
                                <span>Location: India</span>
                            </div>

                            {/* Nav links */}
                            <nav className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-zinc-500 hover:text-white text-sm transition-colors duration-200 whitespace-nowrap"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>

                        {/* Copyright */}
                        <motion.p {...fadeUp(0.35)} className="text-zinc-600 text-xs">
                            Copyright &ldquo;VeeBran&rdquo;. All rights reserved.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Bottom spacer matching Framer footer pb */}
            <div className="h-8 md:h-12" />
        </footer>
    );
};
