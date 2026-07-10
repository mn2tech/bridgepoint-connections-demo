import { NextResponse } from "next/server";
import { answerFromKnowledgeBase } from "@/lib/chat-engine";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { message?: string };
    const message = body.message?.trim() ?? "";

    if (!message) {
      return NextResponse.json(
        { error: "Please share a question so I can help." },
        { status: 400 },
      );
    }

    // Demo: local knowledge base. Replace with LLM + RAG using server env vars.
    const reply = answerFromKnowledgeBase(message);

    return NextResponse.json({
      reply,
      source: "local-knowledge-base",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please email info@bridgepointconnections.org.",
      },
      { status: 500 },
    );
  }
}
