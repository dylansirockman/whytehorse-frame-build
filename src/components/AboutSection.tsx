const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      {/* ===== Page fold / shadow to separate from Hero ===== */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 z-30 bg-gradient-to-b from-black/10 to-transparent" />

      {/* ===== Blueprint background (grid + faint scribbles) ===== */}
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
        {/* Bold grid */}
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
        {/* Light “paper” vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 20%, rgba(2,6,23,0.025), transparent 60%)",
          }}
        />
      </div>

      {/* ===== Content level (image + text act as one floor level) ===== */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* ---------- LEFT: IMAGE BLOCK with its own “walls” ---------- */}
          <div className="relative">
            {/* Blueprint walls for IMAGE (always aligned to this block) */}
            <div className="pointer-events-none absolute -inset-6 lg:-inset-8 rounded-3xl border-2 border-dashed border-[rgba(31,41,55,0.35)]" />
            {/* small “openings” (breaks) at corners via overlay masks */}
            <div className="pointer-events-none absolute -inset-6 lg:-inset-8 rounded-3xl">
              <div className="absolute -top-2 left-6 h-6 w-10 bg-white" />
              <div className="absolute -left-2 top-6 h-10 w-6 bg-white" />
              <div className="absolute -bottom-2 right-10 h-6 w-10 bg-white" />
            </div>

            <img
              src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png"
              alt="House construction framing"
              className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
            />
          </div>

          {/* ---------- RIGHT: TEXT BLOCK with its own “walls” ---------- */}
          <div className="relative">
            {/* Blueprint walls for TEXT */}
            <div className="pointer-events-none absolute -inset-6 lg:-inset-8 rounded-3xl border-2 border-dashed border-[rgba(31,41,55,0.35)]" />
            {/* openings on different sides so it looks like curving around both blocks */}
            <div className="pointer-events-none absolute -inset-6 lg:-inset-8 rounded-3xl">
              <div className="absolute -top-2 right-8 h-6 w-12 bg-white" />
              <div className="absolute -right-2 top-1/3 h-12 w-6 bg-white" />
              <div className="absolute -bottom-2 left-1/4 h-6 w-14 bg-white" />
            </div>

            {/* Kicker */}
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

            {/* Stats card */}
            <div className="grid grid-cols-3 gap-8 mt-12 p-8 bg-gradient-to-br from-construction-light to-construction-white rounded-2xl border border-construction-light shadow-[var(--shadow-card)]">
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

        {/* ---------- Connector curve between blocks (faint, responsive) ---------- */}
        <svg
          className="pointer-events-none absolute left-0 right-0 mx-auto -z-[1]"
          style={{ insetBlockStart: "8rem", width: "min(1100px, 92vw)", height: "420px" }}
          viewBox="0 0 1100 420"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 720 30
              C 620 30, 560 55, 520 95
              S 420 170, 350 170
              C 260 170, 210 210, 210 260
              S 240 350, 330 360
            "
            fill="none"
            stroke="#1F2937"
            strokeOpacity="0.28"
            strokeWidth="3"
            strokeDasharray="12 14"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
