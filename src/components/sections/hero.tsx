'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Server, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';

export function Hero() {
    const t = useTranslations('Home.hero');

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Base Background */}
            <div className="absolute inset-0 bg-slate-950" />

            {/* Ambient Gradients - Deep Space Effect */}
            <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.15),transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-full bg-[radial-gradient(circle_at_50%_100%,rgba(37,99,235,0.1),transparent_50%)] pointer-events-none" />

            {/* Animated Orbs */}
            <motion.div
                className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-teal-500/20 blur-[120px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute -bottom-[20%] left-[5%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[140px]"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-emerald-500/10 blur-[100px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Tech Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="relative z-10 max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <AnimatedSection delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-8 backdrop-blur-sm mx-auto">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            {t('badge')}
                        </div>
                    </AnimatedSection>

                    {/* Title */}
                    <AnimatedSection delay={0.2}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                            {t('title_line1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 animate-gradient">
                                {t('title_accent')}
                            </span>
                        </h1>
                    </AnimatedSection>

                    {/* Description */}
                    <AnimatedSection delay={0.3}>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {t('description')}
                        </p>
                    </AnimatedSection>

                    {/* Buttons */}
                    <AnimatedSection delay={0.4}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 h-12 text-base shadow-[0_0_20px_-5px_rgba(20,184,166,0.4)] transition-all hover:scale-105">
                                <Link href="/contact">
                                    {t('cta_audit')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all text-slate-400">
                                <Link href="/solutions">
                                    {t('cta_solutions')}
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>

                    {/* Trust Indicators */}
                    <AnimatedSection delay={0.6} className="mt-16 pt-8 border-t border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                            {[
                                { key: 'security', icon: Shield },
                                { key: 'sovereignty', icon: Server },
                                { key: 'ai', icon: Code }
                            ].map((item) => (
                                <div key={item.key} className="flex flex-col items-center gap-2 group">
                                    <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5 text-teal-400 mb-1 group-hover:text-teal-300 transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-200">{t(`trust.${item.key}.title`)}</span>
                                    <span className="text-xs text-slate-500">{t(`trust.${item.key}.subtitle`)}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
