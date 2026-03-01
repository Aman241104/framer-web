'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', () => setIsVisible(true));

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', () => setIsVisible(true));
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#d4ff00] pointer-events-none z-[9999]"
                style={{ mixBlendMode: 'difference' }}
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
            />
            {/* Outer Trailing Circle */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#3b82f6]/50 pointer-events-none z-[9998] hidden sm:block"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
            />
        </>
    );
};
