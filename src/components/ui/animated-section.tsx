'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;           // Delay in seconds
    duration?: number;        // Duration in seconds (default: 0.6)
    once?: boolean;           // Only animate once (default: true)
    amount?: number;          // Viewport amount 0-1 (default: 0.3)
}

const variants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
};

export function AnimatedSection({
    children,
    className,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3,
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial={variants[direction].initial}
            animate={isInView ? variants[direction].animate : variants[direction].initial}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
