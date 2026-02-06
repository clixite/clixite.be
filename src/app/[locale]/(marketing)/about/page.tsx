'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeader } from '@/components/ui/section-header';
import { GlassCard } from '@/components/ui/glass-card';
import { Brain, Shield, Rocket, Target, Code2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function AboutPage() {
    const t = useTranslations('About');

    const valueKeys = ['sovereignty', 'cognitive', 'alignment'] as const;
    const valueIcons = {
        sovereignty: Shield,
        cognitive: Brain,
        alignment: Target,
    };
    const valueColors = {
        sovereignty: 'text-teal-400',
        cognitive: 'text-blue-400',
        alignment: 'text-purple-400',
    };
    const valueBgs = {
        sovereignty: 'bg-teal-500/10',
        cognitive: 'bg-blue-500/10',
        alignment: 'bg-purple-500/10',
    };

    const methodKeys = ['audit', 'architecture', 'deployment', 'maintenance'] as const;
    const methodSteps = {
        audit: '01',
        architecture: '02',
        deployment: '03',
        maintenance: '04',
    };

    return (
        <div className="relative min-h-screen bg-slate-950 pt-32 pb-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.1),transparent_50%)] pointer-events-none" />
            <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <AnimatedSection>
                    <SectionHeader
                        badge={t('hero.badge')}
                        title={t('hero.title')}
                        description={t('hero.description')}
                        className="mb-24"
                    />
                </AnimatedSection>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {valueKeys.map((key, i) => {
                        const Icon = valueIcons[key];
                        return (
                            <AnimatedSection key={key} delay={i * 0.1}>
                                <GlassCard className="p-8 h-full border-white/5 hover:border-teal-500/30 transition-all group">
                                    <div className={`w-12 h-12 rounded-xl ${valueBgs[key]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-6 h-6 ${valueColors[key]}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{t(`values.${key}.title`)}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                        {t(`values.${key}.description`)}
                                    </p>
                                </GlassCard>
                            </AnimatedSection>
                        );
                    })}
                </div>

                {/* Founder / Expertise Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <AnimatedSection delay={0.2}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-teal-500/20 blur-3xl rounded-full opacity-50" />
                            <GlassCard className="relative p-8 border-white/10 bg-slate-900/40">
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Code2 className="text-teal-400" />
                                    {t('founder.title')}
                                </h2>
                                <div className="space-y-4 text-slate-300">
                                    <p>{t('founder.p1')}</p>
                                    <p>{t('founder.p2')}</p>
                                    <div className="pt-6 flex items-center gap-4">
                                        <div className="h-px flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
                                        <span className="text-xs uppercase tracking-widest text-teal-500 font-bold">{t('founder.role')}</span>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} className="space-y-8">
                        <h2 className="text-3xl font-bold text-white">{t('methodology.title')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {methodKeys.map((key) => (
                                <div key={key} className="relative p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                                    <span className="absolute top-4 right-4 text-4xl font-black text-white/5 leading-none">
                                        {methodSteps[key]}
                                    </span>
                                    <h4 className="text-lg font-bold text-teal-400 mb-2">{t(`methodology.steps.${key}.title`)}</h4>
                                    <p className="text-sm text-slate-400">
                                        {t(`methodology.steps.${key}.description`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>

                {/* CTA Callout */}
                <AnimatedSection className="text-center">
                    <div className="inline-block p-px rounded-3xl bg-gradient-to-r from-teal-500/50 via-blue-500/50 to-purple-500/50 shadow-2xl shadow-teal-500/10">
                        <div className="bg-slate-950 rounded-[23px] px-12 py-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
                            <p className="text-slate-400 max-w-xl mx-auto mb-10">
                                {t('cta.description')}
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-full transition-all hover:scale-105 active:scale-95"
                            >
                                {t('cta.button')}
                                <Rocket className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
