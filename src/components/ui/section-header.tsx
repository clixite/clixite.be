import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    badge?: string;           // Small badge text above title
    title: string;            // Main section title
    description?: string;     // Optional description below title
    align?: 'left' | 'center';  // Text alignment (default: center)
    className?: string;
}

export function SectionHeader({
    badge,
    title,
    description,
    align = 'center',
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn(
            'mb-12 md:mb-16',
            align === 'center' && 'text-center',
            className
        )}>
            {badge && (
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-400/10 rounded-full border border-teal-400/20">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {title}
            </h2>
            {description && (
                <p className={cn(
                    'text-lg text-slate-400 leading-relaxed',
                    align === 'center' && 'max-w-2xl mx-auto'
                )}>
                    {description}
                </p>
            )}
        </div>
    );
}
