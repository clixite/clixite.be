import { SolutionsCatalog } from '@/components/sections/solutions-catalog';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CTASection } from '@/components/sections/cta-section';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Solutions' });
    return {
        title: t('hero.title'),
        description: t('hero.description'),
    };
}

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Solutions' });

    return (
        <>
            <section className="relative py-24 bg-slate-950 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

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

            <SolutionsCatalog />

            <CTASection />
        </>
    );
}
