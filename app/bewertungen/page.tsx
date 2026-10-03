import Link from 'next/link';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import {
  reviews,
  REVIEW_STATS,
  REVIEW_FAQS,
} from '@/lib/reviews';
import GermanFlag from '../components/GermanFlag';
import {
  Star,
  ShieldCheck,
  Zap,
  Headphones,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Users,
  MapPin,
  PlayCircle,
  ThumbsUp,
  Award,
  Sparkles,
  Quote,
  ChevronDown,
  Globe,
  Clock,
  Server,
  Tv,
  Film,
  Trophy,
} from 'lucide-react';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/bewertungen`;

const WHATSAPP_BASE = CONSTANTS.CONTACT.whatsappUrl || 'https://live-support.netlify.app';

const RATING_VALUE = String(REVIEW_STATS?.averageRating ?? 4.9);
const REVIEW_COUNT = String(REVIEW_STATS?.totalReviews ?? 1255);
const HAPPY_CUSTOMERS = String(REVIEW_STATS?.happyCustomers ?? '15.000');
const RECOMMEND_PERCENT = String(REVIEW_STATS?.recommendPercent ?? 98);

// ---------------------------------------------------------------------------
// METADATA — noindex, follow
// ---------------------------------------------------------------------------
export const metadata = {
  ...generateSEOMetadata(
    `${CONSTANTS.FOCUS_KEYWORD} Bewertungen | Verifiziertes Kundenfeedback 2026`,
    `Lesen Sie ${REVIEW_COUNT}+ verifizierte ${CONSTANTS.FOCUS_KEYWORD} Bewertungen. Bewertet mit ${RATING_VALUE}/5 für 4K IPTV Streaming, 36.000+ Sender und 24/7 Support.`,
    '/bewertungen'
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
// COUNTRY FLAG COMPONENT
// ---------------------------------------------------------------------------
function CountryFlag({
  country,
  size = 'md',
}: {
  country: 'DE' | 'AT' | 'CH' | 'UK';
  size?: 'sm' | 'md' | 'lg';
}) {
  const dim = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const cls = `${dim} rounded-full shrink-0 shadow-md border border-white/20 overflow-hidden`;

  if (country === 'DE') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Deutschland Flagge">
        <clipPath id="rv-flag-de"><circle cx="16" cy="16" r="16" /></clipPath>
        <g clipPath="url(#rv-flag-de)">
          <rect x="0" y="0" width="32" height="10.67" fill="#000000" />
          <rect x="0" y="10.67" width="32" height="10.66" fill="#DD0000" />
          <rect x="0" y="21.33" width="32" height="10.67" fill="#FFCE00" />
        </g>
      </svg>
    );
  }
  if (country === 'AT') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Österreich Flagge">
        <clipPath id="rv-flag-at"><circle cx="16" cy="16" r="16" /></clipPath>
        <g clipPath="url(#rv-flag-at)">
          <rect x="0" y="0" width="32" height="10.67" fill="#ED2939" />
          <rect x="0" y="10.67" width="32" height="10.66" fill="#FFFFFF" />
          <rect x="0" y="21.33" width="32" height="10.67" fill="#ED2939" />
        </g>
      </svg>
    );
  }
  if (country === 'CH') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Schweiz Flagge">
        <clipPath id="rv-flag-ch"><circle cx="16" cy="16" r="16" /></clipPath>
        <g clipPath="url(#rv-flag-ch)">
          <rect x="0" y="0" width="32" height="32" fill="#D52B1E" />
          <rect x="13.33" y="6.67" width="5.34" height="18.66" fill="#FFFFFF" />
          <rect x="6.67" y="13.33" width="18.66" height="5.34" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 32 32" aria-label="UK Flagge">
      <clipPath id="rv-flag-uk"><circle cx="16" cy="16" r="16" /></clipPath>
      <g clipPath="url(#rv-flag-uk)">
        <path fill="#012169" d="M0 0h32v32H0z" />
        <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
        <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
        <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
        <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA
// ---------------------------------------------------------------------------
const ReviewsPageSchema = () => {
  const productId = `${SITE_URL}/#product`;
  const orgId = CONSTANTS.ORGANIZATION_ID;
  const websiteId = `${SITE_URL}/#website`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: `${SITE_URL}/img/iptv-logo.webp`,
          contentUrl: `${SITE_URL}/img/iptv-logo.webp`,
          width: 512,
          height: 512,
          caption: `${BRAND} Logo`,
        },
        email: CONSTANTS.CONTACT.email,
        telephone: CONSTANTS.CONTACT.phone,
        areaServed: ['DE', 'AT', 'CH'],
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: BRAND,
        inLanguage: CONSTANTS.LANGUAGE,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `${BRAND} Bewertungen & Kundenstimmen`,
        description: `Verifizierte Bewertungen von deutschsprachigen ${BRAND} Kunden.`,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'Product',
        '@id': productId,
        name: `${BRAND} Premium Abonnement`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} liefert Premium 4K IPTV Live-Sender und On-Demand-Medien in Deutschland, Österreich und Schweiz mit 99,9% Server Uptime und schneller WhatsApp-geführter Aktivierung.`,
        sku: `${BRAND.toUpperCase().replace(/\s+/g, '-')}-PREMIUM`,
        category: 'Streaming Service',
        brand: { '@type': 'Brand', '@id': `${SITE_URL}/#brand`, name: BRAND },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: RATING_VALUE,
          reviewCount: REVIEW_COUNT,
          bestRating: '5',
          worstRating: '1',
        },
      },
      ...reviews.map((rev, index) => ({
        '@type': 'Review',
        '@id': `${PAGE_URL}/#review-${index + 1}`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(rev.rating),
          bestRating: '5',
          worstRating: '1',
        },
        author: { '@type': 'Person', name: rev.name },
        reviewBody: rev.text,
        name: rev.title,
        datePublished: rev.date,
        itemReviewed: { '@id': productId },
      })),
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Bewertungen', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: REVIEW_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="reviews-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// STAR RATING
// ---------------------------------------------------------------------------
function StarRating({
  rating,
  size = 'md',
}: {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClass =
    size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < rating ? 'fill-[#FFCE00] text-[#FFCE00]' : 'text-[#0a0a0c]/20'
          }`}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// REVIEW CARD
// ---------------------------------------------------------------------------
function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const initials = review.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="group relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 hover:border-[#FFCE00] rounded-3xl p-6 shadow-xl hover:shadow-[0_20px_50px_rgba(221,0,0,0.25)] hover:-translate-y-2 transition-all duration-500 flex flex-col">
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none" />
      <Quote className="absolute top-4 right-4 w-12 h-12 text-[#FFCE00]/15 rotate-180 pointer-events-none" />

      <div className="relative flex items-start gap-3.5 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DD0000] to-[#8C0000] flex items-center justify-center text-[#FFFFFF] font-black text-base uppercase shadow-md border border-[#FFCE00]/40">
            {initials}
          </div>
          <div className="absolute -bottom-1 -right-1 rounded-full ring-2 ring-[#121214]">
            <CountryFlag country={review.country} size="sm" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
            <h3 className="font-black text-[#FFFFFF] text-sm uppercase tracking-tight">
              {review.name}
            </h3>
            {review.verified && (
              <span title="Verifizierter Abonnent">
                <CheckCircle2 className="w-4 h-4 text-[#FFCE00] shrink-0" />
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#FFFFFF]/60">
            <MapPin className="w-3 h-3 text-[#FFCE00]" />
            <span>{review.city}, {review.province}</span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center gap-2 mb-3">
        <StarRating rating={review.rating} size="sm" />
        <span className="text-[10px] font-black uppercase tracking-wider text-[#FFFFFF]/50">
          {new Date(review.date).toLocaleDateString(CONSTANTS.LANGUAGE, {
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </div>

      <h4 className="relative font-black text-[#FFFFFF] text-base uppercase tracking-tight leading-tight mb-3 line-clamp-2 group-hover:text-[#FFCE00] transition-colors">
        {review.title}
      </h4>

      <p className="relative text-[#FFFFFF]/80 text-sm font-medium leading-relaxed line-clamp-6 flex-1 mb-4">
        {review.text}
      </p>

      <div className="relative pt-4 border-t border-[#DD0000]/30 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#FFFFFF]/60">
          <PlayCircle className="w-3.5 h-3.5 text-[#FFCE00]" />
          {review.device}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#FFCE00]">
          <ShieldCheck className="w-3 h-3" />
          Verifiziert
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// FAQ ITEM
// ---------------------------------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-[#121214] border-2 border-[#DD0000]/40 hover:border-[#FFCE00] rounded-2xl overflow-hidden transition-colors">
      <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 hover:bg-[#18181B] transition-colors">
        <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-[#FFFFFF] flex items-start gap-3 text-left">
          <span className="text-[#FFCE00] font-black text-xl shrink-0">F.</span>
          <span>{q}</span>
        </h3>
        <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#FFCE00] transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6 bg-[#0a0a0c]">
        <p className="text-[#FFFFFF]/85 font-medium leading-relaxed text-sm md:text-base pl-9 border-l-4 border-[#FFCE00] ml-1 py-3">
          {a}
        </p>
      </div>
    </details>
  );
}

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function ReviewsPage() {
  return (
    <>
      <ReviewsPageSchema />

      <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#DD0000]/12 blur-[150px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #DD0000 1px, transparent 1px), linear-gradient(to bottom, #DD0000 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-6 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]/40">
              <Sparkles className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                Echtes Kundenfeedback
                <GermanFlag className="w-4 h-4" />
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#FFFFFF] mb-6">
              {CONSTANTS.FOCUS_KEYWORD} <br />
              <span className="text-[#FFCE00]">BEWERTUNGEN & KUNDENSTIMMEN</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
              Lesen Sie verifizierte Bewertungen von {HAPPY_CUSTOMERS} zufriedenen deutschsprachigen Kunden, von Berlin bis Zürich, bewertet mit{' '}
              <span className="text-[#FFCE00] font-black">{RATING_VALUE}/5</span>{' '}
              für pufferfreies 4K IPTV Streaming.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2ebeb]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-[#FFCE00] fill-[#FFCE00]" />
                {RATING_VALUE} / 5
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2ebeb]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-[#FFCE00]" />
                {HAPPY_CUSTOMERS} Kunden
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2ebeb]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <ThumbsUp className="w-3.5 h-3.5 text-[#FFCE00]" />
                {RECOMMEND_PERCENT}% Empfehlung
              </span>
            </div>
          </div>
        </section>

        {/* WHY CUSTOMERS TRUST US — NEW SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-4">
              <Award className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Vertrauensfaktoren
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
              Warum Kunden <span className="text-[#FFCE00]">{BRAND}</span> Wählen
            </h2>
            <p className="text-[#FFFFFF]/70 font-semibold text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Über {HAPPY_CUSTOMERS} Haushalte in Deutschland, Österreich und der Schweiz vertrauen auf unseren Premium 4K IPTV Service. Diese Faktoren treiben unsere {RATING_VALUE}-Sterne-Bewertung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Server,
                title: 'Frankfurt Server',
                desc: 'Dedizierte Anti-Freeze Server in Frankfurt am Main mit unter 10ms Latenz für ganz DACH.',
              },
              {
                icon: Tv,
                title: '36.000 Live Sender',
                desc: 'Alle deutschen Sender, Bundesliga, Champions League, Formel 1 und internationale Kanäle.',
              },
              {
                icon: Film,
                title: '120.000 VOD Titel',
                desc: 'Filme, Serien, Dokumentationen täglich aktualisiert in gestochen scharfer 4K Qualität.',
              },
              {
                icon: Headphones,
                title: '24/7 WhatsApp',
                desc: 'Echtes Support-Team, erreichbar 7 Tage die Woche direkt per WhatsApp – keine Bots.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 hover:border-[#FFCE00] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
                  <div className="relative w-14 h-14 rounded-2xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#FFCE00]" />
                  </div>
                  <h3 className="relative text-base font-black text-[#FFFFFF] uppercase tracking-tight mb-2 group-hover:text-[#FFCE00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="relative text-xs text-[#FFFFFF]/70 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* RATING BREAKDOWN — NEW SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 rounded-3xl p-6 md:p-10">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FFCE00]/10 border border-[#FFCE00]/30 px-3 py-1 rounded-full mb-4">
                  <Star className="w-3.5 h-3.5 text-[#FFCE00] fill-[#FFCE00]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FFCE00]">
                    Bewertungsverteilung
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 leading-tight">
                  Kundenbewertungen im <span className="text-[#FFCE00]">Detail</span>
                </h3>
                <p className="text-[#FFFFFF]/70 text-sm font-medium leading-relaxed">
                  Unsere Bewertungen stammen ausschließlich von verifizierten Abonnenten, die mindestens einen kostenlosen 24-Stunden-Test absolviert haben. So bleibt unser Feedback ehrlich, aktuell und transparent.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { stars: 5, percent: 92 },
                  { stars: 4, percent: 6 },
                  { stars: 3, percent: 1 },
                  { stars: 2, percent: 0.5 },
                  { stars: 1, percent: 0.5 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-16 shrink-0">
                      <span className="text-[#FFCE00] font-black text-sm">{row.stars}</span>
                      <Star className="w-3.5 h-3.5 text-[#FFCE00] fill-[#FFCE00]" />
                    </div>
                    <div className="flex-1 h-2 bg-[#0a0a0c] rounded-full overflow-hidden border border-[#DD0000]/30">
                      <div
                        className="h-full bg-gradient-to-r from-[#DD0000] to-[#FFCE00] rounded-full"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                    <span className="text-[#FFFFFF]/70 font-black text-xs w-12 text-right shrink-0">
                      {row.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OVERALL RATING CARD */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFCE00]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-6xl md:text-7xl font-black text-[#FFCE00] leading-none mb-2">
                  {RATING_VALUE}
                </div>
                <div className="mb-3 flex justify-center md:justify-start">
                  <StarRating rating={5} size="lg" />
                </div>
                <p className="text-[#FFFFFF]/70 text-xs font-black uppercase tracking-wider">
                  Basierend auf {REVIEW_COUNT} Bewertungen
                </p>
              </div>

              <div className="text-center border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
                <div className="inline-flex items-center justify-center gap-2 bg-[#FFCE00] text-[#8C0000] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                  <Award className="w-3.5 h-3.5" /> Top Bewertet
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#FFFFFF] leading-none mb-2">
                  {RECOMMEND_PERCENT}%
                </div>
                <p className="text-[#FFFFFF]/70 text-xs font-black uppercase tracking-wider">
                  Würden Empfehlen
                </p>
              </div>

              <div className="text-center md:text-right">
                <div className="text-4xl md:text-5xl font-black text-[#FFFFFF] leading-none mb-2">
                  {HAPPY_CUSTOMERS}
                </div>
                <p className="text-[#FFFFFF]/70 text-xs font-black uppercase tracking-wider mb-4">
                  Zufriedene Kunden
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-end items-center">
                  <CountryFlag country="DE" size="md" />
                  <CountryFlag country="AT" size="md" />
                  <CountryFlag country="CH" size="md" />
                  <CountryFlag country="UK" size="md" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS GRID */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Kundenstimmen
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight">
              Was Kunden <span className="text-[#FFCE00]">Sagen</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>

        {/* LOCATIONS — NEW SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 rounded-3xl p-8 md:p-10">
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-4">
                <Globe className="w-4 h-4 text-[#FFCE00]" />
                <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                  Regionale Abdeckung
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-3">
                Kunden aus ganz <span className="text-[#FFCE00]">DACH</span>
              </h3>
              <p className="text-[#FFFFFF]/70 text-sm font-medium max-w-2xl mx-auto leading-relaxed">
                Von Großstädten bis ins ländliche Gebiet – wir beliefern Haushalte in Deutschland, Österreich und der Schweiz mit pufferfreiem 4K IPTV Streaming.
              </p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt',
                'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen',
                'Wien', 'Graz', 'Linz', 'Salzburg', 'Zürich',
                'Genf', 'Basel', 'Bern', 'Lausanne', 'Innsbruck',
              ].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0c] border border-[#DD0000]/40 text-[#FFFFFF] text-[11px] font-black uppercase tracking-wider hover:border-[#FFCE00] hover:text-[#FFCE00] transition-colors"
                >
                  <MapPin className="w-3 h-3 text-[#FFCE00]" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: ShieldCheck, title: '99,9% Uptime', desc: 'Enterprise-Server in Frankfurt' },
              { icon: Zap, title: '4K IPTV & 60FPS', desc: 'Ultra HD Streaming-Qualität' },
              { icon: Headphones, title: '24/7 Support', desc: 'Echtes WhatsApp Team verfügbar' },
              { icon: Award, title: 'Erst Kostenlos Testen', desc: 'Testen Sie auf Ihrem Gerät' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 hover:border-[#FFCE00] rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#DD0000]/10 blur-2xl rounded-full pointer-events-none" />
                  <div className="relative w-12 h-12 rounded-xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#FFCE00]" />
                  </div>
                  <h3 className="relative text-sm font-black text-[#FFFFFF] uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="relative text-[11px] text-[#FFFFFF]/60 font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHATSAPP CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFCE00]/40 bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000] p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFCE00] text-[#8C0000] px-4 py-2 rounded-full mb-5 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Zu {HAPPY_CUSTOMERS} Kunden
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
                Starten Sie mit einem Kostenlosen 24-Stunden-Test
              </h3>
              <p className="text-[#FFFFFF]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Schreiben Sie unserem Team per WhatsApp. Wir richten IPTV Extreme oder IBO Player Pro für Sie ein und bringen Sie in unter 10 Minuten zum Streamen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `Hallo! Ich habe Ihre Bewertungen gelesen und möchte den kostenlosen 24-Stunden-Test ausprobieren.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#FFCE00]"
                >
                  <MessageCircle className="w-5 h-5 text-[#FFCE00]" />
                  Kostenlos IPTV Testen
                </a>
                <Link
                  href="/preise"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFCE00] text-[#8C0000] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  IPTV Pakete Ansehen <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full mb-16 relative">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#DD0000]/5 blur-[130px] rounded-full pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Bewertungen FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight">
              Häufige Fragen{' '}
              <span className="text-[#FFCE00]">zu Unseren Bewertungen</span>
            </h2>
          </div>

          <div className="space-y-4 relative z-10">
            {REVIEW_FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
          <div className="relative overflow-hidden bg-[#121214] rounded-3xl p-8 md:p-12 border-2 border-[#DD0000]/40 text-center">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FFCE00]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#FFFFFF] leading-tight mb-4">
                Bereit Unseren{' '}
                <span className="text-[#FFCE00]">Kunden Beizutreten?</span>
              </h3>
              <p className="text-[#FFFFFF]/70 text-sm sm:text-base font-medium max-w-xl mx-auto mb-8">
                Wählen Sie aus 3, 6 oder 12 Monats-Paketen ab 39 €. Geführtes WhatsApp Setup, 36.000 Live TVs und 120.000 Filme und Serien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg border border-[#FFCE00]"
                >
                  {CONSTANTS.FOCUS_KEYWORD} Pakete Ansehen <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/einrichtung"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-[#FFCE00] text-[#FFCE00] font-black text-sm uppercase tracking-widest hover:bg-[#FFCE00] hover:text-[#0a0a0c] hover:scale-105 transition-all"
                >
                  Einrichtungsanleitung
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}