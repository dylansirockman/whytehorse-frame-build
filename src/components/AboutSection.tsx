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

      {/* ===== Fold effect ===== */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-12 h-12 bg-white shadow-lg -rotate-45 origin-top-right z-10" />

      {/* ===== Content ===== */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="grid gap-12 items-center lg:grid-cols-[1fr_1.4fr]">
          {/* === Image column with blueprint outline === */}
          <div className="relative">
            {/* Outline frame */}
            <div className="relative rounded-2xl p-4 border-2 border-dashed border-construction-dark/10">
              {/* inner faint line */}
              <div className="pointer-events-none absolute inset-2 rounded-xl border border-construction-dark/10" />
              {/* corner ticks */}
              <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -top-2 right-6 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -right-2 top-6 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -bottom-2 left-6 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -left-2 bottom-6 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -bottom-2 right-6 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -right-2 bottom-6 h-px w-4 bg-construction-dark/15" />
              {/* content */}
              <img
                src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png"
                alt="House construction framing"
                className="relative w-full rounded-xl shadow-[var(--shadow-premium)]"
              />
            </div>
          </div>

          {/* === Text column with blueprint outline (wider on desktop) === */}
          <div className="relative">
            <div className="relative rounded-2xl p-6 border-2 border-dashed border-construction-dark/10">
              {/* inner faint line */}
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-construction-dark/10" />
              {/* corner ticks */}
              <div className="pointer-events-none absolute -top-2 left-8 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -left-2 top-8 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -top-2 right-8 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -right-2 top-8 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -bottom-2 left-8 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -left-2 bottom-8 h-px w-4 bg-construction-dark/15" />
              <div className="pointer-events-none absolute -bottom-2 right-8 h-4 w-px bg-construction-dark/15" />
              <div className="pointer-events-none absolute -right-2 bottom-8 h-px w-4 bg-construction-dark/15" />

              {/* tag */}
              <div className="inline-block bg-construction-green/10 px-4 py-2 rounded-full mb-6">
                <span className="text-construction-green font-semibold text-sm uppercase tracking-wider">
                  About WhyteHorse
                </span>
              </div>

              {/* heading */}
              <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-8 leading-tight">
                Framing Excellence
                <br />
                <span className="text-construction-green">Built to Last</span>
              </h2>

              {/* body */}
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

              {/* stats card */}
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
          {/* === /Text column === */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
