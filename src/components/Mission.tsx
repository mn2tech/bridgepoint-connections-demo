"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { company, valueProps } from "@/lib/company";

export function Mission() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate text-white" id="mission">
      <div className="texture-grid absolute inset-0 opacity-30" />
      <div className="section-pad relative py-16 sm:py-20 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-gold-light uppercase">
              Our mission
            </p>
            <h2 className="font-display mt-4 text-3xl leading-snug text-white sm:text-4xl md:text-[2.6rem]">
              A personal lifeline to God—for the challenges of work and life.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {company.mission}
            </p>
          </motion.div>

          <motion.ul
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-4 border-t border-white/15 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
          >
            {valueProps.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
