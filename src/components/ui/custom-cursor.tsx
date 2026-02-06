'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    if (typeof window === 'undefined') return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-teal-500 rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
            style={{
                x: mouseX,
                y: mouseY,
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0
            }}
            transition={{ opacity: { duration: 0.2 } }}
        />
    );
}
