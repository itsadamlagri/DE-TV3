// app/components/GermanFlag.tsx

type GermanFlagProps = {
  className?: string;
};

export default function GermanFlag({ className = 'w-5 h-5' }: GermanFlagProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Circle mask so the flag is cropped into a round badge */}
        <clipPath id="flagCircleDe">
          <circle cx="10" cy="10" r="9" />
        </clipPath>

        {/* Subtle inner shade for depth — matches AustraliaFlag for consistency */}
        <radialGradient id="flagShadeDe" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.10" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
        </radialGradient>
      </defs>

      {/* Flag content, cropped into a circle at radius 9 */}
      <g clipPath="url(#flagCircleDe)">
        {/* Three horizontal bands: black, red, gold (top to bottom) */}
        <rect x="0" y="0" width="20" height="6.67" fill="#000000" />
        <rect x="0" y="6.67" width="20" height="6.66" fill="#DD0000" />
        <rect x="0" y="13.33" width="20" height="6.67" fill="#FFCE00" />

        {/* Soft shading layer for depth — same as AU flag */}
        <rect width="20" height="20" fill="url(#flagShadeDe)" />
      </g>

      {/* Solid white circle border on top */}
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </svg>
  );
}