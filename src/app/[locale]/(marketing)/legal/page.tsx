
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { siteConfig } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mentions Légales | Clixite',
    description: 'Informations légales et mentions obligatoires de Clixite SRL.',
};

export default function LegalPage() {
    return (
        <div className="container mx-auto px-4 py-32 relative z-10">
            <SectionHeader
                badge="Légal"
                title="Mentions Légales"
                description="Informations sur l'éditeur du site et l'hébergement."
                className="mb-16"
            />

            <div className="max-w-4xl mx-auto text-slate-300">
                <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm space-y-12">

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
                            Ce site est hébergé par les sociétés <strong>Infomaniak Network SA</strong> et <strong>Hostinger</strong> sur des serveurs VPS dédiés, privés et sécurisés, localisés en Europe (Suisse, France, Allemagne ou Pays-Bas).
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
                                <p className="font-semibold text-white mb-1">Infomaniak Network SA</p>
                                <p className="text-sm">Rue Eugène-Marziano 25, 1227 Les Acacias, Genève, Suisse</p>
                                <p className="text-sm"><a href="https://infomaniak.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">www.infomaniak.com</a></p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/5">
                                <p className="font-semibold text-white mb-1">Hostinger International Ltd.</p>
                                <p className="text-sm">61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                                <p className="text-sm"><a href="https://hostinger.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">www.hostinger.com</a></p>
                            </div>
                        </div>
                    </section>

                    {/* Propriété intellectuelle */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                            Propriété intellectuelle
                        </h2>
                        <p className="leading-relaxed mb-4">
                            L&apos;ensemble de ce site relève de la législation belge et internationale sur le droit d&apos;auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p className="leading-relaxed">
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
