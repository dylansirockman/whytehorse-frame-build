import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const HeroSection = () => {
  const images = [
    "/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png",
    "/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png",
    "/lovable-uploads/073b7385-c711-4d21-bdf2-a27e21f46e1c.png",
    "/lovable-uploads/7f4a1d23-20ba-4078-85b6-248cba2c8d83.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // === Typewriter headline ===
  // Start on "Framing" (visible), hold 5s, then cycle: Precision → Speed → Integrity → Framing, and lock.
  const headlineWords = ["Framing", "Precision", "Speed", "Integrity", "Framing"];
  type Phase = "initialPause" | "typing" | "deleting" | "done";
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("Framing");
  const [phase, setPhase] = useState<Phase>("initialPause");

  useEffect(() => {
    const current = headlineWords[wordIndex];
    let t: number | undefined;

    const TYPE_MS = 90;
    const DELETE_MS = 60;
    const HOLD_MS = 2100;
    const INITIAL_HOLD_MS = 5000;

    if (phase === "initialPause") {
      t = window.setTimeout(() => setPhase("deleting"), INITIAL_HOLD_MS);
    } else if (phase === "typing") {
      if (typed.length < current.length) {
        t = window.setTimeout(() => setTyped(current.slice(0, typed.length + 1)), TYPE_MS);
      } else {
        if (wordIndex === headlineWords.length - 1) {
          t = window.setTimeout(() => setPhase("done"), HOLD_MS);
        } else {
          t = window.setTimeout(() => setPhase("deleting"), HOLD_MS);
        }
      }
    } else if (phase === "deleting") {
      if (typed.length > 0) {
        t = window.setTimeout(() => setTyped(current.slice(0, typed.length - 1)), DELETE_MS);
      } else {
        setWordIndex((i) => i + 1);
        setPhase("typing");
      }
    } else if (phase === "done") {
      if (typed !== current) setTyped(current);
    }

    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [typed, phase, wordIndex, headlineWords]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-construction-white">
      {/* Grid Pattern Background (kept) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(158,158,158,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(158,158,158,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          mask: "linear-gradient(to bottom, white 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 75%, transparent 100%)",
          WebkitMask:
            "linear-gradient(to bottom, white 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 75%, transparent 100%)",
        }}
      />

      {/* Subtle House Blueprint Background (very faint, behind everything) */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
              <rect width='1200' height='800' fill='none'/>
              <!-- house outline -->
              <g stroke='${'#1F2937'}' stroke-opacity='0.7' fill='none' stroke-width='1.5'>
                <!-- base -->
                <rect x='250' y='420' width='700' height='220' />
                <!-- roof -->
                <path d='M230 420 L600 220 L970 420' />
                <!-- ridge line -->
                <line x1='600' y1='220' x2='600' y2='270' stroke-dasharray='6 6'/>
                <!-- door -->
                <rect x='560' y='520' width='80' height='120' />
                <line x1='600' y1='520' x2='600' y2='640' />
                <!-- left window -->
                <rect x='340' y='500' width='120' height='80' />
                <line x1='400' y1='500' x2='400' y2='580' />
                <line x1='340' y1='540' x2='460' y2='540' />
                <!-- right window -->
                <rect x='740' y='500' width='120' height='80' />
                <line x1='800' y1='500' x2='800' y2='580' />
                <line x1='740' y1='540' x2='860' y2='540' />
                <!-- fascia/roof detail -->
                <line x1='300' y1='420' x2='900' y2='420' />
                <line x1='270' y1='440' x2='930' y2='440' stroke-dasharray='4 8'/>
                <!-- dimension guides -->
                <g stroke-opacity='0.45' stroke-dasharray='8 8'>
                  <line x1='250' y1='660' x2='950' y2='660' />
                  <line x1='250' y1='680' x2='950' y2='680' />
                  <line x1='250' y1='700' x2='250' y2='420' />
                  <line x1='950' y1='700' x2='950' y2='420' />
                </g>
                <!-- cross braces (light) -->
                <g stroke-opacity='0.25'>
                  <line x1='250' y1='420' x2='600' y2='640' />
                  <line x1='950' y1='420' x2='600' y2='640' />
                </g>
              </g>
            </svg>
          `)}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "1400px 900px",
          backgroundPosition: "center 35%",
          filter: "saturate(0.4) contrast(0.9)", // keeps it understated
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 min-h-[calc(100vh-8rem)] lg:minh-[calc(100vh-7rem)] pt-8 lg:pt-6">
          {/* Text */}
          <div className="w-full lg:w-[55%] text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="inline-block bg-gradient-to-r from-construction-secondary/20 to-construction-secondary/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-construction-secondary/40 shadow-lg shadow-construction-secondary/15 mb-6 lg:mb-8 hover:shadow-xl hover:shadow-construction-secondary/25 transition-all duration-300 hover:scale-105">
              <span className="text-construction-green font-semibold text-xs sm:text-sm uppercase tracking-wider">
                PROFESSIONAL FRAMING CONTRACTORS
              </span>
            </div>

            {/* Typewriter headline (starts on "Framing", 5s pause, cycles, locks) */}
            <h1 className="mb-8 lg:mb-10 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#1F2937]">
              <span
                className="relative text-construction-green"
                aria-live="polite"
                aria-atomic="true"
              >
                {typed}
                {(phase === "initialPause" || phase === "typing" || phase === "deleting") && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-[0.02em] top-0 bottom-0 border-r-2 border-construction-green animate-caret"
                  />
                )}
              </span>{" "}
              you can rely on
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-construction-gray leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Specialists in house framing — delivering precision, speed, and structural integrity you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-10 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-base font-semibold">
                Get Quote
              </Button>
              <Button variant="outline" size="lg" className="text-base font-semibold">
                Contact Us
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-6 lg:mb-8 justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4" />
                <span className="font-medium text-sm sm:text-base">500+ Projects Completed</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4" />
                <span className="font-medium text-sm sm:text-base">15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4" />
                <span className="font-medium text-sm sm:text-base">100% On Schedule</span>
              </div>
            </div>
          </div>

          {/* Image + “Crane” */}
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl lg:w-1/2 mx-auto relative">
            {/* OUTER: pendulum swing */}
            <div
              className="swingGroup relative w-full aspect-[4/5] z-[60]"
              style={
                {
                  ["--swing-angle" as any]: "3.2deg",
                  ["--swing-lift" as any]: "3px",
                  ["--swing-duration" as any]: "4.2s",
                  animation: "pendulum var(--swing-duration) infinite",
                  transformOrigin: "top center",
                  willChange: "transform",
                } as React.CSSProperties
              }
            >
              {/* INNER: crooked → straight on hover */}
              <div className="tiltGroup relative w-full h-full rotate-2 sm:rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Cable (SVG, thin, BEHIND image, extends above to imply source) */}
                <svg
                  className="absolute inset-0 w-full h-[calc(100%+120px)] -top-[120px] z-[30] pointer-events-none"
                  viewBox="0 0 100 220"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="120"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    shapeRendering="geometricPrecision"
                  />
                </svg>

                {/* Lifting bar (above image) */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#1F2937] rounded-sm z-[66] pointer-events-none">
                  <div className="absolute top-0.5 left-2 right-2 h-0.5 bg-white/15 rounded" />
                </div>

                {/* Hook block — minimal */}
                <div className="absolute left-1/2 -translate-x-1/2 z-[67] pointer-events-none" style={{ top: "-12px" }}>
                  <div className="w-8 h-6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-sm relative shadow-lg border border-gray-700">
                    <div className="absolute top-1 left-1 right-1 h-1 bg-white/15 rounded-sm" />
                    <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-black/20 rounded-sm" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                      <div className="w-3 h-4 border-l-2 border-b-2 border-gray-700 rounded-bl-lg bg-gradient-to-br from-gray-600 to-gray-800" />
                    </div>
                  </div>
                </div>

                {/* IMAGE (under crane parts) */}
                <div className="heroImage relative w-full h-full pointer-events-auto z-40">
                  <div
                    className="w-full h-full overflow-hidden rounded-3xl shadow-2xl bg-white relative cursor-pointer"
                    onClick={handleImageClick}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                          index === currentImageIndex
                            ? "translate-x-0"
                            : index > currentImageIndex
                            ? "translate-x-full"
                            : "-translate-x-full"
                        }`}
                      >
                        <img src={image} alt="Construction project showcase" className="w-full h-full object-cover" />
                      </div>
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-construction-green/10 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20" />

                    <button
                      className="absolute top-4 right-4 z-30 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-125 hover:shadow-pink-500/30 hover:rotate-12"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://instagram.com", "_blank");
                      }}
                    >
                      <Instagram size={24} strokeWidth={2.5} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            index === currentImageIndex
                              ? "bg-construction-green shadow-lg scale-125"
                              : "bg-white/40 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* (no decorative dots) */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for pendulum + caret */}
      <style>{`
        @keyframes pendulum {
          0% {
            transform: rotate(var(--swing-angle)) translateY(var(--swing-lift));
            animation-timing-function: cubic-bezier(0.34, 0.04, 0.42, 1);
          }
          50% {
            transform: rotate(calc(var(--swing-angle) * -1)) translateY(var(--swing-lift));
            animation-timing-function: cubic-bezier(0.34, 0.04, 0.42, 1);
          }
          100% {
            transform: rotate(var(--swing-angle)) translateY(var(--swing-lift));
          }
        }
        @keyframes caret {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-caret {
          animation: caret 1s step-end infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .swingGroup { animation: none !important; }
          .animate-caret { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
