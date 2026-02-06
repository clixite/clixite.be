import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BrandIcons } from '@/components/ui/brand-icons';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeader } from '@/components/ui/section-header';

export function SolutionsPreview() {
    const t = useTranslations('Home.solutions');

    const featuredSolutions = [
        { name: 'Nextcloud', categoryKey: 'Productivité', icon: BrandIcons.Nextcloud },
        { name: 'Jellyfin', categoryKey: 'Médias', icon: BrandIcons.Jellyfin },
        { name: 'Vaultwarden', categoryKey: 'Sécurité', icon: BrandIcons.Vaultwarden },
        { name: 'Grafana', categoryKey: 'Monitoring', icon: BrandIcons.Grafana },
        { name: 'n8n', categoryKey: 'Automatisation', icon: BrandIcons.n8n },
        { name: 'Gitea', categoryKey: 'Développement', icon: BrandIcons.Gitea },
        { name: 'Metabase', categoryKey: 'BI', icon: BrandIcons.Metabase },
        { name: 'Authentik', categoryKey: 'Identité', icon: BrandIcons.Authentik },
        { name: 'Uptime Kuma', categoryKey: 'Monitoring', icon: BrandIcons.UptimeKuma },
        { name: 'Paperless-ngx', categoryKey: 'Documents', icon: BrandIcons.PaperlessNgx },
    ];

    const categoryKeys = [
        'Productivité',
        'Sécurité',
        'Médias',
        'Monitoring',
        'Automatisation',
        'Développement',
        'BI',
        'Documents',
    ];

    return (
        <section className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.1),transparent_50%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    description={t('description')}
                    className="mb-16"
                />

                {/* Category Pills (Visual only for preview) */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
                    {categoryKeys.map((catKey, idx) => (
                        <span
                            key={catKey}
                            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all cursor-default
                                ${idx === 0
                                    ? 'bg-teal-500/10 text-teal-400 border-teal-500/30 shadow-[0_0_15px_-3px_rgba(20,184,166,0.3)]'
                                    : 'bg-slate-800/40 text-slate-400 border-slate-700/50 hover:border-slate-500'
                                }`}
                        >
                            {t(`categories.${catKey}`)}
                        </span>
                    ))}
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {featuredSolutions.map((solution, index) => {
                        const Icon = solution.icon;
                        return (
                            <AnimatedSection key={solution.name} delay={index * 0.05} className="h-full">
                                <div className="group h-full relative overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-900/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10 flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-teal-500/30 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-slate-400 group-hover:text-teal-400 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-200 group-hover:text-white transition-colors">{solution.name}</p>
                                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">{t(`categories.${solution.categoryKey}`)}</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        )
                    })}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-16s pt-16">
                    <p className="text-slate-400 mb-6 text-lg">
                        {t.rich('cta_text', {
                            count: 240,
                            span: (chunks) => <span className="text-teal-400 font-bold">{chunks}</span>
                        })}
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 border border-slate-700 hover:border-teal-500/30 transition-all">
                        <Link href="/solutions">
                            {t('cta_button')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
