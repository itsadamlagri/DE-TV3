import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  Award,
  Globe,
  Users,
  Server,
  Zap,
  ShieldCheck,
  Trophy,
  Headphones,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Tv,
  Film,
  Activity,
  Clock,
  Target,
  TrendingUp,
  Wifi,
  CheckCircle,
  UserCheck,
  Rocket,
  Layers,
  Radio,
} from 'lucide-react';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/ueber-uns`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Über Uns',
  `Entdecken Sie die Geschichte hinter ${BRAND}, dem vertrauenswürdigen IPTV Anbieter für Deutschland mit 36.000+ Live TVs in 4K IPTV und 99,9% Uptime.`,
  '/ueber-uns'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const AboutPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${PAGE_URL}/#about`,
        url: PAGE_URL,
        name: `Über ${BRAND}`,
        description: `Erfahren Sie mehr über ${BRAND}, den vertrauenswürdigen IPTV Anbieter für Deutschland mit 36.000+ Live TVs, 120.000+ Filme und Serien und 15.000+ zufriedenen Kunden in Deutschland, Österreich und der Schweiz.`,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': CONSTANTS.ORGANIZATION_ID },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Über Uns', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="about-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <AboutPageSchema />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
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
            <Sparkles className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
              Unsere Geschichte & Mission
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Über <span className="text-[#FFCE00]">{BRAND}</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/85 font-bold max-w-2xl mx-auto leading-relaxed">
            Der Premium IPTV Anbieter für Deutschland. Erleben Sie unbegrenztes Streaming in 4K IPTV Qualität – ohne Puffer, ohne Vertragslaufzeit, ohne versteckte Gebühren.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Unternehmensstatistiken">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '15.000+', label: 'Zufriedene Kunden' },
            { icon: Globe, value: '100+', label: 'Länder Verfügbar' },
            { icon: Server, value: '99,9%', label: 'Server Uptime' },
            { icon: Trophy, value: '4,9/5', label: 'Durchschnittsbewertung' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl shadow-xl hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)] transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-[#DD0000] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#0a0a0c]/70 text-xs font-black uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="w-full bg-gradient-to-r from-[#DD0000] via-[#8C0000] to-[#DD0000] py-10 px-4 sm:px-6 border-y-4 border-[#FFCE00]/30 shadow-[0_0_50px_rgba(221,0,0,0.4)] relative z-20 overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#FFCE00] text-[#8C0000] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            SPAREN SIE BEI KABEL-TV
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            BEREIT FÜR DAS BESTE IPTV ERLEBNIS?
          </h2>
          <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Hören Sie auf, für separate Abonnements zu viel zu bezahlen. Holen Sie sich all Ihren Sport, Filme und deutsche Sender in einem kompletten Paket.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/preise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFCE00] text-[#8C0000] hover:bg-[#0a0a0c] hover:text-[#FFCE00] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <span>IPTV Abonnements Ansehen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Intro Card */}
        <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                <Heart className="w-6 h-6 text-[#DD0000]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
                Willkommen bei {BRAND}
              </h2>
              <p className="text-[#0a0a0c]/90 font-bold text-base leading-relaxed">
                Wir wurden mit einem klaren Ziel gegründet: Premium Live-TV und On-Demand-Medien für jeden Haushalt in Deutschland, Österreich und der Schweiz zugänglich und bezahlbar zu machen – ohne Kompromisse bei Bildqualität oder Stabilität.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-12">

          {/* Mission */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Unsere Mission & Vision
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-4">
              Traditionelle Kabel-Abonnements werden jedes Jahr teurer, während die Senderauswahl begrenzt bleibt. Haushalte in DACH sind gezwungen, mehrere Dienste zu bündeln, nur um Bundesliga, Champions League, Formel 1 und Filme zu bekommen – oft zahlen sie 60 € oder mehr pro Monat für einen Bruchteil der Inhalte.
            </p>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-4">
              Bei {BRAND} bündeln wir alles in einer intuitiven Plattform. Live-Sport, deutsche öffentlich-rechtliche Sender und die neuesten Kinoveröffentlichungen in 4K IPTV Ultra HD. Wir investieren kontinuierlich in fortschrittliche Serverkapazität, um Puffern der Vergangenheit angehören zu lassen – selbst am Champions-League-Finaltag.
            </p>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium">
              Unser Ziel ist einfach: Der zuverlässigste und ehrlichste IPTV Anbieter in Deutschland zu sein. Keine versteckten Gebühren, keine automatischen Verlängerungen, keine leeren Versprechungen – nur stabiles 4K IPTV Streaming zu einem fairen Preis.
            </p>
          </section>

          {/* Timeline / Story */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Unsere Reise
            </h2>
            <div className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 rounded-3xl p-6 md:p-8">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative space-y-6">
                {[
                  {
                    year: 'Gründung',
                    title: 'Start mit Frankfurt Servern',
                    desc: 'Wir begannen mit einer kleinen Serverfarm in Frankfurt am Main und dem Ziel, deutschsprachigen Haushalten eine bezahlbare Alternative zu Kabel-TV zu bieten.',
                  },
                  {
                    year: 'Wachstum',
                    title: 'Expansion in DACH',
                    desc: 'Innerhalb weniger Monate erreichten wir Kunden in Deutschland, Österreich und der Schweiz. Unsere Server-Infrastruktur wurde auf redundante Cluster ausgebaut.',
                  },
                  {
                    year: 'Heute',
                    title: '15.000+ Zufriedene Kunden',
                    desc: 'Heute bedienen wir über 15.000 aktive Haushalte mit 36.000+ Live-Sendern, 120.000+ VOD-Titeln und einem dedizierten 24/7 WhatsApp-Support-Team.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FFCE00] text-[#8C0000] text-[10px] font-black uppercase tracking-widest">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1 border-l-2 border-[#DD0000]/40 pl-6">
                      <h3 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#FFFFFF]/70 text-sm font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature Grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Warum {BRAND} die Beste Wahl Ist
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: '99,9% Uptime Garantie',
                  desc: 'Unsere redundanten Server-Cluster stellen sicher, dass Ihre Lieblingssendungen immer live und ohne Unterbrechung verfügbar sind.',
                },
                {
                  icon: Zap,
                  title: 'Anti-Freeze Technologie',
                  desc: 'Fortschrittliche Load-Balancer verhindern Puffern während Stoßzeiten und Live-Sport-Events mit hohem Datenverkehr.',
                },
                {
                  icon: Server,
                  title: 'Frankfurt Hochgeschwindigkeits-Server',
                  desc: 'Direkt an große deutsche und internationale Internet-Knotenpunkte angebunden für minimale Latenz und sofortiges Sender-Zappen.',
                },
                {
                  icon: Headphones,
                  title: '24/7 WhatsApp Kundensupport',
                  desc: 'Kompetente Hilfe bei Installation, App-Auswahl und Senderkonfiguration – meist innerhalb von Minuten.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 bg-[#f2ebeb] rounded-3xl border-4 border-[#DD0000] shadow-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(221,0,0,0.2)] transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#DD0000] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-black text-[#0a0a0c] text-base uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-[#0a0a0c]/80 text-xs font-bold mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Values — NEW */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Unsere Werte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Target,
                  title: 'Transparenz',
                  desc: 'Ehrliche Preise, klare Bedingungen, keine versteckten Gebühren. Sie wissen genau, was Sie bekommen.',
                },
                {
                  icon: Rocket,
                  title: 'Innovation',
                  desc: 'Wir investieren kontinuierlich in neue Server-Technologie, um die stabilste 4K IPTV Erfahrung in DACH zu bieten.',
                },
                {
                  icon: UserCheck,
                  title: 'Kundenorientierung',
                  desc: 'Persönlicher Support per WhatsApp, 24/7 erreichbar. Kein Ticket-System, kein Warten – echte Menschen.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 hover:border-[#FFCE00] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#DD0000]/10 blur-2xl rounded-full pointer-events-none" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#FFCE00]" />
                      </div>
                      <h3 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#FFFFFF]/70 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Infrastructure */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Unsere Technische Server-Infrastruktur
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              Wir betreiben unsere eigenen Streaming-Server mit dedizierten 10 Gbit/s Glasfaser-Verbindungen. Unsere Server leiten das Videosignal automatisch über den nächstgelegenen Knotenpunkt, sodass Sie immer flüssige 50 und 60 FPS Streaming-Qualität genießen – ob Sie in Berlin, Hamburg, München, Wien oder Zürich sind.
            </p>
            <div className="bg-[#0a0a0c] border border-white/10 rounded-3xl p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#DD0000] transition-all">
                  <Activity className="w-8 h-8 text-[#FFCE00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Niedrige Latenz</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Minimale Verzögerung bei Live-Sport
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#DD0000] transition-all">
                  <Film className="w-8 h-8 text-[#FFCE00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">H.265 / HEVC</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Optimaler Datenverbrauch bei 4K
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#DD0000] transition-all">
                  <Tv className="w-8 h-8 text-[#FFCE00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Universell</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Funktioniert auf jedem Smart TV System
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Devices — NEW */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Kompatibel mit Allen Geräten
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              Unser IPTV Service funktioniert auf praktisch jedem modernen Gerät mit Internetverbindung. Egal ob Sie auf dem Sofa, im Bett oder unterwegs streamen – wir haben Sie abgedeckt.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                'Amazon Fire TV Stick',
                'Samsung Smart TV',
                'LG Smart TV',
                'Android TV',
                'Apple TV',
                'iPhone & iPad',
                'Android Smartphone',
                'Windows PC',
                'Mac',
                'MAG Box',
                'Formuler Box',
                'Nvidia Shield',
              ].map((device) => (
                <span
                  key={device}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121214] border border-[#DD0000]/40 text-[#FFFFFF] text-[11px] font-black uppercase tracking-wider hover:border-[#FFCE00] hover:text-[#FFCE00] transition-colors"
                >
                  <Tv className="w-3 h-3 text-[#FFCE00]" />
                  {device}
                </span>
              ))}
            </div>
          </section>

          {/* Content Catalog */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Die Kompletteste Senderliste
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              Mit über <strong className="text-[#FFFFFF]">36.000 Live TVs</strong> und einer Videobibliothek von{' '}
              <strong className="text-[#FFFFFF]">120.000+ Filmen und Serien</strong> bieten wir eines der umfangreichsten Senderpakete in Deutschland, Österreich und der Schweiz:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Alle deutschen Sender (ARD, ZDF, RTL, ProSieben, SAT.1, VOX) in 4K IPTV & Full HD',
                'Live-Sport-Sender inklusive Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL und Handball',
                'Bundesliga, Champions League, Formel 1, Premier League und internationaler Cricket',
                'Komplettes internationales Angebot aus UK, USA, Schweiz, Österreich, Indien, Türkei, Polen und mehr',
                'Täglich aktualisierter VOD-Katalog mit deutschen Untertiteln für Kinoveröffentlichungen und Top-Serien',
                'Elektronischer Programmführer (EPG) und 7-Tage Catch-Up- und Replay-Funktionalität',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <Star className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why We're Different — NEW */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Was Uns Anders Macht
            </h2>
            <div className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 rounded-3xl p-6 md:p-8">
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Clock,
                    title: 'Sofortige Aktivierung',
                    desc: 'Keine Wartezeit von 24–48 Stunden. Sie erhalten Ihren Zugang innerhalb von Minuten nach Zahlungseingang per WhatsApp.',
                  },
                  {
                    icon: Wifi,
                    title: 'Unter 10ms Latenz',
                    desc: 'Unsere Frankfurt Edge-Server bieten die niedrigste Verzögerung in DACH. Perfekt für Live-Sport ohne Verzögerung.',
                  },
                  {
                    icon: Layers,
                    title: 'Redundante Infrastruktur',
                    desc: 'Fällt ein Server aus, springt automatisch ein Backup ein. Sie bemerken nie eine Unterbrechung.',
                  },
                  {
                    icon: Radio,
                    title: 'Tägliche Updates',
                    desc: 'Neue Sender, neue Filme, neue Serien – wir erweitern unseren Katalog täglich, ohne Aufpreis für Sie.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Kostenloser Test',
                    desc: 'Testen Sie uns zuerst, zahlen Sie danach. Kein Risiko, keine Verpflichtung.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Ohne Vertragslaufzeit',
                    desc: 'Keine automatische Verlängerung, keine versteckten Kosten. Sie entscheiden, wann Sie verlängern.',
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#FFCE00]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-[#FFFFFF] uppercase tracking-tight mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#FFFFFF]/70 font-medium leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Testimonials — NEW */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Was Unsere Kunden Sagen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: 'Thomas M.',
                  city: 'Berlin',
                  text: 'Endlich ein IPTV Anbieter, der hält was er verspricht. Bundesliga läuft ohne einen einzigen Ruckler.',
                },
                {
                  name: 'Sabine K.',
                  city: 'Wien',
                  text: 'Der WhatsApp Support antwortet wirklich innerhalb von Minuten. Sehr freundlich und kompetent.',
                },
                {
                  name: 'Michael B.',
                  city: 'Zürich',
                  text: 'Nach 3 Jahren Kabel-TV habe ich endlich gewechselt. 4K Qualität zum halben Preis und mehr Sender.',
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-[#DD0000] text-[#DD0000]" />
                    ))}
                  </div>
                  <p className="text-[#0a0a0c] font-bold text-sm leading-relaxed mb-4 italic">
                    „{t.text}"
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t-2 border-black/5">
                    <div className="w-8 h-8 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-xs flex items-center justify-center">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-[#0a0a0c] font-black text-xs uppercase tracking-wider">
                        {t.name}
                      </p>
                      <p className="text-[#0a0a0c]/60 text-[10px] font-bold">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Free Trial */}
          <section>
            <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-green-600 rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-green-600/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center flex-shrink-0 border border-green-600/30">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-green-600 font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    Kostenloser 24-Stunden IPTV Test
                  </h3>
                  <p className="text-[#0a0a0c] text-sm md:text-base font-bold leading-relaxed">
                    Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen 24-Stunden IPTV Test ein. Prüfen Sie die 4K IPTV Bildqualität, das Senderangebot und ob alles reibungslos auf Ihrem eigenen Gerät und Ihrer Internetverbindung läuft. Erst dann IPTV kaufen. Ohne Vertragslaufzeit, ohne Druck.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FFCE00]/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
                Erleben Sie Es Selbst, Risikofrei
              </h2>
              <p className="text-[#DD0000] font-bold text-base max-w-lg mx-auto mb-8">
                Schließen Sie sich Tausenden zufriedenen Haushalten in Deutschland, Österreich und der Schweiz an. Geführtes Setup per WhatsApp und die meisten Kunden streamen innerhalb von 10 Minuten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-md border border-[#FFCE00]/30"
                >
                  IPTV Paket Wählen
                </Link>
                <Link
                  href="/einrichtung"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest border-2 border-[#DD0000] transition-transform hover:scale-105"
                >
                  Einrichtungsanleitung
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
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