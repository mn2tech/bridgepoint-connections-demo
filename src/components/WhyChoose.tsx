"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { howItWorks, trustPoints } from "@/lib/company";

export function WhyChoose() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="why" className="bg-mist section-pad py-16 sm:py-20 md:py-24">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-slate-soft uppercase">
            Why Bridgepoint
          </p>
          <h2 className="font-display mt-3 text-3xl text-navy sm:text-4xl">
            Built for professionals who want more than networking alone
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Bridgepoint creates space for business relationships, spiritual
            formation, and service—rooted in Northern Virginia and open online.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl bg-white p-6 border border-[var(--line)]"
            >
              <h3 className="text-lg font-semibold text-navy">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-14">
          <h3 className="font-display text-2xl text-navy sm:text-3xl">
            How it works
          </h3>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item, index) => (
              <motion.li
                key={item.step}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative"
              >
                <p className="font-display text-4xl text-gold">{item.step}</p>
                <h4 className="mt-3 text-lg font-semibold text-navy">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
