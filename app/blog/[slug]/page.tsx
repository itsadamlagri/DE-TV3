// app/blog/[slug]/page.tsx
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Zap,
  ShieldCheck,
  Headphones,
  BookOpen,
  Award,
  Flame,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Rocket,
  Star,
  Users,
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';
import ArticleScrollSidebar from '../../components/ArticleScrollSidebar';
import GermanFlag from '../../components/GermanFlag';

type Props = { params: Promise<{ slug: string }> };

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const LANGUAGE = CONSTANTS.LANGUAGE || 'de-DE';
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

function getCategoryLabel(post: any): string {
  if (post.category) {
    const map: Record<string, string> = {
      setup: 'Setup Anleitung',
      review: 'Test & Bewertung',
      sports: 'Live Sport',
      tips: 'Tipps & Tricks',
      news: 'Aktuelles',
    };
    return map[post.category] || post.category;
  }
  if (post.keywords && post.keywords.length > 0) return post.keywords[0];
  return `${FOCUS_KEYWORD} Ratgeber`;
}

function getReadTime(post: any): number {
  if (post.readTime) {
    const match = String(post.readTime).match(/(\d+)/);
    if (match) return parseInt(match[1]);
  }
  const words = (post.content || '')
    .replace(/<[^>]*>/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 200));
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString(LANGUAGE, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function sanitizeContent(html: string): string {
  return html
    .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '<\/h2>');
}

function extractFAQs(html: string): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];

  const cardRegex =
    /<div class="faq-card[^"]*">\s*<h3[^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>\s*<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/div>/gi;
  let match;
  while ((match = cardRegex.exec(html)) !== null) {
    const q = match[1].replace(/<[^>]*>/g, '').trim();
    const a = match[2].replace(/<[^>]*>/g, '').trim();
    if (q.length > 5 && a.length > 10) {
      faqs.push({ q, a });
    }
  }

  if (faqs.length === 0) {
    const legacyRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
    let legacyMatch;
    while ((legacyMatch = legacyRegex.exec(html)) !== null) {
      const rawQ = legacyMatch[1].replace(/<[^>]*>/g, '').trim();
      const rawA = legacyMatch[2].replace(/<[^>]*>/g, '').trim();
      if (rawQ.includes('F.') || rawQ.endsWith('?')) {
        const cleanQ = rawQ.replace(/^F\.\s*/, '').trim();
        if (cleanQ.length > 5 && rawA.length > 10) {
          faqs.push({ q: cleanQ, a: rawA });
        }
      }
    }
  }

  return faqs.slice(0, 10);
}

function getRelatedPosts(currentPost: any, allPosts: any[], limit = 3): any[] {
  const scored = allPosts
    .filter((p) => p.slug !== currentPost.slug)
    .map((p) => {
      let score = 0;
      if (p.category && currentPost.category && p.category === currentPost.category) {
        score += 5;
      }
      const currentKw = (currentPost.keywords || []).map((k: string) => k.toLowerCase());
      const otherKw = (p.keywords || []).map((k: string) => k.toLowerCase());
      const shared = currentKw.filter((k: string) => otherKw.includes(k));
      score += shared.length * 2;
      if (p.author === currentPost.author) score += 1;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.post);
}

function extractHeadings(html: string): string[] {
  const headings: string[] = [];
  const regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, '').trim();
    if (text.length > 3 && text.length < 100) {
      headings.push(text);
    }
  }
  return headings.slice(0, 8);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    const fallbackUrl = `${SITE_URL}/blog`;
    return {
      title: 'Artikel Nicht Gefunden',
      description: 'Der gesuchte Artikel konnte nicht gefunden werden.',
      alternates: { canonical: fallbackUrl },
    };
  }

  const shortTitle = clampTitle(post.metatitle || post.title);
  const description = clampDescription(
    post.metadescription ||
      post.description ||
      post.excerpt ||
      `Lesen Sie den vollständigen ${BRAND} Ratgeber und Tipps für IPTV Streaming in Deutschland.`
  );

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http')
    ? post.image
    : `${SITE_URL}${post.image}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: shortTitle },
    description,
    keywords: post.keywords?.length
      ? post.keywords.join(', ')
      : `${CONSTANTS.FOCUS_KEYWORD}, ${CONSTANTS.SECONDARY_FOCUS_KEYWORD}`,
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: BRAND,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        [LANGUAGE]: canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: shortTitle,
      description,
      url: canonicalUrl,
      siteName: BRAND,
      locale: CONSTANTS.LOCALE,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shortTitle,
      description,
      images: [imageUrl],
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
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const readTime = getReadTime(post);
  const displayCategory = getCategoryLabel(post);
  const dateStr = formatDate(post.date);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http')
    ? post.image
    : `${SITE_URL}${post.image}`;

  const safeContent = sanitizeContent(post.content);
  const faqs = extractFAQs(post.content);
  const relatedPosts = getRelatedPosts(post, blogPosts, 3);
  const articleHeadings = extractHeadings(safeContent);
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;

  const whatsappIboMsg = encodeURIComponent(
    `Hallo! Ich möchte IPTV Extreme oder IBO Player Pro Zugang bestellen.`
  );
  const whatsappSubMsg = encodeURIComponent(
    `Hallo! Ich möchte ein ${FOCUS_KEYWORD} Abonnement abschließen.`
  );

  const authorId = `${SITE_URL}/#author-${post.author
    .toLowerCase()
    .replace(/\s+/g, '-')}`;

  const orgId = CONSTANTS.ORGANIZATION_ID;
  const websiteId = `${SITE_URL}/#website`;

  const jsonLdGraph: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': authorId,
        name: post.author,
        url: `${SITE_URL}/ueber-uns`,
        jobTitle: `${FOCUS_KEYWORD} Spezialist`,
        description: `Spezialisiert auf IPTV Streaming-Ratgeber und Setup für deutschsprachige Zuschauer.`,
        knowsAbout: [
          FOCUS_KEYWORD,
          'IPTV Extreme',
          'IBO Player Pro',
          'Firestick Einrichtung',
          'Smart TV Streaming',
          '4K IPTV Streaming',
        ],
        worksFor: { '@id': orgId },
      },
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}/#article`,
        headline: post.title,
        name: post.title,
        description: post.description || post.excerpt,
        keywords: post.keywords ? post.keywords.join(', ') : '',
        articleSection: displayCategory,
        wordCount: wordCount,
        timeRequired: `PT${readTime}M`,
        image: {
          '@type': 'ImageObject',
          '@id': `${canonicalUrl}/#primaryimage`,
          url: imageUrl,
          contentUrl: imageUrl,
          width: 1200,
          height: 630,
          caption: post.title,
          representativeOfPage: true,
        },
        thumbnailUrl: imageUrl,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: LANGUAGE,
        author: { '@id': authorId },
        publisher: { '@id': orgId },
        mainEntityOfPage: { '@id': `${canonicalUrl}/#webpage` },
        isPartOf: { '@id': `${canonicalUrl}/#webpage` },
        about: articleHeadings.slice(0, 4).map((h) => ({
          '@type': 'Thing',
          name: h,
        })),
        mentions: (post.keywords || []).slice(0, 6).map((k: string) => ({
          '@type': 'Thing',
          name: k,
        })),
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', 'article > p:first-of-type'],
        },
        accessMode: ['textual', 'visual'],
        isAccessibleForFree: true,
        copyrightHolder: { '@id': orgId },
        license: `${SITE_URL}/agb`,
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: post.title,
        description: post.description || post.excerpt,
        inLanguage: LANGUAGE,
        isPartOf: { '@id': websiteId },
        about: { '@id': `${canonicalUrl}/#article` },
        primaryImageOfPage: { '@id': `${canonicalUrl}/#primaryimage` },
        breadcrumb: { '@id': `${canonicalUrl}/#breadcrumb` },
        datePublished: post.date,
        dateModified: post.date,
        potentialAction: {
          '@type': 'ReadAction',
          target: [canonicalUrl],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  if (faqs.length > 0) {
    jsonLdGraph['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <article className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">
      <script
        type="application/ld+json"
        id="article-schema-data"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={`${post.title} - ${BRAND} Blog Artikel`}
            width={1920}
            height={1080}
            priority
            fetchPriority="high"
            className="w-full h-full object-cover scale-105 brightness-[0.22]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/10 to-[#0a0a0c]/10" />
        </div>

        <div
          className="absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, #DD0000 1px, transparent 1px), linear-gradient(to bottom, #DD0000 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#DD0000]/12 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32 sm:pt-36 md:pt-40 pb-16 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#DD0000] px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]/40">
            <BookOpen className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-widest inline-flex items-center gap-2">
              {displayCategory}
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-[1.05] max-w-4xl">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-3xl mx-auto leading-relaxed mb-10">
            {post.description || post.excerpt}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[#FFFFFF] text-xs font-black uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span>{dateStr}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[#FFFFFF] text-xs font-black uppercase tracking-widest">
              <User className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span>{post.author}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[#FFFFFF] text-xs font-black uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span>{readTime} Min. Lesezeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#FFCE00] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zu allen Artikeln
        </Link>
      </div>

      {/* ARTICLE STATS STRIP — NEW */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock, value: `${readTime} Min.`, label: 'Lesezeit' },
            { icon: BookOpen, value: `${wordCount.toLocaleString(LANGUAGE)}`, label: 'Wörter' },
            { icon: Tag, value: displayCategory, label: 'Kategorie' },
            { icon: Star, value: `${faqs.length > 0 ? faqs.length : '—'}`, label: 'FAQ' },
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={i}
                className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 rounded-2xl p-4 text-center hover:border-[#FFCE00] transition-all"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#DD0000]/10 blur-2xl rounded-full pointer-events-none" />
                <div className="relative">
                  <StatIcon className="w-5 h-5 text-[#FFCE00] mx-auto mb-2" />
                  <div className="text-sm font-black text-[#FFFFFF] uppercase tracking-tight truncate">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-[#FFFFFF]/50 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 order-1 lg:order-1 space-y-10">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-4 border-[#DD0000] shadow-[0_25px_60px_rgba(221,0,0,0.25)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="relative bg-[#f2ebeb] text-[#0a0a0c] rounded-3xl border-4 border-[#DD0000] shadow-[0_25px_60px_rgba(10,10,12,0.15)] p-6 sm:p-8 md:p-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#DD0000]/8 to-transparent rounded-bl-[4rem] pointer-events-none" />

            <div
              className="
                article-body
                prose prose-lg max-w-none relative
                [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-black [&_h2]:text-[#0a0a0c] [&_h2]:mb-5 [&_h2]:mt-12 [&_h2]:tracking-tight [&_h2]:uppercase [&_h2]:leading-tight
                [&_h2]:pb-3 [&_h2]:border-b-4 [&_h2]:border-[#DD0000]/20
                [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-black [&_h3]:text-[#DD0000] [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:uppercase
                [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-black [&_h4]:text-[#DD0000] [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:uppercase
                [&_p]:text-[#0a0a0c]/85 [&_p]:text-base [&_p]:md:text-lg [&_p]:font-medium [&_p]:leading-[1.8] [&_p]:mb-5 [&_p]:md:mb-6
                [&_a]:text-[#DD0000] [&_a]:font-black [&_a]:hover:text-[#8C0000] [&_a]:transition-colors [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#DD0000] [&_blockquote]:bg-[#DD0000]/5 [&_blockquote]:pl-6 [&_blockquote]:py-3 [&_blockquote]:my-6 [&_blockquote]:text-[#0a0a0c]/70 [&_blockquote]:italic [&_blockquote]:rounded-r-xl
                [&_code]:bg-[#0a0a0c]/10 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-lg [&_code]:text-[#DD0000] [&_code]:text-sm [&_code]:font-bold
                [&_pre]:bg-[#0a0a0c] [&_pre]:text-[#FFFFFF] [&_pre]:p-6 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto
                [&_img]:rounded-2xl [&_img]:my-8 [&_img]:border-4 [&_img]:border-[#DD0000] [&_img]:w-full [&_img]:h-auto [&_img]:shadow-2xl
                [&_hr]:border-[#DD0000]/20 [&_hr]:my-12
              "
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
          </div>

          <ShareButtons title={`${post.title} - ${BRAND}`} url={canonicalUrl} />

          {post.keywords && post.keywords.length > 0 && (
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-5">
                <Tag className="w-5 h-5 text-[#FFCE00]" />
                <h2 className="text-[#FFFFFF] font-black text-base md:text-lg uppercase tracking-wide">
                  Themen in diesem Artikel
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {post.keywords.slice(0, 8).map((keyword: string) => (
                  <span
                    key={keyword}
                    className="px-4 py-2 bg-[#f2ebeb] text-[#0a0a0c] text-xs md:text-sm font-black uppercase tracking-wider rounded-full border-2 border-[#DD0000] shadow-md hover:bg-[#DD0000] hover:text-[#FFFFFF] hover:scale-105 transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* AUTHOR BOX */}
          <div className="relative overflow-hidden rounded-3xl border-4 border-[#DD0000] bg-gradient-to-br from-[#f2ebeb] to-[#faf2f2] shadow-2xl p-6 md:p-8">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#DD0000]/10 rounded-bl-[3rem] pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-6 text-center sm:text-left relative z-10">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#DD0000] shadow-xl flex-shrink-0">
                <Image
                  src="/img/profile.webp"
                  alt={`${post.author} - ${FOCUS_KEYWORD} Spezialist`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-[#DD0000] text-[#FFFFFF] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border border-[#FFCE00]/40">
                  <User className="w-3 h-3 text-[#FFCE00]" /> Autor
                </div>
                <h2 className="text-[#0a0a0c] font-black text-2xl md:text-3xl mb-1 uppercase tracking-tight">
                  {post.author}
                </h2>
                <p className="text-[#DD0000] text-xs md:text-sm uppercase tracking-widest font-black mb-3">
                  {FOCUS_KEYWORD} Spezialist
                </p>
                <p className="text-[#0a0a0c]/85 text-sm md:text-base font-semibold leading-relaxed">
                  Spezialisiert auf Streaming-Protokolle, App-Konfigurationen und Optimierungen für deutsche, österreichische und schweizer Netzwerke. Hilft Kunden, das Beste aus ihrem 4K {FOCUS_KEYWORD} Abonnement und IPTV Extreme Setup herauszuholen.
                </p>
              </div>
            </div>
          </div>

          {/* CTA BLOCK — NEW */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#FFCE00]/40 bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000] p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFCE00] text-[#8C0000] px-4 py-2 rounded-full mb-5 shadow-lg">
                <Rocket className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Jetzt Starten
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
                Bereit für {FOCUS_KEYWORD}?
              </h3>
              <p className="text-[#FFFFFF]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Unser Team richtet Ihren IPTV Extreme oder IBO Player Pro Zugang in unter 10 Minuten per WhatsApp ein. 36.000+ Live TVs, 4K Qualität, sofort einsatzbereit.
              </p>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#FFCE00]"
              >
                <MessageCircle className="w-5 h-5 text-[#FFCE00]" />
                Per WhatsApp Starten
              </a>
            </div>
          </div>
        </div>

        <ArticleScrollSidebar
          relatedPosts={relatedPosts}
          whatsappIboMsg={whatsappIboMsg}
          whatsappSubMsg={whatsappSubMsg}
        />
      </div>

      {/* TRUST STRIP */}
      <div className="border-t border-white/5 mt-12 py-8 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
            {[
              { icon: Zap, label: '4K IPTV Ultra HD', sub: 'Scharf & flüssig' },
              { icon: ShieldCheck, label: '99,9% Uptime', sub: 'Anti-Freeze Server' },
              { icon: Headphones, label: '24/7 Support', sub: 'Per WhatsApp' },
              { icon: Award, label: '15.000+ Kunden', sub: 'Vertrauen uns' },
            ].map((item, i) => {
              const I = item.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <I className="w-5 h-5 text-[#FFCE00] mb-2" />
                  <div className="text-[11px] font-black uppercase tracking-widest text-[#FFFFFF]">
                    {item.label}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#FFFFFF]/50 mt-0.5">
                    {item.sub}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-[#FFFFFF]/40 text-xs font-bold inline-flex items-center justify-center gap-2 w-full">
            © {new Date().getFullYear()} {BRAND}. Alle Rechte vorbehalten. Hergestellt in Deutschland
            <GermanFlag className="w-3.5 h-3.5" />
          </p>
        </div>
      </div>
    </article>
  );
}