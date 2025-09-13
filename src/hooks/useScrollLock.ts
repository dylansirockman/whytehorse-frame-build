import { useEffect } from 'react';

/**
 * Custom hook to lock scroll and prevent layout shift when modals open
 * - Locks body scroll
 * - Computes scrollbar width and applies compensation to body AND fixed elements via CSS var
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    const originalBodyStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalBodyStyle.overflow;
    const originalPaddingRight = originalBodyStyle.paddingRight;

    // Calculate scrollbar width BEFORE changing overflow
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Expose width to CSS for fixed elements
    document.documentElement.style.setProperty('--scrollbar-compensation', `${scrollbarWidth}px`);
    document.documentElement.classList.add('scroll-locked');

    // Apply scroll lock with padding compensation (only if there's a scrollbar)
    if (scrollbarWidth > 0) {
      const currentPadding = parseFloat(originalPaddingRight || '0');
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    return () => {
      // Restore original styles
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.documentElement.style.removeProperty('--scrollbar-compensation');
      document.documentElement.classList.remove('scroll-locked');
    };
  }, [isLocked]);
};