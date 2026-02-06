'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { MessageSquare, Linkedin, Calendar, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const contactMethodKeys = ['whatsapp', 'bookings', 'linkedin', 'email'] as const;

export function ContactClient() {
    const t = useTranslations('Contact.methods');

    const contactMethods = [
        {
            key: 'whatsapp',
            icon: MessageSquare,
            link: 'https://wa.me/32475798747',
            color: 'text-green-400',
            bg: 'bg-green-500/10',
        },
        {
            key: 'bookings',
            icon: Calendar,
            link: 'https://outlook.office365.com/owa/calendar/nicolas@clixite.be/bookings/',
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
        },
        {
            key: 'linkedin',
            icon: Linkedin,
            link: 'https://linkedin.com/company/clixite',
            color: 'text-sky-400',
            bg: 'bg-sky-500/10',
        },
        {
            key: 'email',
            icon: Mail,
            link: 'mailto:nicolas@clixite.be',
            color: 'text-teal-400',
            bg: 'bg-teal-500/10',
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {contactMethods.map((method, index) => (
                <motion.a
                    key={method.key}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block group"
                >
                    <GlassCard
                        hover
                        className="p-8 h-full border-white/5 hover:border-teal-500/30 group-hover:bg-slate-900/80 transition-all"
                    >
                        <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-2xl ${method.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <method.icon className={`w-7 h-7 ${method.color}`} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                {t(`${method.key}.name`)}
                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal-500" />
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {t(`${method.key}.description`)}
                            </p>

                            <span className={`text-xs font-bold uppercase tracking-widest ${method.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                {t(`${method.key}.action`)}
                            </span>
                        </div>

                        {/* Background subtle glow on hover */}
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-teal-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </GlassCard>
                </motion.a>
            ))}
        </div>
    );
}
