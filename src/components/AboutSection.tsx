const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      {/* ===== Blueprint background (z-0) ===== */}
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
            <line x1="200" y1="600" x2="1000" y2="600" strokeDasharray="6 10" />
            <path d="M200 600 l14 -8 v16 z" />
            <path d="M1000 600 l-14 -8 v16 z" />
            <line x1="420" y1="380" x2="470" y2="380" />
            <line x1="445" y1="355" x2="445" y2="405" />
          </g>
        </svg>
        {/* Soft paper vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 20%, rgba(2,6,23,0.025), transparent 60%)",
          }}
        />
      </div>
      {/* ===== /Blueprint background ===== */}

      <div className="relative z-20 container mx-auto px-6">
        {/* ===== Unified floorplan “level” wrapper around BOTH image + text ===== */}
        <div className="relative rounded-3xl bg-white/70 backdrop-blur-[1px] p-6 sm:p-8 lg:p-12 shadow-[var(--shadow-card)]">
          {/* Floorplan outline overlay (HTML/CSS, not SVG calc) */}
          <div className="pointer-events-none absolute inset-0">
            {/* Outer dashed frame */}
            <div className="absolute inset-2 rounded-[22px] border border-[rgba(31,41,55,0.35)] border-dashed" />
            {/* Inner faint inset */}
            <div className="absolute inset-5 rounded-[18px] border border-[rgba(31,41,55,0.15)]" />

            {/* Corner ticks */}
            {/* TL */}
            <div className="absolute left-6 top-10 h-[2px] w-12 bg-[rgba(31,41,55,0.35)]" />
            <div className="absolute left-10 top-6 w-[2px] h-12 bg-[rgba(31,41,55,0.35)]" />
            {/* TR */}
            <div className="absolute right-6 top-10 h-[2px] w-12 bg-[rgba(31,41,55,0.35)]" />
            <div className="absolute right-10 top-6 w-[2px] h-12 bg-[rgba(31,41,55,0.35)]" />
            {/* BL */}
            <div className="absolute left-6 bottom-10 h-[2px] w-12 bg-[rgba(31,41,55,0.35)]" />
            <div className="absolute left-10 bottom-6 w-[2px] h-12 bg-[rgba(31,41,55,0.35)]" />
            {/* BR */}
            <div className="absolute right-6 bottom-10 h-[2px] w-12 bg-[rgba(31,41,55,0.35)]" />
            <div className="absolute right-10 bottom-6 w-[2px] h-12 bg-[rgba(31,41,55,0.35)]" />

            {/* Label */}
            <div className="absolute left-7 top-[10px] text-[11px] tracking-widest text-[rgba(31,41,55,0.55)] font-mono select-none">
              LEVEL A — ABOUT
            </div>
          </div>

          {/* Actual 2-col content inside the unified “level” */}
          <div className="grid gap-12 lg:gap-16 items-center lg:[grid-template-columns:0.9fr_1.1fr]">
            {/* Image zone */}
            <div className="relative">
              {/* subtle inner outline to echo floorplan zoning */}
              <div className="absolute -inset-3 rounded-2xl border border-[rgba(31,41,55,0.08)]" />
              <img
                src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png"
                alt="House construction framing"
                className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
              />
            </div>

            {/* Text zone (wider on lg+) */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-[rgba(31,41,55,0.08)]" />
              <div className="relative">
                <div className="inline-block bg-construction-green/10 px-4 py-2 rounded-full mb-6">
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
                    <div className="text-4xl font-bold text-construction-green mb-2">
                      500+
                    </div>
                    <div className="text-sm text-construction-gray font-medium">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-construction-green mb-2">
                      15+
                    </div>
                    <div className="text-sm text-construction-gray font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-construction-green mb-2">
                      100%
                    </div>
                    <div className="text-sm text-construction-gray font-medium">
                      On Schedule
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Text */}
          </div>
        </div>
        {/* /Unified floorplan wrapper */}
      </div>
    </section>
  );
};

export default AboutSection;
