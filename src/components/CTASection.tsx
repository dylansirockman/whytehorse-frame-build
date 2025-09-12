import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-surface relative py-16 lg:py-32 overflow-hidden text-construction-dark"
      style={{ backgroundColor: "hsl(var(--section-primary))" }}
      data-grid-opacity="0.055"
      role="region"
      aria-labelledby="cta-heading"
    >

      {/* Blueprint grid background (stays consistent with site) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="grid-layer grid-layer-fine" />
        <div className="grid-layer grid-layer-bold" />
        <div
          className="absolute inset-0 z-[3]"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 20%, rgba(2,6,23,0.04), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Heading */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ease-out motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 motion-reduce:translate-y-0"
          }`}
        >
          <h2 id="cta-heading" className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Ready to <span className="text-construction-green">Frame</span> Your Vision?
          </h2>
          <p className="text-base lg:text-xl text-construction-gray max-w-2xl mx-auto leading-relaxed">
            Get your framing project started with a free consultation and detailed quote. Let’s build something exceptional together.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto transition-all duration-700 ease-out motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 motion-reduce:translate-y-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          {/* Card: Phone */}
          <div className="group relative">
            {/* Gradient frame wrapper for subtle pop */}
            <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(180deg,rgba(16,185,129,0.18),rgba(16,185,129,0.04))] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div
              className="relative p-6 lg:p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-black/10 shadow-lg shadow-emerald-500/5
                         transition-all duration-300 ease-out
                         group-hover:shadow-xl group-hover:shadow-emerald-500/10
                         group-hover:-translate-y-0.5 focus-within:-translate-y-0.5"
            >
              {/* top inner hairline for depth */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-construction-green/15 flex items-center justify-center mr-4 ring-1 ring-construction-green/20">
                  <Phone className="w-6 h-6 text-construction-green" />
                </div>
                <h3 className="text-xl font-semibold">Quick Call</h3>
              </div>
              <p className="text-construction-gray mb-6 text-sm lg:text-base">
                Speak directly with our framing specialists. Get immediate answers and schedule your consultation.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full min-h-[44px] border-construction-green text-construction-green hover:bg-construction-green hover:text-construction-dark focus-visible:ring-2 focus-visible:ring-construction-green/40"
                asChild
              >
                <a href="tel:+14035550123" aria-label="Call WhyteHorse Contracting at (403) 555-0123">
                  Call (403) 555-0123
                </a>
              </Button>

              {/* corner tick marks for blueprint vibe */}
              <span className="pointer-events-none absolute left-4 top-4 h-3 w-px bg-construction-dark/15" />
              <span className="pointer-events-none absolute left-4 top-4 w-3 h-px bg-construction-dark/15" />
              <span className="pointer-events-none absolute right-4 bottom-4 h-3 w-px bg-construction-dark/15" />
              <span className="pointer-events-none absolute right-4 bottom-4 w-3 h-px bg-construction-dark/15" />
            </div>
          </div>

          {/* Card: Email */}
          <div className="group relative">
            <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(180deg,rgba(16,185,129,0.18),rgba(16,185,129,0.04))] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div
              className="relative p-6 lg:p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-black/10 shadow-lg shadow-emerald-500/5
                         transition-all duration-300 ease-out
                         group-hover:shadow-xl group-hover:shadow-emerald-500/10
                         group-hover:-translate-y-0.5 focus-within:-translate-y-0.5"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-construction-green/15 flex items-center justify-center mr-4 ring-1 ring-construction-green/20">
                  <Mail className="w-6 h-6 text-construction-green" />
                </div>
                <h3 className="text-xl font-semibold">Email Quote</h3>
              </div>
              <p className="text-construction-gray mb-6 text-sm lg:text-base">
                Send us your project details and plans. We’ll respond with a detailed quote within 24 hours.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="w-full min-h-[44px] focus-visible:ring-2 focus-visible:ring-white/50"
                asChild
              >
                <a href="mailto:info@whytehorsecontracting.com" aria-label="Email WhyteHorse Contracting for a quote">
                  Get Email Quote
                </a>
              </Button>

              {/* blueprint corner ticks */}
              <span className="pointer-events-none absolute left-4 top-4 h-3 w-px bg-construction-dark/15" />
              <span className="pointer-events-none absolute left-4 top-4 w-3 h-px bg-construction-dark/15" />
              <span className="pointer-events-none absolute right-4 bottom-4 h-3 w-px bg-construction-dark/15" />
              <span className="pointer-events-none absolute right-4 bottom-4 w-3 h-px bg-construction-dark/15" />
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className={`text-center mt-12 lg:mt-16 transition-all duration-700 ease-out motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 motion-reduce:translate-y-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
        >
          <p className="text-construction-gray/60 text-sm lg:text-base">
            Licensed • Insured • COR Safety Certified
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
