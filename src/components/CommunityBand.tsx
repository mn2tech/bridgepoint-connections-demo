"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

export function CommunityBand() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="bg-paper section-pad pb-4 pt-2 sm:pb-6">
      <div className="container-shell overflow-hidden rounded-[1.75rem]">
        <div className="relative min-h-[16rem] sm:min-h-[20rem]">
          <Image
            src="/images/community.jpg"
            alt="Professionals gathered in conversation around a table"
            fill
            sizes="(max-width: 1120px) 100vw, 1120px"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/25" />
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-full min-h-[16rem] max-w-xl flex-col justify-end p-6 sm:min-h-[20rem] sm:p-10"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-gold-light uppercase">
              Who we serve
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Business professionals seeking faith-aligned community
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              Leaders and emerging leaders across Northern Virginia—and online—
              who want relationships they can know, like, and trust for business,
              referrals, and Christian community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
