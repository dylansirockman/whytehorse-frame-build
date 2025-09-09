import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import BlueprintPillHeader from "./BlueprintPillHeader";

const CTASection = () => {
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
      id="contact"
      className="relative py-32 overflow-hidden bg-white"
      aria-label="Contact WhyteHorse Contracting"
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
              "radial-gradient(1200px 600px at 50% 14%, rgba(2,6,23,0.02), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="flex justify-center mb-6">
            <BlueprintPillHeader
              index="4"
              title="Project Inquiry"
              metaRight="Contact Form Rev. A"
              as="div"
            />
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-construction-dark mb-6 leading-tight">
            Start Your Next Build
            <br />
            <span className="text-construction-green">with Confidence</span>
          </h2>

          <p className="text-xl text-construction-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact WhyteHorse Contracting today and discover why Alberta&apos;s top builders
            trust us for framing that&apos;s fast, reliable, and built to last.
          </p>
        </div>

        {/* Contact blocks */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <article
            className={`rounded-2xl bg-white/85 backdrop-blur-sm ring-1 ring-construction-dark/10 shadow-sm transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
          >
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-construction-green/10 grid place-items-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-construction-green" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-construction-dark mb-1">Call Us</h3>
              <a
                href="tel:+14035550123"
                className="text-construction-green font-medium hover:underline"
              >
                (403) 555-0123
              </a>
            </div>
          </article>

          {/* Email */}
          <article
            className={`rounded-2xl bg-white/85 backdrop-blur-sm ring-1 ring-construction-dark/10 shadow-sm transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: isVisible ? "0.18s" : "0s" }}
          >
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-construction-green/10 grid place-items-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-construction-green" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-construction-dark mb-1">Email Us</h3>
              <a
                href="mailto:info@whytehorsecontracting.com"
                className="text-construction-green font-medium hover:underline break-all"
              >
                info@whytehorsecontracting.com
              </a>
            </div>
          </article>

          {/* Service area */}
          <article
            className={`rounded-2xl bg-white/85 backdrop-blur-sm ring-1 ring-construction-dark/10 shadow-sm transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: isVisible ? "0.26s" : "0s" }}
          >
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-construction-green/10 grid place-items-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-construction-green" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-construction-dark mb-1">Service Area</h3>
              <p className="text-construction-gray">Alberta &amp; Surrounding Areas</p>
            </div>
          </article>
        </div>

        {/* Actions */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: isVisible ? "0.34s" : "0s" }}
        >
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-12 py-6 h-auto font-semibold"
            asChild
          >
            <a href="tel:+14035550123" aria-label="Request a quote by phone">
              Request Free Quote
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-12 py-6 h-auto font-semibold border-construction-green text-construction-green hover:bg-construction-green hover:text-white"
            asChild
          >
            <a href="mailto:info@whytehorsecontracting.com" aria-label="Schedule a consultation by email">
              Schedule Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
