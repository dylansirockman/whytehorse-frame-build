const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-offset-header relative overflow-hidden bg-white"
    >
      {/* Paper fold from the Hero -> About transition */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-12 -translate-y-1"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="foldShade" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
              <stop offset="60%" stopColor="rgba(0,0,0,0.03)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>
          </defs>
          {/* Curved crease */}
          <path d="M0,0 L1440,0 L1440,48 C1080,96 360,96 0,48 Z" fill="url(#foldShade)" />
        </svg>
      </div>

      {/* Blueprint background layers (very subtle) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* soft vignette/tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 500px at 50% 18%, rgba(2,6,23,0.035), transparent 60%)",
          }}
        />
        {/* fine grid (32px) */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
                <path d='M 32 0 H 0 V 32' fill='none' stroke='#1F2937' stroke-opacity='0.9' stroke-width='1' stroke-linecap='round'/>
              </svg>
            `)}")`,
            backgroundRepeat: "repeat",
          }}
        />
        {/* bold grid (every 5 cells = 160px) */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
                <path d='M 160 0 H 0 V 160' fill='none' stroke='#1F2937' stroke-opacity='0.6' stroke-width='1.5' stroke-linecap='round'/>
              </svg>
            `)}")`,
            backgroundRepeat: "repeat",
          }}
        />
        {/* faint scribbles / dimension cues */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
                <g stroke='#1F2937' stroke-width='2' fill='none' stroke-opacity='0.6'>
                  <path d='M180 220 q40 -18 80 0 q40 18 80 0' stroke-dasharray='3 10'/>
                  <path d='M260 220 v-36 m-8 0 h16' stroke-opacity='0.35'/>
                  <path d='M860 520 h180 m-90 -24 v48' stroke-dasharray='6 12'/>
                  <path d='M420 380 h50 m-25 -25 v50' />
                  <text x='930' y='540' font-family='Poppins, sans-serif' font-size='20' fill='#1F2937' fill-opacity='0.25'>section A</text>
                </g>
              </svg>
            `)}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 62%",
            backgroundSize: "1200px 800px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image block */}
          <div className="relative">
            {/* subtle paper highlight behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-white/70 backdrop-blur-[1px] border border-black/5 shadow-[var(--shadow-card)]" />
            <img
              src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png"
              alt="House construction framing"
              className="relative w-full rounded-2xl shadow-[var(--shadow-premium)] border border-black/5"
            />
            {/* tiny drafting tick marks */}
            <div className="absolute -bottom-3 left-8 h-6 w-px bg-black/10" />
            <div className="absolute -bottom-3 left-12 h-4 w-px bg-black/10" />
            <div className="absolute -bottom-3 left-16 h-6 w-px bg-black/10" />
          </div>

          {/* Copy block */}
          <div>
            <div className="inline-block bg-construction-green/10 px-4 py-2 rounded-full mb-6 border border-construction-green/20">
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
                Framing isn&apos;t just one of many services — it&apos;s all we do. Our crews are dedicated specialists who ensure every project starts strong, stays on schedule, and meets the highest standards of quality.
              </p>
              <p>
                With years of experience in residential construction across Alberta, we understand that proper framing is the foundation of every successful build. That&apos;s why builders trust us to deliver structural integrity that stands the test of time.
              </p>
            </div>

            {/* Stats card with blueprint dividers */}
            <div className="grid grid-cols-3 gap-8 mt-12 p-8 rounded-2xl border border-construction-light bg-white/70 backdrop-blur-[2px] shadow-[var(--shadow-card)]">
              <div className="text-center relative">
                <div className="text-4xl font-bold text-construction-green mb-2">500+</div>
                <div className="text-sm text-construction-gray font-medium">Projects Completed</div>
                <span className="pointer-events-none absolute right-[-16px] top-1/2 -translate-y-1/2 h-10 w-px bg-construction-dark/10 hidden md:block" />
              </div>
              <div className="text-center relative">
                <div className="text-4xl font-bold text-construction-green mb-2">15+</div>
                <div className="text-sm text-construction-gray font-medium">Years Experience</div>
                <span className="pointer-events-none absolute right-[-16px] top-1/2 -translate-y-1/2 h-10 w-px bg-construction-dark/10 hidden md:block" />
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
