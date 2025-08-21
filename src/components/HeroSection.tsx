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
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Changed to 10 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / (window.innerHeight * 0.6), 1);
  const opacity = 1 - scrollProgress;
  const translateY = scrollY * 0.7;

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-construction-white" style={{ opacity, transform: `translateY(${translateY}px)` }}>
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
          WebkitMask: 'linear-gradient(to bottom, white 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 75%, transparent 100%)',
          opacity: opacity * 0.8
        }}
      ></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-4 lg:left-10 w-32 h-32 bg-construction-green/5 rounded-full blur-3xl z-5" style={{ opacity: opacity * 0.6 }}></div>
      <div className="absolute bottom-1/4 right-4 lg:right-20 w-48 h-48 bg-construction-green/8 rounded-full blur-3xl z-5" style={{ opacity: opacity * 0.4 }}></div>
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ transform: `translateY(${translateY * 0.3}px)` }}>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-7rem)] pt-8 lg:pt-6">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="relative inline-block mb-6 lg:mb-8">
              <div 
                className="backdrop-blur-sm px-8 sm:px-12 py-4 sm:py-5 shadow-lg"
                style={{
                  background: '#8B4513',
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                  transform: 'translateY(6px)',
                  boxShadow: '0 8px 25px -8px rgba(139, 69, 19, 0.3)',
                  border: '1px solid #654321'
                }}
              >
                <span className="text-amber-100 font-bold text-xs sm:text-sm uppercase tracking-[0.15em]">PROFESSIONAL FRAMING CONTRACTORS</span>
              </div>
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
              <Button variant="outline" size="lg" className="text-base font-semibold border-2 border-construction-green text-construction-green hover:bg-construction-green hover:text-white">
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
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl lg:w-1/2 mx-auto" style={{ transform: `translateY(${translateY * 0.2}px)`, opacity: opacity }}>
            <div className="relative w-full aspect-[4/5] transform rotate-1 sm:rotate-2 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
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
    </section>
  );
};

export default HeroSection;