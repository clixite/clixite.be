'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}

export function GlassCard({
    children,
    className,
    hover = false,
    glow = false,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                // Base styles
                'relative overflow-hidden rounded-2xl',
                'backdrop-blur-xl bg-slate-900/50',
                'border border-white/10',
                // Glow effect
                glow && 'animate-glow',
                className
            )}
            // Hover animation
            whileHover={hover ? {
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 }
            } : undefined}
            whileTap={hover ? { scale: 0.98 } : undefined}
            {...props}
        >
            {/* Hover gradient overlay */}
            {hover && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/0 to-blue-500/0 opacity-0 hover:opacity-100 hover:from-teal-500/10 hover:to-blue-500/10 transition-all duration-500 pointer-events-none" />
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
