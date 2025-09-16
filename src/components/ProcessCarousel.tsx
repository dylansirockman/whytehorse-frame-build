import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Ruler, Hammer, Home, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import BlueprintPillHeader from "./BlueprintPillHeader";

const processSteps = [
  {
    number: "01",
    title: "Layout & Planning",
    description: "Precise measurements and layout according to architectural plans with detailed material calculations.",
    image: "/lovable-uploads/a1ba7767-1cbb-44b9-8f4c-28d79e8d894b.png",
    checks: ["Precision measurements", "Accurate material takeoffs", "Code-compliant layout"],
    icon: Ruler,
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02", 
    title: "Floor Systems",
    description: "Foundation and floor joist installation with structural integrity and proper load distribution.",
    image: "/lovable-uploads/7f4a1d23-20ba-4078-85b6-248cba2c8d83.png",
    checks: ["Engineered joists", "Load distribution", "Moisture protection"],
    icon: Hammer,
    color: "from-orange-500 to-orange-600",
  },
  {
    number: "03",
    title: "Walls & Openings", 
    description: "Wall framing with precise door and window openings, ensuring proper structural support.",
    image: "/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png",
    checks: ["Plumb & level walls", "Structural openings", "Sheathing alignment"],
    icon: Home,
    color: "from-green-500 to-green-600",
  },
  {
    number: "04",
    title: "Roof Systems",
    description: "Complete roof framing and truss installation with engineered precision and weather protection.",
    image: "/lovable-uploads/073b7385-c711-4d21-bdf2-a27e21f46e1c.png", 
    checks: ["Engineered trusses", "Weather protection", "Fast installation"],
    icon: Wrench,
    color: "from-purple-500 to-purple-600",
  },
];

const ProcessCarousel = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Intersection observer for animation trigger
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "-50px" }
    );
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentStep < processSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    if (isRightSwipe && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    if (e.key === "ArrowRight" && currentStep < processSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Navigation functions
  const goToPrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const goToNext = () => {
    if (currentStep < processSteps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-surface relative py-16 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "hsl(var(--section-alternate))" }}
      data-grid-opacity="0.04"
      data-rugged="true"
      role="region"
      aria-label="Construction process carousel"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/10 to-transparent z-10" />
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
        <div className="grid-layer grid-layer-fine" />
        <div className="grid-layer grid-layer-bold" />
        <div
          className="absolute inset-0 z-[3]"
          style={{
            background: "radial-gradient(1200px 600px at 50% 12%, rgba(2,6,23,0.04), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-12 lg:mb-16 transition-all duration-700 ease-out motion-reduce:transition-none",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 motion-reduce:translate-y-0"
          )}
        >
          <div className="flex justify-center mb-6">
            <BlueprintPillHeader
              index="3"
              title="Construction Method"
              metaRight={`Scale 1/4" = 1'-0"`}
              as="div"
            />
          </div>
          <h2 className="text-3xl lg:text-6xl font-bold text-construction-dark mb-6 leading-tight">
            Systematic <span className="text-construction-green">Excellence</span>
          </h2>
          <p className="text-base lg:text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            Navigate through our proven methodology that ensures quality, speed, and precision at every stage.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={cn(
            "relative transition-all duration-700 ease-out motion-reduce:transition-none",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 motion-reduce:translate-y-0"
          )}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          {/* Mobile Navigation Hints */}
          <div className="flex md:hidden justify-between items-center mb-4 px-4">
            <div className="flex items-center gap-2 text-construction-gray/70">
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">Swipe or tap</span>
            </div>
            <div className="flex items-center gap-2 text-construction-gray/70">
              <span className="text-sm">Step {currentStep + 1} of {processSteps.length}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Construction Timeline - Desktop */}
          <div className="hidden lg:block mb-8">
            <div className="relative max-w-4xl mx-auto px-8">
              {/* Timeline Track */}
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1">
                <div className="w-full h-full bg-construction-dark/20 rounded-full" />
                <div
                  className="absolute top-0 left-0 h-full w-full bg-construction-green rounded-full origin-left transition-transform duration-500"
                  style={{ transform: `scaleX(${processSteps.length > 1 ? currentStep / (processSteps.length - 1) : 0})` }}
                />
              </div>
              
              {/* Timeline Steps Container */}
              <div className="relative">
                {/* Progress Connections Between Steps */}
                <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 flex items-center">
                  <div className="w-full flex justify-between">
                    {processSteps.map((_, index) => {
                      if (index === processSteps.length - 1) return null;
                      
                      const isCompleted = index < currentStep;
                      const isActive = index === currentStep - 1;
                      
                      return (
                        <div 
                          key={index}
                          className="flex-1 mx-8 first:ml-0 last:mr-0"
                        >
                          <div className={cn(
                            "h-1 rounded-full transition-all duration-500",
                            isCompleted || isActive 
                              ? "bg-construction-green" 
                              : "bg-construction-dark/20"
                          )} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline Step Buttons */}
                <div className="relative z-10 flex justify-between items-center">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;
                    
                    return (
                      <button
                        key={step.number}
                        onClick={() => goToStep(index)}
                        className={cn(
                          "relative w-16 h-16 rounded-full border-4 transition-all duration-300",
                          "flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-4",
                          "bg-white shadow-lg",
                          isActive 
                            ? "border-construction-green text-construction-green scale-110 shadow-xl ring-4 ring-construction-green/20" 
                            : isCompleted
                            ? "border-construction-green text-construction-green shadow-md"
                            : "border-construction-dark/30 text-construction-dark/60 hover:border-construction-green/50 hover:shadow-md"
                        )}
                      >
                        <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                        
                        {/* Step Number Badge */}
                        <div className={cn(
                          "absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center border-2 border-white",
                          isActive || isCompleted
                            ? "bg-construction-green text-white"
                            : "bg-construction-dark/20 text-construction-dark/60"
                        )}>
                          {step.number}
                        </div>
                        
                        {/* Active Step Indicator */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-construction-green/10 animate-pulse" />
                        )}
                        
                        {/* Tooltip */}
                        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                          <div className="bg-construction-dark text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                            {step.title}
                          </div>
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 border-4 border-transparent border-b-construction-dark" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Carousel */}
          <div
            ref={carouselRef}
            className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-construction-dark/10 shadow-xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label="Construction process steps"
          >
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(to right, #1F2937 1px, transparent 1px),
                  linear-gradient(to bottom, #1F2937 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>

            {/* Slides Container */}
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
              aria-live="polite"
            >
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="w-full flex-shrink-0 p-6 sm:p-8 lg:p-12"
                    role="group"
                    aria-roledescription="slide"
                    aria-current={index === currentStep ? "true" : "false"}
                    aria-label={`Step ${step.number}: ${step.title}`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                      {/* Content */}
                      <div className="order-2 lg:order-1">
                        <div
                          className={cn(
                            "transition-all duration-500 ease-out motion-reduce:transition-none",
                            index === currentStep
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4 motion-reduce:translate-y-0"
                          )}
                          style={{
                            transitionDelay: index === currentStep ? "0.15s" : "0s",
                          }}
                        >
                          {/* Step Header with Construction Theme */}
                          <div className="mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                              {/* Tool Icon with Gradient */}
                              <div className={cn(
                                "w-16 h-16 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mx-auto sm:mx-0 relative",
                                "bg-gradient-to-br", step.color,
                                "shadow-lg border-2 border-white/20"
                              )}>
                                <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" strokeWidth={1.5} />
                                
                                {/* Step Number Overlay */}
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-construction-green rounded-full flex items-center justify-center border-2 border-white">
                                  <span className="text-white font-bold text-sm">{step.number}</span>
                                </div>
                              </div>
                              
                              <div className="text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-construction-dark mb-2">
                                  {step.title}
                                </h3>
                                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-construction-gray">
                                  <div className="w-2 h-2 bg-construction-green rounded-full" />
                                  <span>Phase {index + 1} • {step.checks.length} Key Elements</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Description with Construction Quote Style */}
                          <div className="bg-construction-green/5 border-l-4 border-construction-green p-4 lg:p-6 rounded-r-lg mb-6">
                            <p className="text-lg lg:text-xl text-construction-dark leading-relaxed font-medium">
                              {step.description}
                            </p>
                          </div>

                          {/* Quality Checks with Construction Icons */}
                          <div className="space-y-3 mb-8">
                            <h4 className="text-lg font-semibold text-construction-dark mb-4 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-construction-green" />
                              Quality Standards
                            </h4>
                            {step.checks.map((check, checkIndex) => (
                              <div
                                key={check}
                                className={cn(
                                  "flex items-center bg-white/50 p-3 rounded-lg border border-construction-dark/10",
                                  "transition-all duration-300 ease-out motion-reduce:transition-none",
                                  index === currentStep
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-4 motion-reduce:translate-x-0"
                                )}
                                style={{
                                  transitionDelay: index === currentStep ? `${0.3 + checkIndex * 0.1}s` : "0s",
                                }}
                              >
                                <div className="w-2 h-2 bg-construction-green rounded-full mr-3 flex-shrink-0" />
                                <span className="font-medium text-construction-dark text-base lg:text-lg">
                                  {check}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA with Construction Theme */}
                          <div className="text-center sm:text-left">
                            <button
                              onClick={scrollToCTA}
                              className={cn(
                                "inline-flex items-center gap-3 bg-construction-green text-white px-6 py-3 rounded-xl font-semibold",
                                "transition-all duration-200 group motion-reduce:transition-none",
                                "hover:bg-construction-green/90 hover:shadow-lg hover:scale-105 motion-reduce:hover:scale-100",
                                "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2",
                                index === currentStep
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 translate-y-2 motion-reduce:translate-y-0"
                              )}
                              style={{
                                transitionDelay: index === currentStep ? "0.5s" : "0s",
                              }}
                            >
                              <Hammer className="w-5 h-5" />
                              Start Your Project
                              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Image with Construction Frame */}
                      <div className="order-1 lg:order-2">
                        <div
                          className={cn(
                            "transition-all duration-500 ease-out motion-reduce:transition-none",
                            index === currentStep
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95 motion-reduce:scale-100"
                          )}
                          style={{
                            transitionDelay: index === currentStep ? "0.1s" : "0s",
                          }}
                        >
                          <div className="relative">
                            {/* Construction Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-construction-dark/10 to-construction-dark/5 rounded-2xl transform rotate-1" />
                            <div className="absolute -inset-2 bg-white rounded-xl shadow-md" />
                            
                            <img
                              src={step.image}
                              alt={`${step.title} process step`}
                              className="relative w-full rounded-lg shadow-lg border-2 border-construction-dark/10"
                              loading="lazy"
                            />
                            
                            {/* Construction Badge */}
                            <div className="absolute top-4 right-4 bg-construction-green text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                              Step {step.number}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Touch Areas */}
            <div className="md:hidden absolute inset-y-0 left-0 w-1/3" onClick={goToPrevious} />
            <div className="md:hidden absolute inset-y-0 right-0 w-1/3" onClick={goToNext} />
          </div>

          {/* Desktop Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={currentStep === 0}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full",
              "bg-white/95 backdrop-blur-sm border-2 border-construction-dark/20 shadow-xl",
              "hidden md:flex items-center justify-center text-construction-dark",
              "transition-all duration-200 motion-reduce:transition-none",
              "hover:bg-white hover:shadow-2xl hover:scale-110 motion-reduce:hover:scale-100 hover:border-construction-green",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/95 disabled:hover:border-construction-dark/20",
              "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2"
            )}
            aria-label="Previous step"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <button
            onClick={goToNext}
            disabled={currentStep === processSteps.length - 1}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full",
              "bg-white/95 backdrop-blur-sm border-2 border-construction-dark/20 shadow-xl",
              "hidden md:flex items-center justify-center text-construction-dark",
              "transition-all duration-200 motion-reduce:transition-none",
              "hover:bg-white hover:shadow-2xl hover:scale-110 motion-reduce:hover:scale-100 hover:border-construction-green",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/95 disabled:hover:border-construction-dark/20",
              "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2"
            )}
            aria-label="Next step"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
          </button>

          {/* Mobile Step Indicators */}
          <div className="md:hidden mt-6">
            <div className="flex justify-center gap-3 mb-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={cn(
                      "w-12 h-12 rounded-xl border-2 transition-all duration-300",
                      "flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2",
                      index === currentStep
                        ? "bg-construction-green border-construction-green text-white scale-110 shadow-lg"
                        : "bg-white/80 border-construction-dark/30 text-construction-dark/60 hover:border-construction-green/50"
                    )}
                    aria-label={`Go to step ${index + 1}: ${step.title}`}
                    aria-current={index === currentStep ? "true" : "false"}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
            
            {/* Mobile Progress Bar */}
            <div className="max-w-xs mx-auto">
              <div className="h-2 bg-construction-dark/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-construction-green to-construction-green/80 transition-all duration-500 ease-out motion-reduce:transition-none rounded-full"
                  style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-construction-gray font-medium">
                <span>Phase {currentStep + 1}</span>
                <span>{processSteps.length} Phases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessCarousel;