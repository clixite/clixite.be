'use client';

import { useTranslations } from 'next-intl';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeader } from '@/components/ui/section-header';

export default function CaseStudiesPage() {
    const t = useTranslations('Common.nav');

    return (
        <div className="relative min-h-screen bg-slate-950 pt-32 pb-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.1),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    <SectionHeader
                        badge="Bientôt disponible"
                        title={t('caseStudies')}
                        description="Cette section présentera nos études de cas et success stories. Revenez bientôt !"
                        className="mb-24 text-center"
                    />
                </AnimatedSection>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-slate-400 text-lg">
                        En attendant, n'hésitez pas à nous contacter pour discuter de vos projets.
                    </p>
                </div>
            </div>
        </div>
    );
}
