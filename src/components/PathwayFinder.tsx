"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import {
  pathwayQuestions,
  recommendPathway,
  type PathwayAnswer,
  type PathwayResult,
} from "@/lib/pathway";

export function PathwayFinder() {
  const reduceMotion = usePrefersReducedMotion();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PathwayAnswer[]>([]);
  const [result, setResult] = useState<PathwayResult | null>(null);

  const progress = useMemo(() => {
    if (result) return 100;
    return Math.round((step / pathwayQuestions.length) * 100);
  }, [result, step]);

  function selectOption(questionId: string, optionId: string) {
    const nextAnswers = [
      ...answers.filter((answer) => answer.questionId !== questionId),
      { questionId, optionId },
    ];
    setAnswers(nextAnswers);

    if (step < pathwayQuestions.length - 1) {
      setStep((value) => value + 1);
      return;
    }

    setResult(recommendPathway(nextAnswers));
  }

  function reset() {
    setStep(0);
    setAnswers([]);
    setResult(null);
  }

  const question = pathwayQuestions[step];

  return (
    <section
      id="pathway"
      className="relative overflow-hidden bg-navy text-white section-pad py-16 sm:py-20 md:py-24"
    >
      <div className="texture-grid absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="container-shell relative">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-gold-light uppercase">
            <Sparkles size={16} aria-hidden />
            AI pathway finder
          </p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Not sure where to start? Let us match you to a Bridgepoint pathway.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Answer three quick questions. We&apos;ll recommend a program based
            on Bridgepoint&apos;s real offerings—not generic advice.
          </p>
        </div>

        <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Pathway finder progress"
          />
        </div>

        <motion.div
          key={result ? "result" : question.id}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          {result ? (
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-gold-light uppercase">
                Recommended for you
              </p>
              <h3 className="mt-3 font-display text-3xl text-white">
                {result.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                {result.summary}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                <span className="font-semibold text-gold-light">Why this fits: </span>
                {result.why}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                <span className="font-semibold text-gold-light">Next step: </span>
                {result.nextStep}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-primary">
                  Request a conversation
                  <ArrowRight size={18} aria-hidden />
                </a>
                <button type="button" onClick={reset} className="btn-secondary">
                  <RotateCcw size={16} aria-hidden />
                  Start over
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm text-white/60">
                Question {step + 1} of {pathwayQuestions.length}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                {question.prompt}
              </h3>
              <div className="mt-6 grid gap-3">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectOption(question.id, option.id)}
                    className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-left text-base text-white/90 transition hover:border-gold/50 hover:bg-white/10 focus-visible:border-gold"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
