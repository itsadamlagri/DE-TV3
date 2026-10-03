// app/reseller/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// SEO CONSTANTS
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const LANGUAGE = CONSTANTS.LANGUAGE;
const LOCALE = CONSTANTS.LOCALE;
const ORGANIZATION_ID = CONSTANTS.ORGANIZATION_ID;
const YEAR = new Date().getFullYear();
const PAGE_URL = `${SITE_URL}/reseller`;

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// SEO STRINGS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `IPTV Reseller Deutschland | Start bei 320 €`
);

const PAGE_DESCRIPTION = clampDescription(
  `IPTV Reseller werden in Deutschland, Austria & Schweiz ab 320 €. Credits kaufen, Jahresabos für 55–110 € verkaufen, bis zu 83 € Gewinn pro Verkauf. Sofortiger Panel Zugang.`
);

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv reseller deutschland',
    'iptv reseller werden',
    'iptv reseller panel deutschland',
    'iptv reseller programm',
    'besten iptv reseller',
    'iptv credits kaufen',
    'iptv großhandel',
    'iptv reseller geschäft',
    'iptv reseller panel',
    'iptv reseller austria schweiz',
    FOCUS_KEYWORD,
    'iptv kaufen',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      [LANGUAGE]: PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} IPTV Reseller Programm Deutschland ${YEAR}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/blog/article-reseller/cover.webp`],
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
  category: 'business',
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMAS
// ---------------------------------------------------------------------------
const ResellerSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `IPTV Reseller Programm Deutschland | ${BRAND}`,
        description: PAGE_DESCRIPTION,
        inLanguage: LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': ORGANIZATION_ID },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
        primaryImageOfPage: { '@id': `${PAGE_URL}/#primaryimage` },
      },

      {
        '@type': 'ImageObject',
        '@id': `${PAGE_URL}/#primaryimage`,
        url: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        contentUrl: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        width: 1200,
        height: 630,
        caption: `${BRAND} IPTV Reseller Programm Deutschland ${YEAR}`,
      },

      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Reseller Programm', item: PAGE_URL },
        ],
      },

      {
        '@type': 'Service',
        '@id': `${PAGE_URL}/#service`,
        name: `IPTV Reseller Programm Deutschland ${YEAR}`,
        description: `IPTV Reseller werden in Deutschland, Austria und Schweiz. Credits im Großhandel kaufen, Jahresabonnements für 55 € bis 110 € verkaufen und bis zu 83 € Gewinn pro Kunde verdienen.`,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: [
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'Austria' },
          { '@type': 'Country', name: 'Switzerland' },
        ],
        serviceType: 'IPTV Reseller Panel',
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter Reseller Paket (10 Credits)',
            price: '320.00',
            priceCurrency: CONSTANTS.CURRENCY,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: currentDate,
            description: '10 Reseller Credits, vollständiger Panel Zugang, 24/7 WhatsApp Support. Credits verfallen nie.',
          },
          {
            '@type': 'Offer',
            name: 'Growth Reseller Paket (20 Credits)',
            price: '590.00',
            priceCurrency: CONSTANTS.CURRENCY,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: currentDate,
            description: '20 Reseller Credits, Priority Support, API Zugang, Credits verfallen nie.',
          },
          {
            '@type': 'Offer',
            name: 'Pro Reseller Paket (30 Credits)',
            price: '810.00',
            priceCurrency: CONSTANTS.CURRENCY,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: currentDate,
            description: '30 Reseller Credits, dedizierter Support, White-Label Option, vollständiger API Zugang.',
          },
        ],
      },

      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `IPTV Reseller Programm Deutschland`,
        description: `Großhandel IPTV Reseller Credits für Deutschland, Austria und Schweiz. In großen Mengen kaufen, zu eigenem Preis weiterverkaufen.`,
        brand: { '@id': ORGANIZATION_ID },
        category: 'Business Service',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: CONSTANTS.CURRENCY,
          lowPrice: '320.00',
          highPrice: '810.00',
          offerCount: '3',
          availability: 'https://schema.org/InStock',
          url: PAGE_URL,
        },
      },

      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was genau ist ein IPTV Reseller Panel?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ein Reseller Panel ist ein privates Dashboard, mit dem Sie IPTV Abonnements für Ihre eigenen Kunden erstellen und verwalten können. Sie kaufen Credits bei uns in großen Mengen und nutzen diese Credits, um jährliche, monatliche oder Test-Abonnements für Ihre Kunden zu aktivieren.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viel kann ich als IPTV Reseller in Deutschland, Österreich und der Schweiz realistisch verdienen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kunden zahlen in der Regel zwischen 55 € und 110 € pro Jahr. Ihre Großhandelskosten starten bei etwa 27 € bis 32 € pro Credit, sodass Ihr Gewinn pro Verkauf zwischen 23 € und 83 € liegt. Verkaufen Sie 10 Abonnements zu je 80 €, haben Sie etwa 480 € Gewinn aus einer 320 € Investition erzielt.',
            },
          },
          {
            '@type': 'Question',
            name: 'Brauche ich technische Kenntnisse, um Reseller zu werden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. Das Reseller Panel ist einfach gestaltet. Wenn Sie WhatsApp und einen Webbrowser bedienen können, können Sie ein Reseller-Geschäft führen. Wir bieten Onboarding-Anleitung per WhatsApp, sodass unser Team Ihnen jederzeit direkt weiterhilft.',
            },
          },
          {
            '@type': 'Question',
            name: 'Verfallen die Reseller Credits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. Ihre Credits bleiben unbegrenzt in Ihrem Konto. Es gibt kein Ablaufdatum, kein monatliches Minimum und keinen Druck, schnell zu verkaufen.',
            },
          },
          {
            '@type': 'Question',
            name: 'In welchen Währungen kann ich verkaufen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sie können an Ihre Kunden in jeder Währung verkaufen, die Sie bevorzugen. Ihre Großhandelskosten bei uns sind in Euro fixiert. Ihr Verkaufspreis liegt völlig bei Ihnen, sodass Sie Ihre Margen kontrollieren.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="reseller-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESPONSIVE RESELLER LAYOUT
// ---------------------------------------------------------------------------
export default function ResellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <ResellerSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}