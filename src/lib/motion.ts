"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Avoid SSR/client mismatch from prefers-reduced-motion. */
export function usePrefersReducedMotion(): boolean {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return true;
  return !!reduceMotion;
}
