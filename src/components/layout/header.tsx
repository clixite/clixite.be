'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'; // Added accessible components
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Logo } from '@/components/ui/logo';
import { LanguageSwitcher } from './language-switcher';

export function Header() {
    const t = useTranslations('Common.nav');
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: t('services'), href: '/services' },
        { name: t('solutions'), href: '/solutions' },
        { name: t('about'), href: '/about' },
        { name: t('contact'), href: '/contact' }, // Added contact for mobile menu
        { name: t('caseStudies'), href: '/case-studies' }, // Added case studies for mobile menu
    ];

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-500',
                scrolled
                    ? 'backdrop-blur-xl bg-slate-950/80 border-b border-white/5 shadow-2xl shadow-black/50 py-3'
                    : 'bg-transparent border-b border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group" onClick={() => setIsOpen(false)}>
                    <Logo className="transition-transform duration-300 group-hover:scale-105" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/5 backdrop-blur-sm">
                    {navigation.filter(item => !['Contact', 'Cas clients'].includes(item.name)).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
                        >
                            <span className="relative z-10">{item.name}</span>
                            <span className="absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-teal-500/0 via-teal-500/70 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <LanguageSwitcher />
                    <Button asChild className="rounded-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-medium shadow-lg shadow-teal-900/20 border-t border-white/10 transition-all duration-300 hover:scale-105">
                        <Link href="/contact">{t('auditRequest')}</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden text-slate-300 hover:text-white hover:bg-white/5">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-full sm:w-80 bg-slate-950/95 backdrop-blur-xl border-l border-white/10 p-0 flex flex-col">
                        {/* Accessibility properties for Screen Readers */}
                        <div className="sr-only">
                            <SheetTitle>Menu de navigation</SheetTitle>
                            <SheetDescription>Accédez aux différentes sections du site Clixite.</SheetDescription>
                        </div>

                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <Logo showText={true} />
                            {/* Close button is automated by Sheet, but visual balance is good */}
                        </div>

                        <nav className="flex-1 flex flex-col p-6 gap-2 overflow-y-auto">
                            {navigation.map((item, idx) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center justify-between text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 px-4 py-4 rounded-xl transition-all border border-transparent hover:border-white/5"
                                >
                                    {item.name}
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-400">→</span>
                                </Link>
                            ))}
                            {/* Mobile Language Switcher */}
                            <div className="mt-4 px-4 py-2 border-t border-white/5 pt-6">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Langue</p>
                                <LanguageSwitcher />
                            </div>
                        </nav>

                        <div className="p-6 border-t border-white/5 bg-slate-900/30">
                            <Button asChild className="w-full rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:opacity-90 text-white font-medium py-6 text-lg shadow-xl shadow-teal-900/20">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>Demander un audit</Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
