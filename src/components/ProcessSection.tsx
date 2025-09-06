import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import BlueprintPillHeader from "./BlueprintPillHeader";

const processSteps = [
  {
    number: "01",
    title: "Layout & Planning",
    description:
      "Precise measurements and layout according to architectural plans with detailed material calculations.",
    image: "/lovable-uploads/a1ba7767-1cbb-44b9-8f4c-28d79e8d894b.png",
    checks: ["Precision measurements", "Accurate material takeoffs", "Code-compliant layout"],
  },
  {
    number: "02",
    title: "Floor Systems",
    description:
      "Foundation and floor joist installation with structural integrity and proper load distribution.",
    image: "/lovable-uploads/7f4a1d23-20ba-4078-85b6-248cba2c8d83.png",
    checks: ["Engineered joists", "Load distribution", "Moisture protection"],
  },
  {
    number: "03",
    title: "Walls & Openings",
    description:
      "Wall framing with precise door and window openings, ensuring proper structural support.",
    image: "/lovable-uploads/c134fe50-b338-4170-a0d5-f053aef93ab4.png",
    checks: ["Plumb & level walls", "Structural openings", "Sheathing alignment"],
  },
  {
    number: "04",
    title: "Roof Systems",
    description:
      "Complete roof framing and truss installation with engineered precision and weather protection.",
    image: "/lovable-uploads/073b7385-c711-4d21-bdf2-a27e21f46e1c.png",
    checks: ["Engineered trusses", "Weather protection", "Fast installation"],
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "-50px" }
    );
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Top paper fold / shadow */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 to-transparent z-10" />

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
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 12%, rgba(2,6,23,0.02), transparent 60%)",
          }}
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
              metaRight={`Scale 1/4" = 1'-0"`}
              as="div"
            />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-6 leading-tight">
            Systematic <span className="text-construction-green">Excellence</span>
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures quality, speed, and precision at every stage of your
            framing project.
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
              {/* Text */}
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

              {/* Image (construction plan frame variants) */}
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="relative">
                  {/* Image */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
                  />

                  {/* Plan label (always on top) */}
                  <span className="absolute top-3 left-3 z-30 text-[10px] uppercase tracking-wider text-construction-gray/90 bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                    {step.number} • {step.title}
                  </span>

                  {/* Variant A: dashed offset (step 1) */}
                  {i % 4 === 0 && (
                    <div
                      className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-dashed border-construction-dark/30 z-20 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  {/* Variant B: subtle inset dashed (step 2) */}
                  {i % 4 === 1 && (
                    <div
                      className="absolute inset-3 rounded-xl border-2 border-dashed border-construction-dark/25 z-20 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  {/* Variant C: corner ticks (step 3) */}
                  {i % 4 === 2 && (
                    <>
                      <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/40 z-20" />
                      <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/40 z-20" />
                      <div className="pointer-events-none absolute -bottom-2 right-6 h-4 w-px bg-construction-dark/40 z-20" />
                      <div className="pointer-events-none absolute -right-2 bottom-6 h-px w-4 bg-construction-dark/40 z-20" />
                    </>
                  )}

                  {/* Variant D: faint dimension lines overlay (step 4) */}
                  {i % 4 === 3 && (
                    <svg
                      className="absolute inset-0 z-20 opacity-30 pointer-events-none"
                      viewBox="0 0 1200 800"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <g stroke="#1F2937" strokeWidth="1" fill="none">
                        <line x1="120" y1="680" x2="1080" y2="680" strokeDasharray="6 10" />
                        <path d="M120 680 l14 -8 v16 z" />
                        <path d="M1080 680 l-14 -8 v16 z" />
                        <line x1="240" y1="540" x2="300" y2="540" />
                        <line x1="270" y1="510" x2="270" y2="570" />
                      </g>
                    </svg>
                  )}
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
