// app/kostenlos-testen/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/kostenlos-testen`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Kostenlos IPTV Testen | 24-Stunden Test per WhatsApp`
);

const PAGE_DESCRIPTION = clampDescription(
  `IPTV Deutschland kostenlos testen: 24 Stunden, 36.000 Live TVs & 120.000 Filme in 4K. Setup per WhatsApp, ohne Kreditkarte.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'kostenlos iptv',
    'kostenlos iptv testen',
    'iptv kostenlos test',
    'iptv test kostenlos',
    'iptv test deutschland',
    'iptv test austria',
    'iptv test schweiz',
    '24 stunden iptv test',
    'iptv deutschland',
    'iptv kaufen',
    'besten iptv anbieter',
    'iptv extreme',
    '4k iptv testen',
    'iptv ohne vertragslaufzeit',
    'bundesliga iptv test',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'de-DE': PAGE_URL,
      'de-AT': PAGE_URL,
      'de-CH': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Kostenloser IPTV Test Deutschland - 24-Stunden Test per WhatsApp`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
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
  category: 'entertainment',
};

const FreeTrialSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} ist ein vertrauenswürdiger IPTV Anbieter für Deutschland, Österreich und die Schweiz mit einem kostenlosen 24-Stunden-Test, damit Zuschauer das komplette Senderangebot und die 4K IPTV Bildqualität vor dem Abonnement testen können.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['German', 'Deutsch'],
          areaServed: ['DE', 'AT', 'CH'],
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Besten IPTV Anbieter Deutschland`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'de-DE',
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Kostenlos IPTV Testen',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: 'So erhalten Sie Ihren kostenlosen IPTV Test in Deutschland',
        description: 'Schritt-für-Schritt-Anleitung zum kostenlosen 24-Stunden IPTV Test per WhatsApp auf jedem Gerät.',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '0.00',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Per WhatsApp melden',
            text: 'Senden Sie uns eine kurze Nachricht per WhatsApp, dass Sie den kostenlosen 24-Stunden-Test möchten.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Gerät nennen',
            text: 'Teilen Sie uns mit, ob Sie Firestick, Smart TV, Android Box, Apple TV oder Smartphone nutzen, damit wir die passende Setup-Anleitung senden können.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Player-App installieren',
            text: 'Installieren Sie einen kompatiblen Player wie IPTV Extreme, IBO Player Pro oder TiviMate auf Ihrem Gerät.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Test starten',
            text: 'Melden Sie sich mit den Testdaten an, die wir senden, und prüfen Sie Sender, Filme, Sport und 4K IPTV Bildqualität auf Ihrer eigenen Internetverbindung.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Ist der kostenlose IPTV Test in Deutschland wirklich kostenlos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Der Test ist 100% kostenlos, ohne Karte und ohne versteckte Kosten. Wir möchten, dass Sie den kompletten Service auf Ihrem eigenen Gerät und Ihrer Internetverbindung testen, bevor Sie sich für ein Abonnement entscheiden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie lange dauert der kostenlose IPTV Test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Der Test läuft 24 Stunden. Das ist genug Zeit, um das Senderangebot zu prüfen, die Sportsender während eines Live-Spiels zu testen, durch die Filmbibliothek zu stöbern und sicherzustellen, dass alles auf Ihrem Setup reibungslos läuft.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was bekomme ich im kostenlosen Test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sie erhalten während des Tests Zugriff auf das komplette Senderangebot, einschließlich aller 36.000 Live TVs, 120.000 Filme und Serien, Live-Sport mit Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL und Handball sowie internationale Sender aus UK, USA, Österreich, Schweiz und mehr.',
            },
          },
          {
            '@type': 'Question',
            name: 'Brauche ich eine Kreditkarte für den Test?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. Der Test ist komplett kostenlos. Wir fragen nicht nach Kartendaten im Voraus. Sie zahlen nur, wenn Sie sich nach Ende des Tests für ein bezahltes Abonnement entscheiden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich den Test auf meinem Firestick oder Smart TV testen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Sie können den Test auf jedem Gerät testen, das Sie bereits besitzen, einschließlich Amazon Firestick, Samsung und LG Smart TVs, Android TV, Apple TV, iPhone, iPad, Windows PC, Mac und MAG Set-Top-Boxen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie schnell erhalte ich meine Testdaten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Die meisten Kunden erhalten ihre Testdaten innerhalb weniger Minuten nach ihrer WhatsApp-Nachricht. Unser Team bleibt mit Ihnen im Chat, während Sie den Player installieren und sich einloggen, bis alles läuft.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="free-trial-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <FreeTrialSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}