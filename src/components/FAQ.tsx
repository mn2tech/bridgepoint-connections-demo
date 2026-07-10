"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/company";

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper section-pad py-16 sm:py-20 md:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-slate-soft uppercase">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-3xl text-navy sm:text-4xl">
            Common questions, clear answers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Answers are based on Bridgepoint&apos;s publicly published
            information. Prefer a conversation? Use the assistant or contact
            form.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openId === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : index)}
                >
                  <span className="text-base font-semibold text-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate transition ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {open ? (
                  <div className="border-t border-[var(--line)] px-5 py-4 text-sm leading-relaxed text-muted sm:text-base">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
