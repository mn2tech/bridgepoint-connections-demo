"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/company";

export function FinalCTA() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="bg-mist section-pad py-16 sm:py-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        className="container-shell rounded-[1.75rem] bg-navy px-6 py-12 text-center text-white sm:px-10 sm:py-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl">
          Take the next step with Bridgepoint
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Join a breakfast, drop into Rally Point, explore a study group, or
          ask about the Ecuador mission trip. Your pathway starts with a single
          conversation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="btn-primary">
            Request a conversation
            <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href={`mailto:${company.contact.email}`}
            className="btn-secondary"
          >
            {company.contact.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
