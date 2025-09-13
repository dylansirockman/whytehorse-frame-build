import { useEffect } from 'react';

/**
 * Custom hook to lock scroll and prevent layout shift when modals open
 * - Uses CSS scrollbar-gutter when available (no padding compensation)
 * - Falls back to JS padding compensation when not supported
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    const supportsGutter = CSS?.supports?.('scrollbar-gutter: stable both-edges') ?? false;

    const originalBodyStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalBodyStyle.overflow;
    const originalPaddingRight = originalBodyStyle.paddingRight;

    // Calculate scrollbar width BEFORE changing overflow
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (!supportsGutter && scrollbarWidth > 0) {
      // Expose width to CSS for fixed elements (header)
      document.documentElement.style.setProperty('--scrollbar-compensation', `${scrollbarWidth}px`);
      // Apply scroll lock with padding compensation
      const currentPadding = parseFloat(originalPaddingRight || '0');
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }

    // Always lock scroll
    document.body.style.overflow = 'hidden';

    return () => {
      // Restore original styles
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.documentElement.style.removeProperty('--scrollbar-compensation');
    };
  }, [isLocked]);
};