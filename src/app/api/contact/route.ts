import { NextResponse } from "next/server";
import { company } from "@/lib/company";

type ContactPayload = {
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const interest = body.interest?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Demo capture only — wire to CRM/email via server env vars in production.
    console.info("[contact-demo]", {
      name,
      email,
      interest,
      message,
      to: company.contact.email,
    });

    return NextResponse.json({
      ok: true,
      message: `Thanks, ${name}. This demo form captured your request. For a real conversation with Bridgepoint, email ${company.contact.email}.`,
    });
  } catch {
    return NextResponse.json(
      {
        error: `Unable to submit right now. Please email ${company.contact.email} directly.`,
      },
      { status: 500 },
    );
  }
}
