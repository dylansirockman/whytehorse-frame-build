const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-construction-white">
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
      </div>
    </section>
  );
};

export default AboutSection;