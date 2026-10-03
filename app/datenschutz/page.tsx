import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  ShieldCheck,
  Lock,
  Eye,
  Mail,
  CheckCircle,
  Server,
  FileText,
  UserCheck,
  Database,
  Cookie,
  Globe,
  Clock,
  AlertCircle,
} from 'lucide-react';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/datenschutz`;

// ---------------------------------------------------------------------------
// METADATA — noindex (legal page)
// ---------------------------------------------------------------------------
export const metadata = {
  ...generateSEOMetadata(
    'Datenschutzerklärung',
    `Lesen Sie, wie ${BRAND} Ihre Privatsphäre und persönlichen Daten gemäß DSGVO (EU), BDSG (Deutschland) und den Datenschutzgesetzen in Österreich und der Schweiz schützt. 100% vertraulich.`,
    '/datenschutz'
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
const PrivacySchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Datenschutzerklärung | ${BRAND}`,
        description: `${BRAND} Datenschutzerklärung. Wie wir Ihre persönlichen Daten gemäß DSGVO, BDSG und den Datenschutzgesetzen in Österreich und der Schweiz erfassen, schützen und verwalten.`,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': CONSTANTS.ORGANIZATION_ID },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Datenschutzerklärung', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="privacy-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <PrivacySchema />

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
              DSGVO & Datenschutz Garantie
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Daten<span className="text-[#FFCE00]">schutz</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/85 font-bold max-w-2xl mx-auto leading-relaxed">
            Bei {BRAND} legen wir höchsten Wert auf Ihre Privatsphäre. Erfahren Sie, wie wir Ihre persönlichen Daten vertraulich erfassen, schützen und verwalten.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Zuletzt aktualisiert:{' '}
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FFCE00]">
                Zusammenfassung
              </span>
            </div>
            <p className="text-[#FFFFFF]/85 font-medium text-sm md:text-base leading-relaxed">
              Diese Datenschutzerklärung erklärt in einfacher Sprache, welche personenbezogenen Daten {BRAND} erhebt, warum wir sie erheben, wie wir sie schützen und welche Rechte Sie als Nutzer in Deutschland, Österreich und der Schweiz haben. Sie gilt für alle unsere Websites, WhatsApp-Support-Kanäle und IPTV-Abonnement-Dienste.
            </p>
          </div>
        </div>

        {/* Commitment Card */}
        <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                <Lock className="w-6 h-6 text-[#DD0000]" />
              </div>
            </div>
            <div>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-1">
                  Unser Datenschutzversprechen:
                </span>
                Wir behandeln Ihre Daten mit strengster Vertraulichkeit in vollständiger Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG), dem österreichischen DSG sowie dem schweizerischen DSG. Wir speichern niemals Ihren Sehverlauf und verkaufen Ihre Daten unter keinen Umständen an Dritte.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Body */}
        <div className="space-y-12">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              1. Welche Daten wir Erheben
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wenn Sie die Dienste von {BRAND} nutzen, verarbeiten wir nur die minimal notwendigen Daten, um Ihr IPTV Deutschland Abonnement bereitzustellen:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'E-Mail-Adresse und/oder WhatsApp-Nummer (zur Übermittlung Ihrer Zugangsdaten und Abonnement-Status).',
                'Zahlungsverifizierung (sicher und verschlüsselt über lizenzierte Zahlungsdienstleister; wir speichern keine Kreditkarten- oder Bankdaten).',
                'IP-Adresse und Gerätetyp (temporär, für Serververbindung, Load Balancing und Betrugsprävention).',
                'Gewählte Abonnement-Laufzeit und Anzahl der aktiven Streams oder Geräte.',
                'Kundensupport-Kommunikationsverlauf für schnelle Hilfe.',
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
              Darüber hinaus erfassen wir automatisch bestimmte technische Informationen, die für den Betrieb unseres IPTV-Streaming-Dienstes erforderlich sind. Diese Informationen helfen uns, Ihr Nutzererlebnis zu verbessern und unsere Infrastruktur vor Missbrauch zu schützen.
            </p>

            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                    <Eye className="w-5 h-5 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-0.5">
                      Was Wir Niemals Erheben:
                    </span>
                    Wir zeichnen kein Sehverhalten, keine Senderauswahl, keine Suchanfragen oder spezifische Stream-Logs auf. Ihre Streaming-Aktivität ist und bleibt 100% privat.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              2. Wie Wir Ihre Daten Verwenden
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir verwenden die erhobenen Informationen ausschließlich für folgende Zwecke:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Aktivierung und Konfiguration Ihrer Abonnement-Daten und IPTV Extreme Setup.',
                'Sichere Abwicklung von Transaktionen und Abrechnung in Euro (inkl. MwSt.).',
                'Bereitstellung von technischem Support und Setup-Hilfe per WhatsApp und E-Mail.',
                'Information über wichtige Server-Wartungen oder Senderaktualisierungen.',
                'Aufrechterhaltung der Server-Stabilität und Verhinderung unbefugten Missbrauchs.',
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

            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir verarbeiten Ihre Daten ausschließlich auf Grundlage einer der folgenden Rechtsgrundlagen gemäß Art. 6 DSGVO:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) – zur Bereitstellung Ihres Abonnements.',
                'Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO) – z. B. steuerliche Aufbewahrungspflichten.',
                'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) – zur Betrugsprävention und Netzwerksicherheit.',
                'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) – z. B. bei optionaler Marketing-Kommunikation, die Sie jederzeit widerrufen können.',
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

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              3. Datensicherheit
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              {BRAND} setzt fortschrittliche technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten zu schützen:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                '256-Bit SSL/TLS Ende-zu-Ende-Verschlüsselung für alle Web- und Konto-Verbindungen.',
                'Isolierte Server und Firewalls zur Verhinderung von Datenlecks und DDoS-Angriffen.',
                'Strenge Zugriffskontrollen: nur autorisiertes technisches Personal hat Zugang zu Support-Daten.',
                'Keine lokale Speicherung sensibler Bank- oder Kreditkartendaten.',
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

            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Unsere Server befinden sich in dedizierten Rechenzentren innerhalb der Europäischen Union und unterliegen den strengen EU-Datenschutzstandards. Im unwahrscheinlichen Fall einer Datenschutzverletzung, die Ihre Rechte und Freiheiten beeinträchtigen könnte, informieren wir Sie und die zuständige Aufsichtsbehörde gemäß Art. 33 und 34 DSGVO innerhalb der gesetzlichen Frist von 72 Stunden.
            </p>

            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-green-600 rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center border border-green-600/30">
                    <Server className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">
                      Kein Datenverkauf:
                    </span>
                    Wir verkaufen, vermieten oder teilen Ihre persönlichen Daten niemals mit Marketingagenturen, Werbenetzwerken oder Datenhändlern.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              4. Cookies & Funktionale Speicherung
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir verwenden nur funktionale und anonymisierte analytische Cookies, um die Ladegeschwindigkeit der Website zu optimieren und Ihre Sprachpräferenz zu speichern. Sie können Cookies jederzeit über Ihre Browsereinstellungen deaktivieren.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir setzen keine Tracking-Cookies von Drittanbietern für Werbezwecke ein. Die von uns genutzten Cookies fallen in folgende Kategorien:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Unbedingt erforderliche Cookies: für die Grundfunktionen der Website und den Zugriff auf geschützte Bereiche.',
                'Funktionale Cookies: speichern Ihre Spracheinstellung und bevorzugte Region (DE, AT, CH).',
                'Anonyme Analyse-Cookies: helfen uns zu verstehen, welche Seiten am häufigsten besucht werden, ohne personenbezogene Daten zu speichern.',
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

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              5. Ihre Rechte Gemäß DSGVO, BDSG & DSG
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Je nach Ihrem Rechtsraum (Deutschland, Österreich oder Schweiz) haben Sie folgende gesetzliche Datenschutzrechte:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Auskunftsrecht (Art. 15 DSGVO): Sie können eine Kopie der über Sie gespeicherten Daten anfordern.',
                'Recht auf Berichtigung (Art. 16 DSGVO): Das Recht, ungenaue Kontaktdaten zu korrigieren.',
                'Recht auf Löschung / "Recht auf Vergessenwerden" (Art. 17 DSGVO): Das Recht, die dauerhafte Löschung aller Ihrer Kontodaten zu verlangen.',
                'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO) und Datenübertragbarkeit (Art. 20 DSGVO).',
                'Widerspruchsrecht (Art. 21 DSGVO) gegen jede Datenverarbeitung, die nicht gesetzlich vorgeschrieben ist.',
                'Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.',
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
              Um eines dieser Rechte auszuüben, senden Sie bitte eine E-Mail an unsere Datenschutz-Abteilung. Wir werden Ihre Anfrage innerhalb von 30 Tagen gemäß den gesetzlichen Bestimmungen bearbeiten.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              6. Drittanbieter-Dienstleister
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir arbeiten mit einer kleinen Anzahl vertrauenswürdiger Drittanbieter zusammen, darunter Zahlungsdienstleister wie Stripe, PayPal und Krypto-Zahlungs-Gateways sowie Kommunikationstools wie WhatsApp Business. Diese Anbieter halten streng die Datenschutzstandards ein, verarbeiten Daten nur soweit zur Erbringung ihrer Dienste erforderlich und es ist ihnen untersagt, Ihre Daten für andere Zwecke zu verwenden.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Mit allen Auftragsverarbeitern haben wir Verträge gemäß Art. 28 DSGVO abgeschlossen, die den Schutz Ihrer personenbezogenen Daten garantieren.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              7. Datenschutz für Kinder
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Unsere Dienste richten sich nicht an Kinder unter 16 Jahren (oder dem geltenden Mindestalter für digitale Einwilligung in Ihrem Rechtsraum gemäß Art. 8 DSGVO). Wir erheben wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte, damit wir diese umgehend löschen können.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              8. Speicherdauer
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir speichern Ihre Konto- und Kontaktinformationen nur so lange, wie Ihr Abonnement aktiv bleibt, zuzüglich eines angemessenen Zeitraums danach für gesetzliche, steuerliche und buchhalterische Zwecke (gemäß den deutschen Aufbewahrungsfristen, z.B. § 147 AO, § 257 HGB). Nach diesem Zeitraum werden alle personenbezogenen Daten sicher gelöscht oder anonymisiert.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Folgende Speicherfristen gelten für die jeweiligen Kategorien:
            </p>
            <ul className="space-y-3 mt-4">
              {[
                'Konto- und Kontaktdaten: bis zur Kündigung des Abonnements, zzgl. bis zu 10 Jahre für steuerliche Aufbewahrung.',
                'Zahlungsbelege: bis zu 10 Jahre gemäß § 147 AO und § 257 HGB.',
                'Support-Kommunikation: bis zu 24 Monate nach Abschluss des Vorgangs.',
                'Technische Server-Logs: in der Regel maximal 7 Tage.',
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

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              9. Kontakt zum Datenschutz
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Haben Sie Fragen zu unserer Datenschutzerklärung oder möchten eine Datenlöschanfrage stellen? Kontaktieren Sie unseren Datenschutzbeauftragten direkt:
            </p>
            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 text-center shadow-xl">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative">
                <Mail className="w-8 h-8 text-[#DD0000] mx-auto mb-2" />
                <p className="text-xs uppercase font-black text-[#0a0a0c]/60 tracking-widest mb-1">
                  Datenschutz-Abteilung
                </p>
                <a
                  href={`mailto:privacy@${CONSTANTS.DOMAIN}`}
                  className="text-[#0a0a0c] font-black text-xl md:text-2xl hover:text-[#DD0000] transition-colors break-all"
                >
                  privacy@{CONSTANTS.DOMAIN}
                </a>
              </div>
            </div>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Für allgemeinen Kundensupport nutzen Sie bitte unser 24/7{' '}
              <Link href="/support" className="text-[#FFCE00] font-black hover:underline">
                WhatsApp Support Team
              </Link>
              .
            </p>
          </section>

          {/* Section 10 — Updates */}
          <section>
            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center flex-shrink-0 border border-[#DD0000]/30">
                  <FileText className="w-6 h-6 text-[#DD0000]" />
                </div>
                <div>
                  <p className="text-[#DD0000] font-black uppercase tracking-wider text-sm mb-1">
                    Aktualisierungen dieser Policy
                  </p>
                  <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                    Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Wesentliche Änderungen werden auf unserer Startseite oder per WhatsApp an aktive Abonnenten bekannt gegeben. Die weitere Nutzung unserer Dienste nach Änderungen gilt als Annahme der aktualisierten Policy.
                  </p>
                </div>
              </div>
            </div>
          </section>
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