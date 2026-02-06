
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Politique de Confidentialité | Clixite',
    description: 'Protection de vos données personnelles et politique de confidentialité.',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-32 relative z-10">
            <SectionHeader
                badge="RGPD"
                title="Politique de Confidentialité"
                description="Nous respectons votre vie privée et protégeons vos données."
                className="mb-16"
            />

            <div className="max-w-4xl mx-auto prose prose-invert prose-slate text-slate-300">
                <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">

                    <h2 className="text-xl font-bold text-white mb-4">1. Responsable du traitement</h2>
                    <p className="mb-4">
                        Les données à caractère personnel collectées sur ce site sont traitées par :<br />
                        <strong>{siteConfig.companyName}</strong><br />
                        {siteConfig.contact.address}, {siteConfig.contact.city}<br />
                        Email : <a href={`mailto:${siteConfig.contact.email}`} className="text-teal-400">{siteConfig.contact.email}</a>
                    </p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">2. Données collectées</h2>
                    <p className="mb-2">Nous pouvons collecter les données suivantes lorsque vous utilisez notre site :</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li><strong>Formulaire de contact :</strong> Nom, adresse email, téléphone, société, message.</li>
                        <li><strong>Cookies :</strong> Données de navigation et préférences utilisate (voir section Cookies).</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">3. Finalités du traitement</h2>
                    <p className="mb-2">Vos données sont collectées pour les finalités suivantes :</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Répondre à vos demandes de contact et devis.</li>
                        <li>Exécution des services contractuels.</li>
                        <li>Amélioration de votre expérience sur notre site.</li>
                        <li>Respect de nos obligations légales.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">4. Base légale</h2>
                    <p className="mb-4">
                        Le traitement de vos données est justifié par votre consentement (formulaire de contact), l&apos;exécution d&apos;un contrat ou de mesures précontractuelles, ou notre intérêt légitime à assurer la sécurité et le bon fonctionnement de nos services.
                    </p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">5. Durée de conservation</h2>
                    <p className="mb-4">
                        Vos données sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect des délais légaux.
                        Les données de contact sont conservées pendant la durée de la relation commerciale et uqu&apos;à 3 ans après le dernier contact.
                    </p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">6. Vos droits</h2>
                    <p className="mb-2">Conformément au RGPD, vous disposez des droits suivants :</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Droit d&apos;accès à vos données.</li>
                        <li>Droit de rectification des données inexactes.</li>
                        <li>Droit à l&apos;effacement (droit à l&apos;oubli).</li>
                        <li>Droit à la limitation du traitement.</li>
                        <li>Droit à la portabilité des données.</li>
                        <li>Droit d&apos;opposition.</li>
                    </ul>
                    <p className="mb-4">
                        Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse suivante : <a href={`mailto:${siteConfig.contact.email}`} className="text-teal-400">{siteConfig.contact.email}</a>.
                    </p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">7. Cookies</h2>
                    <p className="mb-4">
                        Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences en matière de cookies via le bandeau qui s&apos;affiche lors de votre première visite ou via les paramètres de votre navigateur.
                        Nous n&apos;utilisons que les cookies strictement nécessaires et des cookies analytiques anonymisés respectueux de votre vie privée.
                    </p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">8. Autorité de contrôle</h2>
                    <p className="mb-4">
                        En cas de litige, vous avez le droit d&apos;introduire une réclamation auprès de l&apos;Autorité de Protection des Données (APD) : <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-teal-400">www.autoriteprotectiondonnees.be</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
