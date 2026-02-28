'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#3b82f6] origin-left z-50 shadow-[0_0_15px_#3b82f6]"
            style={{ scaleX }}
        />
    );
};
