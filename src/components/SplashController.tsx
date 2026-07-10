"use client";

import { useEffect } from "react";

const MIN_DISPLAY_MS = 1400;
const FADE_MS = 500;

/** Fades out the server-rendered #site-splash after the page is ready. */
export function SplashController() {
  useEffect(() => {
    const splash = document.getElementById("site-splash");
    if (!splash) return;

    const started = Date.now();
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    document.body.style.overflow = "hidden";

    const dismiss = () => {
      const wait = Math.max(0, MIN_DISPLAY_MS - (Date.now() - started));
      fadeTimer = setTimeout(() => {
        if (cancelled) return;
        splash.classList.add("is-fading");
        removeTimer = setTimeout(() => {
          if (cancelled) return;
          splash.remove();
          document.body.style.overflow = "";
        }, FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
      fadeTimer = setTimeout(dismiss, MIN_DISPLAY_MS + 800);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", dismiss);
      if (fadeTimer) clearTimeout(fadeTimer);
      if (removeTimer) clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
