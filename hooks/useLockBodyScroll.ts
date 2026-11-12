"use client";

import { useEffect } from "react";

let lockCount = 0;
let saved: { overflow: string; paddingRight: string } | null = null;

function lock() {
  if (lockCount === 0) {
    const { body, documentElement } = document;
    saved = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };

    // Width of the scrollbar that is about to disappear
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`; // prevents layout shift
    }
  }
  lockCount++;
}

function unlock() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0 && saved) {
    document.body.style.overflow = saved.overflow;
    document.body.style.paddingRight = saved.paddingRight;
    saved = null;
  }
}

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    lock();
    return unlock;
  }, [locked]);
}
