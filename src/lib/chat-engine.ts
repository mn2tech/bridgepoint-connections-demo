/**
 * Local chat engine for the demo.
 * Architecture note: swap `answerFromKnowledgeBase` with an LLM + RAG call
 * (server-side only) without changing the API route contract.
 */

import {
  chatWelcomeMessage,
  knowledgeBase,
  type KnowledgeChunk,
} from "./knowledge-base";
import { company } from "./company";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function scoreChunk(query: string, chunk: KnowledgeChunk): number {
  const normalized = query.toLowerCase();
  let score = 0;

  for (const keyword of chunk.keywords) {
    if (normalized.includes(keyword.toLowerCase())) {
      score += 2;
    }
  }

  const titleWords = chunk.title.toLowerCase().split(/\W+/);
  for (const word of titleWords) {
    if (word.length > 3 && normalized.includes(word)) {
      score += 1.5;
    }
  }

  const contentWords = chunk.content.toLowerCase().split(/\W+/);
  const queryWords = normalized.split(/\W+/).filter((word) => word.length > 3);
  for (const word of queryWords) {
    if (contentWords.includes(word)) {
      score += 0.5;
    }
  }

  return score;
}

function findRelevantChunks(query: string, limit = 3): KnowledgeChunk[] {
  return knowledgeBase
    .map((chunk) => ({ chunk, score: scoreChunk(query, chunk) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.chunk);
}

export function answerFromKnowledgeBase(query: string): string {
  const trimmed = query.trim();
  if (!trimmed) {
    return chatWelcomeMessage;
  }

  const lower = trimmed.toLowerCase();

  if (
    lower.includes("phone") &&
    !lower.includes("referral") &&
    !lower.includes("curt") &&
    !lower.includes("phil")
  ) {
    return `I don't have a general main phone number listed on Bridgepoint's public website. The best contact is ${company.contact.email}. For the Fairfax Area Believers referral group pricing, Curt Kowalski (301-260-0060) or Phil Kratovil (678-662-3913) are listed.`;
  }

  const matches = findRelevantChunks(trimmed);

  if (matches.length === 0) {
    return `I don't have verified information about that in Bridgepoint's public materials. Please email ${company.contact.email}, and someone from the team can help. You can also ask about our breakfasts & luncheons, networking events, study groups, mission trips, or how to get started.`;
  }

  const primary = matches[0];
  const extras = matches.slice(1);

  let response = primary.content;

  if (extras.length > 0) {
    response += `\n\nYou might also find this helpful: ${extras
      .map((chunk) => chunk.title)
      .join("; ")}.`;
  }

  response += `\n\nIf you'd like a personal follow-up, email ${company.contact.email} or use the contact form on this page.`;

  return response;
}

export { chatWelcomeMessage };
