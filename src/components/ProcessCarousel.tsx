import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import BlueprintPillHeader from "./BlueprintPillHeader";

const processSteps = [
  {
    number: "01",
    title: "Layout & Planning",
    description: "Precise measurements and layout according to architectural plans with detailed material calculations.",
    image: "/lovable-uploads/a1ba7767-1cbb-44b9-8f4c-28d79e8d894b.png",
    checks: ["Precision measurements", "Accurate material takeoffs", "Code-compliant layout"],
  },
  {
    number: "02", 
    title: "Floor Systems",
    description: "Foundation and floor joist installation with structural integrity and proper load distribution.",
    image: "/lovable-uploads/7f4a1d23-20ba-4078-85b6-248cba2c8d83.png",
    checks: ["Engineered joists", "Load distribution", "Moisture protection"],
  },
  {
    number: "03",
    title: "Walls & Openings", 
    description: "Wall framing with precise door and window openings, ensuring proper structural support.",
    image: "/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png",
    checks: ["Plumb & level walls", "Structural openings", "Sheathing alignment"],
  },
  {
    number: "04",
    title: "Roof Systems",
    description: "Complete roof framing and truss installation with engineered precision and weather protection.",
    image: "/lovable-uploads/073b7385-c711-4d21-bdf2-a27e21f46e1c.png", 
    checks: ["Engineered trusses", "Weather protection", "Fast installation"],
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
          {/* Main Carousel */}
          <div
            ref={carouselRef}
            className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-white/50 backdrop-blur-sm border border-construction-dark/10 shadow-lg"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label="Construction process steps"
          >
            {/* Slides Container */}
            <div
              className="flex transition-transform duration-400 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
              aria-live="polite"
            >
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="w-full flex-shrink-0 p-4 sm:p-6 lg:p-12"
                  role="group"
                  aria-roledescription="slide"
                  aria-current={index === currentStep ? "true" : "false"}
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
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
                        {/* Step Badge */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg lg:rounded-xl border-2 border-construction-green/40 flex items-center justify-center text-lg sm:text-2xl lg:text-3xl font-bold text-construction-green bg-white shadow-md mx-auto sm:mx-0">
                            {step.number}
                          </div>
                          <div className="text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-construction-dark mb-1 sm:mb-2">
                              {step.title}
                            </h3>
                            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-construction-gray">
                              <span>Step {index + 1} of {processSteps.length}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg lg:text-xl text-construction-gray leading-relaxed mb-6 sm:mb-8 max-w-prose text-center sm:text-left mx-auto sm:mx-0">
                          {step.description}
                        </p>

                        {/* Checks */}
                        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                          {step.checks.map((check, checkIndex) => (
                            <div
                              key={check}
                              className={cn(
                                "flex items-center text-construction-green transition-all duration-300 ease-out motion-reduce:transition-none justify-center sm:justify-start",
                                index === currentStep
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 translate-x-4 motion-reduce:translate-x-0"
                              )}
                              style={{
                                transitionDelay: index === currentStep ? `${0.3 + checkIndex * 0.1}s` : "0s",
                              }}
                            >
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 shrink-0" />
                              <span className="font-medium text-construction-dark/80 text-sm sm:text-base lg:text-lg text-center sm:text-left">
                                {check}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Micro CTA */}
                        <div className="flex justify-center sm:justify-start">
                          <button
                            onClick={scrollToCTA}
                            className={cn(
                              "inline-flex items-center gap-2 text-construction-green hover:text-construction-green/80 font-semibold transition-all duration-200 group motion-reduce:transition-none text-sm sm:text-base",
                              index === currentStep
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2 motion-reduce:translate-y-0"
                            )}
                            style={{
                              transitionDelay: index === currentStep ? "0.5s" : "0s",
                            }}
                          >
                            Get Your Quote
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
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
                        <img
                          src={step.image}
                          alt={`${step.title} process step`}
                          className="w-full rounded-lg lg:rounded-xl shadow-lg border border-construction-dark/10"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on small mobile, visible on larger screens */}
          <button
            onClick={goToPrevious}
            disabled={currentStep === 0}
            className={cn(
              "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-construction-dark/20 shadow-lg",
              "hidden xs:flex items-center justify-center text-construction-dark",
              "transition-all duration-200 motion-reduce:transition-none",
              "hover:bg-white hover:shadow-xl hover:scale-110 motion-reduce:hover:scale-100",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/90",
              "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2"
            )}
            aria-label="Previous step"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentStep === processSteps.length - 1}
            className={cn(
              "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-construction-dark/20 shadow-lg",
              "hidden xs:flex items-center justify-center text-construction-dark",
              "transition-all duration-200 motion-reduce:transition-none",
              "hover:bg-white hover:shadow-xl hover:scale-110 motion-reduce:hover:scale-100",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/90",
              "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2"
            )}
            aria-label="Next step"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Step Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={cn(
                  "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 motion-reduce:transition-none",
                  "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2",
                  index === currentStep
                    ? "bg-construction-green scale-125"
                    : "bg-construction-dark/30 hover:bg-construction-dark/50"
                )}
                aria-label={`Go to step ${index + 1}`}
                aria-current={index === currentStep ? "true" : "false"}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 sm:mt-6 mx-auto max-w-xs sm:max-w-md">
            <div className="h-1 bg-construction-dark/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-construction-green transition-all duration-400 ease-out motion-reduce:transition-none rounded-full"
                style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs sm:text-sm text-construction-gray">
              <span>Step {currentStep + 1}</span>
              <span>{processSteps.length} Steps</span>
            </div>
          </div>

          {/* Mobile Swipe Hint - Only shown on first load for mobile */}
          <div className="flex sm:hidden justify-center mt-4 text-xs text-construction-gray/70 animate-pulse">
            <span>← Swipe to navigate →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessCarousel;