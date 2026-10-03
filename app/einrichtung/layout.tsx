// app/einrichtung/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const LANGUAGE = CONSTANTS.LANGUAGE;
const LOCALE = CONSTANTS.LOCALE;
const CURRENCY = CONSTANTS.CURRENCY;
const PAGE_URL = `${SITE_URL}/einrichtung`;

// ---------------------------------------------------------------------------
// SEO STRINGS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `${FOCUS_KEYWORD} Setup | Firestick, Smart TV & Mobil`
);

const PAGE_DESCRIPTION = clampDescription(
  `${FOCUS_KEYWORD} Setup für Firestick, Smart TV, Android & iOS. IPTV Extreme in 10 Min installieren – WhatsApp Hilfe, gratis Test.`
);

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
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
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Setup Anleitung für Firestick, Smart TV und Mobil`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'entertainment',
  keywords: [
    `${FOCUS_KEYWORD} setup`,
    'iptv firestick einrichtung deutschland',
    'iptv smart tv installieren deutschland',
    'iptv extreme setup',
    'ibo player pro einrichtung',
    CONSTANTS.SECONDARY_FOCUS_KEYWORD,
    FOCUS_KEYWORD,
    'iptv kaufen',
    'iptv installation deutschland',
    'iptv einrichten anleitung',
    'iptv firestick deutschland',
    'iptv android tv einrichtung',
    'iptv apple tv installieren',
    'iptv mag box setup',
    'iptv xtream codes einrichtung',
    'iptv m3u playlist anleitung',
    'smart tv iptv app deutschland',
    'kostenlos iptv testen',
    'iptv ohne vertragslaufzeit',
    'bundesliga iptv live',
  ],
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA — HowTo + FAQPage + Breadcrumbs
// ---------------------------------------------------------------------------
const SetupPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': CONSTANTS.ORGANIZATION_ID,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        email: CONSTANTS.CONTACT?.email || '',
        telephone: CONSTANTS.CONTACT?.phone || '',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT?.phone || '',
          email: CONSTANTS.CONTACT?.email || '',
          contactType: 'customer service',
          availableLanguage: ['German', 'Deutsch'],
          areaServed: ['DE', 'AT', 'CH'],
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },

      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: `${FOCUS_KEYWORD} Setup auf jedem Gerät`,
        description: `Komplette Schritt-für-Schritt Installationsanleitung für ${BRAND} auf Firestick, Smart TV, Android, Apple TV und PC oder Mac. Geführtes WhatsApp Setup und ein kostenloser 24-Stunden IPTV Test.`,
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: CURRENCY,
          value: '39.00',
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: 1200,
          height: 630,
        },
        supply: [
          { '@type': 'HowToSupply', name: 'Smart TV, Firestick, Android TV, Apple TV oder PC oder Mac' },
          { '@type': 'HowToSupply', name: 'Stabile Internetverbindung (mindestens 15 Mbit/s, 30 Mbit/s für 4K IPTV)' },
          { '@type': 'HowToSupply', name: `Aktives ${BRAND} Abonnement oder kostenloser IPTV Test` },
        ],
        tool: [
          { '@type': 'HowToTool', name: 'IPTV Extreme oder IBO Player Pro (empfohlene IPTV Player)' },
          { '@type': 'HowToTool', name: 'WhatsApp (für 24/7 Setup Support)' },
        ],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: `${FOCUS_KEYWORD} Paket Wählen`,
            text: `Besuchen Sie die Preise Seite und wählen Sie ein ${BRAND} Abonnement. Wählen Sie 3, 6 oder 12 Monate mit 1, 2 oder 3 gleichzeitigen Geräten. Alle Preise in Euro (inkl. MwSt.).`,
            url: `${SITE_URL}/preise`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Support per WhatsApp Kontaktieren',
            text: `Schreiben Sie unserem Team per WhatsApp. Wir bestätigen den Preis in Euro, senden einen sicheren Zahlungslink und begleiten Sie durch das gesamte ${FOCUS_KEYWORD} Setup.`,
            url: CONSTANTS.CONTACT?.whatsappUrl || '#',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'IPTV Extreme oder IBO Player Pro Installieren',
            text: 'Installieren Sie IPTV Extreme oder IBO Player Pro, zwei der schnellsten und stabilsten IPTV Player für Firestick, Smart TVs, Apple Geräte und PC oder Mac.',
            url: 'https://iboplayer.pro/',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Auto oder Manuelles Setup Wählen',
            text: 'Wählen Sie Auto Setup, bei dem unser Team remote mit Ihrem Device Key aktiviert, oder Manuelles Setup, bei dem Sie die M3U URL oder Xtream Codes eingeben, die wir Ihnen per WhatsApp senden.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Inhalte in 1 bis 2 Minuten Laden',
            text: 'Nach der Aktivierung lädt IPTV Extreme oder IBO Player Pro automatisch Ihre komplette Senderliste, Filme und Serien Bibliothek und den 7-Tage EPG.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Kostenlos IPTV Testen',
            text: 'Testen Sie alles im kostenlosen 24-Stunden IPTV Test. Prüfen Sie Bildqualität, Sportangebot und Wiedergabe auf Ihrem Gerät, bevor Sie auf ein bezahltes Paket upgraden.',
          },
          {
            '@type': 'HowToStep',
            position: 7,
            name: `${FOCUS_KEYWORD} Streaming Starten`,
            text: 'Genießen Sie sofortigen Zugriff auf 36.000 Live TVs und 120.000 Filme und Serien in 4K IPTV Qualität. Sportabdeckung umfasst Bundesliga, Champions League, DFB-Pokal, Formel 1 und DEL.',
          },
        ],
      },

      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wie erhalte ich meine Zugangsdaten nach dem Kauf?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alles wird live per WhatsApp geregelt. Sobald Sie Ihr Paket bestätigen und die Zahlung abschließen, sendet unser Team Ihre Setup-Details direkt im Chat – normalerweise innerhalb weniger Minuten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welchen IPTV Player empfehlen Sie?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Wir empfehlen IPTV Extreme und IBO Player Pro für das schnellste Zappen, den niedrigsten RAM-Verbrauch und die beste 4K-Leistung auf Firestick, Smart TVs, Apple Geräten und PC oder Mac. Beide gehören zu unseren Top-Empfehlungen.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich IPTV Extreme oder IBO Player Pro separat aktivieren?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Der Aktivierungsservice ist bei jedem Abonnement kostenlos inklusive. Wählen Sie Auto Setup, wo Sie uns Ihren Device Key senden und wir remote aktivieren, oder Manuelles Setup, wo Sie M3U oder Xtream Codes selbst eingeben.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie lange dauert das komplette Setup?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Die meisten Kunden streamen innerhalb von 10 Minuten. Die Installation von IPTV Extreme oder IBO Player Pro dauert etwa 2 Minuten, die Aktivierung 1 bis 2 Minuten und das Laden der Inhalte 1 bis 2 Minuten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich meine Zugangsdaten auf mehreren Geräten verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, Sie können die App auf unbegrenzt vielen Geräten installieren. Die Anzahl der gleichzeitigen Streams hängt von Ihrem Paket ab – 1 Gerät für Standard, 2 oder 3 Geräte für Multi-Room.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was tun, wenn ich einen Login-Fehler in IPTV Extreme bekomme?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bestätigen Sie, dass Sie die Xtream Codes API Methode ausgewählt haben, nicht M3U, und dass keine zusätzlichen Leerzeichen in Benutzername oder Passwort sind. Wenn das Problem weiterhin besteht, schreiben Sie uns per WhatsApp – die meisten Probleme lösen sich innerhalb von 2 Minuten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Internetgeschwindigkeit brauche ich für 4K IPTV Streaming?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Für 4K Ultra HD empfehlen wir mindestens 30 Mbit/s. Full HD 1080p läuft reibungslos mit 15 Mbit/s. Die Anti-Freeze Server Technologie passt sich automatisch an Ihre Verbindungsgeschwindigkeit an.',
            },
          },
          {
            '@type': 'Question',
            name: `Benötige ich ein VPN für ${FOCUS_KEYWORD}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein, unsere Server in Frankfurt sind optimiert und sicher. Falls Ihr Internetanbieter während der Stoßzeiten Streaming-Drosselung anwendet, können Sie ein VPN ohne Probleme aktivieren.',
            },
          },
        ],
      },

      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: `${FOCUS_KEYWORD} Einrichtung`, item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="setup-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESPONSIVE SETUP LAYOUT
// ---------------------------------------------------------------------------
export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <SetupPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}