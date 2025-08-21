import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png",
    "/lovable-uploads/689f2580-07f0-486a-9dd7-ee8fe8a3b906.png",
    "/lovable-uploads/073b7385-c711-4d21-bdf2-a27e21f46e1c.png",
    "/lovable-uploads/0e70d349-e446-43b6-b64d-5fab0610534c.png",
    "/lovable-uploads/7f4a1d23-20ba-4078-85b6-248cba2c8d83.png"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

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
          mask: 'radial-gradient(ellipse 80% 100% at top left, white 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.2) 65%, transparent 85%)',
          WebkitMask: 'radial-gradient(ellipse 80% 100% at top left, white 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.2) 65%, transparent 85%)'
        }}
      ></div>
      
      {/* Hero Image Slideshow */}
      <div className="absolute top-16 right-8 w-5/12 h-4/5 z-10">
        <div className="relative w-full h-full transform rotate-3 hover:rotate-1 transition-transform duration-500">
          <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl">
            {images.map((image, index) => (
              <div
                key={`${index}-${currentImageIndex}`}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-95 z-0'
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
            
            {/* Slideshow indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 hover-scale ${
                    index === currentImageIndex 
                      ? 'bg-construction-green shadow-lg scale-125 animate-pulse' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Floating accent elements */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-construction-green/20 rounded-full blur-2xl pulse-slow"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-construction-green/15 rounded-full blur-xl pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
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