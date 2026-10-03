import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import GermanFlag from '../components/GermanFlag';
import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Tag,
  MessageCircle,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Flame,
  Star,
  Users,
  Award,
  Layers,
  Zap,
  Rocket,
  Compass,
} from 'lucide-react';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/blog`;
const POSTS_PER_PAGE = 6;

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// SEO STRINGS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `${FOCUS_KEYWORD} Blog | Setup Anleitungen & News 2026`
);

const PAGE_DESCRIPTION = clampDescription(
  `${FOCUS_KEYWORD} Blog mit Setup Anleitungen, App-Tests und Streaming-Tipps für Firestick, Smart TV und Mobil. Wöchentlich aktualisiert.`
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
      [CONSTANTS.LANGUAGE]: PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Blog - ${FOCUS_KEYWORD} Setup Anleitungen und Streaming Tipps`,
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
    `${FOCUS_KEYWORD} blog`,
    CONSTANTS.SECONDARY_FOCUS_KEYWORD,
    FOCUS_KEYWORD,
    `${FOCUS_KEYWORD} setup anleitung`,
    'iptv firestick einrichtung',
    'iptv extreme anleitung',
    'iptv test deutschland',
    'iptv kaufen',
    '4k iptv deutschland',
    'iptv smart tv anleitung',
    'streaming tipps deutschland',
    'iptv news 2026',
    'bundesliga iptv live',
    'iptv legal',
  ],
};

// ---------------------------------------------------------------------------
// CATEGORY CONFIG
// ---------------------------------------------------------------------------
const CATEGORIES = [
  { id: 'all', label: 'Alle Artikel' },
  { id: 'setup', label: 'Setup Anleitungen' },
  { id: 'review', label: 'Tests' },
  { id: 'sports', label: 'Live Sport' },
  { id: 'tips', label: 'Tipps & Tricks' },
  { id: 'news', label: 'Aktuelles' },
];

function getPostCategory(post: any): string {
  if (post.category) return post.category;
  const kw = (post.keywords || []).join(' ').toLowerCase();
  const title = (post.title || '').toLowerCase();
  if (title.includes('setup') || title.includes('install') || title.includes('einricht') || kw.includes('setup anleitung')) return 'setup';
  if (title.includes('test') || title.includes('bewertung') || title.includes('vergleich') || kw.includes('iptv test')) return 'review';
  if (title.includes('sport') || kw.includes('live sport') || kw.includes('bundesliga')) return 'sports';
  if (title.includes('tipp') || title.includes('problemlös') || title.includes('fehler')) return 'tips';
  return 'news';
}

function getCategoryLabel(id: string): string {
  const map: Record<string, string> = {
    setup: 'Setup Anleitung',
    review: 'Test & Bewertung',
    sports: 'Live Sport',
    tips: 'Tipps & Tricks',
    news: 'Aktuelles',
  };
  return map[id] || 'Anleitung';
}

function getReadTime(post: any): string {
  if (post.readTime) return post.readTime;
  const words = (post.content || '').split(/\s+/).length;
  const mins = Math.max(5, Math.round(words / 220));
  return `${mins} Min. Lesezeit`;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString(CONSTANTS.LANGUAGE, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// ---------------------------------------------------------------------------
// SORT POSTS
// ---------------------------------------------------------------------------
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const featuredPost = sortedPosts[0];
const restPosts = sortedPosts.slice(1);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const BlogSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${PAGE_URL}/#blog`,
        name: `${BRAND} Blog`,
        description: `Setup Anleitungen, Tests und ${FOCUS_KEYWORD} Tipps für Firestick, Smart TV und Mobil-Streaming.`,
        url: PAGE_URL,
        inLanguage: CONSTANTS.LANGUAGE,
        publisher: { '@id': CONSTANTS.ORGANIZATION_ID },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${SITE_URL}/blog/${post.slug}/#article`,
          headline: post.title,
          description: post.description || post.excerpt || '',
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: CONSTANTS.LANGUAGE,
          author: {
            '@type': 'Person',
            name: post.author,
          },
          publisher: { '@id': CONSTANTS.ORGANIZATION_ID },
          image: {
            '@type': 'ImageObject',
            url: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
          },
          keywords: (post.keywords || []).join(', '),
        })),
      },
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}/#collection`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': CONSTANTS.ORGANIZATION_ID },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="blog-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// BLOG CARD — redesigned dark
// ---------------------------------------------------------------------------
function BlogCard({ post, priority = false }: { post: any; priority?: boolean }) {
  const categoryId = getPostCategory(post);
  const categoryLabel = getCategoryLabel(categoryId);
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col bg-[#121214] rounded-3xl overflow-hidden border-2 border-[#DD0000]/40 hover:border-[#FFCE00] hover:shadow-[0_25px_60px_rgba(221,0,0,0.3)] hover:-translate-y-2 transition-all duration-500"
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0c] z-10">
        <Image
          src={post.image}
          alt={`${post.title} - ${FOCUS_KEYWORD} Blog Artikel`}
          width={800}
          height={500}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#DD0000] text-[#FFFFFF] text-[10px] font-black uppercase tracking-wider shadow-lg border border-[#FFCE00]/40">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0a0a0c]/90 backdrop-blur-md text-[#FFCE00] text-[10px] font-black uppercase tracking-wider border border-[#FFCE00]/30">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>

      <div className="relative flex flex-col flex-1 p-5 md:p-6 z-10">
        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#FFFFFF]/50 mb-3">
          <Calendar className="w-3 h-3 text-[#FFCE00]" />
          <span>{dateStr}</span>
          <span className="text-[#DD0000]">•</span>
          <span>{post.author}</span>
        </div>

        <h3 className="text-base md:text-lg font-black text-[#FFFFFF] uppercase tracking-tight leading-snug mb-3 line-clamp-2 group-hover:text-[#FFCE00] transition-colors">
          {post.title}
        </h3>

        <p className="text-[#FFFFFF]/70 text-sm font-medium leading-relaxed line-clamp-3 mb-4 flex-1">
          {post.description || post.excerpt || ''}
        </p>

        <div className="pt-4 border-t border-[#DD0000]/30 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[#FFCE00] font-black text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
            Artikel Lesen
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <div className="w-8 h-8 rounded-xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center text-[#FFCE00] group-hover:scale-110 transition-transform duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// FEATURED CARD — redesigned dark
// ---------------------------------------------------------------------------
function FeaturedCard({ post }: { post: any }) {
  const categoryLabel = getCategoryLabel(getPostCategory(post));
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#121214] rounded-[2rem] overflow-hidden border-2 border-[#DD0000] hover:border-[#FFCE00] hover:shadow-[0_30px_70px_rgba(221,0,0,0.35)] transition-all duration-500"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFCE00]/10 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-[#0a0a0c] z-10">
        <Image
          src={post.image}
          alt={`${post.title} - Empfohlener ${FOCUS_KEYWORD} Artikel`}
          width={900}
          height={600}
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121214]/90 via-[#121214]/30 to-transparent" />

        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DD0000] text-[#FFFFFF] text-[11px] font-black uppercase tracking-widest shadow-xl border border-[#FFCE00]/50">
            <Sparkles className="w-3.5 h-3.5 text-[#FFCE00]" />
            Empfohlen
          </span>
        </div>
      </div>

      <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-10 z-10">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#FFFFFF]/50 mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#DD0000]/15 text-[#FFCE00] border border-[#DD0000]/40">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#FFCE00]" />
            {dateStr}
          </span>
          <span className="text-[#DD0000]">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#FFCE00]" />
            {readTime}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight leading-tight mb-4 group-hover:text-[#FFCE00] transition-colors">
          {post.title}
        </h2>

        <p className="text-[#FFFFFF]/70 text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-3">
          {post.description || post.excerpt || ''}
        </p>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all shadow-lg border border-[#FFCE00]/40">
            Vollen Artikel Lesen
            <ArrowRight className="w-4 h-4 text-[#FFCE00]" />
          </span>
          <span className="text-[#FFFFFF]/50 text-xs font-bold uppercase tracking-wider">
            von {post.author}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function BlogListing() {
  const postsForGrid = restPosts;
  const totalPages = Math.ceil(postsForGrid.length / POSTS_PER_PAGE);
  const currentPosts = postsForGrid.slice(0, POSTS_PER_PAGE);

  return (
    <>
      <BlogSchema />

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
              <BookOpen className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                {FOCUS_KEYWORD} Blog
                <GermanFlag className="w-4 h-4" />
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#FFFFFF] mb-6">
              {FOCUS_KEYWORD} <br />
              <span className="text-[#FFCE00]">BLOG & ANLEITUNGEN</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
              Setup Anleitungen, App-Tests, Streaming-Tipps und aktuelle News. Alles, was Sie für das Beste aus Ihrem {FOCUS_KEYWORD} Abonnement brauchen.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2ebeb]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-[#FFCE00]" />
                {blogPosts.length} Artikel
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2ebeb]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FFCE00]" />
                Wöchentlich Aktualisiert
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2ebeb]/5 border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5 text-[#FFCE00]" />
                24/7 Support
              </span>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER CHIPS — redesigned */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${
                  cat.id === 'all'
                    ? 'bg-[#DD0000] text-[#FFFFFF] border-[#FFCE00] shadow-lg shadow-[#DD0000]/30'
                    : 'bg-[#121214] text-[#FFFFFF]/70 border-[#DD0000]/30 hover:bg-[#DD0000]/20 hover:text-[#FFCE00] hover:border-[#FFCE00]'
                }`}
                aria-label={`Nach ${cat.label} filtern`}
              >
                {cat.id === 'all' && <Compass className="w-3.5 h-3.5 text-[#FFCE00]" />}
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* STATS STRIP — NEW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, value: `${blogPosts.length}+`, label: 'Ratgeber & Anleitungen' },
              { icon: Users, value: '15.000+', label: 'Leser Monatlich' },
              { icon: Award, value: '4,9/5', label: 'Community Rating' },
              { icon: Zap, value: 'Wöchentlich', label: 'Neue Inhalte' },
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={i}
                  className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 rounded-2xl p-5 text-center hover:border-[#FFCE00] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#DD0000]/10 blur-2xl rounded-full pointer-events-none" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center mx-auto mb-3">
                      <StatIcon className="w-5 h-5 text-[#FFCE00]" />
                    </div>
                    <div className="text-xl font-black text-[#FFCE00]">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#FFFFFF]/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED POST */}
        {featuredPost && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-[#DD0000] rounded-full" />
              <h2 className="text-sm font-black uppercase tracking-widest text-[#FFCE00]">
                Empfohlener Artikel
              </h2>
            </div>
            <FeaturedCard post={featuredPost} />
          </section>
        )}

        {/* ARTICLES GRID */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-[#DD0000] rounded-full" />
            <h2 className="text-sm font-black uppercase tracking-widest text-[#FFCE00]">
              Neueste Artikel
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} priority={i < 3} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2 sm:gap-3">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121214] text-[#FFFFFF]/40 border border-[#DD0000]/20 text-xs font-black uppercase tracking-widest cursor-not-allowed"
                aria-label="Vorherige Seite"
              >
                <ChevronLeft className="w-4 h-4" />
                Zurück
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-10 h-10 rounded-full text-xs font-black transition-all ${
                    idx === 0
                      ? 'bg-[#DD0000] text-[#FFFFFF] border border-[#FFCE00] shadow-lg shadow-[#DD0000]/30'
                      : 'bg-[#121214] text-[#FFFFFF]/70 border border-[#DD0000]/30 hover:bg-[#DD0000]/20 hover:text-[#FFCE00] hover:border-[#FFCE00]'
                  }`}
                  aria-label={`Gehe zu Seite ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                type="button"
                disabled={totalPages <= 1}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  totalPages > 1
                    ? 'bg-[#DD0000]/15 text-[#FFCE00] border border-[#FFCE00]/40 hover:bg-[#DD0000] hover:text-[#FFFFFF] cursor-pointer'
                    : 'bg-[#121214] text-[#FFFFFF]/40 border border-[#DD0000]/20 cursor-not-allowed'
                }`}
                aria-label="Nächste Seite"
              >
                Weiter
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>

        {/* TOPICS GRID — NEW */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-4">
              <Layers className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Beliebte Themen
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight">
              Was Unsere <span className="text-[#FFCE00]">Leser</span> Suchen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Rocket,
                title: 'Setup & Einrichtung',
                desc: `Schritt-für-Schritt Anleitungen für Firestick, Smart TV, Android und Apple TV beim ${FOCUS_KEYWORD}.`,
              },
              {
                icon: Flame,
                title: 'Live Sport & Events',
                desc: 'Bundesliga, Champions League, Formel 1 und PPV – wie Sie Live-Events stabil streamen.',
              },
              {
                icon: Star,
                title: 'Tipps & Optimierung',
                desc: 'Puffern vermeiden, Server wählen, App-Tipps – damit Ihr Streaming reibungslos läuft.',
              },
            ].map((item, i) => {
              const CardIcon = item.icon;
              return (
                <div
                  key={i}
                  className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 hover:border-[#FFCE00] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center mb-4">
                      <CardIcon className="w-6 h-6 text-[#FFCE00]" />
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

        {/* WHATSAPP CTA STRIP */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFCE00]/40 bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000] p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFCE00] text-[#8C0000] px-4 py-2 rounded-full mb-5 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Brauchen Sie Hilfe?
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
                Kostenlose {FOCUS_KEYWORD} Setup Hilfe
              </h3>
              <p className="text-[#FFFFFF]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Unser Team ist 24/7 auf WhatsApp für Firestick, Smart TV oder jedes Gerät erreichbar. Geführte IPTV Extreme Aktivierung inklusive.
              </p>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Hallo ${BRAND}, ich habe Ihren Blog gefunden und brauche Setup Hilfe.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#FFCE00]"
              >
                <MessageCircle className="w-5 h-5 text-[#FFCE00]" />
                Per WhatsApp Chatten
              </a>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA — redesigned dark */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
          <div className="relative overflow-hidden bg-[#121214] rounded-3xl p-8 md:p-12 border-2 border-[#DD0000]/40 text-center">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FFCE00]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#FFFFFF] leading-tight mb-4">
                Bereit <span className="text-[#FFCE00]">{FOCUS_KEYWORD}</span> zu Streamen?
              </h3>
              <p className="text-[#FFFFFF]/70 text-sm sm:text-base font-medium max-w-xl mx-auto mb-8">
                Wählen Sie aus 3, 6 oder 12 Monats-Paketen ab 39 €. Geführtes WhatsApp Setup, 36.000 Live TVs und 120.000 Filme und Serien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg border border-[#FFCE00]/40"
                >
                  {FOCUS_KEYWORD} Pakete Ansehen <ArrowRight className="w-5 h-5 text-[#FFCE00]" />
                </Link>
                <Link
                  href="/einrichtung"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-[#FFCE00] font-black text-sm uppercase tracking-widest border-2 border-[#FFCE00] hover:bg-[#FFCE00] hover:text-[#0a0a0c] hover:scale-105 transition-all"
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