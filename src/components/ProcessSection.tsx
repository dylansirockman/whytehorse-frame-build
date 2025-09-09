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

  const ImageFrame = ({
    src,
    alt,
    variant,
    label,
  }: {
    src: string;
    alt: string;
    variant: "A" | "B" | "C" | "D";
    label: string;
  }) => {
    return (
      <div className="relative">
        {/* Base image */}
        <img
          src={src}
          alt={alt}
          className="relative w-full rounded-2xl shadow-[var(--shadow-premium)]"
        />

        {/* Variant A: Hairline border + soft outer shadow */}
        {variant === "A" && (
          <>
            <div
              className="absolute inset-0 rounded-2xl ring-1 ring-construction-dark/15"
              aria-hidden="true"
            />
          </>
        )}

        {/* Variant B: White “mat” frame + hairline */}
        {variant === "B" && (
          <>
            <div
              className="absolute -inset-2 rounded-[1.25rem] bg-white/90 shadow-sm"
              aria-hidden="true"
              style={{ zIndex: -1 }}
            />
            <div
              className="absolute inset-0 rounded-2xl ring-1 ring-construction-dark/10"
              aria-hidden="true"
            />
          </>
        )}

        {/* Variant C: Caption strip + hairline */}
        {variant === "C" && (
          <>
            <div
              className="absolute inset-0 rounded-2xl ring-1 ring-construction-dark/12"
              aria-hidden="true"
            />
            <span className="absolute top-3 left-3 z-20 text-[11px] uppercase tracking-wider text-construction-gray/90 bg-white/90 backdrop-blur px-2 py-1 rounded">
              {label}
            </span>
          </>
        )}

        {/* Variant D: Faint blueprint grid overlay (clipped) */}
        {variant === "D" && (
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(to right, rgba(31,41,55,1) 0, rgba(31,41,55,1) 1px, transparent 1px, transparent 32px),
                  repeating-linear-gradient(to bottom, rgba(31,41,55,1) 0, rgba(31,41,55,1) 1px, transparent 1px, transparent 32px)
                `,
                mixBlendMode: "multiply",
              }}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-construction-dark/10" />
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Top paper fold / shadow */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 to-transparent z-10" />

      {/* Subtle blueprint background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(31,41,55,0.015) 0, rgba(31,41,55,0.015) 1px, transparent 1px, transparent 36px),
              repeating-linear-gradient(to bottom, rgba(31,41,55,0.015) 0, rgba(31,41,55,0.015) 1px, transparent 1px, transparent 36px)
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
      <div className="relative z-20 container mx-auto px-4">
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ease-out motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 motion-reduce:translate-y-0"
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
          <h2 className="text-3xl lg:text-6xl font-bold text-construction-dark mb-6 leading-tight">
            Systematic <span className="text-construction-green">Excellence</span>
          </h2>
          <p className="text-base lg:text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures quality, speed, and precision at every stage of your
            framing project.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {processSteps.map((step, i) => {
            const variant = "A"; // Use only Variant A on mobile for simplicity
            return (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                } transition-all duration-700 ease-out motion-reduce:transition-none ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 motion-reduce:translate-y-0"
                }`}
                style={{ transitionDelay: isVisible ? `${0.2 + i * 0.1}s` : "0s" }}
              >
                {/* Text */}
                <div className={`order-2 lg:order-none ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-xl border border-construction-green/40 flex items-center justify-center text-xl lg:text-2xl font-bold text-construction-green mr-0 sm:mr-6 mb-4 sm:mb-0 bg-white shadow-sm">
                      {step.number}
                    </div>
                    <h3 className="text-xl lg:text-3xl font-bold text-construction-dark">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-base lg:text-lg text-construction-gray leading-relaxed mb-6 max-w-prose">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.checks.map((check) => (
                      <li key={check} className="flex items-center text-construction-green">
                        <CheckCircle className="w-5 h-5 mr-3 shrink-0" />
                        <span className="font-medium text-construction-dark/80 text-sm lg:text-base">{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={`order-1 lg:order-none ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <ImageFrame
                    src={step.image}
                    alt={step.title}
                    variant={variant}
                    label={`${step.number} • ${step.title}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
