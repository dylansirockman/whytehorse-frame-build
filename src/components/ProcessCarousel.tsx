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
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for animation trigger
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "-50px" }
    );
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Navigation functions
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

        {/* Main Content Container */}
        <div
          className={cn(
            "relative transition-all duration-700 ease-out motion-reduce:transition-none",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 motion-reduce:translate-y-0"
          )}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          {/* Mobile Step Navigation */}
          <div className="lg:hidden mb-8">
            <div className="flex justify-center gap-2 mb-4">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={cn(
                    "w-12 h-12 rounded-full border-2 transition-all duration-300",
                    "flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2",
                    index === currentStep
                      ? "bg-construction-green border-construction-green text-white scale-110 shadow-lg"
                      : "bg-white border-construction-dark/30 text-construction-dark/60 hover:border-construction-green/50"
                  )}
                  aria-label={`Go to step ${index + 1}: ${step.title}`}
                  aria-current={index === currentStep ? "true" : "false"}
                >
                  <span className="text-sm font-bold">{step.number}</span>
                </button>
              ))}
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

          {/* Desktop Layout: Content Left, Navigation Right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Side: Step Content */}
            <div className="lg:col-span-2">
              <div className="relative group rounded-2xl border border-construction-dark/10 bg-white/80 backdrop-blur-sm shadow-sm
                transition-[opacity,transform,box-shadow,filter] duration-600 ease-out motion-reduce:transition-none
                hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-construction-green/50 p-6 sm:p-8 lg:p-12">
                {/* Corner ticks */}
                <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/15" />
                <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/15" />

                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  if (index !== currentStep) return null;
                  
                  return (
                    <div
                      key={step.number}
                      className="relative z-10"
                      role="group"
                      aria-label={`Step ${step.number}: ${step.title}`}
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
                            className="flex items-center bg-white/50 p-3 rounded-lg border border-construction-dark/10"
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
                            "focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2"
                          )}
                        >
                          <Hammer className="w-5 h-5" />
                          Start Your Project
                          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                        </button>
                      </div>

                      {/* Image Section - Mobile Only */}
                      <div className="lg:hidden mt-8">
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
                  );
                })}
              </div>
            </div>

            {/* Right Side: Step Navigation & Image - Desktop Only */}
            <div className="hidden lg:block">
              <div className="space-y-6">
                {/* Step Navigation */}
                <div className="relative group rounded-2xl border border-construction-dark/10 bg-white/80 backdrop-blur-sm shadow-sm
                  transition-[opacity,transform,box-shadow,filter] duration-600 ease-out motion-reduce:transition-none
                  hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 p-6">
                  
                  {/* Corner ticks */}
                  <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/15" />
                  <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/15" />
                  <h4 className="text-lg font-semibold text-construction-dark mb-4">Construction Steps</h4>
                  <div className="space-y-3">
                    {processSteps.map((step, index) => {
                      const Icon = step.icon;
                      const isActive = index === currentStep;
                      const isCompleted = index < currentStep;
                      
                      return (
                        <button
                          key={step.number}
                          onClick={() => goToStep(index)}
                          className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300",
                            "text-left focus:outline-none focus:ring-2 focus:ring-construction-green focus:ring-offset-2",
                            isActive 
                              ? "bg-construction-green border-construction-green text-white shadow-lg" 
                              : isCompleted
                              ? "bg-construction-green/10 border-construction-green/50 text-construction-dark hover:bg-construction-green/20"
                              : "bg-white border-construction-dark/20 text-construction-dark/60 hover:border-construction-green/50 hover:bg-construction-green/5"
                          )}
                        >
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            isActive 
                              ? "bg-white/20" 
                              : isCompleted
                              ? "bg-construction-green/20"
                              : "bg-construction-dark/10"
                          )}>
                            <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={cn(
                                "text-xs font-bold px-2 py-1 rounded-full",
                                isActive 
                                  ? "bg-white/20 text-white" 
                                  : isCompleted
                                  ? "bg-construction-green/20 text-construction-green"
                                  : "bg-construction-dark/10 text-construction-dark/60"
                              )}>
                                {step.number}
                              </span>
                              {isCompleted && <CheckCircle className="w-4 h-4 text-construction-green" />}
                            </div>
                            <div className="font-semibold text-sm">{step.title}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Current Step Image */}
                <div className="relative group rounded-2xl border border-construction-dark/10 bg-white/80 backdrop-blur-sm shadow-sm
                  transition-[opacity,transform,box-shadow,filter] duration-600 ease-out motion-reduce:transition-none
                  hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 p-6">
                  
                  {/* Corner ticks */}
                  <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/15" />
                  <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/15" />
                  <div className="relative">
                    {/* Construction Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-construction-dark/10 to-construction-dark/5 rounded-2xl transform rotate-1" />
                    <div className="absolute -inset-2 bg-white rounded-xl shadow-md" />
                    
                    <img
                      src={processSteps[currentStep].image}
                      alt={`${processSteps[currentStep].title} process step`}
                      className="relative w-full rounded-lg shadow-lg border-2 border-construction-dark/10"
                      loading="lazy"
                    />
                    
                    {/* Construction Badge */}
                    <div className="absolute top-4 right-4 bg-construction-green text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Step {processSteps[currentStep].number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessCarousel;