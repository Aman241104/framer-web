'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/* Load Satoshi font from Fontshare — same as Framer original */
const s = `@import url('https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500&display=swap');`;

const navLinks = [
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Mission', href: '/#mission' },
    { label: 'Services', href: '/#services' },
    { label: 'Book a Call', href: 'https://calendly.com/vishva-veebran/30min' },
    { label: 'Terms & Conditions', href: '/terms' },
];

const spring = (delay = 0) => ({
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false as boolean, amount: 0.15 as number },
    transition: { type: 'spring' as const, damping: 70, stiffness: 210, delay },
});

export const FooterCustom = () => {
    return (
        <>
            {/* Satoshi font injection */}
            <style dangerouslySetInnerHTML={{ __html: s }} />

            <footer
                className="w-full relative"
                style={{ padding: '0 24px 24px', background: '#000' }}
            >
                {/* Gradient-border outer wrapper */}
                <div
                    style={{
                        maxWidth: 1280,
                        margin: '0 auto',
                        background: 'linear-gradient(180deg, rgba(33,33,33,0.6) 0%, rgb(13,13,13) 100%)',
                        borderRadius: 23,
                        padding: 2,
                    }}
                >
                    {/* Dark inner card */}
                    <div
                        style={{
                            backgroundColor: 'rgb(5,5,5)',
                            borderRadius: 20,
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        {/* Dot background — ElementBackgroundDotsXL equiv */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage:
                                    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'rgba(255,255,255,0.13)\'/%3E%3C/svg%3E")',
                                backgroundRepeat: 'repeat',
                                opacity: 1,
                                pointerEvents: 'none',
                                zIndex: 0,
                            }}
                        />

                        {/* Large faded logo watermark */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '85%',
                                maxWidth: 900,
                                pointerEvents: 'none',
                                opacity: 0.04,
                                zIndex: 0,
                            }}
                        >
                            <img
                                src="https://framerusercontent.com/images/Z6aYVOMp3JvPzbDPEtSwnu3aEmQ.png"
                                alt=""
                                style={{ width: '100%', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Radial spotlight glow */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100%',
                                height: '100%',
                                background:
                                    'radial-gradient(ellipse 70% 60% at 50% 20%, rgba(0,80,220,0.12) 0%, transparent 70%)',
                                pointerEvents: 'none',
                                zIndex: 0,
                            }}
                        />

                        {/* Content above the dot bg */}
                        <div
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '72px 48px 52px',
                            }}
                        >
                            {/* Logo */}
                            <motion.div {...spring(0)} style={{ marginBottom: 48 }}>
                                <img
                                    src="https://framerusercontent.com/images/Z6aYVOMp3JvPzbDPEtSwnu3aEmQ.png"
                                    alt="VeeBran"
                                    style={{ height: 52, width: 'auto', objectFit: 'contain' }}
                                />
                            </motion.div>

                            {/* LET'S SUCCEED TOGETHER headline */}
                            <motion.div {...spring(0.05)} style={{ marginBottom: 24, width: '100%' }}>
                                <h2
                                    style={{
                                        fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
                                        fontWeight: 700,
                                        fontStyle: 'italic',
                                        fontSize: 'clamp(40px, 6.5vw, 88px)',
                                        lineHeight: 1.05,
                                        letterSpacing: '-2px',
                                        margin: 0,
                                        textTransform: 'uppercase',
                                        color: '#fff',
                                    }}
                                >
                                    <span style={{ color: '#004aad' }}>LET&apos;S SUCCEED </span>
                                    TOGETHER
                                </h2>
                            </motion.div>

                            {/* Sub-text */}
                            <motion.p
                                {...spring(0.1)}
                                style={{
                                    fontFamily: '"Satoshi", sans-serif',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: 'rgba(255,255,255,0.6)',
                                    maxWidth: 420,
                                    marginBottom: 32,
                                    lineHeight: 1.6,
                                }}
                            >
                                We bring your vision to life with creativity and precision. Let&apos;s make it happen.
                            </motion.p>

                            {/* Book A Call */}
                            <motion.div {...spring(0.15)} style={{ marginBottom: 52 }}>
                                <a
                                    href="https://calendly.com/vishva-veebran/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontFamily: '"Satoshi", sans-serif',
                                        fontWeight: 700,
                                        fontSize: 18,
                                        color: '#E5A800',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        textDecoration: 'none',
                                        transition: 'gap 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.gap = '12px';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.gap = '8px';
                                    }}
                                >
                                    Book A Call
                                    <svg
                                        width="18"
                                        height="18"
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
                                </a>
                            </motion.div>

                            {/* Divider */}
                            <motion.div
                                {...spring(0.2)}
                                style={{
                                    width: '100%',
                                    height: 1,
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                                    marginBottom: 32,
                                }}
                            />

                            {/* Bottom row: contact + nav */}
                            <motion.div
                                {...spring(0.25)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '16px 24px',
                                    marginBottom: 28,
                                }}
                            >
                                {/* Email + Location */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px 20px',
                                        alignItems: 'center',
                                        fontFamily: '"Satoshi", sans-serif',
                                        fontSize: 14,
                                        color: 'rgba(255,255,255,0.4)',
                                    }}
                                >
                                    <span>
                                        Email:{' '}
                                        <a
                                            href="mailto:vishva@veebran.com"
                                            style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}
                                        >
                                            vishva@veebran.com
                                        </a>
                                    </span>
                                    <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
                                    <span>Location: India</span>
                                </div>

                                {/* Nav links */}
                                <nav
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px 20px',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    {navLinks.map((link) => {
                                    const isExternal = link.href.startsWith('http');
                                    return (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noopener noreferrer" : undefined}
                                            style={{
                                                fontFamily: '"Satoshi", sans-serif',
                                                fontSize: 14,
                                                color: 'rgba(255,255,255,0.4)',
                                                textDecoration: 'none',
                                                transition: 'color 0.2s ease',
                                                whiteSpace: 'nowrap',
                                            }}
                                            onMouseEnter={(e) => { (e.currentTarget).style.color = '#fff'; }}
                                            onMouseLeave={(e) => { (e.currentTarget).style.color = 'rgba(255,255,255,0.4)'; }}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                                </nav>
                            </motion.div>

                            {/* Copyright */}
                            <motion.p
                                {...spring(0.3)}
                                style={{
                                    fontFamily: '"Satoshi", sans-serif',
                                    fontSize: 13,
                                    color: 'rgba(255,255,255,0.2)',
                                    margin: 0,
                                }}
                            >
                                Copyright &ldquo;VeeBran&rdquo;. All rights reserved.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
