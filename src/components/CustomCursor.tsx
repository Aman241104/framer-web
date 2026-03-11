'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring settings for high-end feel
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden sm:block">
            {/* Outer Ring */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 rounded-full border border-white/30"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    borderColor: isHovering ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)',
                }}
            />
            {/* Inner Dot */}
            <motion.div
                className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
            />
        </div>
    );
};
