const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* ===== Blueprint background ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
                <path d='M32 0 H0 V32' fill='none' stroke='#1F2937' stroke-opacity='0.7' stroke-width='1'/>
              </svg>
            `)}")`,
            backgroundRepeat: "repeat",
          }}
        />
        {/* Bold grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
                <path d='M160 0 H0 V160' fill='none' stroke='#1F2937' stroke-opacity='0.5' stroke-width='1.5'/>
              </svg>
            `)}")`,
            backgroundRepeat: "repeat",
          }}
        />
        {/* Scribble/dimension marks */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
                <g stroke='#1F2937' stroke-width='1' fill='none'>
                  <line x1='200' y1='600' x2='1000' y2='600' stroke-dasharray='6 10'/>
                  <path d='M200 600 l14 -8 v16 z' />
                  <path d='M1000 600 l-14 -8 v16 z' />
                  <line x1='420' y1='380' x2='470' y2='380' />
                  <line x1='445' y1='355' x2='445' y2='405' />
                </g>
              </svg>
            `)}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 70%",
            backgroundSize: "1000px 700px",
          }}
        />
      </div>
      {/* ===== /Blueprint background ===== */}

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-construction-green/5 rounded-2xl"></div>
            <img 
              src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png" 
              alt="House construction framing" 
              className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
            />
          </div>
          
          <div>
            <div className="inline-block bg-construction-green/10 px-4 py-2 rounded-full mb-6">
              <span className="text-construction-green font-semibold text-sm uppercase tracking-wider">About WhyteHorse</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-8 leading-tight">
              Framing Excellence
              <br />
              <span className="text-construction-green">Built to Last</span>
            </h2>
            
            <div className="space-y-6 text-lg text-construction-gray leading-relaxed">
              <p>
                Framing isn't just one of many services — it's all we do. Our crews are dedicated specialists who ensure every project starts strong, stays on schedule, and meets the highest standards of quality.
              </p>
              
              <p>
                With years of experience in residential construction across Alberta, we understand that proper framing is the foundation of every successful build. That's why builders trust us to deliver structural integrity that stands the test of time.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-construction-light shadow-[var(--shadow-card)]">
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
