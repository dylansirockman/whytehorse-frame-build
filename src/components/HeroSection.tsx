import { useState, useEffect } from "react";
import BlueprintPillHeader from './BlueprintPillHeader';
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

const LOGOS = [
  { name: "Cantiro", logo: "/lovable-uploads/39d2f415-ffb6-4974-ad22-f5a3a3e321e5.png" },
  { name: "Bedrock Homes", logo: "/lovable-uploads/a39212c1-3db0-4de7-a94a-1d4c68d8884f.png" },
  { name: "Akash Homes", logo: "/lovable-uploads/6cb38c0c-452e-4c06-94df-ff31e39d1954.png" },
  { name: "Homes by AVI", logo: "/lovable-uploads/7524530b-4e9d-4a6f-9b38-3606a9374006.png" },
  { name: "Parkwood Master Builder", logo: "/lovable-uploads/1a853731-dd2b-4f87-ab58-4b7dcf683ddb.png" },
];

const HeroSection = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const images = [
    "/hero-images/hero-1.jpg",
    "/hero-images/hero-2.jpg", 
    "/hero-images/hero-3.png",
    "/hero-images/hero-5.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () =>
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // === Typewriter headline ===
  const headlineWords = ["Framing", "Precision", "Deadlines", "Quality", "Framing"];
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
    <section
      id="hero"
      className="section-surface relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24 pb-16 lg:pb-20"
      style={{ backgroundColor: "hsl(var(--section-primary))" }}
      data-grid-opacity="0.06"
    >
      {/* ===== Blueprint Background (subtle) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Paper tint + vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 20%, rgba(2,6,23,0.04), transparent 60%)",
          }}
        />
        {/* Grid layers using new system */}
        <div className="grid-layer grid-layer-fine" />
        <div className="grid-layer grid-layer-bold" />
        {/* Ultra-faint blueprint cues */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
                <g stroke='#1F2937' stroke-width='1' fill='none' stroke-opacity='0.8'>
                  <line x1='200' y1='620' x2='1000' y2='620' stroke-dasharray='6 10'/>
                  <path d='M200 620 l14 -8 v16 z' />
                  <path d='M1000 620 l-14 -8 v16 z' />
                  <line x1='420' y1='380' x2='470' y2='380' />
                  <line x1='445' y1='355' x2='445' y2='405' />
                </g>
              </svg>
            `)}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 65%",
            backgroundSize: "1200px 800px",
          }}
        />
      </div>
      {/* ===== /Blueprint Background ===== */}

      {/* ===== Soft bottom fade-out (seamless handoff) ===== */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[15vh] z-10 bg-gradient-to-b from-transparent to-white" />

      {/* Mobile Background Slideshow */}
      <div className="lg:hidden absolute inset-0 z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 80%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 80%)"
            }}
          >
            <img 
              src={image} 
              alt="Construction project showcase" 
              className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-slate-100 animate-mobileHeroFadeIn"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-20 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-16 min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-7rem)] pt-6 lg:pt-6">
          {/* Text (staggered reveal animation) */}
          <div className="w-full lg:w-[55%] text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            {/* Typewriter headline */}
            <h1 className="mb-6 lg:mb-10 font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-[#1F2937] animate-slideUpStagger motion-reduce:animate-none" style={{ animationDelay: '0.3s', textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <span className="relative text-construction-green inline-block min-w-[160px] sm:min-w-[200px] lg:min-w-[480px]" aria-live="polite" aria-atomic="true">
                <span className="relative">
                  {typed}
                  {(phase === "initialPause" || phase === "typing" || phase === "deleting") && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-0 bottom-0 border-r-2 border-construction-green animate-caret motion-reduce:animate-none"
                      style={{ left: '100%' }}
                    />
                  )}
                </span>
              </span>{" "}
              you can rely on
            </h1>

            <p className="text-base lg:text-2xl mb-6 lg:mb-8 text-construction-gray leading-relaxed max-w-prose mx-auto lg:mx-0 animate-slideUpStagger motion-reduce:animate-none" style={{ animationDelay: '0.5s' }}>
              Specialists in residential framing — delivering precision, deadlines, and quality you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-10 justify-center lg:justify-start animate-slideUpStagger motion-reduce:animate-none" style={{ animationDelay: '0.7s' }}>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base font-semibold min-h-[44px]"
                onClick={() => setQuoteModalOpen(true)}
              >
                Get Quote
              </Button>
              <Button variant="outline" size="lg" className="text-base font-semibold min-h-[44px]">
                Contact Us
              </Button>
            </div>

            <div className="flex flex-col gap-3 lg:gap-4 mb-4 lg:mb-8 justify-center lg:justify-start animate-slideUpStagger motion-reduce:animate-none" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-construction-green rounded-full mr-3" />
                <span className="font-medium text-sm lg:text-base">500+ Projects Completed</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-construction-green rounded-full mr-3" />
                <span className="font-medium text-sm lg:text-base">15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-construction-green rounded-full mr-3" />
                <span className="font-medium text-sm lg:text-base">100% On Schedule</span>
              </div>
            </div>
          </div>

          {/* Desktop Image Carousel with Crane Animation */}
          <div className="hidden lg:block w-full max-w-md sm:max-w-lg lg:max-w-xl lg:w-1/2 mx-auto relative animate-imageDrop mb-12 lg:mb-0">
            {/* Desktop - with crane animation */}
            <div className="relative w-full aspect-[4/5] z-[60] will-change-transform"
              style={{
                ["--swing-angle" as any]: "3.2deg",
                ["--swing-lift" as any]: "3px",
                ["--swing-duration" as any]: "4.2s",
                animation: "pendulum var(--swing-duration) infinite",
                transformOrigin: "top center",
              } as React.CSSProperties}
            >
              {/* Crooked → straight on hover */}
              <div className="relative w-full h-full rotate-2 sm:rotate-3 hover:rotate-0 transition-transform duration-500 transform-gpu">
                {/* Cable (static) */}
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

                {/* Lifting bar */}
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
                        <img src={image} alt="Construction project showcase" className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-slate-100" />
                      </div>
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-construction-green/10 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20" />

                    <button
                      className="absolute top-4 right-4 z-30 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-125 hover:shadow-pink-500/30 hover:rotate-12"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://instagram.com", "_blank");
                      }}
                      aria-label="Open Instagram"
                    >
                      <Instagram size={24} strokeWidth={2.5} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30" role="tablist" aria-label="Hero image pagination">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            index === currentImageIndex
                              ? "bg-construction-green shadow-lg scale-125"
                              : "bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                          aria-selected={index === currentImageIndex}
                          role="tab"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end content wrapper */}

      {/* ===== Anchored "Trusted by" band (inside Hero bottom) ===== */}
      <div className="absolute inset-x-0 bottom-0 z-30 bg-white/70 backdrop-blur-md border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 py-3 lg:py-5">
          <div className="text-center mb-4 lg:mb-6">
            <h3 className="text-sm lg:text-xl xl:text-2xl font-semibold text-construction-gray">
              Trusted by Alberta&apos;s Top Builders
            </h3>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 items-center justify-items-center justify-center max-w-4xl mx-auto" aria-label="Trusted by logos">
            {LOGOS.map((client, index) => (
              <div
                key={client.name}
                className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-2 lg:p-3"
                style={{ width: '100px', height: '40px', minWidth: '100px' }}
                aria-label={client.name}
              >
                <img
                  src={client.logo}
                  alt={`Client: ${client.name}`}
                  className="max-h-6 lg:max-h-10 max-w-[80px] lg:max-w-[120px] w-auto opacity-60 hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0 transform-gpu object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ===== /Anchored "Trusted by" ===== */}

      {/* Keyframes for pendulum + caret + modern staggered entrance */}
      <style>{`
        /* Modern staggered slide-up entrance */
        @keyframes slideUpStagger {
          0% { 
            opacity: 0; 
            transform: translateY(24px) scale(0.98);
            filter: blur(2px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        .animate-slideUpStagger {
          animation: slideUpStagger 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        /* Pendulum */
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

        /* Caret blink */
        @keyframes caret {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        /* Mobile hero image entrance animation */
        @keyframes mobileHeroFadeIn {
          0% { 
            opacity: 0; 
            transform: scale(1.1);
          }
          100% { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        .animate-mobileHeroFadeIn {
          animation: mobileHeroFadeIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .animate-caret { animation: caret 1s step-end infinite; }

        /* One-time drop animation for Hero image wrapper */
        @keyframes imageDrop {
          0% { transform: translateY(-56px); opacity: 0.8; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-imageDrop { animation: imageDrop 800ms ease-out both; }

        /* Seamless infinite marquee:
           Track width is 2x the single sequence. Moving -50% aligns sequence #2 with the container start.
        */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-slideUpStagger { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; }
          .animate-imageDrop { animation: none !important; opacity: 1 !important; transform: none !important; }
          .swingGroup { animation: none !important; }
          .animate-caret { animation: none !important; }
          .animate-marquee { animation: none !important; }
        }
      `}</style>
      
      <QuoteModal 
        open={quoteModalOpen} 
        onOpenChange={setQuoteModalOpen} 
      />
    </section>
  );
};

export default HeroSection;