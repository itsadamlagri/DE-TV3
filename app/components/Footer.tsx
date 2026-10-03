'use client';

import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { channelsData } from "@/lib/channels-data";
import { Facebook, Instagram, Twitter } from "lucide-react";

// ---------------------------------------------------------------------------
// Lightweight Circular Flags (DE, AT, CH, UK) — Germany First
// ---------------------------------------------------------------------------
const FlagDE = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-de)">
      <path fill="#000000" d="M0 0h32v10.67H0z" />
      <path fill="#DD0000" d="M0 10.67h32v10.67H0z" />
      <path fill="#FFCE00" d="M0 21.33h32V32H0z" />
    </g>
  </svg>
);

const FlagAT = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-at"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-at)">
      <path fill="#ED2939" d="M0 0h32v10.67H0z" />
      <path fill="#FFFFFF" d="M0 10.67h32v10.67H0z" />
      <path fill="#ED2939" d="M0 21.33h32V32H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFFFFF" d="M13.33 6.67h5.33v20H13.33z" />
      <path fill="#FFFFFF" d="M6.67 13.33h18.67v5.33H6.67z" />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-uk"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-uk)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

const flags = [
  { name: 'Deutschland', code: 'DE', component: FlagDE },
  { name: 'Österreich', code: 'AT', component: FlagAT },
  { name: 'Schweiz', code: 'CH', component: FlagCH },
  { name: 'United Kingdom', code: 'UK', component: FlagUK },
];

const navigationLinks = [
  { name: 'Startseite', href: '/' },
  { name: 'Preise & Pakete', href: '/preise' },
  { name: 'Einrichtungsanleitung', href: '/einrichtung' },
  { name: 'Bewertungen & Feedback', href: '/bewertungen' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog & Ratgeber', href: '/blog' },
  { name: 'Support', href: '/support' },
  { name: 'Reseller Werden', href: '/reseller-werden' },
];

const legalLinks = [
  { name: 'Über Uns', href: '/ueber-uns' },
  { name: 'Allgemeine Geschäftsbedingungen', href: '/agb' },
  { name: 'Datenschutzerklärung', href: '/datenschutz' },
  { name: 'Rückgabe & Garantie', href: '/rueckgabe' },
  { name: 'DMCA', href: '/dmca' },
];


export default function Footer() {
  return (
    <footer className="relative bg-[#09090B] text-white pt-16 border-t-4 border-[#DD0000] overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DD0000]/60 to-transparent" />

      {/* Main Footer Body */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="flex items-center gap-3 mb-5 group inline-flex"
                aria-label={`${CONSTANTS.BRAND_NAME} - Startseite`}
              >
                <div className="w-auto h-20 flex items-center group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/img/banner-logo.png"
                    alt={`${CONSTANTS.BRAND_NAME} - Führender ${CONSTANTS.SECONDARY_FOCUS_KEYWORD} für ${CONSTANTS.THIRD_FOCUS_KEYWORD} Streaming Logo`}
                    width={280}
                    height={58}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </Link>

              <p className="text-sm md:text-base font-bold text-white/90 max-w-sm leading-relaxed mb-5">
                Erleben Sie die Zukunft des deutschen Fernsehens mit{" "}
                <strong className="text-[#FFCE00]">{CONSTANTS.BRAND_NAME}</strong>.
                Ihr verlässlicher <strong className="text-white">{CONSTANTS.SECONDARY_FOCUS_KEYWORD}</strong> für Premium 4K {CONSTANTS.THIRD_FOCUS_KEYWORD} Streams in Berlin, Hamburg, München, Wien und Zürich – in der gesamten DACH-Region.
              </p>

              {/* Coverage Focus Badge */}
              <div className="inline-flex items-center flex-wrap gap-2 sm:gap-3 py-1.5 px-3 mb-6 rounded-full bg-white/[0.04] border border-[#DD0000]/40 backdrop-blur-md w-fit shadow-sm">
                <span className="text-[10px] uppercase font-black tracking-wider text-white/70 shrink-0">
                  Verfügbar in:
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap">
                  {flags.map((flag) => {
                    const FlagComp = flag.component;
                    return (
                      <div
                        key={flag.code}
                        className="flex items-center gap-1 group cursor-default"
                        title={flag.name}
                      >
                        <FlagComp />
                        <span className="text-[10px] font-black uppercase text-white group-hover:text-[#FFCE00] transition-colors">
                          {flag.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={CONSTANTS.SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Folgen Sie ${CONSTANTS.BRAND_NAME} auf Twitter`}
                className="group w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-[#DD0000] hover:border-[#DD0000] transition-all duration-300 active:scale-95"
              >
                <Twitter className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
              </a>

              <a
                href={CONSTANTS.SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Folgen Sie ${CONSTANTS.BRAND_NAME} auf Instagram`}
                className="group w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-[#DD0000] hover:border-[#DD0000] transition-all duration-300 active:scale-95"
              >
                <Instagram className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
              </a>

              <a
                href={CONSTANTS.SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Folgen Sie ${CONSTANTS.BRAND_NAME} auf Facebook`}
                className="group w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-[#DD0000] hover:border-[#DD0000] transition-all duration-300 active:scale-95"
              >
                <Facebook className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#DD0000] pb-1 inline-block">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#FFCE00] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channel Packages */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#DD0000] pb-1 inline-block">
              Senderpakete
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              {channelsData.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/sender/${category.slug}`}
                    className="text-white/80 hover:text-[#FFCE00] transition-colors block"
                  >
                    {category.name.replace(/\s*\([^)]*\)/g, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#DD0000] pb-1 inline-block">
              Rechtliches
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#FFCE00] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* ------------------------------------------------------------------- */}
      {/* BOTTOM FOOTER BAR WITH SOLID RED BG & SOFT GOLD PAYMENT CARDS        */}
      {/* ------------------------------------------------------------------- */}
      <div 
        className="relative border-t-2 border-[#FFCE00]/40 py-6 px-6 lg:px-12 shadow-lg z-20"
        style={{ backgroundColor: '#DD0000' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright text */}
          <p className="text-base md:text-sm font-extrabold text-amber-50 tracking-wide text-center md:text-left drop-shadow-sm">
            © {new Date().getFullYear()} <span className="text-[#FFCE00]">{CONSTANTS.BRAND_NAME}</span>. Alle Rechte vorbehalten.
          </p>

          {/* Payment methods */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {CONSTANTS.PAYMENT_METHODS.map((item) => (
              <div
                key={item.name}
                className="relative h-10 w-16 shrink-0 rounded-lg border border-[#FFCE00]/50 bg-black backdrop-blur-sm p-1 shadow-sm hover:scale-105 hover:bg-[#FFCE00]/40 hover:border-[#FFCE00] transition-all duration-200"
                title={item.name}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} - Sichere Zahlungsmethode bei ${CONSTANTS.BRAND_NAME}`}
                  fill
                  className="object-contain p-1 filter drop-shadow-sm opacity-95"
                  loading="lazy"
                  sizes="64px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}