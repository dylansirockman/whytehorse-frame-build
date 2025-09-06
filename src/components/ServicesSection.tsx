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
      { threshold: 0.1, rootMargin: "-50px" }
    );
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
      {/* ===== Blueprint background (z-0) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(31,41,55,0.03) 0,
                rgba(31,41,55,0.03) 1px,
                transparent 1px,
                transparent 32px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(31,41,55,0.03) 0,
                rgba(31,41,55,0.03) 1px,
                transparent 1px,
                transparent 32px
              )
            `,
          }}
        />
        {/* Bold grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(31,41,55,0.025) 0,
                rgba(31,41,55,0.025) 1.5px,
                transparent 1.5px,
                transparent 160px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(31,41,55,0.025) 0,
                rgba(31,41,55,0.025) 1.5px,
                transparent 1.5px,
                transparent 160px
              )
            `,
          }}
        />
        {/* Faint blueprint scribbles */}
        <svg className="absolute inset-0 opacity-[0.03]" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <g stroke="#1F2937" strokeWidth="1" fill="none">
            <line x1="120" y1="140" x2="420" y2="140" strokeDasharray="6 10" />
            <line x1="120" y1="140" x2="120" y2="260" />
            <line x1="420" y1="140" x2="420" y2="260" />
          </g>
        </svg>
        {/* Soft vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(1200px 600px at 50% 12%, rgba(2,6,23,0.025), transparent 60%)",
          }}
        />
      </div>

      

      {/* ===== Content ===== */}
      <div className="relative z-20 container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
          }`}
        >
          <div className="flex justify-center mb-6">
            <BlueprintPillHeader index="2" title="Service Portfolio" metaRight="Rev. 2025.1" as="div" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-6 leading-tight">
            Comprehensive Framing Solutions
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            From single homes to complex multi-family structures, our framing teams deliver engineered precision
            aligned to your schedule and spec.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const delay = 0.15 + i * 0.08; // subtle stagger
            return (
              <article
                key={service.title}
                className={`relative group rounded-2xl border border-dashed border-construction-dark/15 bg-white/70 backdrop-blur-sm shadow-[var(--shadow-card)] transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } hover:shadow-[var(--shadow-premium)] hover:-translate-y-1`}
                style={{ transitionDelay: isVisible ? `${delay}s` : "0s" }}
                aria-label={service.title}
              >
                {/* Corner ticks */}
                <div className="pointer-events-none absolute -top-2 left-6 h-4 w-px bg-construction-dark/20" />
                <div className="pointer-events-none absolute -left-2 top-6 h-px w-4 bg-construction-dark/20" />
                <div className="pointer-events-none absolute -top-2 right-6 h-4 w-px bg-construction-dark/20" />
                <div className="pointer-events-none absolute -right-2 top-6 h-px w-4 bg-construction-dark/20" />
                <div className="pointer-events-none absolute -bottom-2 left-6 h-4 w-px bg-construction-dark/20" />
                <div className="pointer-events-none absolute -left-2 bottom-6 h-px w-4 bg-construction-dark/20" />
                <div className="pointer-events-none absolute -bottom-2 right-6 h-4 w-px bg-construction-dark/20" />
                <div className="pointer-events-none absolute -right-2 bottom-6 h-px w-4 bg-construction-dark/20" />

                {/* Inner dashed inset */}
                <div className="absolute inset-2 rounded-xl border border-dashed border-construction-dark/10 pointer-events-none" />

                {/* Header row (spec strip) */}
                <div className="flex items-center justify-between px-8 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-construction-green/10 w-14 h-14 rounded-xl grid place-items-center group-hover:bg-construction-green transition-colors duration-300">
                      <Icon className="w-8 h-8 text-construction-green group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-construction-dark group-hover:text-construction-green transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-[11px] tracking-widest uppercase text-construction-gray/80">
                    SVC-{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Divider */}
                <div className="mx-8 my-6 h-px bg-gradient-to-r from-transparent via-construction-dark/10 to-transparent" />

                {/* Body */}
                <div className="px-8 pb-8">
                  <p className="text-construction-gray leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-construction-gray">
                        {/* blueprint bullet */}
                        <svg width="16" height="16" className="mr-2 opacity-80" aria-hidden="true">
                          <rect x="6.5" y="2" width="3" height="12" fill="currentColor" />
                          <rect x="2" y="6.5" width="12" height="3" fill="currentColor" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Spec footer */}
                  <div className="mt-6 grid grid-cols-3 divide-x divide-construction-dark/10 rounded-lg border border-dashed border-construction-dark/15 bg-white/60">
                    <div className="p-3 text-center">
                      <div className="text-sm font-semibold text-construction-green">Crew</div>
                      <div className="text-[11px] uppercase tracking-wider text-construction-gray">Specialists</div>
                    </div>
                    <div className="p-3 text-center">
                      <div className="text-sm font-semibold text-construction-green">Safety</div>
                      <div className="text-[11px] uppercase tracking-wider text-construction-gray">COR+</div>
                    </div>
                    <div className="p-3 text-center">
                      <div className="text-sm font-semibold text-construction-green">Schedule</div>
                      <div className="text-[11px] uppercase tracking-wider text-construction-gray">On-Time</div>
                    </div>
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
