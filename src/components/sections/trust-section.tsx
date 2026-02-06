import { useTranslations } from 'next-intl';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeader } from '@/components/ui/section-header';

export function TrustSection() {
    const t = useTranslations('Home.stats');

    const metricKeys = ['expertise', 'independent', 'mastery', 'response'] as const;

    return (
        <section className="relative py-24 bg-slate-950/50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title={t('title')}
                    description={t('description')}
                    className="mb-16 text-center mx-auto"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metricKeys.map((key, idx) => (
                        <AnimatedSection key={key} delay={idx * 0.1}>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-teal-500/30 transition-all text-center group">
                                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-emerald-500 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {t(`metrics.${key}.value`)}
                                </div>
                                <div className="text-lg font-semibold text-white mb-3">
                                    {t(`metrics.${key}.label`)}
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {t(`metrics.${key}.description`)}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
