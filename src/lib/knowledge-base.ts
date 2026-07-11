/**
 * Structured knowledge base for the demo chatbot.
 * Built only from verified public website content.
 * Designed so a real LLM + RAG layer can replace the local matcher later.
 */

import {
  company,
  faqs,
  services,
  upcomingPrograms,
  testimonials,
} from "./company";

export type KnowledgeChunk = {
  id: string;
  category: string;
  title: string;
  content: string;
  keywords: string[];
};

export const knowledgeBase: KnowledgeChunk[] = [
  {
    id: "about",
    category: "about",
    title: "About Bridgepoint Connections",
    content: `${company.name} is a nonprofit (${company.industry}). ${company.mission}`,
    keywords: [
      "about",
      "who",
      "what is",
      "mission",
      "nonprofit",
      "organization",
      "bridgepoint",
    ],
  },
  {
    id: "audience",
    category: "audience",
    title: "Who Bridgepoint serves",
    content: `${company.audience}. Service area: ${company.serviceArea}.`,
    keywords: [
      "who",
      "audience",
      "for me",
      "professionals",
      "business",
      "leaders",
      "serve",
      "work with",
    ],
  },
  {
    id: "contact",
    category: "contact",
    title: "Contact information",
    content: `Email ${company.contact.email}. Address: ${company.contact.address.street}, ${company.contact.address.city}, ${company.contact.address.state} ${company.contact.address.zip}. Nonprofit Tax ID #: ${company.contact.taxId}.`,
    keywords: [
      "contact",
      "email",
      "address",
      "phone",
      "reach",
      "location",
      "reston",
      "tax",
    ],
  },
  ...services.map((service) => ({
    id: `service-${service.id}`,
    category: "services",
    title: service.title,
    content: `${service.summary} ${service.details}`,
    keywords: [
      service.title.toLowerCase(),
      ...service.id.split("-"),
      "service",
      "program",
      "offer",
      "event",
    ],
  })),
  ...upcomingPrograms.map((program) => ({
    id: `program-${program.id}`,
    category: "programs",
    title: program.title,
    content: `${program.subtitle}. When: ${program.when}. Where: ${program.where}. Cost: ${program.cost}. ${program.note}`,
    keywords: [
      program.title.toLowerCase(),
      program.category.toLowerCase(),
      "upcoming",
      "schedule",
      "when",
      "register",
      "event",
    ],
  })),
  ...faqs.map((faq, index) => ({
    id: `faq-${index}`,
    category: "faq",
    title: faq.question,
    content: faq.answer,
    keywords: faq.question
      .toLowerCase()
      .split(/\W+/)
      .filter((word) => word.length > 3),
  })),
  {
    id: "testimonials",
    category: "social-proof",
    title: "What attendees say",
    content: testimonials
      .map((item) => `"${item.quote}" — ${item.attribution}`)
      .join(" "),
    keywords: ["testimonial", "review", "say", "experience", "attendee"],
  },
  {
    id: "get-started",
    category: "conversion",
    title: "How to get started",
    content: `The best next step is to email ${company.contact.email}, attend an upcoming breakfast, luncheon, or free Rally Point online session, or use the Pathway Finder on this site to see which program may fit. You can also ask about the Ecuador mission trip (August 23–30, 2026) via Lee Self at lself@ref.global.`,
    keywords: [
      "start",
      "started",
      "join",
      "next",
      "begin",
      "register",
      "sign up",
      "help my business",
    ],
  },
];

export const chatStarterQuestions = [
  "What services do you offer?",
  "How can you help my business?",
  "Who do you work with?",
  "How can I get started?",
] as const;

export const chatWelcomeMessage = `Hi! I'm Phil, the ${company.name} assistant. I can help you learn about our services, answer common questions, and help you find the right next step. How can I help?`;
