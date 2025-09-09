import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-construction-dark text-white">
      {/* Top paper fold / shadow */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/40 to-transparent z-10" />

      {/* Blueprint grid background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.25]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 36px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 36px)
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
      <div className="relative z-20 container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-3">
          {/* Brand / blurb */}
          <div>
            <div className="flex items-center group" aria-label="WhyteHorse Contracting - Logo">
              <div className="flex flex-col leading-none">
                <span className="text-2xl lg:text-3xl font-bold tracking-tight">
                  <span className="text-white">Whyte</span>
                  <span className="text-construction-green">horse</span>
                </span>
                <span className="mt-0.5 text-[11px] lg:text-xs font-medium tracking-[0.14em] uppercase text-white/70 group-hover:text-white transition-colors">
                  Contracting
                </span>
              </div>
            </div>

            <p className="mt-5 text-white/80 leading-relaxed max-w-sm lg:max-w-xs">
              Framing specialists delivering structural integrity—on spec and on
              schedule.
            </p>

            {/* Quick CTA */}
            <div className="mt-6">
              <a
                href="tel:+14035550123"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-construction-green px-4 py-3 font-medium text-construction-dark hover:brightness-95 transition min-h-[44px] w-full lg:w-auto"
              >
                Request a Quote
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Services (nav) */}
          <nav aria-label="Services">
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#services" className="hover:text-white transition py-1 inline-block min-h-[44px] flex items-center">
                  Residential House Framing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition py-1 inline-block min-h-[44px] flex items-center">
                  Additions &amp; Renovations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition py-1 inline-block min-h-[44px] flex items-center">
                  Multi-Family Framing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition py-1 inline-block min-h-[44px] flex items-center">
                  Structural Repairs
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact (address) */}
          <address className="not-italic">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="tel:+14035550123" className="hover:text-white transition py-1 inline-block min-h-[44px] flex items-center">
                  Phone: (403) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@whytehorsecontracting.com"
                  className="hover:text-white transition py-1 inline-block min-h-[44px] flex items-center break-all"
                >
                  info@whytehorsecontracting.com
                </a>
              </li>
              <li className="py-1 min-h-[44px] flex items-center">Serving Alberta</li>
            </ul>

            {/* Inline “plan strip” */}
            <div className="mt-6 rounded-lg ring-1 ring-white/15 p-3">
              <div className="text-[11px] uppercase tracking-wider text-white/60">
                Hours
              </div>
              <div className="mt-1 text-sm text-white/80">
                Mon–Fri 7:00–5:00 • Sat by appointment
              </div>
            </div>
          </address>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom row */}
        <div className="mt-8 lg:mt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-white/60">
          <p className="text-center lg:text-left">&copy; {year} WhyteHorse Contracting. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            <a href="#about" className="hover:text-white transition py-2 px-2 min-h-[44px] flex items-center">
              About
            </a>
            <a href="#process" className="hover:text-white transition py-2 px-2 min-h-[44px] flex items-center">
              Process
            </a>
            <a href="#services" className="hover:text-white transition py-2 px-2 min-h-[44px] flex items-center">
              Services
            </a>
            <a href="#contact" className="hover:text-white transition py-2 px-2 min-h-[44px] flex items-center">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
