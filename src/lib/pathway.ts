/**
 * AI Pathway Finder — recommends a Bridgepoint program from verified offerings.
 */

import { services } from "./company";

export type PathwayAnswer = {
  questionId: string;
  optionId: string;
};

export type PathwayQuestion = {
  id: string;
  prompt: string;
  options: { id: string; label: string; weights: Record<string, number> }[];
};

export type PathwayResult = {
  serviceId: string;
  title: string;
  summary: string;
  why: string;
  nextStep: string;
  href: string;
};

export const pathwayQuestions: PathwayQuestion[] = [
  {
    id: "goal",
    prompt: "What are you hoping to find right now?",
    options: [
      {
        id: "network",
        label: "Meaningful professional connections and referrals",
        weights: {
          "breakfasts-luncheons": 3,
          "networking-events": 3,
          "referral-group": 4,
          "study-groups": 1,
          "mission-trips": 0,
        },
      },
      {
        id: "inspire",
        label: "Inspiration from faith-driven business leaders",
        weights: {
          "breakfasts-luncheons": 4,
          "networking-events": 2,
          "referral-group": 1,
          "study-groups": 2,
          "mission-trips": 1,
        },
      },
      {
        id: "grow",
        label: "Deeper spiritual growth tied to work and life",
        weights: {
          "breakfasts-luncheons": 1,
          "networking-events": 1,
          "referral-group": 1,
          "study-groups": 5,
          "mission-trips": 2,
        },
      },
      {
        id: "serve",
        label: "A chance to serve and share hope internationally",
        weights: {
          "breakfasts-luncheons": 0,
          "networking-events": 0,
          "referral-group": 0,
          "study-groups": 1,
          "mission-trips": 5,
        },
      },
    ],
  },
  {
    id: "format",
    prompt: "What format fits your schedule best?",
    options: [
      {
        id: "in-person-meal",
        label: "In-person breakfast or lunch gatherings",
        weights: {
          "breakfasts-luncheons": 4,
          "networking-events": 2,
          "referral-group": 3,
          "study-groups": 2,
          "mission-trips": 0,
        },
      },
      {
        id: "after-hours",
        label: "Informal after-hours or flexible drop-in",
        weights: {
          "breakfasts-luncheons": 1,
          "networking-events": 5,
          "referral-group": 1,
          "study-groups": 1,
          "mission-trips": 0,
        },
      },
      {
        id: "online",
        label: "Online / Zoom-friendly options",
        weights: {
          "breakfasts-luncheons": 0,
          "networking-events": 4,
          "referral-group": 3,
          "study-groups": 4,
          "mission-trips": 0,
        },
      },
      {
        id: "immersive",
        label: "A focused multi-day immersion experience",
        weights: {
          "breakfasts-luncheons": 0,
          "networking-events": 0,
          "referral-group": 0,
          "study-groups": 1,
          "mission-trips": 5,
        },
      },
    ],
  },
  {
    id: "commitment",
    prompt: "How would you like to engage?",
    options: [
      {
        id: "try-once",
        label: "Try a single event and see how it feels",
        weights: {
          "breakfasts-luncheons": 4,
          "networking-events": 4,
          "referral-group": 1,
          "study-groups": 1,
          "mission-trips": 1,
        },
      },
      {
        id: "weekly",
        label: "Build a weekly rhythm with the same people",
        weights: {
          "breakfasts-luncheons": 1,
          "networking-events": 3,
          "referral-group": 4,
          "study-groups": 5,
          "mission-trips": 0,
        },
      },
      {
        id: "business-growth",
        label: "Grow business through faith-aligned referrals",
        weights: {
          "breakfasts-luncheons": 2,
          "networking-events": 2,
          "referral-group": 5,
          "study-groups": 1,
          "mission-trips": 0,
        },
      },
      {
        id: "mission",
        label: "Invest a week serving alongside local churches abroad",
        weights: {
          "breakfasts-luncheons": 0,
          "networking-events": 0,
          "referral-group": 0,
          "study-groups": 1,
          "mission-trips": 5,
        },
      },
    ],
  },
];

const resultCopy: Record<
  string,
  { why: string; nextStep: string }
> = {
  "breakfasts-luncheons": {
    why: "You want structured networking plus an inspirational keynote in a meal setting—exactly what Bridgepoint breakfasts and luncheons are designed for.",
    nextStep:
      "Check the next Networking Breakfast details and email info@bridgepointconnections.org to register or ask a question.",
  },
  "networking-events": {
    why: "You're looking for informal connection without a heavy program—Bridgepoint After Hours and Rally Point online networking are built for that.",
    nextStep:
      "Join a free Rally Point session (Mondays 4:00–5:15 p.m. ET) or ask about the next After Hours gathering.",
  },
  "study-groups": {
    why: "You want deeper conversation about integrating faith, work, and life in a small-group setting.",
    nextStep:
      "Study groups are on summer break until September—email info@bridgepointconnections.org to get on the list for the next series.",
  },
  "mission-trips": {
    why: "You're ready for an immersion experience sharing faith and hope internationally alongside local churches.",
    nextStep:
      "The Ecuador trip is August 23–30, 2026. Contact Lee Self at lself@ref.global for information.",
  },
  "referral-group": {
    why: "You want ongoing, category-exclusive referral relationships with professionals who share your faith and values.",
    nextStep:
      "Ask about the Fairfax Area Believers group—Curt Kowalski (301-260-0060) or Phil Kratovil (678-662-3913).",
  },
};

export function recommendPathway(answers: PathwayAnswer[]): PathwayResult {
  const scores: Record<string, number> = {
    "breakfasts-luncheons": 0,
    "networking-events": 0,
    "study-groups": 0,
    "mission-trips": 0,
    "referral-group": 0,
  };

  for (const answer of answers) {
    const question = pathwayQuestions.find((q) => q.id === answer.questionId);
    const option = question?.options.find((o) => o.id === answer.optionId);
    if (!option) continue;
    for (const [serviceId, weight] of Object.entries(option.weights)) {
      scores[serviceId] = (scores[serviceId] ?? 0) + weight;
    }
  }

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topId = ranked[0]?.[0] ?? "breakfasts-luncheons";
  const service = services.find((item) => item.id === topId) ?? services[0];
  const copy = resultCopy[service.id];

  return {
    serviceId: service.id,
    title: service.title,
    summary: service.summary,
    why: copy.why,
    nextStep: copy.nextStep,
    href: service.href,
  };
}
