import { Github as GithubIcon, Linkedin as LinkedinIcon, ArrowRight } from 'lucide-react';
import { BrandIcons } from '@/components/ui/brand-icons';
import { Link } from '@/i18n/routing';
import { siteConfig, navigation } from '@/lib/constants';
import { Logo } from '@/components/ui/logo';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations();

    return (
        <footer className="relative border-t border-white/5 bg-slate-950 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/10 via-slate-950 to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block">
                            <Logo />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            {t('Home.hero.description')}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-full border border-white/5 hover:border-white/20"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href={siteConfig.social.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-full border border-white/5 hover:border-white/20"
                            >
                                <GithubIcon className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2 after:content-[''] after:h-px after:w-8 after:bg-teal-500/50">
                            {t('Common.nav.services')}
                        </h3>
                        <ul className="space-y-3">
                            {navigation.services.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-teal-400 transition-colors" />
                                        {t(`Services.items.${item.id}.title`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2 after:content-[''] after:h-px after:w-8 after:bg-teal-500/50">
                            {t('Common.footer.agency')}
                        </h3>
                        <ul className="space-y-3">
                            {navigation.main.filter(i => ['about', 'contact'].includes(i.localeKey)).map((item) => (
                                <li key={item.localeKey}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-teal-400 transition-colors" />
                                        {t(`Common.nav.${item.localeKey}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2 after:content-[''] after:h-px after:w-8 after:bg-teal-500/50">
                            Contact & Infos
                        </h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/30 transition-colors group">
                                <span className="block text-xs font-bold text-slate-300 uppercase mb-1 group-hover:text-teal-400 transition-colors">Clixite SRL</span>
                                <span className="block text-slate-400">{siteConfig.contact.address}</span>
                                <span className="block text-slate-400">{siteConfig.contact.city}, {siteConfig.contact.country}</span>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-slate-500">Email</span>
                                <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-slate-500">TVA / BCE</span>
                                <span className="font-mono text-slate-300 decoration-slate-600 underline-offset-4">{siteConfig.contact.vat}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Compliance & Trust Badges */}
                <div className="border-t border-white/5 mt-16 pt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-xs font-semibold text-teal-500 uppercase tracking-widest mb-4 text-center md:text-left">
                                Certifications & Conformité
                            </p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 opacity-70 hover:opacity-100 transition-opacity">
                                <div className="group flex flex-col items-center gap-2" title="Service Organization Control 2">
                                    <BrandIcons.SOC2 className="h-10 w-auto text-slate-400 group-hover:text-teal-400 transition-colors" />
                                    <span className="text-[10px] text-slate-500 font-medium tracking-wider">SOC 2</span>
                                </div>
                                <div className="group flex flex-col items-center gap-2" title="Network and Information Security 2">
                                    <BrandIcons.NIS2 className="h-10 w-auto text-slate-400 group-hover:text-teal-400 transition-colors" />
                                    <span className="text-[10px] text-slate-500 font-medium tracking-wider">NIS 2</span>
                                </div>
                                <div className="group flex flex-col items-center gap-2" title="general Data Protection Regulation">
                                    <BrandIcons.GDPR className="h-10 w-auto text-slate-400 group-hover:text-teal-400 transition-colors" />
                                    <span className="text-[10px] text-slate-500 font-medium tracking-wider">GDPR</span>
                                </div>
                                <div className="group flex flex-col items-center gap-2" title="Information Security Management">
                                    <BrandIcons.ISO27001 className="h-10 w-auto text-slate-400 group-hover:text-teal-400 transition-colors" />
                                    <span className="text-[10px] text-slate-500 font-medium tracking-wider">ISO 27001</span>
                                </div>
                                <div className="group flex flex-col items-center gap-2" title="Artificial Intelligence Management System">
                                    <BrandIcons.ISO42001 className="h-10 w-auto text-slate-400 group-hover:text-teal-400 transition-colors" />
                                    <span className="text-[10px] text-slate-500 font-medium tracking-wider">ISO 42001</span>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md text-center md:text-right">
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Nous appliquons les standards de sécurité les plus rigoureux pour garantir la souveraineté et l'intégrité de vos données critiques.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-600 font-medium">
                        © {new Date().getFullYear()} {siteConfig.name} SRL. <span className="hidden sm:inline">Designed in Belgium.</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                        <Link href="/legal" className="hover:text-white transition-colors">
                            {t('Common.footer.legal')}
                        </Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            {t('Common.footer.privacy')}
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            {t('Common.footer.terms')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
