import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-construction-dark text-white"
    >
      {/* Top paper fold / shadow */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/40 to-transparent z-10" />

      {/* Blueprint grid background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.25]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 36px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 36px)
            `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 20%, rgba(0,0,0,0.35), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div 
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ease-out motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 motion-reduce:translate-y-0"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Ready to <span className="text-construction-green">Frame</span> Your Vision?
          </h2>
          <p className="text-base lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Get your framing project started with a free consultation and detailed quote. Let's build something exceptional together.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto transition-all duration-700 ease-out motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 motion-reduce:translate-y-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          {/* Phone Contact */}
          <div className="p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-construction-green/20 flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-construction-green" />
              </div>
              <h3 className="text-xl font-semibold">Quick Call</h3>
            </div>
            <p className="text-white/70 mb-6 text-sm lg:text-base">
              Speak directly with our framing specialists. Get immediate answers and schedule your consultation.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full min-h-[44px] border-construction-green text-construction-green hover:bg-construction-green hover:text-construction-dark"
              asChild
            >
              <a href="tel:+14035550123">
                Call (403) 555-0123
              </a>
            </Button>
          </div>

          {/* Email Contact */}
          <div className="p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-construction-green/20 flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-construction-green" />
              </div>
              <h3 className="text-xl font-semibold">Email Quote</h3>
            </div>
            <p className="text-white/70 mb-6 text-sm lg:text-base">
              Send us your project details and plans. We'll respond with a detailed quote within 24 hours.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full min-h-[44px]"
              asChild
            >
              <a href="mailto:info@whytehorsecontracting.com">
                Get Email Quote
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-12 lg:mt-16 transition-all duration-700 ease-out motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 motion-reduce:translate-y-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
        >
          <p className="text-white/60 text-sm lg:text-base">
            Licensed • Insured • COR Safety Certified
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;