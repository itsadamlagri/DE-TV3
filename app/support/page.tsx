'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import GermanFlag from '../components/GermanFlag';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy,
  Info,
  Globe,
  MessageCircle,
  Award,
} from 'lucide-react';
import Link from 'next/link';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/support`;

// ---------------------------------------------------------------------------
// TOAST — redesigned dark
// ---------------------------------------------------------------------------
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in">
      <div
        className={`relative overflow-hidden rounded-2xl p-6 shadow-2xl border-2 backdrop-blur-xl bg-[#121214] ${
          type === 'success' ? 'border-green-600' : 'border-[#DD0000]'
        }`}
      >
        <div
          className={`absolute -top-12 -right-12 w-32 h-32 blur-3xl rounded-full pointer-events-none ${
            type === 'success' ? 'bg-green-600/20' : 'bg-[#DD0000]/20'
          }`}
        />
        <div className="relative flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${
              type === 'success' ? 'bg-green-600/15 border-green-600/40' : 'bg-[#DD0000]/15 border-[#DD0000]/40'
            }`}
          >
            {type === 'success' ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#FFCE00]" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[#FFFFFF] font-black uppercase text-sm">{message}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Benachrichtigung schließen"
            className="flex-shrink-0 text-[#FFFFFF]/40 hover:text-[#FFCE00] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// SUCCESS POPUP — redesigned dark
// ---------------------------------------------------------------------------
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4">
      <div className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000] rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center animate-scale-up">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FFCE00]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-green-600/15 flex items-center justify-center mx-auto mb-6 border border-green-600/40">
            <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
            Nachricht Gesendet!
          </h3>

          <p className="text-[#FFCE00] font-bold text-sm leading-relaxed mb-6">
            Vielen Dank für Ihre Kontaktaufnahme mit {BRAND}. Unser Support Team wird sich so schnell wie möglich melden.
          </p>

          <div className="bg-[#0a0a0c] rounded-2xl border border-[#DD0000]/40 p-5 mb-6 text-left">
            <p className="text-[#FFFFFF]/50 text-xs uppercase tracking-widest font-black mb-3">
              Was passiert als Nächstes?
            </p>
            <ul className="space-y-2 text-sm text-[#FFFFFF]/85 font-bold uppercase tracking-wide">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FFCE00] shrink-0" />
                Geprüft von einem IPTV Spezialisten
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FFCE00] shrink-0" />
                Anfrage- oder Test-Verifizierung
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FFCE00] shrink-0" />
                Antwort innerhalb von Minuten per WhatsApp
              </li>
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-[#B00000] transition-transform hover:scale-105 shadow-md cursor-pointer border border-[#FFCE00]/40"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const encodedMsg = encodeURIComponent(
        `Hallo ${BRAND},\n\nName: ${formData.name}\nE-Mail: ${formData.email}\nBetreff: ${formData.subject}\nNachricht: ${formData.message}`
      );
      window.open(`${whatsappBaseUrl}?text=${encodedMsg}`, '_blank');

      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Ihre Nachricht wurde erfolgreich gesendet!', type: 'success' });
    } catch {
      setToast({ message: 'Senden fehlgeschlagen. Bitte erneut über WhatsApp versuchen.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const startWhatsAppChat = () => {
    const defaultText = encodeURIComponent(
      `Hallo ${BRAND}, ich habe eine Frage zu meinem IPTV Deutschland Abonnement.`
    );
    window.open(`${whatsappBaseUrl}?text=${defaultText}`, '_blank');
  };

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${PAGE_URL}/#contact`,
        url: PAGE_URL,
        name: `${BRAND} Support`,
        description: `Kontaktieren Sie ${BRAND} für 24/7 Kundensupport. WhatsApp, E-Mail und Live-Chat Hilfe für IPTV Deutschland Abonnements, Setup und Abrechnung.`,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Support', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wie kontaktiere ich den Support am schnellsten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Für den schnellsten Support senden Sie eine Nachricht per WhatsApp. Unser Team antwortet in der Regel innerhalb weniger Minuten.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Bieten Sie Hilfe bei der Installation an?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Unser Team begleitet Sie Schritt für Schritt durch die Einrichtung von IPTV Deutschland auf Smart TV, Firestick, Android und Apple TV – entweder manuell oder mit Remote-Aktivierung per WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich zuerst einen kostenlosen Test anfordern?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolut. Fordern Sie einen kostenlosen 24-Stunden IPTV Test per WhatsApp an, um unsere 4K IPTV Sender risikofrei vor dem Abonnement zu testen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie schnell werde ich eingerichtet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sobald Sie Ihr Paket bestätigen und die Zahlung abschließen, richtet unser Team Sie live per WhatsApp ein. Die meisten Kunden streamen innerhalb von 10 Minuten.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-16 text-[#FFFFFF]">
      <script
        type="application/ld+json"
        id="support-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}

      {/* HERO */}
      <section className="relative px-6 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(221,0,0,0.18),_transparent_55%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #DD000012 1px, transparent 1px), linear-gradient(to bottom, #DD000012 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-6 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]/40">
              <Mail className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                24/7 Support Deutschland
                <GermanFlag className="w-4 h-4" />
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none">
              Kontakt <span className="text-[#FFCE00]">{BRAND}</span>
            </h1>

            <p className="text-lg md:text-xl text-[#FFFFFF]/85 font-bold max-w-2xl mx-auto leading-relaxed">
              Fragen zu unseren IPTV Deutschland Sendern, Smart TV Setup oder Zahlungen? Unser Support Team ist 24/7 per WhatsApp, E-Mail und Live-Chat erreichbar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* INTRO SUMMARY — NEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#DD0000]/30 bg-[#121214] p-6 md:p-8 shadow-2xl">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#DD0000]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFCE00]/10 border border-[#FFCE00]/30 px-3 py-1 mb-4">
                <Info className="w-3.5 h-3.5 text-[#FFCE00]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FFCE00]">
                  Wie wir Ihnen helfen
                </span>
              </div>
              <p className="text-[#FFFFFF]/85 font-medium text-sm md:text-base leading-relaxed">
                Unser {BRAND} Support-Team ist rund um die Uhr für Sie da – für neue Abonnements, technische Hilfe, Senderauswahl, Zahlungsfragen und Setup auf Smart TV, Firestick, Apple TV, Android und iOS. Wir antworten im Durchschnitt innerhalb von 5 Minuten und begleiten Sie bei Bedarf Schritt für Schritt per WhatsApp.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
                    Senden Sie Uns eine Nachricht
                  </h2>
                  <p className="text-[#DD0000] font-bold text-sm mb-6">
                    Füllen Sie das untenstehende Formular aus und wir antworten per WhatsApp oder E-Mail – meist innerhalb von Minuten.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                      >
                        Vollständiger Name <span className="text-[#DD0000]">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#DD0000] transition-colors outline-none"
                          placeholder="z.B. Thomas Müller"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                      >
                        E-Mail-Adresse <span className="text-[#DD0000]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#DD0000] transition-colors outline-none"
                          placeholder="name@beispiel.de"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                      >
                        Betreff <span className="text-[#DD0000]">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-10 py-3.5 bg-white border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold focus:border-[#DD0000] transition-colors outline-none appearance-none"
                        >
                          <option value="" className="bg-[#f2ebeb]">
                            Wählen Sie ein Thema...
                          </option>
                          <option value="test" className="bg-[#f2ebeb]">
                            Kostenloser 24-Stunden IPTV Test
                          </option>
                          <option value="setup" className="bg-[#f2ebeb]">
                            Setup Hilfe & App-Installation
                          </option>
                          <option value="pricing" className="bg-[#f2ebeb]">
                            Pakete & Preise Fragen
                          </option>
                          <option value="technical" className="bg-[#f2ebeb]">
                            Technischer Support
                          </option>
                          <option value="billing" className="bg-[#f2ebeb]">
                            Zahlungen (SEPA / Kreditkarte / PayPal / Krypto)
                          </option>
                          <option value="general" className="bg-[#f2ebeb]">
                            Allgemeine Frage
                          </option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0a0a0c]/40">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M7 10l5 5 5-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                      >
                        Nachricht <span className="text-[#DD0000]">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3.5 bg-white border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#DD0000] transition-colors outline-none resize-none"
                          placeholder="Beschreiben Sie Ihre Frage oder Ihren Gerätetyp..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-4 rounded-xl bg-gradient-to-r from-[#DD0000] to-[#8C0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-[#FFCE00]/40 ${
                        loading
                          ? 'opacity-70 cursor-not-allowed'
                          : 'hover:scale-[1.01] hover:shadow-xl cursor-pointer'
                      }`}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-[#FFFFFF]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Wird Gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Nachricht Senden
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <h3 className="text-xl font-black text-[#0a0a0c] uppercase tracking-tight mb-6">
                    Kontaktdetails
                  </h3>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                      <Mail className="w-6 h-6 text-[#DD0000]" />
                    </div>
                    <div>
                      <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">E-Mail</p>
                      <a
                        href={`mailto:${CONSTANTS.CONTACT.email}`}
                        className="text-[#0a0a0c] hover:text-[#DD0000] transition-colors text-sm font-bold break-all"
                      >
                        {CONSTANTS.CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                      <Phone className="w-6 h-6 text-[#DD0000]" />
                    </div>
                    <div>
                      <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">WhatsApp</p>
                      <a
                        href={whatsappBaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0a0a0c] hover:text-[#DD0000] transition-colors text-sm font-bold"
                      >
                        {CONSTANTS.CONTACT.phone || 'Per WhatsApp chatten'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                      <MessageSquare className="w-6 h-6 text-[#DD0000]" />
                    </div>
                    <div>
                      <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">
                        Direkter Kontakt
                      </p>
                      <p className="text-[#0a0a0c] text-sm font-bold">24/7 Verfügbar</p>
                      <button
                        onClick={startWhatsAppChat}
                        className="text-[#DD0000] text-xs font-black uppercase tracking-widest hover:text-[#8C0000] transition-colors mt-1 cursor-pointer block"
                      >
                        WhatsApp Chat Starten →
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center border border-[#DD0000]/30">
                      <Clock className="w-6 h-6 text-[#DD0000]" />
                    </div>
                    <div>
                      <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">
                        Antwortzeit
                      </p>
                      <p className="text-[#0a0a0c] text-sm font-bold">Innerhalb von 5 bis 15 Minuten</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-black/5">
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black mb-4">
                      Garantierter Service
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-xl p-3 text-center border border-black/10">
                        <Headphones className="w-5 h-5 text-[#DD0000] mx-auto mb-1" />
                        <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                          24/7 Hilfe
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-3 text-center border border-black/10">
                        <ShieldCheck className="w-5 h-5 text-[#DD0000] mx-auto mb-1" />
                        <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                          Sicher
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-3 text-center border border-black/10">
                        <Zap className="w-5 h-5 text-[#DD0000] mx-auto mb-1" />
                        <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                          Schnelles Setup
                        </p>
                      </div>
                      <div className="bg-white rounded-xl p-3 text-center border border-black/10">
                        <Users className="w-5 h-5 text-[#DD0000] mx-auto mb-1" />
                        <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                          15K+ Kunden
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <FadeIn>
          <div className="relative overflow-hidden bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FFCE00]/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-3 border border-[#DD0000]/30">
                  <LifeBuoy className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  24/7 Support
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">Immer verfügbar</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-3 border border-[#DD0000]/30">
                  <Zap className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Schnelle Antwort
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">Direkt per WhatsApp</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-3 border border-[#DD0000]/30">
                  <ShieldCheck className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Datenschutz Garantie
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">DSGVO konform</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-3 border border-[#DD0000]/30">
                  <CheckCircle2 className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Bester Service
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">#1 IPTV Deutschland</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SUPPORT CHANNELS — NEW SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-4">
            <Globe className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
              Kontaktkanäle
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
            So Erreichen Sie <span className="text-[#FFCE00]">Unser Team</span>
          </h2>
          <p className="text-[#FFFFFF]/70 font-bold text-base max-w-2xl mx-auto">
            Vier Wege, um mit unserem IPTV Deutschland Support in Kontakt zu treten – wählen Sie den für Sie passenden Kanal.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: MessageCircle,
              title: 'WhatsApp Live-Chat',
              desc: 'Sofortige Antwort, 24/7 verfügbar. Beste Wahl für schnelle Fragen und Setup-Hilfe.',
              tag: 'Empfohlen',
            },
            {
              icon: Mail,
              title: 'E-Mail Support',
              desc: `Detaillierte Anfragen an ${CONSTANTS.CONTACT.email}. Antwort in der Regel innerhalb weniger Stunden.`,
              tag: 'Ausführlich',
            },
            {
              icon: Phone,
              title: 'Telefonischer Kontakt',
              desc: `Direkter Kontakt unter ${CONSTANTS.CONTACT.phone} während der Geschäftszeiten.`,
              tag: 'Direkt',
            },
            {
              icon: LifeBuoy,
              title: 'Self-Service FAQ',
              desc: 'Durchsuchen Sie unsere FAQ-Wissensdatenbank für sofortige Antworten auf häufige Fragen.',
              tag: 'Selbsthilfe',
            },
          ].map((channel) => {
            const Icon = channel.icon;
            return (
              <FadeInItem
                key={channel.title}
                className="group relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 hover:border-[#FFCE00] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#FFCE00]" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FFCE00] bg-[#FFCE00]/10 border border-[#FFCE00]/30 px-2.5 py-1 rounded-full">
                      {channel.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight mb-2 group-hover:text-[#FFCE00] transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-xs text-[#FFFFFF]/70 font-medium leading-relaxed">
                    {channel.desc}
                  </p>
                </div>
              </FadeInItem>
            );
          })}
        </div>
      </section>

      {/* SUPPORT PROCESS — NEW SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-4">
            <Award className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
              Unser Prozess
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
            Wie Wir Ihre Anfrage <span className="text-[#FFCE00]">Bearbeiten</span>
          </h2>
        </FadeIn>

        <div className="relative overflow-hidden bg-[#121214] border-2 border-[#DD0000]/40 rounded-3xl p-6 md:p-10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#DD0000]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Anfrage Eingang',
                desc: 'Ihre Nachricht landet sofort in unserem Team-Postfach. Sie erhalten eine Empfangsbestätigung.',
              },
              {
                step: '02',
                title: 'Spezialisten-Prüfung',
                desc: 'Ein dedizierter IPTV-Spezialist prüft Ihr Anliegen und Ihre Geräte-Konfiguration.',
              },
              {
                step: '03',
                title: 'Antwort & Lösung',
                desc: 'Sie erhalten eine Antwort per WhatsApp oder E-Mail – in den meisten Fällen innerhalb von 5–15 Minuten.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl md:text-6xl font-black text-[#DD0000]/30 mb-3 leading-none">
                  {item.step}
                </div>
                <h3 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#FFFFFF]/70 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
            Häufig Gestellte <span className="text-[#FFCE00]">Fragen</span>
          </h2>
          <p className="text-[#FFFFFF]/70 font-bold text-base">
            Schnelle Antworten auf die häufigsten Support-Fragen
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: 'Wie kontaktiere ich den Support am schnellsten?',
              a: `Für den schnellsten Support senden Sie uns eine Nachricht direkt per WhatsApp. Unser Team antwortet normalerweise innerhalb weniger Minuten.`,
            },
            {
              q: 'Bieten Sie Hilfe bei der Installation an?',
              a: 'Ja. Unser Team begleitet Sie Schritt für Schritt durch die Einrichtung von IPTV Deutschland auf Smart TV, Firestick, Android und Apple TV – entweder manuell oder mit Remote-Aktivierung per WhatsApp.',
            },
            {
              q: 'Kann ich zuerst einen kostenlosen Test anfordern?',
              a: 'Absolut. Fordern Sie einen kostenlosen 24-Stunden IPTV Test per WhatsApp an, um unsere 4K IPTV Sender risikofrei vor dem Abonnement zu testen.',
            },
            {
              q: 'Wie schnell werde ich eingerichtet?',
              a: 'Sobald Sie Ihr Paket bestätigen und die Zahlung abschließen, richtet unser Team Sie live per WhatsApp ein. Die meisten Kunden streamen innerhalb von 10 Minuten.',
            },
          ].map((faq, idx) => (
            <FadeInItem
              key={idx}
              className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-2xl p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)]"
            >
              <h3 className="text-[#0a0a0c] font-black text-base uppercase tracking-tight mb-2">
                {faq.q}
              </h3>
              <p className="text-[#0a0a0c]/80 text-sm font-bold leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg border border-[#FFCE00]/30"
          >
            Alle FAQ Ansehen
          </Link>
        </FadeIn>
      </section>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-up {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}