'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BlogHeader = () => {
    return (
        <section className="pt-32 pb-20 bg-background relative overflow-hidden border-b border-white/5">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#d4ff00] font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
                >
                    Insights & Strategies
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black mb-8 text-[#3b82f6] tracking-tight uppercase italic"
                >
                    The VeeBran Blog.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium italic"
                >
                    Thoughts on personal branding, AI automation, and building systems that scale.
                </motion.p>
            </div>
        </section>
    );
};
