import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export type ServiceData = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    glowColor: string;
};

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceData | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && service && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
                        className="relative w-full max-w-2xl bg-[#0F0F0F] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 z-10 flex flex-col max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-colors group"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Image Header */}
                        <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden shrink-0">
                            <div className={`absolute inset-0 bg-${service.glowColor}/20 mix-blend-overlay z-10`} />
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F0F0F] to-transparent z-10" />
                        </div>

                        {/* Body Content */}
                        <div className="p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto custom-scrollbar relative z-20">
                            <div className="flex flex-col gap-4">
                                <h3
                                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                                    dangerouslySetInnerHTML={{ __html: service.title.replace('<br />', ' ') }}
                                />

                                <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {service.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Area */}
                            <div className="pt-6 mt-auto flex justify-end items-center border-t border-white/5">
                                <a
                                    href="https://calendly.com/vishva-veebran/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex gap-2 items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors"
                                >
                                    Get in Touch
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
