
import { getTranslations } from 'next-intl/server';
import { SectionHeader } from '@/components/ui/section-header';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Terms' });

    return {
        title: `${t('hero.title')} | Clixite`,
        description: t('hero.description'),
    };
}

export default async function TermsPage({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Terms' });

    return (
        <div className="container mx-auto px-4 py-32 relative z-10">
            <SectionHeader
                badge={t('hero.badge')}
                title={t('hero.title')}
                description={t('hero.description')}
                className="mb-16"
            />

            <div className="max-w-4xl mx-auto prose prose-invert prose-slate text-slate-300">
                <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
                    {locale === 'fr' ? (
                        <>
                            <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 1 – CHAMP D’APPLICATION</h2>
                            <p className="mb-2">1.1. Les présentes Conditions Générales (les « CGV ») régissent toutes les relations contractuelles entre le Prestataire et tout client professionnel.</p>
                            <p className="mb-4">1.2. Toute commande implique l’adhésion sans réserve du Client aux présentes CGV.</p>
                            {/* ... more content ... */}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <h2 className="text-xl font-bold text-white mb-4">
                                {locale === 'nl' ? 'Algemene Voorwaarden' : 'Terms & Conditions'}
                            </h2>
                            <p className="mb-6">
                                {locale === 'nl'
                                    ? 'Onze Algemene Voorwaarden zijn momenteel beschikbaar in het Frans.'
                                    : 'Our Terms & Conditions are currently available in French.'}
                            </p>
                            <a href="/fr/terms" className="text-teal-400 hover:underline">
                                {locale === 'nl' ? 'Bekijk de Franse versie' : 'View French version'}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
