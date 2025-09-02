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
                rgba(31,41,55,0.08) 0,
                rgba(31,41,55,0.08) 1px,
                transparent 1px,
                transparent 32px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(31,41,55,0.08) 0,
                rgba(31,41,55,0.08) 1px,
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
                rgba(31,41,55,0.06) 0,
                rgba(31,41,55,0.06) 1.5px,
                transparent 1.5px,
                transparent 160px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(31,41,55,0.06) 0,
                rgba(31,41,55,0.06) 1.5px,
                transparent 1.5px,
                transparent 160px
              )
            `,
          }}
        />
        {/* Faint blueprint scribbles/dimensions */}
        <svg
          className="absolute inset-0 opacity-[0.05]"
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
              "radial-gradient(1200px 600px at 50% 20%, rgba(2,6,23,0.04), transparent 60%)",
          }}
        />
      </div>

      {/* ===== Paper fold (dog-ear + seam) at the top (z-5) ===== */}
      {/* Seam line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-construction-dark/10 z-[5]" />
      {/* Subtle shadow under the seam for separation from Hero */}
      <div
        className="absolute top-0 left-0 right-0 h-10 z-[4] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.035) 6%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Dog-ear (top-right) — inline clipPath for reliability */}
      <div className="absolute top-0 right-0 w-24 h-24 z-[6] pointer-events-none">
        <div
          className="w-full h-full border border-construction-dark/10"
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(241,245,249,0.9) 100%)",
            boxShadow:
              "0 14px 30px -16px rgba(0,0,0,0.28), inset 0 -8px 10px -10px rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* ===== Content (z-10) ===== */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-construction-green/5 rounded-2xl" />
            <img
              src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png"
              alt="House construction framing"
              className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
            />
          </div>

          <div>
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

            <div className="grid grid-cols-3 gap-8 mt-12 p-8 bg-white/85 backdrop-blur-sm rounded-2xl border border-construction-light shadow-[var(--shadow-card)]">
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
      </div>
    </section>
  );
};

export default AboutSection;
