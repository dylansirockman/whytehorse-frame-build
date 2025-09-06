// src/pages/Index.tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/** Smooth anchor scrolling with header offset + graceful cancellation */
function SmoothScrolling({
  headerHeight = 96,       // px; adjust if your header is taller/shorter
  durationMs = 600,        // total animation time
}: {
  headerHeight?: number;
  durationMs?: number;
}) {
  useEffect(() => {
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let rafId: number | null = null;
    let cancelling = false;

    const cancelers = [
      ["wheel", { passive: true }],
      ["touchstart", { passive: true }],
      ["keydown", { passive: true }],
      ["mousedown", { passive: true }],
    ] as const;

    const cancel = () => {
      cancelling = true;
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      // Remove cancel listeners after cancel
      cancelers.forEach(([evt, opts]) => window.removeEventListener(evt, cancel, opts as any));
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = decodeURIComponent(link.getAttribute("href") || "");
      if (hash === "#" || hash.length < 2) return;

      const el = document.getElementById(hash.slice(1));
      if (!el) return;

      e.preventDefault();

      // Starting/ending positions
      const startY = window.scrollY;
      const rect = el.getBoundingClientRect();
      const destY = rect.top + window.scrollY - headerHeight;

      const start = performance.now();
      cancelling = false;

      // Add cancel listeners for user intent override
      cancelers.forEach(([evt, opts]) => window.addEventListener(evt, cancel, opts as any));

      const step = (now: number) => {
        if (cancelling) return;
        const t = Math.min(1, (now - start) / durationMs);
        const eased = easeInOutCubic(t);
        const y = Math.round(startY + (destY - startY) * eased);
        window.scrollTo(0, y);
        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          // Focus the target for a11y after scroll completes
          (el as HTMLElement).setAttribute("tabindex", "-1");
          (el as HTMLElement).focus({ preventScroll: true });
          (el as HTMLElement).removeAttribute("tabindex");

          // Clean up listeners
          cancelers.forEach(([evt, opts]) => window.removeEventListener(evt, cancel, opts as any));
        }
      };

      rafId = requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancel();
    };
  }, [headerHeight, durationMs]);

  // Nothing to render
  return null;
}

const Index = () => {
  return (
    <>
      <Header />
      {/* scroll-padding provides native offset for :target jumps; CSS var also used below */}
      <main
        className="scroll-smooth [scroll-padding-top:6rem]"
        style={{ ["--app-header-h" as any]: "96px" }}
      >
        {/* Global style to make deep links land cleanly without editing each section */}
        <style>{`
          section[id] { scroll-margin-top: var(--app-header-h, 96px); }
        `}</style>

        <SmoothScrolling headerHeight={96} durationMs={650} />

        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TrustSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
