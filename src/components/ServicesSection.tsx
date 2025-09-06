import { useEffect, useRef, useState } from "react";
import { Home, Plus, Building, Wrench } from "lucide-react";
import BlueprintPillHeader from "./BlueprintPillHeader";

const services = [
  {
    icon: Home,
    title: "Residential House Framing",
    description:
      "Complete framing solutions for single-family homes, from foundation to roof structure.",
    features: ["Foundation prep", "Floor systems", "Wall framing", "Roof trusses"],
  },
  {
    icon: Plus,
    title: "Additions & Renovations",
    description:
      "Expert framing for home additions, extensions, and major renovation projects.",
    features: ["Home extensions", "Room additions", "Structural modifications", "Code compliance"],
  },
  {
    icon: Building,
    title: "Multi-Family Framing",
    description:
      "Specialized framing services for duplexes, townhomes, and apartment complexes.",
    features: ["Multi-unit buildings", "Townhouse complexes", "Duplex construction", "Commercial framing"],
  },
  {
    icon: Wrench,
    title: "Structural Repairs",
    description:
      "Professional structural repair and reinforcement services for existing frames.",
    features: ["Beam reinforcement", "Foundation repairs", "Load bearing walls", "Code upgrades"],
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.12, rootMargin: "-40px" }
    );
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-28 overflow-hidden bg-white"
      aria-label="Framing Services"
    >
      {/* Subtle background grid only (lighter than About) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(31,41,55,0.018) 0,
                rgba(31,41,55,0.018) 1px,
                transparent 1px,
                transparent 36px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(31,41,55,0.018) 0,
                rgba(31,41,55,0.018) 1px,
                transparent 1px,
                transparent 36px
              )
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="flex justify-center mb-5">
            <BlueprintPillHeader index="2" title="Service Portfolio" metaRight="Rev. 2025.1" as="div" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-construction-dark mb-4 leading-tight">
            Comprehensive Framing Solutions
          </h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto leading-relaxed">
            From single homes to multi-family builds, our framing specialists deliver reliable structure—on spec and on schedule.
          </p>
        </div>

        {/* Cards — simplified & airy */}
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const delay = 0.08 + i * 0.05;
            return (
              <article
                key={service.title}
                className={`relative rounded-2xl border border-construction-light bg-white/90 shadow-sm transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                } hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5`}
                style={{ transitionDelay: isVisible ? `${delay}s` : "0s" }}
                aria-label={service.title}
              >
                {/* Card body */}
                <div className="p-8">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-construction-green/10 grid place-items-center shrink-0">
                      <Icon className="w-7 h-7 text-construction-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-construction-dark leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-construction-gray leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features — minimal bullets */}
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-construction-gray">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-construction-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Soft divider + inline “spec” tags (super light) */}
                <div className="px-8 pb-6">
                  <div className="h-px bg-construction-light/60 mb-4" />
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-construction-gray/80 bg-construction-white px-2 py-1 rounded">
                      Specialist Crew
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-construction-gray/80 bg-construction-white px-2 py-1 rounded">
                      COR Safety
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-construction-gray/80 bg-construction-white px-2 py-1 rounded">
                      On-Time Delivery
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
