'use client';

import { motion, HTMLMotionProps, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MouseEvent } from 'react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
    spotlight?: boolean;
}

export function GlassCard({
    children,
    className,
    hover = false,
    glow = false,
    spotlight = true,
    ...props
}: GlassCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`radial-gradient(
        600px circle at ${mouseX}px ${mouseY}px,
        rgba(45, 212, 191, 0.15),
        transparent 80%
    )`;

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            className={cn(
                // Base styles
                'relative overflow-hidden rounded-2xl group',
                'backdrop-blur-xl bg-slate-900/50',
                'border border-white/10',
                // Glow effect
                glow && 'animate-glow',
                className
            )}
            // Hover animation
            whileHover={hover ? {
                scale: 1.01,
                y: -4,
                transition: { duration: 0.3 }
            } : undefined}
            whileTap={hover ? { scale: 0.98 } : undefined}
            {...props}
        >
            {/* Spotlight Effect */}
            {spotlight && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{ background }}
                />
            )}

            {/* Hover gradient overlay (fallback if no JS/Framer) */}
            {hover && !spotlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
