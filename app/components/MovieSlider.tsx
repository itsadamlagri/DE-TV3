'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// IMAGE COUNTS
// ---------------------------------------------------------------------------
const MOVIES_COUNT = 16;
const SERIES_COUNT = 16;
const SPORTS_COUNT = 14;

// ---------------------------------------------------------------------------
// UNIQUE MOVIE ALTS — 16 distinct, non-repeating sentences
// ---------------------------------------------------------------------------
const MOVIE_ALTS = [
  'Action-Blockbuster als Stream in Deutschland verfügbar',
  'Mehrfach ausgezeichnetes Drama jetzt auf Abruf ansehen',
  'Science-Fiction Kino-Highlight in Ultra HD Qualität',
  'Atemberaubender Thriller für spannende Filmabende',
  'Familienfreundliches Abenteuer für gemeinsame Stunden',
  'Fantasy-Epos mit beeindruckenden visuellen Effekten',
  'Lustige Komödie für unterhaltsame Abende zuhause',
  'Zeitloser Klassiker neu restauriert in 4K Auflösung',
  'Internationaler Kinoerfolg endlich auf Deutsch',
  'Superhelden-Abenteuer mit spektakulärer Action',
  'Rätselhafter Mystery-Film mit überraschendem Ende',
  'Romantisches Hollywood-Drama zum Verlieben',
  'Historisches Kriegsdrama nach wahren Ereignissen',
  'Animierter Spaß für die ganze Familie',
  'Packende Krimi-Dokumentation über echte Fälle',
  'Independent-Perle abseits des Mainstreams',
];

// ---------------------------------------------------------------------------
// UNIQUE SERIES ALTS — 16 distinct, non-repeating sentences
// ---------------------------------------------------------------------------
const SERIES_ALTS = [
  'Erfolgreiche Dramaserie mit fesselnder Handlung',
  'Krimiserie zum Suchten für lange Serienabende',
  'Vielfach prämierte Produktion mit Starbesetzung',
  'Zukunftsorientierte Sci-Fi Serie voller Ideen',
  'Lustige Sitcom mit unvergesslichen Charakteren',
  'Magische Fantasyserie mit epischer Geschichte',
  'Reality-Format für authentische Unterhaltung',
  'Nervenaufreibende Thrillerserie mit Wendungen',
  'Historisches Kostümdrama mit detailreicher Ausstattung',
  'Krankenhausserie über Helden im Alltag',
  'Erwachsene Animationsserie mit schwarzem Humor',
  'Herzerwärmende Liebesserie zum Mitfiebern',
  'Politischer Thriller über Macht und Intrigen',
  'Actiongeladene Superheldenserie für Comic-Fans',
  'Faszinierende Doku-Reihe über unsere Welt',
  'Ausländische Erfolgsserie mit deutschem Untertitel',
];

// ---------------------------------------------------------------------------
// UNIQUE SPORTS ALTS — 14 distinct, non-repeating sentences
// ---------------------------------------------------------------------------
const SPORTS_ALTS = [
  'Bundesliga-Spiel live und in voller Länge verfolgen',
  'Champions League Übertragung in Echtzeit ansehen',
  'DFB-Pokal Begegnung mit deutscher Beteiligung',
  'Formel 1 Rennen mit allen Überholmanövern',
  'UFC Kampfabend mit spektakulären Kämpfen',
  'Box-Übertragung im Schwergewicht live erleben',
  'Handball-Bundesliga Begegnung in HD Qualität',
  'Tennis-Match auf Grand-Slam-Niveau',
  'Premier League Fußball aus England direkt',
  'NBA-Basketball mit den besten Spielern',
  'Golf-Turnier der PGA Tour live verfolgen',
  'Deutsche Eishockey Liga Spieltag komplett',
  'Basketball-Bundesliga Begegnung in voller Länge',
  'Pay-per-View Hauptkampf ohne Zusatzkosten',
];

// ---------------------------------------------------------------------------
// DATA ARRAYS
// ---------------------------------------------------------------------------
const movies = Array.from({ length: MOVIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/iptv-deutsch-movies-${number}`,
    alt: MOVIE_ALTS[i],
  };
});

const series = Array.from({ length: SERIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/iptv-deutsch-serie-${number}`,
    alt: SERIES_ALTS[i],
  };
});

const sports = Array.from({ length: SPORTS_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/iptv-deutsch-sports-${number}`,
    alt: SPORTS_ALTS[i],
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// ---------------------------------------------------------------------------
// INFINITE SLIDER
// ---------------------------------------------------------------------------
const InfiniteSlider = ({
  items,
  direction = 'left',
  speed = 50,
  category,
  fadeBgColor = '#DD0000',
  cardBorderColor = '#FFCE00',
}: {
  items: any[];
  direction?: 'left' | 'right';
  speed?: number;
  category: string;
  fadeBgColor?: string;
  cardBorderColor?: string;
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;

  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* Side Fades matching the exact row background */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${fadeBgColor}, transparent)` }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${fadeBgColor}, transparent)` }}
      />

      <motion.div
        className="flex w-max gap-4 md:gap-6 px-4"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
      >
        {infiniteItems.map((item, idx) => {
          const key = `${item.id}-${idx}`;
          const isFirstHalf = idx < items.length;
          const isPriority = isFirstHalf && idx < 6;
          const positionHint = isFirstHalf
            ? `${idx + 1} von ${items.length}`
            : `${idx - items.length + 1} von ${items.length}`;

          const altText = `${item.alt} – ${category} ${positionHint}`;

          return (
            <button
              key={key}
              onClick={scrollToPricing}
              tabIndex={-1}
              className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-52 block cursor-pointer group text-left bg-transparent border-none p-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#09090B] border-2 shadow-2xl transition-all duration-300 group-hover:scale-[1.03]"
                style={{ borderColor: cardBorderColor }}
              >
                {!failedImages[key] ? (
                  <Image
                    src={`${item.imagePath}.webp`}
                    alt={altText}
                    width={208}
                    height={312}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    priority={isPriority}
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 208px"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [key]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#09090B] p-3 text-center">
                    <span className="text-[#FFCE00] text-xs font-black uppercase tracking-widest">
                      {category}
                    </span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN SECTION
// ---------------------------------------------------------------------------
export default function MovieSlider() {
  return (
    <section
      className="w-full"
      aria-label={`${CONSTANTS.BRAND_NAME} Medienkatalog Übersicht – ${CONSTANTS.FOCUS_KEYWORD}`}
    >

      {/* ROW 1: SCHWARZ (German Black Theme for Movies) */}
      <div className="w-full py-12 sm:py-16 bg-gradient-to-r from-[#09090B] via-[#18181B] to-[#09090B] border-b-4 border-[#DD0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#FFCE00] text-[#09090B] text-xs font-black uppercase tracking-widest shadow-md">
              4K Kino
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight">
              Neueste Blockbuster-Releases
            </h2>
          </div>
          <p className="text-[#A1A1AA] text-sm mt-2 font-medium hidden md:block max-w-2xl">
            Teil unserer Bibliothek mit 120.000+ Filmen und Serien. Streamen Sie die neuesten Kinohits in gestochen scharfem Ultra HD – bereit zum Anschauen auf jedem Gerät.
          </p>
        </div>
        <InfiniteSlider
          items={movies}
          direction="left"
          speed={45}
          category="Film"
          fadeBgColor="#09090B"
          cardBorderColor="#FFCE00"
        />
      </div>

      {/* ROW 2: ROT (German Red Theme for Series) */}
      <div className="w-full py-12 sm:py-16 bg-gradient-to-r from-[#DD0000] via-[#B00000] to-[#DD0000] border-b-4 border-[#FFCE00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#FFCE00] text-[#09090B] text-xs font-black uppercase tracking-widest shadow-md">
              VOD Serien
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight drop-shadow-sm">
              Trendige TV-Shows &amp; Serien
            </h2>
          </div>
          <p className="text-[#FFFFFF]/90 text-sm mt-2 font-medium hidden md:block max-w-2xl">
            Streamen Sie komplette Boxsets führender globaler Sender. Täglich kommen neue Titel zu unserem {CONSTANTS.SECONDARY_FOCUS_KEYWORD} hinzu.
          </p>
        </div>
        <InfiniteSlider
          items={series}
          direction="right"
          speed={40}
          category="Serie"
          fadeBgColor="#DD0000"
          cardBorderColor="#FFCE00"
        />
      </div>

      {/* ROW 3: GOLD (German Gold/Yellow Theme for Sports) */}
      <div className="w-full py-12 sm:py-16 bg-gradient-to-r from-[#FFCE00] via-[#E6B800] to-[#FFCE00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#DD0000] text-[#FFFFFF] text-xs font-black uppercase tracking-widest shadow-md">
              Live Sport
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#09090B] uppercase tracking-tight">
              Live-Sport &amp; PPV Events
            </h2>
          </div>
          <p className="text-[#09090B]/85 text-sm mt-2 font-bold hidden md:block max-w-2xl">
            Verpassen Sie kein Spiel – mit Bundesliga, Champions League, DFB-Pokal, Formel 1, Handball, DEL und Main Event PPV-Kampfabenden.
          </p>
        </div>
        <InfiniteSlider
          items={sports}
          direction="left"
          speed={50}
          category="Sport"
          fadeBgColor="#FFCE00"
          cardBorderColor="#DD0000"
        />
      </div>

    </section>
  );
}