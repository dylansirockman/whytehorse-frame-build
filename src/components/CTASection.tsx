import React, { useEffect, useRef } from "react";

const ClientShowcaseSection = () => {
  const clients = [
    { name: "Builder One", logo: "/client-logo1.svg" },
    { name: "Construction Co", logo: "/client-logo2.svg" },
    { name: "Homes Ltd", logo: "/client-logo3.svg" },
    { name: "Prairie Build", logo: "/client-logo4.svg" },
    { name: "Alberta Framing", logo: "/client-logo5.svg" },
    { name: "Summit Builders", logo: "/client-logo6.svg" },
    { name: "Rockwood Homes", logo: "/client-logo7.svg" },
    { name: "Northern Contractors", logo: "/client-logo8.svg" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  // Optional: pause animation when section is offscreen to save cycles
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        el.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      {/* subtle top fold to match site */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 to-transparent z-10" />

      {/* blueprint-lite background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(31,41,55,0.02) 0, rgba(31,41,55,0.02) 1px, transparent 1px, transparent 36px),
              repeating-linear-gradient(to bottom, rgba(31,41,55,0.02) 0, rgba(31,41,55,0.02) 1px, transparent 1px, transparent 36px)
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 14%, rgba(2,6,23,0.02), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark">
            Trusted by Alberta’s Top Builders
          </h2>
        </div>

        {/* marquee viewport with edge fade mask */}
        <div
          className="relative overflow-hidden"
          style={{
            // fade logos at edges (works in Safari with -webkit- prefix)
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* animated track */}
          <div
            ref={containerRef}
            className="flex gap-14 will-change-transform select-none"
            style={
              {
                // two groups inside -> 0% to -50% is seamless
                animation: "wh-marquee var(--marquee-duration, 28s) linear infinite",
              } as React.CSSProperties
            }
          >
            {/* group A */}
            <div className="flex gap-14 shrink-0">
              {clients.map((client) => (
                <LogoItem key={`A-${client.name}`} {...client} />
              ))}
            </div>
            {/* group B (identical) */}
            <div className="flex gap-14 shrink-0" aria-hidden="true">
              {clients.map((client) => (
                <LogoItem key={`B-${client.name}`} {...client} />
              ))}
            </div>
          </div>

          {/* pause on hover/tap target */}
          <button
            aria-label="Pause client carousel"
            className="absolute inset-0 z-10 cursor-default md:cursor-auto"
            onMouseEnter={() => {
              if (containerRef.current) containerRef.current.style.animationPlayState = "paused";
            }}
            onMouseLeave={() => {
              if (containerRef.current) containerRef.current.style.animationPlayState = "running";
            }}
            onTouchStart={() => {
              if (containerRef.current) containerRef.current.style.animationPlayState = "paused";
            }}
            onTouchEnd={() => {
              if (containerRef.current) containerRef.current.style.animationPlayState = "running";
            }}
          />
        </div>
      </div>

      {/* local keyframes so you don't have to touch tailwind.config */}
      <style>{`
        @keyframes wh-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="wh-marquee"] { animation: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

function LogoItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center min-w-[160px] md:min-w-[200px] opacity-80 hover:opacity-100 transition-opacity">
      <img
        src={logo}
        alt={`Client: ${name}`}
        className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-[filter] duration-300"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

export default ClientShowcaseSection;
