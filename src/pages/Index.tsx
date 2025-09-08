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

/** Smooth anchor scrolling with dynamic header offset + a11y + graceful cancel */
function SmoothScrolling({
  headerHeight = 96,   // Fallback if header can't be measured
  durationMs = 650,
}: {
  headerHeight?: number;
  durationMs?: number;
}) {
  // --- Helpers (scoped to this component) ---
  const getHeaderEl = () =>
    document.querySelector<HTMLElement>('header[role="banner"]');

  const getHeaderPx = (fallback: number) => {
    const el = getHeaderEl();
    return el ? Math.round(el.getBoundingClientRect().height) : fallback;
  };

  // Keep CSS var in sync so both JS scroll and native :target use the same offset
  const syncHeaderVar = (fallback: number) => {
    const px = getHeaderPx(fallback);
    document.documentElement.style.setProperty("--app-header-h", `${px}px`);
    return px;
  };

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let rafId: number | null = null;
    let cancelling = false;

    // Ensure var is set immediately
    syncHeaderVar(headerHeight);

    // Update var on resize and scroll (your header style/height changes on scroll)
    const onResize = () => syncHeaderVar(headerHeight);
    const onScrollVar = () => syncHeaderVar(headerHeight);
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScrollVar, { passive: true });

    const cancel = () => {
      cancelling = true;
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      removeCancelListeners();
    };

    const cancelOpts: AddEventListenerOptions = { passive: true, capture: false };
    const addCancelListeners = () => {
      window.addEventListener("wheel", cancel, cancelOpts);
      window.addEventListener("touchstart", cancel, cancelOpts);
      window.addEventListener("keydown", cancel, cancelOpts);
      window.addEventListener("mousedown", cancel, cancelOpts);
    };
    const removeCancelListeners = () => {
      window.removeEventListener("wheel", cancel, cancelOpts);
      window.removeEventListener("touchstart", cancel, cancelOpts);
      window.removeEventListener("keydown", cancel, cancelOpts);
      window.removeEventListener("mousedown", cancel, cancelOpts);
    };

    const scrollToTarget = (el: HTMLElement) => {
      const startY = window.scrollY;
      const rect = el.getBoundingClientRect();
      const hh = syncHeaderVar(headerHeight); // measure live header height
      const destY = rect.top + window.scrollY - hh;

      if (prefersReduced || durationMs <= 0) {
        window.scrollTo(0, destY);
        el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
        el.removeAttribute("tabindex");
        return;
      }

      const start = performance.now();
      cancelling = false;
      addCancelListeners();

      const step = (now: number) => {
        if (cancelling) return;
        const t = Math.min(1, (now - start) / durationMs);
        const eased = easeInOutCubic(t);
        const y = Math.round(startY + (destY - startY) * eased);
        window.scrollTo(0, y);
        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
          el.removeAttribute("tabindex");
          removeCancelListeners();
        }
      };

      rafId = requestAnimationFrame(step);
    };

    const isSamePageHash = (link: HTMLAnchorElement) => {
      try {
        const url = new URL(link.href, window.location.href);
        return (
          url.origin === window.location.origin &&
          url.pathname === window.location.pathname &&
          url.hash.startsWith("#") &&
          url.hash.length > 1
        );
      } catch {
        return false;
      }
    };

    const clickHandler = (e: MouseEvent) => {
      // Only left-click without modifiers
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="#"], a[href*="#"]');
      if (!link || !isSamePageHash(link)) return;

      const hash = decodeURIComponent(link.hash);
      const el = document.getElementById(hash.slice(1));
      if (!el) return;

      e.preventDefault();
      scrollToTarget(el);
      // Keep URL in sync (optional: comment out if you don't want history entries)
      history.pushState(null, "", hash);
    };

    const handleHashJump = () => {
      const { hash } = window.location;
      if (!hash || hash.length < 2) return;
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return;
      // Allow layout to settle before measuring
      queueMicrotask(() => scrollToTarget(el));
    };

    document.addEventListener("click", clickHandler, { capture: true });
    window.addEventListener("load", handleHashJump, { once: true });
    window.addEventListener("hashchange", handleHashJump);

    return () => {
      document.removeEventListener("click", clickHandler, { capture: true } as any);
      window.removeEventListener("load", handleHashJump as any);
      window.removeEventListener("hashchange", handleHashJump as any);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollVar);
      cancel();
    };
  }, [headerHeight, durationMs]);

  return null;
}

const Index = () => {
  return (
    <>
      <Header />
      {/* scroll-padding provides native offset for :target jumps; CSS var also used below */}
      <main
        className="scroll-smooth [scroll-padding-top:6rem]"
        // Inline default; JS keeps --app-header-h in sync with real header height
        style={{ ["--app-header-h" as any]: "96px" }}
      >
        {/* Make any <section id="..."> land cleanly without per-section edits */}
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
