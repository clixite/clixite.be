import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2 select-none", className)}>
            <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-teal-500/20 rounded-lg blur-md" />

                {/* Main Shape - Stylized 'C' / Hexagon */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 relative z-10"
                >
                    <path
                        d="M16.5 7.5L12 5L7.5 7.5V16.5L12 19l4.5-2.5"
                        stroke="url(#logo-gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-sm"
                    />
                    <path
                        d="M12 12m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"
                        fill="currentColor"
                        className="text-white"
                    />
                    <defs>
                        <linearGradient id="logo-gradient" x1="7.5" y1="5" x2="16.5" y2="19" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#2dd4bf" /> {/* teal-400 */}
                            <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {showText && (
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-teal-100 to-teal-400 bg-clip-text text-transparent tracking-tight">
                    Clixite
                </span>
            )}
        </div>
    );
}
