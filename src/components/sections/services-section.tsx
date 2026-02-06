import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Search, Code, Cloud, Package, HeartHandshake, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeader } from '@/components/ui/section-header';

const iconMap = {
    software: Code,
    cloud: Cloud,
    security: Search,
    saas: Package,
    consulting: HeartHandshake,
    training: Users,
};

export function ServicesSection() {
    const t = useTranslations('Home.services');

    const serviceKeys = ['software', 'cloud', 'security', 'saas', 'consulting', 'training'] as const;

    return (
        <section className="relative py-32 overflow-hidden bg-slate-950">
            {/* Background gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_70%),radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    description={t('description')}
                    className="mb-20"
                />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceKeys.map((key, index) => {
                        const Icon = iconMap[key];
                        return (
                            <AnimatedSection key={key} delay={index * 0.1}>
                                <GlassCard hover className="p-8 h-full group border-white/5 hover:border-teal-500/30 transition-all duration-300">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-teal-500/10 group-hover:border-teal-500/20 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-teal-400 group-hover:text-teal-300 transition-colors" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                                        {t(`items.${key}.title`)}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {t(`items.${key}.description`)}
                                    </p>
                                </GlassCard>
                            </AnimatedSection>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base hover:bg-white/5 hover:text-white hover:border-teal-500/50 transition-all" asChild>
                        <Link href="/services">
                            {t('cta')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
