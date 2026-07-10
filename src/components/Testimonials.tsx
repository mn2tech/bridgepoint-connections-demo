"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/company";

export function Testimonials() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="stories" className="bg-mist section-pad py-16 sm:py-20 md:py-24">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-slate-soft uppercase">
            From the community
          </p>
          <h2 className="font-display mt-3 text-3xl text-navy sm:text-4xl">
            Voices from Bridgepoint gatherings
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            These reflections appear on Bridgepoint&apos;s public website.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.attribution}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6"
            >
              <Quote className="text-gold" size={22} aria-hidden />
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink">
                “{item.quote}”
              </p>
              <footer className="mt-5 text-sm font-semibold text-slate">
                — {item.attribution}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
