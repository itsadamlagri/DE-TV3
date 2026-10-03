import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  RefreshCw,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Clock,
  Mail,
  MessageSquare,
  Wrench,
  Wifi,
  FileCheck,
  ArrowRight,
  Info,
  Ban,
  Users,
  Server,
} from 'lucide-react';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/rueckgabe`;

// ---------------------------------------------------------------------------
// METADATA — noindex (legal page)
// ---------------------------------------------------------------------------
export const metadata = {
  ...generateSEOMetadata(
    'Rückgabe & Garantie Policy',
    `Lesen Sie die offiziellen Bedingungen der ${BRAND} 7-Tage-Qualitätsgarantie. Transparente technische Richtlinien und Support-Verfahren für deutsche, österreichische und schweizer Kunden.`,
    '/rueckgabe'
  ),
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const RefundSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Rückgabe & Garantie Policy | ${BRAND}`,
        description: `${BRAND} Rückerstattungs- und 7-Tage-Qualitätsgarantie-Policy. Transparente technische Richtlinien und Support-Verfahren.`,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': CONSTANTS.ORGANIZATION_ID },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Rückgabe & Garantie', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Wie funktioniert die ${BRAND} 7-Tage-Qualitätsgarantie?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Wenn Sie innerhalb von 7 Kalendertagen nach dem Kauf ein verifiziertes technisches Problem in unserer Server-Infrastruktur feststellen und unser 24/7 Support-Team dies nicht innerhalb von 24 Stunden beheben kann, erstatten wir Ihnen den vollen Kaufbetrag. Die Garantie gilt für echte Service-Probleme, nicht für Meinungsänderungen.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Situationen sind NICHT von der Rückerstattungsrichtlinie abgedeckt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Rückerstattungen sind nicht möglich bei Meinungsänderung, persönlicher Präferenz, lokalen WLAN- oder Internetproblemen unter 25 Mbit/s, Geräte-Inkompatibilität mit veralteter Firmware, einzelnen Senderänderungen oder Verstößen gegen die Fair-Use-Richtlinie wie Streaming auf mehr Geräten als gekauft.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie lange dauert eine Rückerstattung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nach der technischen Autorisierung werden Rückerstattungen innerhalb von 1 bis 3 Werktagen auf die ursprüngliche Zahlungsmethode zurückerstattet: SEPA-Überweisung, Kreditkarte, PayPal oder Krypto.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="refund-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function RefundPolicyPage() {
  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <RefundSchema />

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(221,0,0,0.18),_transparent_55%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #DD000012 1px, transparent 1px), linear-gradient(to bottom, #DD000012 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-6 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]/40">
            <ShieldCheck className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
              Verifizierte Server Garantie
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Rückgabe & <span className="text-[#FFCE00]">Garantie</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/85 font-bold max-w-2xl mx-auto leading-relaxed">
            {BRAND} liefert unvergleichliche Stabilität. Wir bieten eine transparente 7-Tage-Qualitätsgarantie auf alle aktiven Streaming-Verbindungen. Sollte der Service nicht wie versprochen funktionieren, machen wir es wieder gut.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Zuletzt geprüft:{' '}
            {new Date().toLocaleDateString(CONSTANTS.LANGUAGE, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Intro summary box */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#DD0000]/30 bg-[#121214] p-6 md:p-8 mb-12 shadow-2xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFCE00]/10 border border-[#FFCE00]/30 px-3 py-1 mb-4">
              <Info className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FFCE00]">
                Zusammenfassung
              </span>
            </div>
            <p className="text-[#FFFFFF]/85 font-medium text-sm md:text-base leading-relaxed">
              Diese Seite erklärt, unter welchen Bedingungen {BRAND} eine Rückerstattung gewährt, welches Diagnose-Verfahren gilt und wie Sie eine Anfrage einreichen. Unsere 7-Tage-Qualitätsgarantie gilt für echte serverseitige Ausfälle und nicht für lokale Probleme, Meinungsänderungen oder Fair-Use-Verstöße.
            </p>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#DD0000]/15 flex items-center justify-center border border-[#DD0000]/30">
                <RefreshCw className="w-6 h-6 text-[#DD0000]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                Unsere 7-Tage-Qualitätsgarantie
              </h2>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                Wir liefern nur hochwertige 4K IPTV und Full HD Streams. Diese Garantie gilt für echte Service-Probleme, wie einen verifizierten technischen Defekt, den unser Support-Team nicht innerhalb des genannten Reparaturzeitraums beheben kann. Sie gilt nicht für Meinungsänderungen, persönliche Präferenzen oder Geräteprobleme auf Ihrer Seite.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              1. Umfang der technischen Garantie
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Eine Rückerstattung wird nur gewährt, wenn der gelieferte Service strukturell und nachweislich nicht funktionsfähig ist, bedingt durch Ursachen in unserer Server-Infrastruktur. Folgende Bedingungen gelten kumulativ:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Die Meldung erfolgt schriftlich innerhalb von exakt 7 Kalendertagen nach dem ursprünglichen Kaufdatum.',
                'Es liegt ein anhaltender, serverbedingter Ausfall vor, der verhindert, dass der Service wie beworben funktioniert.',
                'Unser 24/7 technischer Support hatte mindestens 24 Stunden Zeit, das gemeldete Verbindungsproblem zu beheben oder alternative Routings einzurichten.',
                'Sie haben die von uns angeforderten Standard-Diagnoseschritte durchgeführt, wie einen Router-Neustart, App-Cache-Leerung und DNS-Prüfung.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Alle vier Bedingungen müssen gleichzeitig erfüllt sein. Fehlt eine dieser Voraussetzungen, ist die Rückerstattung nicht möglich. Wir empfehlen, alle Diagnose-Schritte zu dokumentieren (Screenshots, Log-Dateien) und bei Ihrer Anfrage beizufügen.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              2. Ausnahmen & nicht erstattungsfähige Situationen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Da digitale Zugangscodes und Playlists unmittelbar nach dem Kauf dauerhaft auf unseren Load-Balancern erstellt werden, kann in folgenden Situationen <strong className="text-[#FFFFFF]">keine Rückerstattung</strong> beansprucht werden:
            </p>

            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 shadow-xl">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                    <AlertCircle className="w-5 h-5 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <ul className="space-y-2.5 text-[#0a0a0c] text-xs sm:text-sm font-bold leading-relaxed">
                    <li>
                      • <strong>Meinungsänderung:</strong> Anfragen basierend auf Geschmack, Interface-Erfahrung oder dem bloßen Wegfall des Bedarfs am Abonnement.
                    </li>
                    <li>
                      • <strong>Lokale Netzwerkeinschränkungen:</strong> Puffern verursacht durch instabile WLAN-Verbindung, lokale Netzwerküberlastung oder Internetgeschwindigkeiten unter 25 Mbit/s.
                    </li>
                    <li>
                      • <strong>Geräte-Inkompatibilität:</strong> Probleme durch veraltete Smart TV Firmware, nicht unterstützte Drittanbieter-IPTV-Apps oder falsche lokale Konfiguration.
                    </li>
                    <li>
                      • <strong>Senderänderungen:</strong> Vorübergehende Umstrukturierungen oder Änderungen einzelner Sender innerhalb der Zehntausenden verfügbaren Sender.
                    </li>
                    <li>
                      • <strong>Fair-Use-Verstöße:</strong> Konten, die automatisch blockiert wurden wegen Streaming auf mehr Geräten als gekauft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mt-4">
              In allen oben genannten Fällen prüfen wir Ihre Anfrage dennoch sorgfältig und bieten, wenn möglich, alternative Lösungen an – wie eine Verlängerung des Abonnements, einen kostenlosen Wechsel des Geräte-Typs oder eine Anpassung der Server-Region.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              3. Verpflichtendes Diagnose- & Reparaturverfahren
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Bevor eine Rückerstattung autorisiert werden kann, führt unser Support-Team das folgende dreistufige Protokoll durch:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#DD0000] transition-colors">
                <div>
                  <Wrench className="w-6 h-6 text-[#FFCE00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">1. Line-Verifizierung</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Wir überprüfen Ihren Account-Token auf unseren aktiven Server-Ports.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#DD0000] transition-colors">
                <div>
                  <Wifi className="w-6 h-6 text-[#FFCE00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">2. Server-Reset</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Wir leiten Ihr Streaming-Profil auf einen alternativen Frankfurt-Knoten um.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#DD0000] transition-colors">
                <div>
                  <FileCheck className="w-6 h-6 text-[#FFCE00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">3. Freigabe</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Bleibt der Ausfall unlösbar, folgt sofortige Rückerstattungsgenehmigung.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Jeder Schritt wird mit Zeitstempel dokumentiert. Sollte nach allen drei Stufen kein zufriedenstellendes Ergebnis erzielt werden, erhalten Sie ohne weitere Verzögerung die volle Rückerstattung.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              4. Anfrageverfahren & Bearbeitungszeit
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-6">
              Wenn Ihre Meldung die technischen Garantiebedingungen erfüllt, reichen Sie Ihre Anfrage über einen der untenstehenden Kanäle ein, inklusive Bestellnummer und einer kurzen Problembeschreibung:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-3 border border-[#DD0000]/30">
                    <MessageSquare className="w-5 h-5 text-[#DD0000]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                    WhatsApp Support (Schnellste)
                  </h3>
                  <p className="text-[#0a0a0c]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Senden Sie Ihre Bestelldaten und einen Screenshot der Fehlermeldung für Echtzeit-Diagnose.
                  </p>
                </div>
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                    `Hallo! Ich habe ein anhaltendes technisches Problem mit meinem IPTV Konto und möchte das Diagnoseverfahren starten.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full text-center py-3 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#B00000] transition-all border border-[#FFCE00]/30"
                >
                  Diagnose per WhatsApp Starten →
                </a>
              </div>

              <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-3 border border-[#DD0000]/30">
                    <Mail className="w-5 h-5 text-[#DD0000]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                    Schriftlich per E-Mail
                  </h3>
                  <p className="text-[#0a0a0c]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Senden Sie Ihren Transaktionsbeleg und Fehlercode an support@{CONSTANTS.DOMAIN}.
                  </p>
                </div>
                <a
                  href={`mailto:support@${CONSTANTS.DOMAIN}?subject=Technische%20Support-Anfrage`}
                  className="relative w-full text-center py-3 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-xs uppercase tracking-wider border-2 border-[#DD0000] hover:bg-[#DD0000] transition-all"
                >
                  E-Mail Support →
                </a>
              </div>
            </div>

            <p className="text-[#FFFFFF]/60 text-xs leading-relaxed font-medium">
              Nach offizieller technischer Autorisierung wird der Betrag innerhalb von 1 bis 3 Werktagen über die ursprüngliche Zahlungsmethode zurückerstattet: SEPA-Überweisung, Kreditkarte, PayPal oder Krypto.
            </p>
          </section>

          {/* Section 5 — Chargebacks */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              5. Chargebacks & Zahlungsstreitigkeiten
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir empfehlen dringend, zuerst unseren WhatsApp- oder E-Mail-Support zu kontaktieren, bevor Sie einen Chargeback bei Ihrer Bank oder Ihrem Zahlungsanbieter einleiten. In 99% der gemeldeten Fälle lösen wir Probleme innerhalb weniger Minuten.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Unberechtigte Chargebacks ohne vorherigen Kontakt können zur sofortigen Sperrung Ihres Kontos ohne Rückerstattung führen. Wir behalten uns das Recht vor, Belege für die von uns erbrachten Dienstleistungen vorzulegen, um ungerechtfertigte Rückbuchungen abzuwehren.
            </p>
          </section>

          {/* Section 6 — EU Consumer Rights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              6. Ihre Rechte als Verbraucher in der EU
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Zusätzlich zu unserer freiwilligen 7-Tage-Qualitätsgarantie haben Sie als Verbraucher in Deutschland, Österreich und der Schweiz gesetzliche Rechte:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Widerrufsrecht nach § 355 BGB: Bei digitalen Dienstleistungen erlischt das Widerrufsrecht, sobald der Zugang aktiviert wurde – hierauf weisen wir vor Vertragsschluss hin.',
                'Gewährleistungsrecht nach §§ 434, 437 BGB: Sie haben Anspruch auf Nacherfüllung, Minderung oder Rücktritt, wenn der Service nicht der vereinbarten Beschaffenheit entspricht.',
                'Österreichisches KSchG und Schweizer OR: Gleiche Verbraucherschutzstandards gelten für Kunden in AT und CH.',
                'EU-Online-Streitbeilegungsplattform (OS): Sie können sich jederzeit an die von der EU-Kommission bereitgestellte Plattform wenden.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 7 — Fair Use */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              7. Fair-Use & Kontosperrungen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Um die Qualität für alle Kunden zu sichern, überwachen wir die Server-Auslastung automatisch. Folgende Aktivitäten führen zu einer sofortigen Sperrung ohne Rückerstattung:
            </p>
            <ul className="space-y-3">
              {[
                'Weiterverkauf oder Restreaming Ihrer Zugangsdaten an Dritte.',
                'Gleichzeitige Nutzung auf mehr Geräten als im gekauften Paket erlaubt.',
                'Automatisiertes Scraping von Stream-Links oder Playlists.',
                'DDoS-Angriffe oder versuchte Umgehung unserer Firewalls.',
                'Weitergabe Ihrer Zugangsdaten in öffentlichen Foren oder sozialen Netzwerken.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <Ban className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FFCE00]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
                Brauchen Sie Hilfe bei Ihrem Setup?
              </h3>
              <p className="text-[#DD0000] font-bold text-sm md:text-base max-w-md mx-auto mb-6">
                In 99% der Fälle beheben unsere Streaming-Experten Pufferprobleme innerhalb von 2 Minuten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
                <Link
                  href="/support"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#B00000] transition-all shadow-md border border-[#FFCE00]/30"
                >
                  Sofortige Hilfe Erhalten
                </Link>
                <Link
                  href="/einrichtung"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-xs uppercase tracking-widest border-2 border-[#DD0000] hover:bg-[#DD0000] transition-all"
                >
                  Einrichtungsanleitung
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFCE00] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Zurück zur Startseite
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[#FFFFFF]/40 text-xs font-bold inline-flex items-center justify-center gap-2 w-full">
            © {new Date().getFullYear()} {BRAND}. Alle Rechte vorbehalten. Hergestellt in Deutschland
            <GermanFlag className="w-3.5 h-3.5" />
          </p>
        </div>
      </div>
    </div>
  );
}