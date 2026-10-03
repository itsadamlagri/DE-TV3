'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Sparkles,
  Zap,
  MessageCircle,
  Flame,
  Crown,
  CheckCircle2,
} from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const BRAND = CONSTANTS.BRAND_NAME;

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
function getCategoryLabel(post: any): string {
  if (post.category) {
    const map: Record<string, string> = {
      setup: 'Einrichtungsanleitung',
      review: 'Test & Bewertung',
      sports: 'Live-Sport',
      tips: 'Tipps & Tricks',
      news: 'Aktuelles',
    };
    return map[post.category] || post.category;
  }
  if (post.keywords && post.keywords.length > 0) return post.keywords[0];
  return `${CONSTANTS.FOCUS_KEYWORD} Ratgeber`;
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

function formatDateShort(dateStr: string): string {
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
// SIDEBAR
// ---------------------------------------------------------------------------
export default function ArticleScrollSidebar({
  relatedPosts,
  whatsappIboMsg,
  whatsappSubMsg,
}: {
  relatedPosts: any[];
  whatsappIboMsg: string;
  whatsappSubMsg: string;
}) {
  return (
    <aside className="lg:col-span-4 order-2 lg:order-2 lg:self-start lg:sticky lg:top-24">
      <div className="space-y-6">
        {/* =====================================================
            Card 1 — IPTV Smarters Pro
        ===================================================== */}
        <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#DD0000]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 bg-[#DD0000] text-[#FFFFFF] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" /> Empfohlener Player
          </div>

          <h2 className="text-lg sm:text-xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
            IPTV Smarters Pro Zugang Erhalten
          </h2>
          <p className="text-[#0a0a0c]/80 text-xs sm:text-sm font-bold leading-relaxed mb-6">
            IPTV Smarters Pro gehört zu unseren Top-Empfehlungen für schnelle, sichere Wiedergabe mit minimalem Puffer. Unser Team hilft Ihnen bei der Einrichtung per WhatsApp und bleibt während der gesamten Laufzeit an Ihrer Seite.
          </p>

          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappIboMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all shadow-lg hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>IPTV Smarters Pro Bestellen</span>
          </a>
        </div>

        {/* =====================================================
            Card 2 — Offizielle Pakete
        ===================================================== */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,206,0,0.15),_transparent_60%)] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 p-6">
            <div className="inline-flex items-center gap-1.5 bg-[#FFCE00] text-[#8C0000] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-md">
              <Crown className="w-3.5 h-3.5" /> Offizielle Pakete
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#FFFFFF] uppercase tracking-tight mb-2 drop-shadow-md">
              {BRAND} <br />
              <span className="text-[#FFCE00]">Abonnements</span>
            </h2>
            <p className="text-[#FFFFFF]/85 text-xs sm:text-sm font-bold leading-relaxed mb-6">
              36.000+ Live-Sender · 120.000+ Filme &amp; Serien · 4K Ultra HD · Anti-Freeze Server.
            </p>

            <div className="space-y-3">
              {/* Standard */}
              <div className="group bg-[#FFFFFF] border-2 border-[#FFFFFF]/30 rounded-2xl p-4 hover:border-[#FFCE00] hover:-translate-y-0.5 transition-all shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#DD0000]/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#DD0000]" />
                    </div>
                    <span className="text-[#0a0a0c] font-black text-sm uppercase tracking-tight">
                      Standard
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#DD0000] font-black text-xl leading-none">
                      39 €
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#0a0a0c]/50 mt-0.5">
                      6 Monate
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-[#0a0a0c]/70">
                  <CheckCircle2 className="w-3 h-3 text-[#DD0000]" />
                  <span>Einrichtung per WhatsApp in Minuten</span>
                </div>
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-full bg-[#0a0a0c] text-[#FFFFFF] hover:bg-[#DD0000] transition-all font-black text-[10px] uppercase tracking-widest block border-2 border-[#0a0a0c] hover:border-[#DD0000]"
                >
                  Per WhatsApp Bestellen
                </a>
              </div>

              {/* VIP */}
              <div className="group relative bg-[#0a0a0c] border-2 border-[#FFCE00] rounded-2xl p-4 hover:border-[#FFFFFF] hover:-translate-y-0.5 transition-all shadow-2xl">
                <div className="absolute -top-3 right-4 bg-[#FFCE00] text-[#8C0000] px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md inline-flex items-center gap-1">
                  <Crown className="w-3 h-3" /> Bester Preis
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FFCE00]/20 flex items-center justify-center">
                      <Crown className="w-4 h-4 text-[#FFCE00]" />
                    </div>
                    <span className="text-[#FFFFFF] font-black text-sm uppercase tracking-tight">
                      12 Monate VIP
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FFCE00] font-black text-xl leading-none">
                      49 €
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#FFFFFF]/50 mt-0.5">
                      50% Sparen
                    </div>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#FFFFFF]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#FFCE00]" />
                    <span>4K Anti-Freeze Server (Frankfurt)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#FFFFFF]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#FFCE00]" />
                    <span>Kostenloser 24h Test vor Bezahlung</span>
                  </div>
                </div>

                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-full bg-[#DD0000] text-[#FFFFFF] hover:bg-[#8C0000] transition-all font-black text-[10px] uppercase tracking-widest block shadow-lg hover:scale-105"
                >
                  VIP Per WhatsApp Bestellen
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#FFFFFF]/20 text-center">
              <Link
                href="/preise"
                className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider hover:underline inline-flex items-center gap-1 group"
              >
                Alle {CONSTANTS.FOCUS_KEYWORD} Pakete Ansehen
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FFCE00]" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            Card 3 — Verwandte Artikel
        ===================================================== */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-5 shadow-xl">
            <h2 className="text-lg font-black text-[#0a0a0c] uppercase tracking-tight mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#DD0000]" /> Verwandte Artikel
            </h2>

            <div className="space-y-4">
              {relatedPosts.map((relPost) => {
                const relCategory = getCategoryLabel(relPost);
                const relReadTime = getReadTime(relPost);
                const relDate = formatDateShort(relPost.date);

                return (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group block bg-[#FFFFFF] rounded-2xl overflow-hidden border-2 border-[#DD0000]/20 hover:border-[#DD0000] hover:shadow-[0_15px_35px_rgba(221,0,0,0.2)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0c]">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        width={400}
                        height={250}
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 350px"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                      <div className="absolute top-2 left-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DD0000] text-[#FFFFFF] text-[9px] font-black uppercase tracking-wider shadow-lg">
                          <Tag className="w-2.5 h-2.5" />
                          {relCategory}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md text-[#FFFFFF] text-[9px] font-black uppercase tracking-wider border border-white/10">
                          <Clock className="w-2.5 h-2.5" />
                          {relReadTime} Min.
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#0a0a0c]/60 mb-2">
                        <Calendar className="w-3 h-3 text-[#DD0000]" />
                        <span>{relDate}</span>
                      </div>

                      <h3 className="text-sm font-black text-[#0a0a0c] uppercase tracking-tight leading-snug mb-2 line-clamp-2 group-hover:text-[#DD0000] transition-colors">
                        {relPost.title}
                      </h3>

                      <p className="text-[#0a0a0c]/70 text-xs font-medium leading-relaxed line-clamp-2 mb-3">
                        {relPost.description || relPost.excerpt}
                      </p>

                      <div className="pt-3 border-t border-[#0a0a0c]/10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[#DD0000] font-black text-[10px] uppercase tracking-widest group-hover:gap-2 transition-all">
                          Lesen
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        <div className="w-6 h-6 rounded-lg bg-[#DD0000]/10 border border-[#DD0000]/30 flex items-center justify-center text-[#DD0000] group-hover:bg-[#DD0000] group-hover:text-[#FFFFFF] transition-all duration-300">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}