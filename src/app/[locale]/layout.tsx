import './globals.css';
import '@/public/registry/themes.css';
import { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Analytics } from '@/components/analytics';
import { ThemeProvider } from '@/components/providers';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { siteConfig } from '@/config/site';
import { Toaster as NewYorkSonner } from '@/components/ui/sonner';
import { Toaster as NewYorkToaster } from '@/components/ui/toaster';
import { ThemeWrapper } from '@/components/theme-wrapper';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import { TranslationsProvider } from '@/components/translations-provider';
import initTranslations from '@/i18n';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
  authors: [
    {
      name: 'shadcn',
      url: 'https://shadcn.com',
    },
  ],
  creator: 'shadcn',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@shadcn',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
const i18nNamespaces = ['home'];

export default async function RootLayout({ children, params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <div vaul-drawer-wrapper=''>
            <div className='relative flex min-h-screen flex-col bg-background'>
              <ThemeWrapper>
                <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
                  {children}
                </TranslationsProvider>
              </ThemeWrapper>
            </div>
          </div>
          <TailwindIndicator />
          <Analytics />
          <ThemeSwitcher />
          <NewYorkToaster />
          <NewYorkSonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
