const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-construction-white">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(158, 158, 158, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(158, 158, 158, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          mask: 'radial-gradient(circle at top left, white 0%, rgba(255,255,255,0.4) 25%, transparent 50%)',
          WebkitMask: 'radial-gradient(circle at top left, white 0%, rgba(255,255,255,0.4) 25%, transparent 50%)'
        }}
      ></div>
      
      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-10 overflow-hidden">
        <img 
          src="/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png" 
          alt="House framing construction" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-construction-green/5 rounded-full blur-3xl z-5"></div>
      <div className="absolute bottom-1/4 right-20 w-48 h-48 bg-construction-green/8 rounded-full blur-3xl z-5"></div>
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="text-construction-dark text-center lg:text-left max-w-2xl">
            <div className="inline-block bg-construction-green/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-construction-green/20 mb-6 lg:mb-8">
              <span className="text-construction-green font-semibold text-xs sm:text-sm uppercase tracking-wider">PROFESSIONAL FRAMING CONTRACTORS</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
              Building the Strong
              <br />
              <span className="text-construction-green">Foundation</span> of Every Home
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-construction-gray leading-relaxed">
              Specialists in house framing — delivering precision, speed, and structural integrity you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-6 lg:mb-8 justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4"></div>
                <span className="font-medium text-sm sm:text-base">500+ Projects Completed</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4"></div>
                <span className="font-medium text-sm sm:text-base">15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4"></div>
                <span className="font-medium text-sm sm:text-base">100% On Schedule</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;