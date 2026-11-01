"use client";

import { useEffect } from "react";

export function useLockBodyScroll(locked: Boolean) {
  useEffect(() => {
    if (!locked) return;

    const { body, documentElement } = document;
    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    // Width of the scrollbar that is about to disappear
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`; // prevents layout shift
    }

    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;
    };
  }, [locked]);
}
