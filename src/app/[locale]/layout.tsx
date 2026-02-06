import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '../globals.css';
import { siteConfig } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Agence IT Belge`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['IT', 'agence', 'Belgique', 'SaaS', 'développement', 'cloud', 'PaaS'],
  authors: [{ name: 'Clixite SRL' }],
  creator: 'Clixite SRL',
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Toaster } from '@/components/ui/sonner';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { SmoothScroll } from '@/components/layout/smooth-scroll';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`dark scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <div className="noise-overlay" />
          <SmoothScroll>
            <main className="flex-1">
              {children}
            </main>
          </SmoothScroll>
          <Toaster />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
