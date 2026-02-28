'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const BlogArticleWrapper = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

    return (
        <motion.div
            ref={ref}
            animate={{ opacity: isInView ? 1 : 0.4, scale: isInView ? 1 : 0.98 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full transition-all"
        >
            {children}
        </motion.div>
    );
};
