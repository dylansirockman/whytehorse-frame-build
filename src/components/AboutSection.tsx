const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      {/* ===== Page fold / shadow (separates from Hero) ===== */}
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
        <svg className="absolute inset-0 opacity-[0.03]" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <g stroke="#1F2937" strokeWidth="1" fill="none">
            <line x1="220" y1="620" x2="980" y2="620" strokeDasharray="6 10" />
            <path d="M220 620 l14 -8 v16 z" />
            <path d="M980 620 l-14 -8 v16 z" />
            <line x1="420" y1="360" x2="470" y2="360" />
            <line x1="445" y1="335" x2="445" y2="385" />
          </g>
        </svg>
      </div>

      {/* ===== Floorplate wrapper (one “level” for image + text) ===== */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="relative rounded-[28px]">
          {/* --- Blueprint “walls” (rect + rect + hallway curve) --- */}
          <svg
            className="pointer-events-none absolute inset-0 z-0"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="bp-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/*
              ─────────── HOW TO TUNE (if you need to nudge) ───────────
              These numbers assume a typical container width. If your layout
              shifts, tweak the x/y/width/height of the two rects below.
              Left rect wraps the IMAGE. Right rect wraps the TEXT.
            */}

            {/* Left “room” around IMAGE */}
            <rect
              x="70" y="220" width="520" height="260" rx="26" ry="26"
              fill="none"
              stroke="#1F2937"
              strokeOpacity="0.22"
              strokeWidth="2.2"
              strokeDasharray="12 14"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#bp-glow)"
            />

            {/* Right “room” around TEXT */}
            <rect
              x="600" y="115" width="330" height="420" rx="26" ry="26"
              fill="none"
              stroke="#1F2937"
              strokeOpacity="0.22"
              strokeWidth="2.2"
              strokeDasharray="12 14"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#bp-glow)"
            />

            {/* Curved hallway connecting rooms (top-left of right room to top-right of left room) */}
            <path
              d="
                M 600 180
                C 560 180, 535 170, 520 170
                S 480 190, 450 200
                C 420 210, 370 210, 330 210
                "
              fill="none"
              stroke="#1F2937"
              strokeOpacity="0.22"
              strokeWidth="2.2"
              strokeDasharray="12 14"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#bp-glow)"
            />

            {/* Lower hallway pass (bottom-right of left room toward right room’s stat block) */}
            <path
              d="
                M 590 430
                C 560 440, 540 445, 520 445
                S 480 440, 460 438
              "
              fill="none"
              stroke="#1F2937"
              strokeOpacity="0.22"
              strokeWidth="2.2"
              strokeDasharray="12 14"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#bp-glow)"
            />
          </svg>

          {/* Two blocks laid out inside the “level” */}
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
            {/* Left: Image */}
            <div className="relative">
              <img
                src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png"
                alt="House construction framing"
                className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
              />
            </div>

            {/* Right: Text */}
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
          {/* /grid */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
