export function Hero() {
  return (
    <section className="pb-16 lg:pb-0 lg:h-157.5">

      {/* Lines group — above gradient */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          top: "40px",
          height: "930.8px",
          left: "calc((100% - 100vw) / 2 - 80.5px)",
          width: "calc(100vw + 119px)",
          opacity: 0.57,
        }}
      >
        {/* Block 1 — bottom-left to top-right, right-aligned */}
        <div
          className="absolute right-0"
          style={{ top: "47.5px", width: `${(1874 / 2039) * 100}%`, height: "569px" }}
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line1Gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C8C8C8" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
            </defs>
            <line x1="0" y1="569" x2="100%" y2="0" stroke="url(#line1Gradient)" strokeWidth="1" />
          </svg>
        </div>

        {/* Block 2 — top-left to bottom-right, left-aligned */}
        <div
          className="absolute left-0"
          style={{ top: "24.5px", width: `${(1334 / 2039) * 100}%`, height: "517px" }}
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8C8C8" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
            </defs>
            <line x1="0" y1="0" x2="100%" y2="517" stroke="url(#line2Gradient)" strokeWidth="1" />
          </svg>
        </div>

        {/* Block 3 — bottom-left to top-right, left offset 114.5px */}
        <div
          className="absolute"
          style={{ top: "0px", left: `${(114.5 / 2039) * 100}%`, width: `${(1220 / 2039) * 100}%`, height: "617px" }}
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <line x1="0" y1="617" x2="100%" y2="0" stroke="rgba(255,255,255,1)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Gradient blur */}
      <div className="absolute top-30 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <div className="gradient-blur" />
      </div>

      {/* Hero content */}
      <div className="hero-content px-4 lg:px-0">
        <div className="hero-text">
          Формируем места,{"\n"}где эстетика, инфраструктура{"\n"}и предпринимательство{"\n"}соединяются в единую городскую{"\n"}среду.
        </div>
        <a href="#" className="hero-cta">
          Забронировать{"\n"}площадь →
        </a>
      </div>
    </section>
  );
}
