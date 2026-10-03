'use client';

import { FadeIn } from './AnimatedSection';
import { Wifi, Server, ShieldCheck, Zap, Globe } from 'lucide-react';
import Image from 'next/image';

export default function GlobalServerMap() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A0A0F] py-16 sm:py-20 lg:py-28"
      aria-label="Global IPTV streaming server coverage map"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(229,9,20,0.12),_transparent_65%)] pointer-events-none" />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F5C518]/30 bg-[#F5C518]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#F5C518]">
            <Wifi className="h-4 w-4 text-[#F5C518]" />
            Global Server Network
            <Globe className="h-4 w-4 text-[#F5C518]" />
          </div>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            IPTV Streaming Coverage In <span className="text-[#E50914]">100+ Countries</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base font-medium">
            Experience ultra-fast 4K IPTV streaming through the global server network of IPTVUniverse. Enjoy zero buffering, maximum stability, and a guaranteed 99.9% uptime with the best IPTV provider. Powered by dedicated edge servers in New York, London, Frankfurt, and Singapore — with under 10ms latency worldwide.
          </p>
        </div>

        {/* Medium-Sized Map Graphic */}
        <div className="relative mx-auto my-8 max-w-5xl px-4">
          <Image
            src="/img/global.png"
            alt="Global IPTV streaming server network coverage map for 4K IPTV service"
            width={1400}
            height={787}
            className="w-full h-auto max-h-[600px] object-contain block mx-auto opacity-95"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#0A0A0F] p-6 rounded-xl border border-white/10 shadow-lg hover:border-[#E50914]/50 hover:shadow-[0_10px_30px_rgba(229,9,20,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Zap className="h-6 w-6 text-[#E50914]" />
            </div>
            <h3 className="text-base font-black uppercase text-white">Ultra-Low Latency</h3>
            <p className="text-xs text-white/70 mt-1 font-medium">
              Optimized network routing for seamless live sports on IPTV streaming and instant channel switching. Under 10ms latency on every edge server.
            </p>
          </div>

          <div className="bg-[#0A0A0F] p-6 rounded-xl border border-white/10 shadow-lg hover:border-[#E50914]/50 hover:shadow-[0_10px_30px_rgba(229,9,20,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Server className="h-6 w-6 text-[#E50914]" />
            </div>
            <h3 className="text-base font-black uppercase text-white">Redundant Servers</h3>
            <p className="text-xs text-white/70 mt-1 font-medium">
              Automatic failover systems ensure constant delivery of every IPTV streaming channel and uninterrupted performance.
            </p>
          </div>

          <div className="bg-[#0A0A0F] p-6 rounded-xl border border-white/10 shadow-lg hover:border-[#E50914]/50 hover:shadow-[0_10px_30px_rgba(229,9,20,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <ShieldCheck className="h-6 w-6 text-[#E50914]" />
            </div>
            <h3 className="text-base font-black uppercase text-white">99.9% Uptime</h3>
            <p className="text-xs text-white/70 mt-1 font-medium">
              Round-the-clock monitored infrastructure for a reliable, worry-free viewing experience with the best IPTV provider.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}