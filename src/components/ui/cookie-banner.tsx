
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage for cookie consent
        const consent = localStorage.getItem('clixite-cookie-consent');
        if (!consent) {
            // Add a small delay for better UX on entry
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('clixite-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('clixite-cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:max-w-lg md:left-auto"
                >
                    <div className="bg-slate-900/90 backdrop-blur-xl border border-teal-500/20 shadow-2xl shadow-black/50 p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
                        {/* Decorative gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-500/10 rounded-xl hidden sm:block">
                                <ShieldCheck className="w-6 h-6 text-teal-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-teal-400 sm:hidden" />
                                    Gestion des cookies
                                </h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Nous respectons votre vie privée. Ce site utilise des cookies essentiels pour son fonctionnement et des cookies analytiques anonymisés pour l&apos;améliorer.
                                </p>
                                <div className="mt-2 text-xs">
                                    <Link href="/privacy" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                                        Lire notre politique de confidentialité
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button
                                onClick={handleAccept}
                                className="bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/20 flex-1"
                            >
                                Accepter tout
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleDecline}
                                className="border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white flex-1"
                            >
                                Refuser
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
