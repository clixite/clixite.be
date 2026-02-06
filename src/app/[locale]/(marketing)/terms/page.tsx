
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';

export const metadata: Metadata = {
    title: 'Conditions Générales de Vente | Clixite',
    description: 'Conditions générales de vente et de prestations de services de Clixite SRL.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-32 relative z-10">
            <SectionHeader
                badge="Légal"
                title="Conditions Générales de Vente"
                description="Applicables à partir du 1er janvier 2025"
                className="mb-16"
            />

            <div className="max-w-4xl mx-auto prose prose-invert prose-slate text-slate-300">
                <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">IDENTIFICATION DU PRESTATAIRE</h2>
                    <p className="mb-4">
                        <strong>CLIXITE (Société à Responsabilité Limitée / anciennement SPRL)</strong><br />
                        Siège social : Avenue Reine Astrid 53, 1300 Wavre (Belgique)<br />
                        BCE / TVA : BE 0871.430.776<br />
                        (Ci-après dénommée « le Prestataire »)
                    </p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 1 – CHAMP D’APPLICATION ET OPPOSABILITÉ</h2>
                    <p className="mb-2">1.1. Les présentes Conditions Générales (les « CGV ») constituent le socle unique de la négociation commerciale et régissent toutes les relations contractuelles entre le Prestataire et tout client professionnel (ci-après « le Client »).</p>
                    <p className="mb-2">1.2. Toute commande, acceptation de devis, ou exécution de prestation implique l’adhésion sans réserve du Client aux présentes CGV.</p>
                    <p className="mb-4">1.3. <strong>Exclusion des conditions du Client :</strong> Sauf accord écrit spécifique, les présentes CGV prévalent sur toutes clauses contraires figurant dans les conditions générales d’achat, bons de commande ou autres documents émanant du Client.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 2 – FORMATION DU CONTRAT ET ÉVOLUTION DU PÉRIMÈTRE</h2>
                    <p className="mb-2">2.1. <strong>Validité :</strong> Les offres et devis sont valables 15 jours calendriers.</p>
                    <p className="mb-2">2.2. <strong>Conclusion :</strong> Le contrat est réputé conclu dès la survenance du premier des événements suivants : (i) signature du devis, (ii) réception d&apos;un accord écrit (email inclus) du Client, ou (iii) début d&apos;exécution des prestations sans opposition du Client.</p>
                    <p className="mb-4">2.3. <strong>Travaux supplémentaires (Régie) :</strong> Toute demande du Client non explicitement prévue dans le devis initial (ajout de fonctionnalité, intervention sur un autre poste, réunion supplémentaire) sera considérée comme une prestation additionnelle. Elle sera facturée de plein droit en régie au tarif horaire en vigueur, sans qu&apos;un nouveau devis ne soit nécessaire si le montant est inférieur à 500 € HTVA.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 3 – PRIX, INDEXATION ET IMPRÉVISION</h2>
                    <p className="mb-2">3.1. Les prix sont libellés en euros et s&apos;entendent hors TVA.</p>
                    <p className="mb-2">3.2. <strong>Indexation :</strong> Pour les contrats à exécution successive (maintenance, assistance, hébergement), les tarifs seront indexés de plein droit une fois par an (au 1er janvier ou date anniversaire). Cette indexation s&apos;effectue sur base de l&apos;indice Agoria &quot;Coûts salariaux de référence - Moyenne nationale&quot;, selon la formule : <code>P = P0 × (0,20 + 0,80 × S1/S0)</code>.</p>
                    <p className="mb-4">3.3. <strong>Imprévision (Hardship) :</strong> Conformément à l&apos;article 5.74 du Code civil, en cas de changement de circonstances imprévisible (ex: hausse brutale des coûts de l&apos;énergie, des licences logicielles tierces ou du matériel) rendant l&apos;exécution excessivement onéreuse, le Prestataire pourra solliciter une renégociation. En cas de refus, le Prestataire pourra suspendre ses services ou résilier le contrat sans indemnité.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 4 – PAIEMENT ET SANCTIONS</h2>
                    <p className="mb-2">4.1. Les factures sont payables au comptant ou à l&apos;échéance indiquée, sans escompte.</p>
                    <p className="mb-2">4.2. <strong>Retard de paiement :</strong> Tout montant impayé à l&apos;échéance entraîne de plein droit et sans mise en demeure préalable :</p>
                    <ul className="list-disc pl-5 mb-2 space-y-1">
                        <li>Un intérêt de retard au taux directeur défini par la loi du 2 août 2002 concernant la lutte contre le retard de paiement (taux majoré).</li>
                        <li>Une indemnité forfaitaire de 15 % du montant dû, avec un minimum irréductible de 125,00 € par facture, à titre de clause pénale.</li>
                    </ul>
                    <p className="mb-4">4.3. <strong>Exception d&apos;inexécution (Suspension de service) :</strong> En cas de non-paiement (total ou partiel), le Prestataire se réserve le droit de suspendre l’exécution de ses prestations (arrêt de la maintenance, coupure d&apos;accès, rétention de livrables) jusqu&apos;au complet paiement, sans que le Client ne puisse réclamer de dommages et intérêts.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 5 – MODALITÉS D&apos;EXÉCUTION ET RÉCEPTION</h2>
                    <p className="mb-2">5.1. <strong>Obligation de moyens :</strong> Le Prestataire s&apos;engage à apporter tout le soin nécessaire à l&apos;exécution de ses prestations. Il est tenu à une obligation de moyens et non de résultat, compte tenu de la complexité des technologies informatiques.</p>
                    <p className="mb-2">5.2. <strong>Collaboration :</strong> Le Client s&apos;engage à fournir toutes les informations et accès nécessaires. Tout retard dû au Client prolonge d&apos;autant les délais d&apos;exécution.</p>
                    <p className="mb-4">5.3. <strong>Réception tacite (Clause essentielle) :</strong> À défaut de contestation motivée par écrit (recommandé ou email avec accusé) dans les cinq (5) jours ouvrables suivant la livraison ou la mise en production d&apos;une prestation, celle-ci est réputée définitivement acceptée et conforme (recette tacite). Cette acceptation couvre tout défaut apparent.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 6 – VENTE DE MATÉRIEL ET RÉSERVE DE PROPRIÉTÉ</h2>
                    <p className="mb-2">6.1. Le matériel livré reste la propriété exclusive du Prestataire jusqu&apos;au paiement intégral du prix (Loi sur les sûretés mobilières). Le transfert des risques (vol, casse) s&apos;opère toutefois dès la livraison chez le Client.</p>
                    <p className="mb-4">6.2. <strong>Garantie Hardware :</strong> Le Prestataire intervient comme revendeur spécialisé. Le matériel bénéficie uniquement de la garantie du fabricant (Dell, HP, Apple, etc.). Le Prestataire ne fournit aucune garantie personnelle supplémentaire. La gestion des retours SAV constructeur sera facturée au temps passé, sauf contrat de maintenance spécifique incluant ce service.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 7 – RESPONSABILITÉ ET LIMITATIONS</h2>
                    <p className="mb-2">7.1. La responsabilité du Prestataire ne peut être engagée qu&apos;en cas de faute lourde ou dolosive dûment prouvée.</p>
                    <p className="mb-2">7.2. <strong>Dommages exclus :</strong> Le Prestataire n&apos;est en aucun cas responsable des dommages indirects ou immatériels, incluant notamment : perte de données, perte de bénéfices, perte de clientèle, interruption d&apos;activité ou réclamations de tiers.</p>
                    <p className="mb-2">7.3. <strong>Sauvegardes :</strong> Sauf clause contraire écrite (&quot;Backup géré&quot;), la sauvegarde des données incombe exclusivement au Client.</p>
                    <p className="mb-4">7.4. <strong>Plafond d&apos;indemnisation :</strong> Dans tous les cas où la responsabilité du Prestataire serait retenue, le montant des dommages et intérêts est strictement limité aux sommes effectivement perçues par le Prestataire au titre de la prestation litigieuse, avec un plafond global maximum fixé à 10.000 € (ou au montant couvert par l&apos;assurance RC Professionnelle du Prestataire).</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 8 – PROPRIÉTÉ INTELLECTUELLE</h2>
                    <p className="mb-2">8.1. Le Prestataire conserve la propriété pleine et entière de ses savoir-faire, méthodes, et codes sources génériques réutilisables.</p>
                    <p className="mb-4">8.2. Le transfert des droits d&apos;exploitation sur les développements spécifiques (livrables finaux) est subordonné au paiement intégral du prix.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 9 – NON-DÉBAUCHAGE</h2>
                    <p className="mb-4">Le Client s&apos;interdit formellement d&apos;engager ou de faire travailler, directement ou indirectement, tout collaborateur ou sous-traitant du Prestataire, pendant la durée du contrat et 12 mois après son terme. En cas de non-respect, le Client versera une indemnité forfaitaire de 30.000,00 € par personne concernée.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 10 – RÉSILIATION ET CLAUSE RÉSOLUTOIRE</h2>
                    <p className="mb-2">10.1. En cas de manquement grave d&apos;une partie à ses obligations (notamment défaut de paiement), le contrat pourra être résilié de plein droit par l&apos;autre partie, 15 jours après l&apos;envoi d&apos;une mise en demeure restée sans effet.</p>
                    <p className="mb-4">10.2. En cas de résiliation aux torts du Client, l&apos;intégralité des sommes dues ainsi qu&apos;une indemnité de rupture de 30% du solde du contrat seront immédiatement exigibles.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 11 – PROTECTION DES DONNÉES (RGPD)</h2>
                    <p className="mb-4">Le Prestataire agit en qualité de sous-traitant. Il s&apos;engage à traiter les données personnelles uniquement sur instruction du Client et à mettre en oeuvre les mesures de sécurité appropriées. Le Client demeure le Responsable de Traitement.</p>

                    <h2 className="text-xl font-bold text-white mb-4 mt-8">ARTICLE 12 – DROIT APPLICABLE ET JURIDICTION</h2>
                    <p className="mb-2">12.1. Le présent contrat est régi par le droit belge.</p>
                    <p className="mb-4">12.2. Tout litige relatif à sa validité, son interprétation ou son exécution relève de la compétence exclusive des Tribunaux de l&apos;entreprise du Brabant Wallon.</p>
                </div>
            </div>
        </div>
    );
}
