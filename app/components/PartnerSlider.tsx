'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

export default function PartnerSlider() {
  // -------------------------------------------------------------------------
  // PARTNER LOGOS (Row 1) — Apps & Platforms
  // -------------------------------------------------------------------------
  const partners = [
    { name: 'Amazon Firestick', alt: 'Amazon Firestick mit IPTV Deutschland in 4K streamen' },
    { name: 'Samsung Smart TV', alt: 'Samsung Smart TV mit dem besten IPTV anbieter Service' },
    { name: 'LG Smart TV', alt: 'LG Smart TV mit Live-Sport auf IPTV Deutschland' },
    { name: 'Apple TV 4K', alt: 'Apple TV 4K mit dem besten IPTV German Player' },
    { name: 'Android TV', alt: 'Android TV Box mit 4K Ultra HD IPTV Deutschland Streaming' },
    { name: 'Nvidia Shield', alt: 'Nvidia Shield für leistungsstarke IPTV Streams' },
    { name: 'IBO Player Pro', alt: 'IBO Player Pro auf der IPTVDeutschland Empfehlungsliste' },
    { name: 'TiviMate Player', alt: 'TiviMate IPTV Player für deutsche Zuschauer auf Smart TV' },
    { name: 'IPTV Extreme', alt: 'IPTV Extreme Pro für IPTV anbieter Abonnenten eingerichtet' },
    { name: 'MAG & Formuler', alt: 'MAG und Formuler Set-Top-Boxen kompatibel mit IPTV Deutschland' },
  ].map((p, i) => {
    const number = String(i + 1).padStart(2, '0');
    return {
      ...p,
      imagePath: `/img/partners/iptv-deutsch-partners-${number}.png`,
      width: 128,
      height: 128,
    };
  });

  // -------------------------------------------------------------------------
  // DEVICE LOGOS (Row 2 - Reverse Slider) — Hardware Devices
  // -------------------------------------------------------------------------
  const devices = [
    { name: 'Samsung Smart TV', imagePath: '/img/devices/samsung.webp', alt: 'Samsung Smart TV IPTV Deutschland Kompatibilität' },
    { name: 'Roku Streaming Device', imagePath: '/img/devices/roku.webp', alt: 'Roku Player für IPTV anbieter Streaming' },
    { name: 'Apple TV 4K', imagePath: '/img/devices/appletv.webp', alt: 'Apple TV 4K IPTV German Stream' },
    { name: 'Windows PC', imagePath: '/img/devices/windows.webp', alt: 'Windows PC IPTV Deutschland Player' },
    { name: 'Amazon Fire TV', imagePath: '/img/devices/firetv.webp', alt: 'Fire TV Stick IPTV anbieter Einrichtung' },
    { name: 'Android TV', imagePath: '/img/devices/android.webp', alt: 'Android TV Box IPTV German Software' },
    { name: 'Google TV', imagePath: '/img/devices/googletv.webp', alt: 'Google TV IPTV Deutschland App' },
    { name: 'LG Smart TV', imagePath: '/img/devices/lg.webp', alt: 'LG WebOS IPTV anbieter App' },
    { name: 'Sony Smart TV', imagePath: '/img/devices/sonny.webp', alt: 'Sony Bravia Smart TV IPTV German Ultra HD' },
  ].map((d) => ({
    ...d,
    width: 128,
    height: 128,
  }));

  // Duplicate arrays for seamless infinity looping
  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);
  const deviceItems = useMemo(() => [...devices, ...devices], [devices]);

  // Total animation travel distances
  const animationDistancePartners = partners.length * 150;
  const animationDistanceDevices = devices.length * 150;

  return (
    <div className="w-full relative py-12 bg-[#B00000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-[#FFCE00] font-black uppercase tracking-widest flex items-center justify-center gap-2">
          <span>Unterstützte IPTV Deutschland Apps &amp; Geräte</span>
        </p>
      </div>

      {/* Row 1: Forward Slider (Upper Row - Dark Background) */}
      <div className="relative bg-[#141415] overflow-hidden mb-8 pt-11">
        {/* Blended dark gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#09090B] via-[#09090B]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#09090B] via-[#09090B]/50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [0, -animationDistancePartners],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {sliderItems.map((partner, idx) => {
            const isDuplicate = idx >= partners.length;
            const halfLabel = isDuplicate ? 'Wiederholung' : 'Ansicht';
            const position = isDuplicate ? idx - partners.length + 1 : idx + 1;
            const altText = `${partner.alt} – ${halfLabel} ${position} von ${partners.length}`;

            return (
              <div
                key={`partner-${partner.name}-${idx}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28">
                  <Image
                    src={partner.imagePath}
                    alt={altText}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 112px"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2: Reverse Slider (Lower Row - Full #E3DAC9 Light Section Background) */}
      <div className="relative w-full bg-[#E3DAC9] py-6 overflow-hidden shadow-inner">
        {/* Blended light gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#E3DAC9] via-[#E3DAC9]/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#E3DAC9] via-[#E3DAC9]/60 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [-animationDistanceDevices, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 28,
              ease: 'linear',
            },
          }}
        >
          {deviceItems.map((device, idx) => {
            const isDuplicate = idx >= devices.length;
            const halfLabel = isDuplicate ? 'Wiederholung' : 'Ansicht';
            const position = isDuplicate ? idx - devices.length + 1 : idx + 1;
            const altText = `${device.alt} – ${halfLabel} ${position} von ${devices.length}`;

            return (
              <div
                key={`device-${device.name}-${idx}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[150px] transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                  <Image
                    src={device.imagePath}
                    alt={altText}
                    width={device.width}
                    height={device.height}
                    className="object-contain w-full h-full drop-shadow-sm"
                    sizes="(max-width: 768px) 80px, 112px"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}