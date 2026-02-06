import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';

export function CTASection() {
    const t = useTranslations('Home.cta');

    return (
        <section className="relative py-32 overflow-hidden bg-slate-950">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

            {/* Accent Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            {t('badge')}
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                            {t('title_line1')} <br />
                            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                                {t('title_accent')}
                            </span>
                        </h2>

                        <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-xl shadow-teal-500/20 transition-all duration-300 hover:scale-[1.02] border-t border-white/10"
                                asChild
                            >
                                <Link href="/contact">
                                    {t('button')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
