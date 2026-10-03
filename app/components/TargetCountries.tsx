'use client';

// ---------------------------------------------------------------------------
// Circular SVG Flag Icons — DACH Region (DE, AT, CH, LI)
// Each flag is clipped into a circle (r=9) for a clean badge look.
// Unique IDs prevent collisions when multiple flags render on the same page.
// ---------------------------------------------------------------------------
const FlagDE = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    <defs>
      <clipPath id="tc-de"><circle cx="10" cy="10" r="9" /></clipPath>
    </defs>
    <g clipPath="url(#tc-de)">
      <rect x="0" y="0" width="20" height="6.67" fill="#000000" />
      <rect x="0" y="6.67" width="20" height="6.66" fill="#DD0000" />
      <rect x="0" y="13.33" width="20" height="6.67" fill="#FFCE00" />
    </g>
  </svg>
);

const FlagAT = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    <defs>
      <clipPath id="tc-at"><circle cx="10" cy="10" r="9" /></clipPath>
    </defs>
    <g clipPath="url(#tc-at)">
      <rect x="0" y="0" width="20" height="6.67" fill="#ED2939" />
      <rect x="0" y="6.67" width="20" height="6.66" fill="#FFFFFF" />
      <rect x="0" y="13.33" width="20" height="6.67" fill="#ED2939" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    <defs>
      <clipPath id="tc-ch"><circle cx="10" cy="10" r="9" /></clipPath>
    </defs>
    <g clipPath="url(#tc-ch)">
      <rect x="0" y="0" width="20" height="20" fill="#D52B1E" />
      {/* Vertical white bar */}
      <rect x="8.33" y="4.17" width="3.34" height="11.66" fill="#FFFFFF" />
      {/* Horizontal white bar */}
      <rect x="4.17" y="8.33" width="11.66" height="3.34" fill="#FFFFFF" />
    </g>
  </svg>
);

const FlagLI = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    <defs>
      <clipPath id="tc-li"><circle cx="10" cy="10" r="9" /></clipPath>
    </defs>
    <g clipPath="url(#tc-li)">
      {/* Blue top band */}
      <rect x="0" y="0" width="20" height="10" fill="#002B7F" />
      {/* Red bottom band */}
      <rect x="0" y="10" width="20" height="10" fill="#CE1126" />
      {/* Simplified gold crown in the top-left */}
      <g fill="#FFCE00">
        <circle cx="4.5" cy="5" r="0.7" />
        <circle cx="6" cy="4.5" r="0.5" />
        <circle cx="7" cy="5.2" r="0.4" />
        <rect x="4.2" y="5.6" width="2.9" height="0.6" rx="0.2" />
      </g>
    </g>
  </svg>
);

export default function CountryFlagsBar() {
  const countries = [
    { name: 'Deutschland', code: 'DE', Flag: FlagDE },
    { name: 'Österreich', code: 'AT', Flag: FlagAT },
    { name: 'Schweiz', code: 'CH', Flag: FlagCH },
    { name: 'Liechtenstein', code: 'LI', Flag: FlagLI },
  ];

  return (
    <section className="w-full py-6 my-6 relative z-10 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#09090B] border-2 border-[#FFCE00]/50 rounded-2xl md:rounded-full py-4 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 shadow-2xl transition-all duration-300 hover:border-[#FFCE00]">

          {/* Status Label */}
          <div className="flex items-center gap-2.5 shrink-0 lg:pr-6 lg:border-r border-[#FFCE00]/20 w-full lg:w-auto justify-center lg:justify-start">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFCE00] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFCE00]" />
            </span>
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#FFCE00] whitespace-nowrap">
              Beliebte Länder:
            </span>
          </div>

          {/* 4 Symmetric Columns with Inline SVG Flags */}
          <div className="w-full lg:w-auto flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center justify-items-center">
              {countries.map((c) => {
                const Flag = c.Flag;
                return (
                  <div
                    key={c.code}
                    className="flex items-center justify-center gap-2.5 group cursor-default transition-transform duration-300 hover:scale-105 w-full"
                  >
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full overflow-hidden shrink-0 shadow-lg ring-2 ring-[#FFCE00]/30 group-hover:ring-[#FFCE00] transition-all duration-300">
                      <Flag />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-[#FFFFFF] group-hover:text-[#FFCE00] transition-colors whitespace-nowrap uppercase tracking-wide">
                      {c.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}