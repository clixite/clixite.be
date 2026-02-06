
import { getTranslations } from 'next-intl/server';
import { SectionHeader } from '@/components/ui/section-header';
import { siteConfig } from '@/lib/constants';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Legal' });

    return {
        title: `${t('hero.title')} | Clixite`,
        description: t('hero.description'),
    };
}

export default async function LegalPage({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Legal' });

    return (
        <div className="container mx-auto px-4 py-32 relative z-10">
            <SectionHeader
                badge={t('hero.badge')}
                title={t('hero.title')}
                description={t('hero.description')}
                className="mb-16"
            />

            <div className="max-w-4xl mx-auto text-slate-300">
                <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm space-y-12">
                    {locale === 'fr' ? (
                        <>
                            {/* Editeur */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-teal-500 rounded-full"></span>
                                    Éditeur du site
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <p><strong className="text-white">Dénomination :</strong> {siteConfig.companyName}</p>
                                        <p><strong className="text-white">Forme juridique :</strong> Société à Responsabilité Limitée (SRL)</p>
                                        <p><strong className="text-white">Siège social :</strong> {siteConfig.contact.address}, {siteConfig.contact.city}</p>
                                        <p><strong className="text-white">Pays :</strong> {siteConfig.contact.country}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <p><strong className="text-white">Numéro d&apos;entreprise (BCE/TVA) :</strong> {siteConfig.contact.vat}</p>
                                        <p><strong className="text-white">Email :</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-teal-400 hover:underline">{siteConfig.contact.email}</a></p>
                                        <p><strong className="text-white">Téléphone :</strong> {siteConfig.contact.phone}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Hébergement */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                                    Hébergement
                                </h2>
                                <p className="leading-relaxed mb-4 text-slate-300">
                                    Ce site est hébergé par les sociétés <strong>Infomaniak Network SA</strong> et <strong>Hostinger</strong> sur des serveurs VPS dédiés, privés et sécurisés, localisés en Europe.
                                </p>
                            </section>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <h2 className="text-xl font-bold text-white mb-4">
                                {locale === 'nl' ? 'Juridische informatie' : 'Legal Information'}
                            </h2>
                            <p className="mb-6">
                                {locale === 'nl'
                                    ? 'Onze juridische documentatie is momenteel beschikbaar in het Frans.'
                                    : 'Our legal documentation is currently available in French.'}
                            </p>
                            <a href="/fr/legal" className="text-teal-400 hover:underline">
                                {locale === 'nl' ? 'Bekijk de Franse versie' : 'View French version'}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
