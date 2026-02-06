import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, MapPin, Clock, Building2 } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeader } from '@/components/ui/section-header';
import { ContactClient } from './contact-client';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Contact' });

    return (
        <div className="relative min-h-screen bg-slate-950 pt-32 pb-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.1),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    <SectionHeader
                        badge={t('badge')}
                        title={t('title')}
                        description={t('description')}
                        className="mb-20"
                    />
                </AnimatedSection>

                <div className="max-w-5xl mx-auto">
                    <ContactClient />
                </div>

                {/* Additional Info / CTA */}
                <AnimatedSection delay={0.4} className="mt-24 text-center">
                    <GlassCard className="inline-block p-12 border-white/5 bg-slate-900/40 max-w-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">{t('expertise.title')}</h3>
                        <p className="text-slate-400 mb-8">
                            {t('expertise.description')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center gap-2 text-teal-400">
                                <Clock className="w-5 h-5" />
                                <span className="text-sm">{t('expertise.response_time')}</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400">
                                <Building2 className="w-5 h-5" />
                                <span className="text-sm">{t('expertise.belgian_expertise')}</span>
                            </div>
                        </div>
                    </GlassCard>
                </AnimatedSection>
            </div>
        </div>
    );
}
