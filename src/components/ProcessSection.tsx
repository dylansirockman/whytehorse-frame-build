import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
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
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), {
      threshold: 0.1,
      rootMargin: "-50px"
    });
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Blueprint background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(31,41,55,0.025) 0, rgba(31,41,55,0.025) 1px, transparent 1px, transparent 36px),
              repeating-linear-gradient(to bottom, rgba(31,41,55,0.025) 0, rgba(31,41,55,0.025) 1px, transparent 1px, transparent 36px)
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(1200px 600px at 50% 12%, rgba(2,6,23,0.02), transparent 60%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="flex justify-center mb-6">
            <BlueprintPillHeader 
              index="3"
              title="Construction Method"
              metaRight='Scale 1/4" = 1\'-0"'
              as="div"
            />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-6 leading-tight">
            Systematic <span className="text-construction-green">Excellence</span>
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures quality, speed, and precision at every stage of your framing project.
          </p>
        </div>

        <div className="space-y-24">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              } transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${0.2 + i * 0.1}s` : "0s" }}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-xl border-2 border-dashed border-construction-green flex items-center justify-center text-2xl font-bold text-construction-green mr-6 bg-white shadow-[var(--shadow-card)]">
                    {step.number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-construction-dark">
                    {step.title}
                  </h3>
                </div>

                <p className="text-lg text-construction-gray leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.checks.map((check) => (
                    <li key={check} className="flex items-center text-construction-green">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span className="font-medium text-construction-dark/80">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="relative">
                  <div className="absolute -top-3 -right-3 w-full h-full border-2 border-dashed border-construction-dark/10 rounded-2xl" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
