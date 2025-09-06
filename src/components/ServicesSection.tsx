import { useEffect, useRef, useState } from "react";
import { Home, Plus, Building, Wrench } from "lucide-react";
import BlueprintPillHeader from "./BlueprintPillHeader";

const services = [
  { icon: Home, title: "Residential House Framing", description: "Complete framing solutions for single-family homes, from foundation to roof structure.", features: ["Foundation prep", "Floor systems", "Wall framing", "Roof trusses"] },
  { icon: Plus, title: "Additions & Renovations", description: "Expert framing for home additions, extensions, and major renovation projects.", features: ["Home extensions", "Room additions", "Structural modifications", "Code compliance"] },
  { icon: Building, title: "Multi-Family Framing", description: "Specialized framing services for duplexes, townhomes, and apartment complexes.", features: ["Multi-unit buildings", "Townhouse complexes", "Duplex construction", "Commercial framing"] },
  { icon: Wrench, title: "Structural Repairs", description: "Professional structural repair and reinforcement services for existing frames.", features: ["Beam reinforcement", "Foundation repairs", "Load bearing walls", "Code upgrades"] },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1, rootMargin: "-50px" });
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 overflow-hidden bg-white"
      aria-label="Framing Services"
    >
      {/* Background */}
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
        {/* Header */}
        <div
          className={`text-center mb-16 transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none
            ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-2 blur-[1px] motion-reduce:translate-y-0 motion-reduce:blur-0"}
          `}
        >
          <div className="flex justify-center mb-5">
            <BlueprintPillHeader index="2" title="Service Portfolio" metaRight="Rev. 2025.1" as="div" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-4 leading-tight">
            Comprehensive Framing Solutions
          </h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto leading-relaxed">
            From single homes to complex multi-family structures, our framing teams deliver engineered precision aligned to your schedule and spec.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const delay = 0.12 + i * 0.08; // card stagger
            return (
              <article
                key={service.title}
                tabIndex={0}
                className={`relative group rounded-2xl border border-construction-dark/10 bg-white/80 backdrop-blur-sm shadow-sm outline-none
                  transition-[opacity,transform,box-shadow,filter] duration-600 ease-out motion-reduce:transition-none
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 motion-reduce:translate-y-0"}
                  hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-construction-green/50`}
                style={{ transitionDelay: isVisible ? `${delay}s` : "0s" }}
                aria-label={service.title}
              >
                {/* Minimal corner ticks (top-left only, super subtle) */}
                <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/15" />
                <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/15" />

                <div className="p-8">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-3">
                    {/* Icon pop-in */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-construction-green/10 grid place-items-center shrink-0
                        transition-[opacity,transform,filter,background-color] duration-500 ease-out
                        ${isVisible ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-[0.5px]"}
                        group-hover:bg-construction-green
                      `}
                      style={{ transitionDelay: isVisible ? `${delay + 0.05}s` : "0s" }}
                    >
                      <Icon className="w-7 h-7 text-construction-green transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                    </div>

                    {/* Title slide-in */}
                    <h3
                      className={`text-xl font-semibold text-construction-dark leading-snug
                        transition-[opacity,transform,filter] duration-600 ease-out
                        ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-1 blur-[0.5px]"}
                      `}
                      style={{ transitionDelay: isVisible ? `${delay + 0.1}s` : "0s" }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-construction-gray leading-relaxed mb-5
                      transition-[opacity,transform,filter] duration-600 ease-out
                      ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-1 blur-[0.5px]"}
                    `}
                    style={{ transitionDelay: isVisible ? `${delay + 0.18}s` : "0s" }}
                  >
                    {service.description}
                  </p>

                  {/* Features (cascade) */}
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={feature}
                        className={`flex items-center text-sm text-construction-gray
                          transition-[opacity,transform,filter] duration-500 ease-out
                          ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-1 blur-[0.5px]"}
                        `}
                        style={{ transitionDelay: isVisible ? `${delay + 0.22 + idx * 0.05}s` : "0s" }}
                      >
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-construction-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Light divider + tags */}
                <div className="px-8 pb-6">
                  {/* Divider wipe */}
                  <div className="h-px overflow-hidden mb-3">
                    <div
                      className={`h-px bg-construction-dark/10 origin-left
                        transition-transform duration-700 ease-out
                        ${isVisible ? "scale-x-100" : "scale-x-0"}
                      `}
                      style={{ transitionDelay: isVisible ? `${delay + 0.22 + service.features.length * 0.05 + 0.05}s` : "0s" }}
                    />
                  </div>

                  {/* Tags fade-up */}
                  <div
                    className={`flex flex-wrap gap-2
                      transition-[opacity,transform,filter] duration-600 ease-out
                      ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-1 blur-[0.5px]"}
                    `}
                    style={{ transitionDelay: isVisible ? `${delay + 0.22 + service.features.length * 0.05 + 0.12}s` : "0s" }}
                  >
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
