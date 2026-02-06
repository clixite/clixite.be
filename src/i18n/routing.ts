import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['fr', 'nl', 'en'],

    // Used when no locale matches
    defaultLocale: 'fr',

    // The cookie name used to store the locale
    localeCookie: {
        name: 'NEXT_LOCALE',
        maxAge: 31536000 // 1 year
    }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
