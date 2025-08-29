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

  // === Typewriter headline (Precision → Speed → Integrity → Framing, then lock) ===
  const headlineWords = ["Framing","Precision", "Speed", "Integrity", "Framing"];
  type Phase = "typing" | "pausing" | "deleting" | "done";
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("Framing");
  const [phase, setPhase] = useState<"initialPause" | "typing" | "pausing" | "deleting" | "done">("initialPause");

  useEffect(() => {
    const current = headlineWords[wordIndex];
    let t: number | undefined;

    const TYPE_MS = 90;    // per character
    const DELETE_MS = 45;  // per character
    const HOLD_MS = 300;  // time a full word stays visible

    if (phase === "typing") {
      if (typed.length < current.length) {
        t = window.setTimeout(() => {
          setTyped(current.slice(0, typed.length + 1));
        }, TYPE_MS);
      } else {
        // full word finished
        if (wordIndex === headlineWords.length - 1) {
          // last word "Framing" -> lock after hold
          t = window.setTimeout(() => setPhase("done"), HOLD_MS);
        } else {
          // brief pause (so total visible ≈ HOLD_MS), then start deleting
          t = window.setTimeout(() => setPhase("deleting"), HOLD_MS);
        }
      }
    } else if (phase === "deleting") {
      if (typed.length > 0) {
        t = window.setTimeout(() => {
          setTyped(current.slice(0, typed.length - 1));
        }, DELETE_MS);
      } else {
        // move to next word and type again
        setWordIndex((i) => i + 1);
        setPhase("typing");
      }
    } else if (phase === "done") {
      // ensure we end showing the full final word exactly
      if (typed !== current) {
        t = window.setTimeout(() => setTyped(current), 0);
      }
    }

    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [typed, phase, wordIndex, headlineWords]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-construction-white">
      {/* Grid Pattern Background */}
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

      {/* Construction Tools Overlay */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          backgroundImage: `url('/construction-overlay.svg')`,
          backgroundSize: "1200px 800px",
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0, 600px 400px",
          opacity: 0.7,
          mask: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.8) 65%, rgba(255,255,255,1) 100%)",
          WebkitMask:
            "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.8) 65%, rgba(255,255,255,1) 100%)",
        }}
      />

      {/* Light blueprint accents */}
      <div className="absolute inset-0 z-[5]">
        <div
          className="absolute top-1/4 right-[20%] w-40 h-2 transform rotate-12 shadow-sm"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(31,41,55,0.12), rgba(31,41,55,0.12) 12px, transparent 12px, transparent 14px)",
          }}
        />
        <div className="absolute bottom-1/3 right-1/4 opacity-[0.10]">
          <div className="w-24 h-24 border-l-[3px] border-b-[3px] border-construction-dark/30 relative">
            <div className="absolute -bottom-6 left-0 text-sm text-construction-dark/40 font-mono font-semibold">
              90°
            </div>
            <div className="absolute -left-8 bottom-6 text-xs text-construction-dark/30 font-mono rotate-90 origin-bottom-left">
              24"
            </div>
          </div>
        </div>

        {/* Level tool accent (inner grey dot removed) */}
        <div className="absolute top-2/3 right-1/4 opacity-[0.12]">
          <div className="w-32 h-4 bg-construction-dark/10 rounded-full relative shadow-sm">
            <div className="absolute -left-2 top-1/2 w-1 h-6 bg-construction-dark/10 transform -translate-y-1/2" />
            <div className="absolute -right-2 top-1/2 w-1 h-6 bg-construction-dark/10 transform -translate-y-1/2" />
          </div>
        </div>

        <div className="absolute top-1/2 right-1/3 opacity-[0.04]">
          <div className="w-16 h-16 border-l-2 border-b-2 border-construction-dark/20 transform rotate-45" />
        </div>
        <div className="absolute top-[16.66%] right-1/4 opacity-[0.08]">
          <div className="flex items-center space-x-1">
            <div className="w-0.5 h-3 bg-construction-dark/20" />
            <div className="w-0.5 h-2 bg-construction-dark/15" />
            <div className="w-0.5 h-2 bg-construction-dark/15" />
            <div className="w-0.5 h-3 bg-construction-dark/20" />
            <span className="text-xs text-construction-dark/20 font-mono ml-2">16"</span>
          </div>
        </div>
        <div
          className="absolute top-1/3 left-0 w-full h-0.5 transform -rotate-12 origin-left opacity-[0.04]"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(31,41,55,0.04), rgba(31,41,55,0.04) 20px, transparent 20px, transparent 25px)",
          }}
        />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-4 lg:left-10 w-32 h-32 bg-construction-green/5 rounded-full blur-3xl z-[5]" />
      <div className="absolute bottom-1/4 right-4 lg:right-20 w-48 h-48 bg-construction-green/10 rounded-full blur-3xl z-[5]" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-7rem)] pt-8 lg:pt-6">
          {/* Text */}
          <div className="w-full lg:w-[55%] text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="inline-block bg-gradient-to-r from-construction-secondary/20 to-construction-secondary/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-construction-secondary/40 shadow-lg shadow-construction-secondary/15 mb-6 lg:mb-8 hover:shadow-xl hover:shadow-construction-secondary/25 transition-all duration-300 hover:scale-105">
              <span className="text-construction-green font-semibold text-xs sm:text-sm uppercase tracking-wider">
                PROFESSIONAL FRAMING CONTRACTORS
              </span>
            </div>

            {/* Typewriter headline (locks on “Framing”) */}
            <h1 className="mb-8 lg:mb-10 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#1F2937]">
              <span className="text-construction-green" aria-live="polite" aria-atomic="true">
                {typed}
                {/* caret only while animating */}
                {phase !== "done" && (
                  <span className="inline-block w-[1ch] align-baseline border-r-2 border-construction-green ml-0.5 animate-caret" />
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
