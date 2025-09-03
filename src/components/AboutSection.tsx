const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      {/* ===== Page fold / shadow to separate from Hero ===== */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 z-20 bg-gradient-to-b from-black/[0.08] to-transparent" />

      {/* ===== Blueprint background (grid + scribbles) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(31,41,55,0.03) 0,
                rgba(31,41,55,0.03) 1px,
                transparent 1px,
                transparent 32px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(31,41,55,0.03) 0,
                rgba(31,41,55,0.03) 1px,
                transparent 1px,
                transparent 32px
              )
            `,
          }}
        />
        {/* Bold grid every ~160px */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(31,41,55,0.025) 0,
                rgba(31,41,55,0.025) 1.5px,
                transparent 1.5px,
                transparent 160px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(31,41,55,0.025) 0,
                rgba(31,41,55,0.025) 1.5px,
                transparent 1.5px,
                transparent 160px
              )
            `,
          }}
        />
        {/* Faint blueprint scribbles/dimensions */}
        <svg
          className="absolute inset-0 opacity-[0.03]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <g stroke="#1F2937" strokeWidth="1" fill="none">
            <line x1="220" y1="620" x2="980" y2="620" strokeDasharray="6 10" />
            <path d="M220 620 l14 -8 v16 z" />
            <path d="M980 620 l-14 -8 v16 z" />
            <line x1="420" y1="360" x2="470" y2="360" />
            <line x1="445" y1="335" x2="445" y2="385" />
          </g>
        </svg>
      </div>

      {/* ===== Floorplate wrapper (one “level” that contains image + text) ===== */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="relative rounded-[28px] p-8 sm:p-10 lg:p-12">
          {/* Floorplan “walls” (one continuous outline that curves around both blocks) */}
          <svg
            className="pointer-events-none absolute inset-0 z-0"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <defs>
              {/* faint inner glow to sell blueprint ink */}
              <filter id="bp-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Single continuous “wall” path:
                - wraps left block (image), S-curves through a hallway,
                - wraps right block (text)
                The coordinates are in viewBox units so the path scales responsively. */}
            <path
              d="
                M 110 120
                Q 110 100 130 100
                L 470 100
                Q 510 100 530 130
                C 545 150 555 160 580 160
                L 880 160
                Q 900 160 900 180
                L 900 500
                Q 900 520 880 520
                L 600 520
                Q 565 520 540 490
                C 525 472 510 460 480 460
                L 130 460
                Q 110 460 110 440
                Z
              "
              fill="none"
              stroke="#1F2937"
              strokeOpacity="0.22"
              strokeWidth="2.2"
              strokeDasharray="12 14"
              filter="url(#bp-glow)"
            />

            {/* Corner ticks (tiny) */}
            <g stroke="#1F2937" strokeOpacity="0.25" strokeWidth="2">
              {/* near top-left */}
              <line x1="120" y1="118" x2="140" y2="118" />
              <line x1="112" y1="128" x2="112" y2="148" />
              {/* near bottom-left */}
              <line x1="120" y1="442" x2="140" y2="442" />
              <line x1="112" y1="432" x2="112" y2="412" />
              {/* near top-right */}
              <line x1="880" y1="168" x2="900" y2="168" />
              <line x1="892" y1="160" x2="892" y2="180" />
              {/* near bottom-right */}
              <line x1="880" y1="512" x2="900" y2="512" />
              <line x1="892" y1="504" x2="892" y2="484" />
            </g>
          </svg>

          {/* Two “rooms” on this level */}
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
            {/* Left room: image block */}
            <div className="relative">
              <img
                src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png"
                alt="House construction framing"
                className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
              />
            </div>

            {/* Right room: text block */}
            <div className="relative">
              <div className="inline-block bg-construction-green/10 px-4 py-2 rounded-full mb-6 backdrop-blur-[1px]">
                <span className="text-construction-green font-semibold text-sm uppercase tracking-wider">
                  About WhyteHorse
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-8 leading-tight">
                Framing Excellence
                <br />
                <span className="text-construction-green">Built to Last</span>
              </h2>

              <div className="space-y-6 text-lg text-construction-gray leading-relaxed">
                <p>
                  Framing isn't just one of many services — it's all we do. Our
                  crews are dedicated specialists who ensure every project starts
                  strong, stays on schedule, and meets the highest standards of
                  quality.
                </p>
                <p>
                  With years of experience in residential construction across
                  Alberta, we understand that proper framing is the foundation of
                  every successful build. That's why builders trust us to deliver
                  structural integrity that stands the test of time.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 p-8 bg-gradient-to-br from-construction-light to-construction-white rounded-2xl border border-construction-light">
                <div className="text-center">
                  <div className="text-4xl font-bold text-construction-green mb-2">500+</div>
                  <div className="text-sm text-construction-gray font-medium">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-construction-green mb-2">15+</div>
                  <div className="text-sm text-construction-gray font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-construction-green mb-2">100%</div>
                  <div className="text-sm text-construction-gray font-medium">On Schedule</div>
                </div>
              </div>
            </div>
          </div>
          {/* /rooms */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
