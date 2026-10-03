import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  ShieldCheck,
  Mail,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Copyright,
  Scale,
  Building2,
  Phone,
  MapPin,
  FileText,
  Gavel,
  Globe,
  Clock,
  UserCheck,
  Info,
} from 'lucide-react';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/impressum`;

// ---------------------------------------------------------------------------
// METADATA — noindex (legal page)
// ---------------------------------------------------------------------------
export const metadata = {
  ...generateSEOMetadata(
    'Impressum & Urheberrecht',
    `Offizielles Impressum und Urheberrechtshinweise von ${BRAND} gemäß §5 TMG. Informationen zu Anbieterkennzeichnung, Kontakt und Verfahren für Urheberrechtsbeschwerden.`,
    '/impressum'
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
const ImpressumSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Impressum & Urheberrecht | ${BRAND}`,
        description: `${BRAND} Impressum gemäß §5 TMG und Urheberrechtshinweise. Anbieterkennzeichnung, Kontaktdaten und Verfahren für Urheberrechtsbeschwerden.`,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': CONSTANTS.ORGANIZATION_ID },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Impressum', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="impressum-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <ImpressumSchema />

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
              Anbieterkennzeichnung & Urheberrecht
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Impressum <span className="text-[#FFCE00]">&amp; Urheberrecht</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/85 font-bold max-w-2xl mx-auto leading-relaxed">
            {BRAND} respektiert die Urheberrechte Dritter und hält sich strikt an die geltenden deutschen, österreichischen und schweizerischen Urheberrechtsgesetze sowie die DSGVO.
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

      {/* PROMO BANNER */}
      <section className="w-full bg-gradient-to-r from-[#DD0000] via-[#8C0000] to-[#DD0000] py-10 px-4 sm:px-6 border-y-4 border-[#FFCE00]/30 shadow-[0_0_50px_rgba(221,0,0,0.4)] relative z-20 overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#FFCE00] text-[#8C0000] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            OFFIZIELLER HINWEIS
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            PREMIUM STREAMING MIT INTEGRITÄT
          </h2>
          <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Haben Sie Fragen zu unseren Diensten, Abonnements oder Support? Unser Team hilft Ihnen gerne.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/preise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFCE00] text-[#8C0000] hover:bg-[#0a0a0c] hover:text-[#FFCE00] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <span>IPTV Pakete Ansehen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
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
              Diese Seite enthält alle gesetzlich vorgeschriebenen Angaben zur Anbieterkennzeichnung von {BRAND} gemäß §5 TMG sowie unsere Urheberrechtsrichtlinie, das Verfahren für Takedown-Anfragen und die Kontaktinformationen für rechtliche Angelegenheiten in Deutschland, Österreich und der Schweiz.
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                <AlertCircle className="w-6 h-6 text-[#DD0000]" />
              </div>
            </div>
            <div>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-1">
                  Wichtiger Hinweis:
                </span>
                {BRAND} hostet, lädt oder verwaltet keine Mediendateien auf eigenen Servern. Unsere Software indiziert und organisiert ausschließlich öffentlich verfügbare Streams und Playlists im Internet.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Body */}
        <div className="space-y-12">

          {/* Section 1 — Impressum */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              1. Angaben Gemäß §5 TMG
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-6">
              Verantwortlich für den Inhalt dieser Website im Sinne des §5 des Telemediengesetzes (TMG):
            </p>

            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 shadow-xl space-y-4">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center flex-shrink-0 border border-[#DD0000]/30">
                  <Building2 className="w-5 h-5 text-[#DD0000]" />
                </div>
                <div>
                  <p className="text-[#0a0a0c]/60 text-xs uppercase font-black tracking-widest">
                    Unternehmen
                  </p>
                  <p className="text-[#0a0a0c] font-black text-base">
                    {BRAND} Streaming GmbH
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center flex-shrink-0 border border-[#DD0000]/30">
                  <MapPin className="w-5 h-5 text-[#DD0000]" />
                </div>
                <div>
                  <p className="text-[#0a0a0c]/60 text-xs uppercase font-black tracking-widest">
                    Anschrift
                  </p>
                  <p className="text-[#0a0a0c] font-black text-base leading-relaxed">
                    Musterstraße 1<br />
                    60311 Frankfurt am Main<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center flex-shrink-0 border border-[#DD0000]/30">
                  <Phone className="w-5 h-5 text-[#DD0000]" />
                </div>
                <div>
                  <p className="text-[#0a0a0c]/60 text-xs uppercase font-black tracking-widest">
                    Kontakt
                  </p>
                  <p className="text-[#0a0a0c] font-black text-base leading-relaxed">
                    Telefon: {CONSTANTS.CONTACT.phone}<br />
                    E-Mail: {CONSTANTS.CONTACT.email}
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center flex-shrink-0 border border-[#DD0000]/30">
                  <Scale className="w-5 h-5 text-[#DD0000]" />
                </div>
                <div>
                  <p className="text-[#0a0a0c]/60 text-xs uppercase font-black tracking-widest">
                    Vertretungsberechtigt
                  </p>
                  <p className="text-[#0a0a0c] font-black text-base leading-relaxed">
                    Geschäftsführer: Max Mustermann<br />
                    USt-IdNr.: DE123456789<br />
                    Handelsregister: HRB 12345, Amtsgericht Frankfurt am Main
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#FFFFFF]/70 text-sm font-medium leading-relaxed mt-4 italic">
              <strong className="text-[#FFCE00]">Hinweis:</strong> Die oben genannten Angaben sind Platzhalter. Bitte ersetzen Sie sie mit den echten Unternehmensdaten, bevor die Website live geht. Ein Impressum ist gemäß §5 TMG für alle kommerziellen Websites in Deutschland verpflichtend.
            </p>
          </section>

          {/* Section 2 — Copyright Compliance */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              2. Urheberrechts-Compliance
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              {BRAND} ("wir", "uns" oder "unser") verpflichtet sich, die Rechte von Urheberrechtsinhabern weltweit zu respektieren und hält sich strikt an die Bestimmungen des deutschen Urheberrechtsgesetzes (UrhG), des österreichischen Urheberrechtsgesetzes sowie des schweizerischen Urheberrechtsgesetzes (URG) und die DSGVO. Wir erwarten von allen unseren Nutzern und Partnern, dass sie dieselben Standards einhalten.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Wir ermutigen Urheberrechtsinhaber, sich direkt mit uns in Verbindung zu setzen, wenn sie der Meinung sind, dass ihre Rechte verletzt werden. Wir bearbeiten jede gültige Beschwerde ernst, zeitnah und transparent.
            </p>
          </section>

          {/* Section 3 — What we do not host */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              3. Was Wir Nicht Hosten
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Es ist wichtig zu betonen, dass <strong className="text-[#FFFFFF]">{BRAND}</strong> keine Streaming-Medien, Videodateien oder TV-Übertragungen auf eigener Hardware ausstrahlt, speichert oder hostet.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Unser Service fungiert ausschließlich als technische Schnittstelle und Verzeichnis, das öffentlich verfügbare Stream-Links indiziert. Wir haben kein Eigentum an, keine Kontrolle über und keinen redaktionellen Einfluss auf den Inhalt von Streams, die von externen Anbietern im Internet veröffentlicht werden.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Aus diesem Grund empfehlen wir unseren Nutzern, ihre lokalen Urheberrechts- und Lizenzbestimmungen zu respektieren. Jeder Nutzer ist selbst dafür verantwortlich, sicherzustellen, dass seine Nutzung unseres Dienstes mit den in seinem Land geltenden Gesetzen vereinbar ist.
            </p>
          </section>

          {/* Section 4 — Takedown */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              4. Mitteilung Über Rechtsverletzungen (Takedown-Anfrage)
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wenn Sie rechtmäßiger Eigentümer eines urheberrechtlich geschützten Werks sind oder berechtigt sind, im Namen eines Eigentümers zu handeln, und Sie der Meinung sind, dass Inhalte in unserem Verzeichnis Ihre Rechte verletzen, können Sie eine offizielle Takedown-Anfrage stellen. Nach Eingang einer gültigen Benachrichtigung deaktivieren wir die betroffenen Stream-Referenzen so schnell wie möglich, in der Regel innerhalb von 48 Stunden.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Wir behalten uns das Recht vor, unvollständige oder missbräuchliche Anfragen abzulehnen. Bitte stellen Sie sicher, dass Ihre Beschwerde alle unten aufgeführten Informationen enthält, damit wir sie schnellstmöglich bearbeiten können.
            </p>
          </section>

          {/* Section 5 — Procedure */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              5. Verfahren zur Einreichung einer Anfrage
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-6">
              Um eine formelle Urheberrechtsbeschwerde bei {BRAND} einzureichen, kontaktieren Sie uns bitte über unsere offizielle Urheberrechts-E-Mail-Adresse:
            </p>

            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 text-center shadow-xl">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative">
                <Mail className="w-8 h-8 text-[#DD0000] mx-auto mb-2" />
                <p className="text-xs uppercase font-black text-[#0a0a0c]/60 tracking-widest mb-1">
                  Urheberrechts-Abteilung
                </p>
                <a
                  href={`mailto:dmca@${CONSTANTS.DOMAIN}`}
                  className="text-[#0a0a0c] font-black text-xl md:text-2xl hover:text-[#DD0000] transition-colors break-all"
                >
                  dmca@{CONSTANTS.DOMAIN}
                </a>
              </div>
            </div>

            <p className="text-[#FFFFFF]/80 text-base font-bold mb-4">
              Ihre Mitteilung muss folgende Informationen enthalten:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                'Physische oder elektronische Unterschrift des Urheberrechtsinhabers oder seines Bevollmächtigten.',
                'Eine klare Beschreibung des urheberrechtlich geschützten Werks, das angeblich verletzt wurde.',
                'Die genauen Links oder Stream-Referenzen, die entfernt werden sollen.',
                'Ihre vollständigen Kontaktdaten: rechtlicher Name, Adresse, Telefonnummer und E-Mail-Adresse.',
                'Eine Erklärung in gutem Glauben, dass die beanstandete Nutzung nicht vom Urheberrechtsinhaber, seinem Vertreter oder dem Gesetz genehmigt wurde.',
                'Eine Erklärung, dass die bereitgestellten Informationen korrekt sind, abgegeben unter Strafandrohung wegen Meineid.',
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
              Nach Eingang einer vollständigen Beschwerde bestätigen wir den Empfang innerhalb von 24 Stunden und informieren Sie über die nächsten Schritte. Wir behalten uns das Recht vor, bei offensichtlich unbegründeten oder missbräuchlichen Anfragen rechtliche Schritte einzuleiten.
            </p>
          </section>

          {/* Section 6 — Repeat Infringers */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              6. Wiederholte Verstöße
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              {BRAND} verfolgt eine strikte Richtlinie, wonach die Konten und der Zugang von Resellern oder Nutzern, die wiederholt geistige Eigentumsrechte verletzen, sofort und dauerhaft ohne Vorankündigung oder Rückerstattung gesperrt werden.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Wiederholte Verstöße werden dokumentiert, und bei Bedarf arbeiten wir mit den zuständigen Behörden und Rechteinhabern zusammen. Diese Richtlinie gilt für alle Nutzer unserer Website, unabhängig davon, ob sie ein kostenloses Testkonto oder ein bezahltes Abonnement nutzen.
            </p>
          </section>

          {/* Section 7 — Counter Notice */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              7. Gegendarstellung
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wenn Sie der Meinung sind, dass Ihr Inhalt irrtümlich oder durch Fehlidentifikation entfernt wurde, können Sie eine Gegendarstellung an unsere Urheberrechtsabteilung unter <a href={`mailto:dmca@${CONSTANTS.DOMAIN}`} className="text-[#FFCE00] font-black hover:underline">dmca@{CONSTANTS.DOMAIN}</a> senden. Ihre Gegendarstellung muss den Anforderungen des §40a UrhG, des österreichischen §81 UrhG sowie des schweizerischen Art. 62a URG entsprechen und Ihre Zustimmung zur Gerichtsbarkeit des zuständigen Gerichts enthalten.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Wir bearbeiten Gegendarstellungen innerhalb von 10 Werktagen und stellen den betroffenen Inhalt wieder her, wenn die Gegendarstellung gültig ist und keine anderen rechtlichen Gründe dagegen sprechen.
            </p>
          </section>

          {/* Section 8 — Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              8. Kontakt &amp; Rechtliche Hinweise
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Für alle urheberrechtlichen und Impressum-relevanten Angelegenheiten kontaktieren Sie uns bitte unter <a href={`mailto:dmca@${CONSTANTS.DOMAIN}`} className="text-[#FFCE00] font-black hover:underline">dmca@{CONSTANTS.DOMAIN}</a>. Für allgemeinen Kundensupport nutzen Sie bitte unser 24/7 <Link href="/support" className="text-[#FFCE00] font-black hover:underline">WhatsApp Support Team</Link>.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Das Impressum gilt ausschließlich für die Website <span className="text-[#FFCE00] font-black">{SITE_URL}</span> und alle zugehörigen Unterseiten. Externe Links, die auf andere Websites verweisen, unterliegen den jeweiligen Impressen der Zielseiten, für die wir keine Verantwortung übernehmen.
            </p>
          </section>

          {/* Section 9 — Disclaimer */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              9. Haftungsausschluss
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              {BRAND} übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der auf dieser Website bereitgestellten Informationen. Die Nutzung der Website und der Dienste erfolgt auf eigenes Risiko des Nutzers.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Für Schäden, die durch die Nutzung oder Nichtnutzung der auf dieser Website angebotenen Informationen entstehen, haften wir – soweit gesetzlich zulässig – nicht. Dies gilt auch für Inhalte externer Links, für die ausschließlich die Betreiber der verlinkten Seiten verantwortlich sind.
            </p>
          </section>

          {/* Section 10 — Last Updated */}
          <section>
            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center flex-shrink-0 border border-[#DD0000]/30">
                  <Copyright className="w-6 h-6 text-[#DD0000]" />
                </div>
                <div>
                  <p className="text-[#DD0000] font-black uppercase tracking-wider text-sm mb-1">
                    Zuletzt Aktualisiert
                  </p>
                  <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                    Dieses Impressum wurde zuletzt am 1. Januar {new Date().getFullYear()} aktualisiert. Wir behalten uns das Recht vor, dieses Impressum jederzeit zu ändern. Die weitere Nutzung unserer Dienste nach Änderungen gilt als Annahme des aktualisierten Impressums.
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