import type { Metadata } from 'next';
import { ArrowRight, Search, Code, Cloud, Package, HeartHandshake, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { GlassCard } from '@/components/ui/glass-card';
import { CTASection } from '@/components/sections/cta-section';
import { cn } from '@/lib/utils';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

const serviceIcons = {
    consulting: Search,
    development: Code,
    paas: Cloud,
    solutions: Package,
    support: HeartHandshake,
    staffing: Users,
};

const serviceIds = ['consulting', 'development', 'paas', 'solutions', 'support', 'staffing'] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Services' });
    return {
        title: t('hero.title'),
        description: t('hero.description'),
    };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Services' });

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 bg-slate-950 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="container px-4 relative z-10">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            {t('hero.description')}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services List */}
            <div className="container mx-auto px-4 py-16 space-y-24">
                {serviceIds.map((id, index) => {
                    const isOdd = index % 2 !== 0;
                    const Icon = serviceIcons[id];

                    return (
                        <section key={id} id={id} className="scroll-mt-24">
                            <AnimatedSection direction={isOdd ? 'left' : 'right'}>
                                <div className={cn("flex flex-col gap-12 items-center", isOdd ? "lg:flex-row-reverse" : "lg:flex-row")}>

                                    {/* Visual Side */}
                                    <div className="flex-1 w-full">
                                        <GlassCard className="h-full min-h-[400px] flex items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-white/5">
                                            <div className="text-center">
                                                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-white/10">
                                                    <Icon className="w-12 h-12 text-teal-400" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2">{t(`items.${id}.title`)}</h3>
                                                <p className="text-slate-400">{t(`items.${id}.description`)}</p>
                                            </div>
                                        </GlassCard>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 w-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/10 text-teal-400 font-bold text-sm border border-teal-500/20">
                                                {index + 1}
                                            </span>
                                            <h2 className="text-3xl font-bold text-white">{t(`items.${id}.title`)}</h2>
                                        </div>

                                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                            {t(`items.${id}.description`)}
                                        </p>

                                        <GlassCard className="p-6 md:p-8 bg-white/5">
                                            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                                                {t('common.key_features')}
                                            </h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {/* Use raw translation as array if possible, or mapping if we know the count. 
                                                   In next-intl, arrays are better handled in JSON. */}
                                                {(t.raw(`items.${id}.features`) as string[]).map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-300">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                                                        <span className="leading-snug">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </GlassCard>

                                        <div className="mt-8">
                                            <Button variant="outline" asChild>
                                                <Link href="/contact">
                                                    {t('common.learn_more')} <ArrowRight className="ml-2 w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </AnimatedSection>
                        </section>
                    );
                })}
            </div>

            <CTASection />
        </>
    );
}
