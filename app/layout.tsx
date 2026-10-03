import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { CONSTANTS } from '@/lib/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import Loading from './components/loading';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const SITE_URL = CONSTANTS.SITE_URL;

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// SEO STRINGS — driven by CONSTANTS & Optimized Commercial Copy
// ---------------------------------------------------------------------------
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const SECONDARY_KEYWORD = CONSTANTS.SECONDARY_FOCUS_KEYWORD;

// SEO Title (~53-58 chars depending on variable insertion)
const SEO_TITLE = clampTitle(
  `${FOCUS_KEYWORD} Deutschland | 4K Sender Kaufen - Top Preis`
);

// SEO Description (~150-155 chars)
const SEO_DESCRIPTION = clampDescription(
  `Bester ${FOCUS_KEYWORD} Anbieter in 4K & UHD! 36.000+ Sender, Filme & Serien ohne Ruckeln. Jetzt 24h kostenlos testen & sofort freischalten!`
);

const SEO_OG_TITLE = SEO_TITLE;
const SEO_OG_DESCRIPTION = SEO_DESCRIPTION;
const SEO_TWITTER_TITLE = clampTitle(SEO_TITLE, 70);
const SEO_TWITTER_DESCRIPTION = clampDescription(SEO_DESCRIPTION, 200);

// ---------------------------------------------------------------------------
// VIEWPORT
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0c',
};

// ---------------------------------------------------------------------------
// GLOBAL METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${BRAND}`,
  },
  description: SEO_DESCRIPTION,
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
    languages: {
      [CONSTANTS.LANGUAGE]: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: SEO_OG_TITLE,
    description: SEO_OG_DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND,
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} - 36.000+ Live-Sender in 4K Ultra HD`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TWITTER_TITLE,
    description: SEO_TWITTER_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon.ico',
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/img/favicons/safari-pinned-tab.svg',
        color: '#DD0000',
      },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: BRAND,
    statusBarStyle: 'black-translucent',
  },
  other: {
    'msapplication-TileColor': '#0a0a0c',
    'msapplication-TileImage': '/img/favicons/mstile-144x144.png',
    'msapplication-config': '/img/favicons/browserconfig.xml',
  },
  category: 'entertainment',
  keywords: [
    ...CONSTANTS.PRIMARY_KEYWORDS,
    ...CONSTANTS.SECONDARY_KEYWORDS,
  ],
};

// ---------------------------------------------------------------------------
// SITE-WIDE SCHEMAS ONLY
// ---------------------------------------------------------------------------
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': CONSTANTS.ORGANIZATION_ID,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `Jetzt ${FOCUS_KEYWORD} wählen: 36.000+ Live TVs, 120.000+ Filme, Serien in 4K Qualität. Kostenlos testen, per WhatsApp einrichten, ohne Vertrag.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['German', 'Deutsch'],
          areaServed: ['DE', 'AT', 'CH'],
          contactOption: 'TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      }),
    }}
  />
);

const WebSiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Bester ${SECONDARY_KEYWORD} Anbieter`,
        publisher: { '@id': CONSTANTS.ORGANIZATION_ID },
        inLanguage: CONSTANTS.LANGUAGE,
      }),
    }}
  />
);

// ---------------------------------------------------------------------------
// ROOT LAYOUT
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={CONSTANTS.LANGUAGE} suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#0a0a0c] text-[#f2ebeb] selection:bg-[#DD0000] selection:text-white`}
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <WebSiteSchema />

        <Loading />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />

        <GoogleAnalytics gaId="G-0888631KL7" />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}