"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import {
  BookOpen,
  Coffee,
  Globe2,
  Handshake,
  Users,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/company";

const icons: Record<string, LucideIcon> = {
  "breakfasts-luncheons": Coffee,
  "networking-events": Users,
  "study-groups": BookOpen,
  "mission-trips": Globe2,
  "referral-group": Handshake,
};

export function Services() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="services" className="bg-paper section-pad py-16 sm:py-20 md:py-24">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-slate-soft uppercase">
            Get involved
          </p>
          <h2 className="font-display mt-3 text-3xl text-navy sm:text-4xl">
            Programs that connect faith, work, and community
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From breakfast roundtables to mission immersions, every Bridgepoint
            pathway is designed for professionals who want authentic
            relationships and spiritual depth.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.id] ?? Users;
            return (
              <motion.article
                key={service.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_12px_40px_rgba(26,47,56,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(26,47,56,0.08)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-slate">
                    <Icon size={20} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {service.summary}
                    </p>
                    <a
                      href={`#contact`}
                      className="mt-4 inline-flex text-sm font-semibold text-slate transition group-hover:text-gold-deep"
                    >
                      Ask about this program →
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
