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
  const [sectionVisible, setSectionVisible] = useState(false);

  // per-card refs + visibility
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() => services.map(() => false));

  useEffect(() => {
    // Reveal header when section enters viewport - more mobile-friendly thresholds
    const sectionObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          sectionObs.disconnect();
        }
      },
      {
        threshold: 0.1, // Lower threshold for mobile
        rootMargin: "0px 0px -10% 0px", // Less aggressive margin for mobile
      }
    );
    if (sectionRef.current) sectionObs.observe(sectionRef.current);
    return () => sectionObs.disconnect();
  }, []);

  useEffect(() => {
    // Reveal each card as it enters viewport
    const cardObs = new IntersectionObserver(
      (entries) => {
        setRevealed((prev) => {
          const next = [...prev];
          for (const e of entries) {
            if (e.isIntersecting) {
              const idx = Number((e.target as HTMLElement).dataset.index);
              if (!Number.isNaN(idx)) next[idx] = true;
            }
          }
          return next;
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    cardRefs.current.forEach((el) => el && cardObs.observe(el));
    return () => cardObs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-surface relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "hsl(var(--section-primary))" }}
      data-grid-opacity="0.07"
      aria-label="Framing Services"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid layers using new system */}
        <div className="grid-layer grid-layer-fine" />
        <div className="grid-layer grid-layer-bold" />
        <div
          className="absolute inset-0 z-[3]"
          style={{ background: "radial-gradient(1200px 600px at 50% 12%, rgba(2,6,23,0.04), transparent 60%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Header (reveals only when section enters) */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none
            ${sectionVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-2 blur-[1px] motion-reduce:translate-y-0 motion-reduce:blur-0"}
          `}
        >
          <div className="flex justify-center mb-5">
            <BlueprintPillHeader index="2" title="Service Portfolio" metaRight="Rev. 2025.1" as="div" />
          </div>
          <h2 className="text-3xl lg:text-6xl font-bold text-construction-dark mb-4 leading-tight">
            Comprehensive Framing Solutions
          </h2>
          <p className="text-base lg:text-lg text-construction-gray max-w-3xl mx-auto leading-relaxed">
            From single homes to complex multi-family structures, our framing teams deliver engineered precision aligned to your schedule and spec.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const baseDelay = 0.05; // base delay once a card is visible
            const isCardVisible = revealed[i];
            return (
              <article
                key={service.title}
                data-index={i}
                ref={(el) => (cardRefs.current[i] = el)}
                tabIndex={0}
                className={`relative group rounded-2xl border border-construction-dark/10 bg-white/80 backdrop-blur-sm shadow-sm outline-none
                  transition-[opacity,transform,box-shadow,filter] duration-600 ease-out motion-reduce:transition-none
                  ${isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 motion-reduce:translate-y-0"}
                  hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-construction-green/50`}
                style={{ transitionDelay: isCardVisible ? `${baseDelay}s` : "0s" }}
                aria-label={service.title}
              >
                {/* Minimal corner ticks */}
                <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/15" />
                <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/15" />

                <div className="p-6 lg:p-8">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-3">
                    {/* Icon pop-in */}
                    <div
                      className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-construction-green/10 grid place-items-center shrink-0
                        transition-[opacity,transform,filter,background-color] duration-500 ease-out motion-reduce:transition-none
                        ${isCardVisible ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-[0.5px] motion-reduce:scale-100 motion-reduce:blur-0 motion-reduce:opacity-100"}
                        group-hover:bg-construction-green
                      `}
                      style={{ transitionDelay: isCardVisible ? `${baseDelay + 0.04}s` : "0s" }}
                    >
                      <Icon className="w-5 h-5 lg:w-7 lg:h-7 text-construction-green transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                    </div>

                    {/* Title slide-in */}
                    <h3
                      className={`text-lg lg:text-xl font-semibold text-construction-dark leading-snug
                        transition-[opacity,transform,filter] duration-600 ease-out motion-reduce:transition-none
                        ${isCardVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-1 blur-[0.5px] motion-reduce:translate-y-0 motion-reduce:blur-0 motion-reduce:opacity-100"}
                      `}
                      style={{ transitionDelay: isCardVisible ? `${baseDelay + 0.08}s` : "0s" }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm lg:text-base text-construction-gray leading-relaxed mb-5
                      transition-[opacity,transform,filter] duration-600 ease-out motion-reduce:transition-none
                      ${isCardVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-1 blur-[0.5px] motion-reduce:translate-y-0 motion-reduce:blur-0 motion-reduce:opacity-100"}
                    `}
                    style={{ transitionDelay: isCardVisible ? `${baseDelay + 0.14}s` : "0s" }}
                  >
                    {service.description}
                  </p>

                  {/* Features (cascade after card is visible) */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={feature}
                        className={`flex items-center text-sm text-construction-gray
                          transition-[opacity,transform,filter] duration-500 ease-out motion-reduce:transition-none
                          ${isCardVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-1 blur-[0.5px] motion-reduce:translate-y-0 motion-reduce:blur-0 motion-reduce:opacity-100"}
                        `}
                        style={{ transitionDelay: isCardVisible ? `${baseDelay + 0.18 + idx * 0.05}s` : "0s" }}
                      >
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-construction-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Light divider + tags */}
                <div className="px-6 lg:px-8 pb-6">
                  {/* Divider wipe */}
                  <div className="h-px overflow-hidden mb-3">
                    <div
                      className={`h-px bg-construction-dark/10 origin-left
                        transition-transform duration-700 ease-out
                        ${isCardVisible ? "scale-x-100" : "scale-x-0"}
                      `}
                      style={{ transitionDelay: isCardVisible ? `${baseDelay + 0.18 + services[i].features.length * 0.05 + 0.05}s` : "0s" }}
                    />
                  </div>

                  {/* Tags fade-up */}
                  <div
                    className={`flex flex-wrap gap-2
                      transition-[opacity,transform,filter] duration-600 ease-out motion-reduce:transition-none
                      ${isCardVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-1 blur-[0.5px] motion-reduce:translate-y-0 motion-reduce:blur-0 motion-reduce:opacity-100"}
                    `}
                    style={{ transitionDelay: isCardVisible ? `${baseDelay + 0.18 + services[i].features.length * 0.05 + 0.12}s` : "0s" }}
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
