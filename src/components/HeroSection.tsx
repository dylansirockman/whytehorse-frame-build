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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-construction-white">
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
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-7rem)] pt-8 lg:pt-6">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="inline-block bg-gradient-to-r from-construction-secondary/20 to-construction-secondary/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-construction-secondary/40 shadow-lg shadow-construction-secondary/15 mb-6 lg:mb-8 hover:shadow-xl hover:shadow-construction-secondary/25 transition-all duration-300 hover:scale-105">
              <span className="text-construction-green font-semibold text-xs sm:text-sm uppercase tracking-wider">PROFESSIONAL FRAMING CONTRACTORS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 lg:mb-10">
              <div className="mb-2 sm:mb-3">Building the Strong</div>
              <div><span className="text-construction-green">Bones</span> of Every Home</div>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-construction-gray leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Specialists in house framing — delivering precision, speed, and structural integrity you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-10 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-base font-semibold">
                Get Quote
              </Button>
              <Button variant="outline" size="lg" className="text-base font-semibold">
                Contact Us
              </Button>
            </div>
            
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
          
          {/* Hero Image Slideshow */}
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl lg:w-1/2 mx-auto relative">
            
            {/* PHASE 2: Crane Overlay Layer - NO LAYOUT IMPACT */}
            <div className="craneOverlay absolute inset-0 pointer-events-none z-40">
              {/* PHASE 5: Single Crane Arm - Fixed, Decorative Only */}
              <svg className="absolute top-0 left-0" 
                   width="200" 
                   height="120"
                   style={{ transform: 'translate(-15%, -60%)' }}>
                {/* Main horizontal truss beam */}
                <rect x="0" y="60" width="180" height="8" 
                      fill="rgba(31, 41, 55, 0.7)" 
                      rx="2" />
                
                {/* Top beam */}
                <rect x="0" y="52" width="180" height="4" 
                      fill="rgba(31, 41, 55, 0.5)" 
                      rx="1" />
                
                {/* Bottom beam */}
                <rect x="0" y="72" width="180" height="4" 
                      fill="rgba(31, 41, 55, 0.5)" 
                      rx="1" />
                
                {/* Diagonal cross-bracing */}
                <line x1="20" y1="52" x2="40" y2="76" 
                      stroke="rgba(31, 41, 55, 0.4)" 
                      strokeWidth="2" />
                <line x1="40" y1="52" x2="20" y2="76" 
                      stroke="rgba(31, 41, 55, 0.4)" 
                      strokeWidth="2" />
                
                <line x1="60" y1="52" x2="80" y2="76" 
                      stroke="rgba(31, 41, 55, 0.4)" 
                      strokeWidth="2" />
                <line x1="80" y1="52" x2="60" y2="76" 
                      stroke="rgba(31, 41, 55, 0.4)" 
                      strokeWidth="2" />
                
                <line x1="100" y1="52" x2="120" y2="76" 
                      stroke="rgba(31, 41, 55, 0.4)" 
                      strokeWidth="2" />
                <line x1="120" y1="52" x2="100" y2="76" 
                      stroke="rgba(31, 41, 55, 0.4)" 
                      strokeWidth="2" />
                
                <line x1="140" y1="52" x2="160" y2="76" 
                      stroke="rgba(31, 41, 55, 0.4)" 
                      strokeWidth="2" />
                <line x1="160" y1="52" x2="140" y2="76" 
                      stroke="rgba(31, 41, 55, 0.4)" 
                      strokeWidth="2" />
                
                {/* Pulley block at end of arm */}
                <rect x="170" y="55" width="12" height="18" 
                      fill="rgba(31, 41, 55, 0.8)" 
                      rx="2" />
                
                {/* Pulley wheel */}
                <circle cx="176" cy="64" r="4" 
                        fill="rgba(31, 41, 55, 0.6)" 
                        stroke="rgba(255, 255, 255, 0.2)" 
                        strokeWidth="1" />
              </svg>
            </div>
            
            {/* PHASE 3: Load Group - Moves with Image (inherits rotation) */}
            <div className="loadGroup relative w-full aspect-[4/5] transform-gpu rotate-1 sm:rotate-2 lg:rotate-3 hover:rotate-0 transition-transform duration-500"
                 style={{ 
                   transformOrigin: 'top center',
                   animation: 'crane-swing 3.5s ease-in-out infinite alternate',
                   animationDelay: '2s'
                 }}>
              
              {/* PHASE 4: Cable - Vertical from Above */}
              <div className="cable absolute left-1/2 transform -translate-x-1/2 bg-[#1F2937] opacity-90 z-40 pointer-events-none"
                   style={{ top: '-140px', height: '140px', width: '2px' }}>
                {/* Cable highlight */}
                <div className="absolute left-0 top-0 w-0.5 h-full bg-white/25"></div>
              </div>
              
              {/* PHASE 4: Lifting Bar - Flush on Top Edge */}
              <div className="liftingBar absolute top-0 left-0 w-full h-[6px] bg-[#1F2937] rounded-sm z-45 pointer-events-none">
                {/* Metallic highlight */}
                <div className="absolute top-0.5 left-2 right-2 h-0.5 bg-white/15 rounded"></div>
                
                {/* Lifting points */}
                <div className="absolute -top-1 left-6 w-2 h-2 bg-gray-800 rounded-full border border-gray-900 shadow-sm"></div>
                <div className="absolute -top-1 right-6 w-2 h-2 bg-gray-800 rounded-full border border-gray-900 shadow-sm"></div>
                
                {/* Connection straps */}
                <div className="absolute -bottom-1 left-8 w-1 h-2 bg-gray-700 rounded-sm border border-gray-800"></div>
                <div className="absolute -bottom-1 right-8 w-1 h-2 bg-gray-700 rounded-sm border border-gray-800"></div>
              </div>
              
              {/* PHASE 4: Hook Block - Centered, Touching Bar */}
              <div className="hookBlock absolute left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                   style={{ top: '-14px' }}>
                {/* Main hook block */}
                <div className="w-8 h-6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-sm relative shadow-lg border border-gray-700">
                  {/* Hook block details */}
                  <div className="absolute top-1 left-1 right-1 h-1 bg-white/15 rounded-sm"></div>
                  <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-black/20 rounded-sm"></div>
                  
                  {/* Actual hook */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-3 h-4 border-l-2 border-b-2 border-gray-700 rounded-bl-lg relative bg-gradient-to-br from-gray-600 to-gray-800">
                      <div className="absolute -top-0.5 left-0 w-1 h-1 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Center connection point */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded border border-gray-800 shadow-sm">
                    <div className="absolute top-1 left-0.5 right-0.5 h-0.5 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* PHASE 1: Hero Image - Restored to Original */}
              <div className="heroImage relative w-full h-full pointer-events-auto z-40">
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
                <div className="absolute -top-4 -left-4 w-4 h-4 bg-construction-green/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-construction-secondary/20 rounded-full blur-md animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 -left-6 w-2 h-2 bg-construction-green/40 rounded-full blur-sm animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;