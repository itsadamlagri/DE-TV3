'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export const faqs = [
  {
    q: 'Was ist IPTV und wie funktioniert es?',
    a: `IPTV steht für Internet Protocol Television. Statt eines Kabel- oder Satellitenreceivers werden Ihre Sender und Filme über Ihre Internetverbindung gestreamt. Mit ${CONSTANTS.BRAND_NAME} können Sie 36.000+ Live-Sender sowie über 120.000 Filme und Serien in 4K auf Ihrem Smart TV, Firestick, Smartphone oder Tablet anschauen. Die Einrichtung dauert nur wenige Minuten und unser Team begleitet Sie die ganze Zeit über WhatsApp.`,
  },
  {
    q: `Was macht ${CONSTANTS.BRAND_NAME} zum besten ${CONSTANTS.SECONDARY_FOCUS_KEYWORD} in Deutschland?`,
    a: `${CONSTANTS.BRAND_NAME} wurde speziell für deutschsprachige Zuschauer entwickelt. Sie erhalten 36.000+ Live-Sender mit Bundesliga, Champions League, DFB-Pokal, Formel 1 und DEL, dazu über 120.000 Filme und Serien auf Abruf. Wir betreiben Anti-Freeze-Server mit dedizierter Kapazität in Frankfurt am Main – so bleibt Ihr Stream auch an großen Spieltagen oder bei einem vollen Pay-per-View-Abend flüssig.`,
  },
  {
    q: 'Welche Geräte sind mit Ihrem IPTV Service kompatibel?',
    a: 'Praktisch alles, was Sie bereits besitzen. Dazu gehören Samsung und LG Smart TVs, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac sowie MAG und Formuler Set-Top-Boxen. Wenn Sie sich bei Ihrem Gerät nicht sicher sind, schreiben Sie uns einfach per WhatsApp – wir prüfen es für Sie, bevor Sie ein Abo abschließen.',
  },
  {
    q: 'Wie funktioniert die Einrichtung und Aktivierung?',
    a: 'Sobald Sie Ihr Paket und die Anzahl der gewünschten Geräte ausgewählt haben, chatten wir per WhatsApp. Unser Team begleitet Sie durch die Installation und Konfiguration einer App wie IPTV Extreme, IBO Player oder TiviMate und sendet Ihnen anschließend die Testinhalte. Sie testen zuerst alles kostenlos und schalten erst dann auf ein bezahltes Abo um, wenn Sie zufrieden sind. Die Aktivierung geht schnell und Sie stehen nie allein da.',
  },
  {
    q: 'Kann ich vor der Bezahlung einen kostenlosen Test anfordern?',
    a: 'Ja, und wir empfehlen es ausdrücklich. Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen 24-Stunden-Test ein. So können Sie die 4K-Bildqualität prüfen, das Senderangebot für Bundesliga oder Formel 1 checken und sicherstellen, dass alles reibungslos auf Ihrem Gerät und Ihrer Internetverbindung läuft. Ohne Vertragslaufzeit und ohne Druck.',
  },
  {
    q: 'Wie installiere ich die IPTV App auf meinem Smart TV oder Firestick?',
    a: 'Für Smart TVs und Firestick laden Sie eine unterstützte App wie IPTV Extreme, TiviMate, Smart IPTV oder IPTV Smarters aus dem jeweiligen App-Store herunter. Anschließend geben Sie die Zugangsdaten ein, die wir Ihnen per WhatsApp senden. Sollte ein Schritt unklar sein, führt Sie unser Support-Team direkt im Chat Schritt für Schritt durch, bis Sie streamen. Wir bleiben die gesamte Laufzeit über an Ihrer Seite.',
  },
  {
    q: 'Ist IPTV in Deutschland legal?',
    a: 'IPTV selbst ist eine völlig legale Übertragungstechnologie, die von vielen Anbietern und Telekommunikationsunternehmen weltweit genutzt wird. Entscheidend ist, dass Sie für Inhalte die entsprechenden Nutzungsrechte besitzen. Wir empfehlen unseren Kunden, sich vor der Nutzung über die geltenden Regelungen in Deutschland, Österreich und der Schweiz zu informieren und nur Inhalte zu streamen, für die sie berechtigt sind. Bei Fragen zu diesem Thema hilft Ihnen unser Support-Team gerne weiter.',
  },
  {
    q: 'Welche Internetgeschwindigkeit benötige ich für IPTV?',
    a: 'Für Standard-Definition-Streams empfehlen wir mindestens 10 Mbit/s, für Full HD 20 Mbit/s und für 4K Ultra HD Streaming 25 Mbit/s oder mehr. Eine stabile Verbindung ist wichtiger als die reine Spitzengeschwindigkeit. Wenn Sie unsicher sind, schreiben Sie uns per WhatsApp – wir helfen Ihnen, Ihre Verbindung zu prüfen und optimal einzurichten.',
  },
  {
    q: 'Welche Zahlungsmethoden akzeptieren Sie und in welcher Währung?',
    a: 'Alle Preise sind in Euro (€) inkl. MwSt. und ohne Vertragslaufzeit. Wir akzeptieren Kreditkarte, PayPal, SEPA-Überweisung und Krypto über einen sicheren, verschlüsselten Checkout. Sie können zwischen einem 3-, 6- oder 12-Monats-Paket wählen und je nach Haushalt 1, 2 oder 3 Geräte gleichzeitig nutzen.',
  },
  {
    q: 'Bieten Sie Support während meines Abonnements?',
    a: 'Ja, während der gesamten Laufzeit Ihres Abonnements. Sie können unser Team jederzeit per WhatsApp kontaktieren – für Hilfe bei der Installation, Einrichtung oder bei allem, was sonst auftritt. Das umfasst auch Tipps zur optimalen Nutzung Ihrer Player-App und schnelle Lösungen, falls bei Ihnen jemals Puffer auftreten sollten.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#09090B] relative overflow-hidden"
      aria-label={`Häufig gestellte Fragen zu ${CONSTANTS.BRAND_NAME}`}
    >
      {/* Ambient Red & Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#DD0000]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FFCE00]/10 blur-[100px] rounded-full pointer-events-none" />

      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/60 px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#DD0000]/10">
          <Sparkles className="w-4 h-4 text-[#FFCE00]" />
          <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
            {CONSTANTS.FOCUS_KEYWORD} Help Center
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none">
          HÄUFIG GESTELLTE <span className="text-[#FFCE00]">FRAGEN</span>
        </h2>
        <p className="text-zinc-300 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Alles, was Sie über unsere{' '}
          <strong className="text-white font-bold">{CONSTANTS.BRAND_NAME}</strong>{' '}
          IPTV Abonnements, den WhatsApp-Einrichtungsprozess, den kostenlosen Test und die Senderliste wissen müssen.
        </p>
      </FadeIn>

      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeInItem key={i}>
              <div
                className={`relative rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#141417] border-[#DD0000] shadow-xl shadow-[#DD0000]/15'
                    : 'bg-[#101013] hover:bg-[#16161a] border-white/10 hover:border-[#FFCE00]/40'
                }`}
              >
                {/* Accent Left Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${
                    isOpen ? 'bg-[#FFCE00]' : 'bg-transparent'
                  }`}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 transition-all duration-300 focus:outline-none rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="flex items-center gap-4 pr-2">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#DD0000] text-[#FFCE00]'
                          : 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <h4
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                        isOpen ? 'text-[#FFCE00]' : 'text-white'
                      }`}
                    >
                      {faq.q}
                    </h4>
                  </div>

                  <div
                    className={`p-2 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#FFCE00] text-[#09090B] rotate-180'
                        : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer Area */}
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6'
                      : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-300 font-normal leading-relaxed pl-16 sm:pl-20 pr-6 sm:pr-8 text-sm sm:text-base border-t border-white/5 pt-4 mt-1">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </section>
  );
}