import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

// Read the same header offset var your Index.tsx maintains
const getHeaderOffset = (fallback = 96) => {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue("--app-header-h")
    .trim();
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Solidify header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section + clear at top so Hero shows no underline
  useEffect(() => {
    const sectionIds = NAV.map((n) => n.href.slice(1));
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (nodes.length === 0) return;

    let lastFromObserver = ""; // remember what observer thinks is active

    const updateTopState = () => {
      const hh = getHeaderOffset(96);
      const first = nodes[0]; // "#about"
      const firstTop = first.getBoundingClientRect().top + window.scrollY;
      // If we are above the first section's top (minus a small buffer for header),
      // consider ourselves in the Hero region -> clear active.
      if (window.scrollY < firstTop - hh - 4) {
        if (active !== "") setActive(""); // clear when in hero
      } else {
        // Once we're past About, restore what observer saw
        if (lastFromObserver !== active) setActive(lastFromObserver);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const hh = getHeaderOffset(96);
        // Pick the most visible section that is below the header line
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          lastFromObserver = visible[0].target.id;
        }
        // Sync with top-state logic
        updateTopState();
      },
      {
        // Top margin: push the intersection line down by header height + 8px,
        // so sections only count as active after they clear the sticky header.
        rootMargin: `-${getHeaderOffset(96) + 8}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    nodes.forEach((el) => observer.observe(el));

    // Keep things correct when resizing/scrolling (header height can change)
    const onScroll = () => updateTopState();
    const onResize = () => updateTopState();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Initialize correct state on mount
    updateTopState();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  // Close mobile when navigating
  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-black/10 shadow-sm"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      ].join(" ")}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="h-20 flex items-center justify-between gap-4">
          {/* Brand -> go to Hero */}
          <a
            href="#hero"
            className="flex items-center group"
            aria-label="WhyteHorse Contracting - Home"
            onClick={handleNavClick}
          >
            <div className="flex flex-col leading-none">
              <span className="text-2xl lg:text-3xl font-bold tracking-tight">
                <span className="text-construction-dark">Whyte</span>
                <span className="text-construction-green">horse</span>
              </span>
              <span className="mt-0.5 text-[11px] lg:text-xs font-medium tracking-[0.14em] uppercase text-construction-gray group-hover:text-construction-dark/80 transition-colors">
                Contracting
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {NAV.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={[
                    "relative font-medium transition-colors",
                    isActive ? "text-construction-green" : "text-construction-dark hover:text-construction-green"
                  ].join(" ")}
                >
                  {item.label}
                  {/* active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded bg-construction-green" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+14035550123"
              className="hidden md:inline-flex items-center gap-2 text-construction-dark font-medium hover:text-construction-green transition-colors"
            >
              <Phone className="h-4 w-4 opacity-70" />
              (403) 555-0123
            </a>

            <Button
              variant="hero"
              size="sm"
              className="hidden md:inline-flex font-semibold px-4 py-2 rounded-xl
                         bg-gradient-to-b from-[#23D3A0] to-[#10B981]
                         text-white shadow-[0_6px_20px_rgba(16,185,129,0.25)]
                         border border-white/40 hover:brightness-[1.03] transition"
            >
              Get Quote
            </Button>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10 bg-white/70 hover:bg-white transition"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Sheet / Drawer */}
        <div
          id="mobile-menu"
          className={[
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
          ].join(" ")}
        >
          <div className="pb-6 border-t border-black/10">
            <nav className="flex flex-col py-3" aria-label="Mobile">
              {NAV.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={[
                      "px-1 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "text-construction-green"
                        : "text-construction-dark hover:text-construction-green"
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-2 flex flex-col gap-3">
              <a
                href="tel:+14035550123"
                className="inline-flex items-center gap-2 text-construction-dark hover:text-construction-green transition-colors"
              >
                <Phone className="h-4 w-4 opacity-70" />
                (403) 555-0123
              </a>
              <Button
                variant="hero"
                size="sm"
                className="font-semibold px-4 py-2 rounded-xl
                           bg-gradient-to-b from-[#23D3A0] to-[#10B981]
                           text-white shadow-[0_6px_20px_rgba(16,185,129,0.25)]
                           border border-white/40 hover:brightness-[1.03] transition w-fit"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
