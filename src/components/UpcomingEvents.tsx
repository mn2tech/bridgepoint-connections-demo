"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { upcomingPrograms } from "@/lib/company";

export function UpcomingEvents() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="events" className="bg-paper section-pad py-16 sm:py-20 md:py-24">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-slate-soft uppercase">
            Upcoming programs
          </p>
          <h2 className="font-display mt-3 text-3xl text-navy sm:text-4xl">
            Gatherings you can join next
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Details below are drawn from Bridgepoint&apos;s public calendar and
            program pages. Confirm registration and timing directly with the
            organization.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {upcomingPrograms.map((program, index) => (
            <motion.article
              key={program.id}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-7"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-soft uppercase">
                    {program.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-navy sm:text-2xl">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted sm:text-base">
                    {program.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {program.note}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="btn-outline shrink-0 self-start !min-h-10 !px-4 !text-sm"
                >
                  Ask to join
                </a>
              </div>

              <dl className="mt-5 grid gap-3 border-t border-[var(--line)] pt-5 sm:grid-cols-3">
                <div className="flex gap-2 text-sm text-muted">
                  <CalendarDays size={16} className="mt-0.5 shrink-0 text-slate" aria-hidden />
                  <div>
                    <dt className="font-semibold text-navy">When</dt>
                    <dd className="mt-1 leading-relaxed">{program.when}</dd>
                  </div>
                </div>
                <div className="flex gap-2 text-sm text-muted">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-slate" aria-hidden />
                  <div>
                    <dt className="font-semibold text-navy">Where</dt>
                    <dd className="mt-1 leading-relaxed">{program.where}</dd>
                  </div>
                </div>
                <div className="flex gap-2 text-sm text-muted">
                  <Ticket size={16} className="mt-0.5 shrink-0 text-slate" aria-hidden />
                  <div>
                    <dt className="font-semibold text-navy">Cost</dt>
                    <dd className="mt-1 leading-relaxed">{program.cost}</dd>
                  </div>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
