import { useState, useEffect, useRef } from "react";
import BlueprintPillHeader from './BlueprintPillHeader';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-surface relative py-24 lg:py-32 overflow-hidden bg-white"
      data-grid-opacity="0.05"
      data-rugged="true"
    >
      {/* ===== Blueprint background (z-0) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="grid-layer grid-layer-fine" />
        <div className="grid-layer grid-layer-bold" />
        <svg
          className="absolute inset-0 opacity-[0.03] z-[3]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <g stroke="#1F2937" strokeWidth="1" fill="none">
            <line x1="200" y1="600" x2="1000" y2="600" strokeDasharray="6 10" />
            <path d="M200 600 l14 -8 v16 z" />
            <path d="M1000 600 l-14 -8 v16 z" />
            <line x1="420" y1="380" x2="470" y2="380" />
            <line x1="445" y1="355" x2="445" y2="405" />
          </g>
        </svg>
        <div
          className="absolute inset-0 z-[3]"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 20%, rgba(2,6,23,0.025), transparent 60%)",
          }}
        />
      </div>

      {/* ===== Fold effects ===== */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/10 to-transparent z-10" />

      {/* ===== Content ===== */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="grid gap-8 lg:gap-12 items-center lg:grid-cols-[1fr_1.2fr]">
          {/* === Image column with blueprint outline === */}
          <div
            className={`relative order-first lg:order-none transition-all duration-1000 ease-out motion-reduce:transition-none ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3 motion-reduce:translate-x-0"
            }`}
          >
            <div className="relative rounded-2xl p-4 border-2 border-solid border-construction-dark/15">
              <div className="pointer-events-none absolute inset-2 rounded-xl border border-dashed border-construction-dark/8" />
              {/* corner ticks */}
              <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -top-2 right-6 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -right-2 top-6 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -bottom-2 left-6 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -left-2 bottom-6 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -bottom-2 right-6 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -right-2 bottom-6 h-px w-4 bg-construction-dark/15" />

              {/* content — Split-reveal hover gallery */}
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-premium)]">
                <div className="wh-gallery w-full">
                  {/* Primary image (top-left triangle) */}
                  <img
                    src="/lovable-uploads/dde69cfb-06eb-450b-ad49-7b8400c583e8.png"
                    alt="House construction site with framing and equipment"
                    loading="lazy"
                  />
                  {/* Secondary image (bottom-right triangle) */}
                  <img
                    src="/lovable-uploads/42d53fb7-1475-4233-ab00-71614ca9c3ea.png"
                    alt="Custom home with mixed siding materials near completion"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* === Text column === */}
          <div className="relative">
            {/* tag */}
            <div
              className={`flex justify-center lg:justify-start mb-6 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-4 blur-sm"
              }`}
              style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
            >
              <BlueprintPillHeader index="1" title="Company Profile" metaRight="Est. 2019" as="div" />
            </div>

            {/* heading */}
            <h2
              className={`text-3xl lg:text-6xl font-bold text-construction-dark mb-6 lg:mb-8 leading-tight transition-all duration-800 ease-out motion-reduce:transition-none ${
                isVisible
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-3 blur-sm motion-reduce:translate-y-0 motion-reduce:blur-0"
              }`}
              style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
            >
              Framing Excellence
              <br />
              <span className="text-construction-green">Built to Last</span>
            </h2>

            {/* body */}
            <div
              className={`space-y-4 lg:space-y-6 text-base lg:text-lg text-construction-gray leading-relaxed max-w-prose transition-all duration-900 ease-out motion-reduce:transition-none ${
                isVisible
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-2 blur-sm motion-reduce:translate-y-0 motion-reduce:blur-0"
              }`}
              style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
            >
              <p>
                Framing isn't just one of many services — it's all we do. Our crews are dedicated
                specialists who ensure every project starts strong, stays on schedule, and meets the
                highest standards of quality.
              </p>
              <p>
                With years of experience in residential construction across Alberta, we understand
                that proper framing is the foundation of every successful build. That's why builders
                trust us to deliver structural integrity that stands the test of time.
              </p>
            </div>

            {/* Stats card */}
            <div
              className={`relative mt-8 lg:mt-12 grid grid-cols-3 divide-x divide-construction-dark/10 rounded-xl border border-dashed border-construction-dark/15 bg-white/70 backdrop-blur-sm shadow-[var(--shadow-premium)] transition-all duration-1000 ease-out motion-reduce:transition-none ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100 blur-0"
                  : "opacity-0 translate-y-3 scale-95 blur-sm motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:blur-0"
              }`}
              style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
            >
              <div className="flex flex-col items-center justify-center p-4 lg:p-6">
                <div className="text-2xl lg:text-4xl font-bold text-construction-green mb-1 tracking-tight">
                  500+
                </div>
                <div className="text-[11px] lg:text-xs uppercase tracking-wider text-construction-gray">
                  Projects
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 lg:p-6">
                <div className="text-2xl lg:text-4xl font-bold text-construction-green mb-1 tracking-tight">
                  15+
                </div>
                <div className="text-[11px] lg:text-xs uppercase tracking-wider text-construction-gray">
                  Years
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 lg:p-6">
                <div className="text-2xl lg:text-4xl font-bold text-construction-green mb-1 tracking-tight">
                  100%
                </div>
                <div className="text-[11px] lg:text-xs uppercase tracking-wider text-construction-gray">
                  On Schedule
                </div>
              </div>
            </div>
          </div>
          {/* === /Text column === */}
        </div>
      </div>

      {/* Component-scoped CSS for the split-reveal gallery */}
      <style>{`
        .wh-gallery {
          --g: 8px; /* gap/overlap along the diagonal */
          --size-w: 100%;
          display: grid;
          grid-template-areas: "stack";
          width: var(--size-w);
          aspect-ratio: 4 / 3;
          clip-path: inset(1px); /* avoid hairline gaps on edges */
          cursor: pointer;
        }
        .wh-gallery > img {
          --_p: calc(-1 * var(--g));
          grid-area: stack;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s .05s, clip-path .4s .05s, filter .2s;
          will-change: clip-path, transform;
        }
        .wh-gallery > img:first-child {
          /* top-left triangle */
          clip-path: polygon(0 0, calc(100% + var(--_p)) 0, 0 calc(100% + var(--_p)));
        }
        .wh-gallery > img:last-child {
          /* bottom-right triangle */
          clip-path: polygon(100% 100%, 100% calc(0% - var(--_p)), calc(0% - var(--_p)) 100%);
        }
        /* On hover, push triangles apart for reveal */
        .wh-gallery:hover > img:last-child,
        .wh-gallery:hover > img:first-child:hover {
          --_p: calc(50% - var(--g));
        }
        .wh-gallery:hover > img:first-child,
        .wh-gallery:hover > img:first-child:hover + img {
          --_p: calc(-50% - var(--g));
        }
        /* Optional tiny lift on hover for a bit of pop */
        .wh-gallery:hover > img { transform: translateY(-0.5px); }
        @media (prefers-reduced-motion: reduce) {
          .wh-gallery > img { transition: none; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
