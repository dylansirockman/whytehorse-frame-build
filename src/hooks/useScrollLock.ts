import { useEffect } from 'react';

/**
 * Custom hook to lock scroll and prevent layout shift when modals open
 * Adds padding-right to body equivalent to scrollbar width
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;
    const originalPaddingRight = originalStyle.paddingRight;

    // Calculate scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Apply scroll lock with padding compensation
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${parseInt(originalPaddingRight) + scrollbarWidth}px`;

    return () => {
      // Restore original styles
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
};