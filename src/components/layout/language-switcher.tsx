'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, routing } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    function handleLocaleChange(newLocale: string) {
        // @ts-ignore
        router.replace({ pathname, params }, { locale: newLocale });
    }

    const languages = [
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'nl', label: 'Nederlands', flag: '🇧🇪' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
    ];

    const currentLang = languages.find(l => l.code === locale) || languages[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-3 gap-2 text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-full transition-all"
                >
                    <Globe className="w-4 h-4 opacity-70" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{locale}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-slate-950/90 backdrop-blur-xl border-white/10 text-slate-200">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLocaleChange(lang.code)}
                        className={cn(
                            "flex items-center gap-3 px-4 py-2 cursor-pointer focus:bg-white/5 focus:text-teal-400 transition-colors",
                            locale === lang.code && "text-teal-500 font-medium bg-white/5"
                        )}
                    >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm">{lang.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
