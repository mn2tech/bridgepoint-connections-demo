"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/company";

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-navy text-white"
    >
      <Image
        src="/images/hero-bridge.jpg"
        alt="Suspension bridge over water at golden hour, symbolizing connection"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="hero-wash absolute inset-0" />
      <div className="texture-grid absolute inset-0 opacity-40" />

      <div className="section-pad relative flex min-h-[100svh] items-center pb-24 pt-24 sm:pb-24 sm:pt-32">
        <div className="container-shell w-full max-w-3xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-[1.75rem] text-gold-light sm:text-4xl md:text-5xl"
          >
            {company.shortName}
            <span className="mt-1.5 block text-xs font-sans font-semibold tracking-[0.28em] text-white uppercase sm:mt-2 sm:text-base">
              Connections
            </span>
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-[1.45rem] leading-snug font-semibold tracking-tight text-white sm:mt-6 sm:text-4xl sm:leading-tight md:text-[2.75rem] md:leading-[1.15]"
          >
            {company.tagline}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/85 sm:mt-5 sm:text-lg"
          >
            A Northern Virginia nonprofit helping business professionals access
            a practical, relevant relationship with God—and authentic community
            for work and life.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
          >
            <a href="#pathway" className="btn-primary">
              Find your pathway
              <ArrowRight size={18} aria-hidden />
            </a>
            <a href="#events" className="btn-secondary">
              See upcoming programs
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
