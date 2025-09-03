const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      {/* ===== Page fold / shadow (separates from Hero) ===== */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 z-30 bg-gradient-to-b from-black/10 to-transparent" />

      {/* ===== Blueprint background ===== */}
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
                rgba(31,41,55,0.022) 0,
                rgba(31,41,55,0.022) 1.5px,
                transparent 1.5px,
                transparent 160px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(31,41,55,0.022) 0,
                rgba(31,41,55,0.022) 1.5px,
                transparent 1.5px,
                transparent 160px
              )
            `,
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 20%, rgba(2,6,23,0.025), transparent 60%)",
          }}
        />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* ---------- LEFT: IMAGE BLOCK (own walls) ---------- */}
          <div className="relative">
            {/* Walls tied to this block so alignment survives responsive changes */}
            <div className="pointer-events-none absolute -inset-5 md:-inset-6 xl:-inset-8 rounded-[28px] border-2 border-dashed border-[rgba(31,41,55,0.38)]" />
            {/* Small “openings” to feel like curved walls */}
            <div className="pointer-events-none absolute -inset-5 md:-inset-6 xl:-inset-8 rounded-[28px]">
              {/* top-left notch */}
              <div className="absolute -top-2 left-10 h-6 w-12 bg-white" />
              {/* inner-right notch (toward the text block) */}
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 h-12 w-6 bg-white" />
              {/* bottom-left notch */}
              <div className="absolute -bottom-2 left-1/4 h-6 w-14 bg-white" />
            </div>

            <img
              src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png"
              alt="House construction framing"
              className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
            />
          </div>

          {/* ---------- RIGHT: TEXT BLOCK (own walls) ---------- */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-5 md:-inset-6 xl:-inset-8 rounded-[28px] border-2 border-dashed border-[rgba(31,41,55,0.38)]" />
            <div className="pointer-events-none absolute -inset-5 md:-inset-6 xl:-inset-8 rounded-[28px]">
              {/* top-right notch */}
              <div className="absolute -top-2 right-8 h-6 w-12 bg-white" />
              {/* inner-left vertical notch (toward the image) */}
              <div className="absolute top-[18%] -left-2 h-14 w-6 bg-white" />
              {/* bottom run opening */}
              <div className="absolute -bottom-2 left-1/3 h-6 w-16 bg-white" />
            </div>

            {/* Content */}
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

        {/* ---------- Connector curve (positioned to the gap, scaled responsively) ---------- */}
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -z-[1]"
            viewBox="0 0 1000 420"
            preserveAspectRatio="none"
            style={{
              width: "min(1000px, 92vw)",
              height: 420,
              top: 80, // positions the curve between the image and headline
            }}
          >
            {/* curved dashed path that arcs from image → text */}
            <path
              d="
                M 320 280
                C 420 280, 520 240, 560 190
                S 700 110, 720 120
              "
              fill="none"
              stroke="#1F2937"
              strokeOpacity="0.36"
              strokeWidth="3"
              strokeDasharray="12 14"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
