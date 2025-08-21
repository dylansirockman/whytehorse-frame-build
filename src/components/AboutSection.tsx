const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-construction-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-construction-dark mb-8 leading-tight">
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
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-green mb-2">500+</div>
                <div className="text-sm text-construction-gray">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-green mb-2">15+</div>
                <div className="text-sm text-construction-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-green mb-2">100%</div>
                <div className="text-sm text-construction-gray">On Schedule</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png" 
              alt="House construction framing" 
              className="w-full rounded-lg shadow-construction"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;