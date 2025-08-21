import QuoteForm from "@/components/QuoteForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png" 
          alt="House framing construction" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/85 via-construction-dark/70 to-construction-green/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <div className="inline-block bg-construction-green/20 backdrop-blur-sm px-4 py-2 rounded-full border border-construction-green/30 mb-6">
            <span className="text-construction-green-light font-medium">PROFESSIONAL FRAMING CONTRACTORS</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Building the Strong
            <br />
            <span className="text-construction-green-light">Bones</span> of Every Home
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl">
            Specialists in house framing — delivering precision, speed, and structural integrity you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center text-white/80">
              <div className="w-2 h-2 bg-construction-green rounded-full mr-3"></div>
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center text-white/80">
              <div className="w-2 h-2 bg-construction-green rounded-full mr-3"></div>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center text-white/80">
              <div className="w-2 h-2 bg-construction-green rounded-full mr-3"></div>
              <span>100% On Schedule</span>
            </div>
          </div>
        </div>
        
        <div className="lg:max-w-md">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;