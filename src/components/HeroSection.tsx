import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const HeroSection = () => {
  const images = [
    "/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png",
    "/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png",
    "/lovable-uploads/073b7385-c711-4d21-bdf2-a27e21f46e1c.png",
    "/lovable-uploads/7f4a1d23-20ba-4078-85b6-248cba2c8d83.png"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Changed to 10 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative overflow-visible min-h-[64vh] flex items-center justify-center pt-24 pb-20 bg-construction-white">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(158, 158, 158, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(158, 158, 158, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          mask: 'linear-gradient(to bottom, white 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 75%, transparent 100%)',
          WebkitMask: 'linear-gradient(to bottom, white 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 75%, transparent 100%)'
        }}
      ></div>
      
      {/* Construction Tools Overlay - Enhanced visibility with text area fade */}
      <div 
        className="absolute inset-0 z-5"
        style={{
          backgroundImage: `url('/construction-overlay.svg')`,
          backgroundSize: '1200px 800px',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0, 600px 400px',
          opacity: 0.7,
          mask: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.8) 65%, rgba(255,255,255,1) 100%)',
          WebkitMask: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.8) 65%, rgba(255,255,255,1) 100%)'
        }}
      ></div>
      
      {/* Layered construction elements with depth - reduced opacity near text */}
      <div className="absolute inset-0 z-5">
        {/* Foreground elements - positioned away from text area */}
        <div 
          className="absolute top-1/4 right-1/5 w-40 h-2 bg-construction-dark/12 transform rotate-12 shadow-sm"
          style={{
            background: 'repeating-linear-gradient(90deg, rgba(31, 41, 55, 0.12), rgba(31, 41, 55, 0.12) 12px, transparent 12px, transparent 14px)'
          }}
        ></div>
        
        {/* Mid-ground blueprint corner - moved away from text */}
        <div className="absolute bottom-1/3 right-1/4 opacity-10">
          <div className="w-24 h-24 border-l-3 border-b-3 border-construction-dark/30 relative">
            <div className="absolute -bottom-6 left-0 text-sm text-construction-dark/40 font-mono font-semibold">90°</div>
            <div className="absolute -left-8 bottom-6 text-xs text-construction-dark/30 font-mono rotate-90 origin-bottom-left">24"</div>
          </div>
        </div>
        
        {/* Enhanced level tool - kept on right side */}
        <div className="absolute top-2/3 right-1/4 opacity-12">
          <div className="w-32 h-4 bg-construction-dark/8 rounded-full relative shadow-sm">
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-construction-dark/18 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner"></div>
            <div className="absolute -left-2 top-1/2 w-1 h-6 bg-construction-dark/10 transform -translate-y-1/2"></div>
            <div className="absolute -right-2 top-1/2 w-1 h-6 bg-construction-dark/10 transform -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Background elements - very subtle */}
        <div className="absolute top-1/2 right-1/3 opacity-4">
          <div className="w-16 h-16 border-l-2 border-b-2 border-construction-dark/20 transform rotate-45"></div>
        </div>
        
        {/* Measurement marks - positioned away from text */}
        <div className="absolute top-1/6 right-1/4 opacity-8">
          <div className="flex items-center space-x-1">
            <div className="w-0.5 h-3 bg-construction-dark/20"></div>
            <div className="w-0.5 h-2 bg-construction-dark/15"></div>
            <div className="w-0.5 h-2 bg-construction-dark/15"></div>
            <div className="w-0.5 h-3 bg-construction-dark/20"></div>
            <span className="text-xs text-construction-dark/18 font-mono ml-2">16"</span>
          </div>
        </div>
        
        {/* Diagonal construction line - very subtle */}
        <div 
          className="absolute top-1/3 left-0 w-full h-0.5 bg-construction-dark/4 transform -rotate-12 origin-left"
          style={{
            background: 'repeating-linear-gradient(90deg, rgba(31, 41, 55, 0.04), rgba(31, 41, 55, 0.04) 20px, transparent 20px, transparent 25px)'
          }}
        ></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-4 lg:left-10 w-32 h-32 bg-construction-green/5 rounded-full blur-3xl z-5"></div>
      <div className="absolute bottom-1/4 right-4 lg:right-20 w-48 h-48 bg-construction-green/8 rounded-full blur-3xl z-5"></div>
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 min-h-[calc(64vh-8rem)] lg:min-h-[calc(64vh-7rem)] pt-8 lg:pt-6">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] text-left max-w-3xl mx-auto lg:mx-0">
            <div className="inline-block bg-gradient-to-r from-construction-secondary/20 to-construction-secondary/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-construction-secondary/40 shadow-lg shadow-construction-secondary/15 mb-6 lg:mb-8 hover:shadow-xl hover:shadow-construction-secondary/25 transition-all duration-300 hover:scale-105">
              <span className="text-construction-green font-semibold text-xs sm:text-sm uppercase tracking-wider">PROFESSIONAL FRAMING CONTRACTORS</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold mb-6 text-balance max-w-[46ch] lg:max-w-[46ch] xl:max-w-[50ch]">
              <div className="mb-2 sm:mb-3">Building the Strong</div>
              <div><span className="text-construction-green">Bones</span> of Every Home</div>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-construction-gray leading-relaxed max-w-2xl">
              Specialists in house framing — delivering precision, speed, and structural integrity you can trust.
            </p>
            
            {/* CTA buttons moved to left-aligned overlapping position */}
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="flex items-center text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4"></div>
                <span className="font-medium text-sm sm:text-base">500+ Projects Completed</span>
              </div>
              <div className="flex items-center text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4"></div>
                <span className="font-medium text-sm sm:text-base">15+ Years Experience</span>
              </div>
              <div className="flex items-center text-construction-gray">
                <div className="w-3 h-3 bg-construction-green rounded-full mr-3 lg:mr-4"></div>
                <span className="font-medium text-sm sm:text-base">100% On Schedule</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image Slideshow - Overlapping */}
          <div className="absolute z-40 w-full max-w-md sm:max-w-lg lg:max-w-xl right-4 lg:right-8 bottom-[-36px] pointer-events-none">
            {/* Crane Cable */}
            <div className="crane-cable absolute left-1/2 w-0.5 bg-construction-dark/30 z-0 transform -translate-x-1/2 
                           top-0 -translate-y-20 sm:-translate-y-24 lg:-translate-y-32
                           sm:top-0 lg:top-0" 
                 style={{ 
                   height: '120px',
                   animation: 'crane-cable-mobile 2s ease-out forwards'
                 }}>
              {/* Cable hook */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                <div className="w-2 h-3 border-l border-r border-construction-dark/40 rounded-b-sm"></div>
              </div>
            </div>
            
            {/* Swinging Image Container */}
            <div className="crane-swing-container relative w-full aspect-[4/5] transform-gpu origin-top" 
                 style={{ 
                   animation: 'crane-swing 3.5s ease-in-out infinite',
                   animationDelay: '2s'
                 }}>
              <div className="relative w-full h-full transform rotate-1 sm:rotate-2 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl bg-white relative cursor-pointer" onClick={handleImageClick}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                      index === currentImageIndex 
                        ? 'translate-x-0' 
                        : index > currentImageIndex 
                        ? 'translate-x-full' 
                        : '-translate-x-full'
                    }`}
                  >
                    <img 
                      src={image}
                      alt="Construction project showcase" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-construction-green/10 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20"></div>
                
                {/* Instagram Button */}
                <button 
                  className="absolute top-4 right-4 z-30 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-125 hover:shadow-pink-500/30 hover:rotate-12"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://instagram.com', '_blank');
                  }}
                >
                  <Instagram size={24} strokeWidth={2.5} />
                </button>
                
                {/* Slideshow indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-500 hover-scale ${
                        index === currentImageIndex 
                          ? 'bg-construction-green shadow-lg scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
                {/* Floating accent elements */}
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-construction-green/20 rounded-full blur-2xl pulse-slow"></div>
                <div className="absolute -top-2 sm:-top-6 -left-2 sm:-left-6 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-construction-green/15 rounded-full blur-xl pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Left-Aligned Overlapping CTA Buttons */}
      <div className="absolute z-50 flex gap-4 items-center max-sm:flex-col max-sm:gap-3" style={{ bottom: '-24px', left: 'max(2rem, calc((100vw - 80rem) / 2))' }}>
        <Button 
          variant="hero" 
          size="lg" 
          className="text-base font-semibold shadow-lg hover:shadow-xl min-h-[48px] px-6 py-3 pointer-events-auto"
        >
          Get Quote
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="text-base font-semibold shadow-lg hover:shadow-xl min-h-[48px] px-6 py-3 bg-white/95 backdrop-blur-sm pointer-events-auto"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;