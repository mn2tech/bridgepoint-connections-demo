"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { company, services } from "@/lib/company";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          interest: data.get("interest"),
          message: data.get("message"),
        }),
      });

      const payload = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setFeedback(payload.error ?? "Unable to submit right now.");
        return;
      }

      setStatus("success");
      setFeedback(payload.message ?? "Thanks—we received your message.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(
        `Unable to submit right now. Please email ${company.contact.email}.`,
      );
    }
  }

  return (
    <section id="contact" className="bg-slate text-white section-pad py-16 sm:py-20 md:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-gold-light uppercase">
            Get started
          </p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Ready for a conversation?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Tell us what you&apos;re looking for—networking, a study group, a
            mission trip, or simply a place to begin. We&apos;ll point you to
            the right next step.
          </p>

          <div className="mt-8 space-y-4 text-sm sm:text-base">
            <a
              href={`mailto:${company.contact.email}`}
              className="flex items-start gap-3 text-white/90 transition hover:text-gold-light"
            >
              <Mail size={18} className="mt-1 shrink-0" aria-hidden />
              <span>{company.contact.email}</span>
            </a>
            <p className="flex items-start gap-3 text-white/80">
              <MapPin size={18} className="mt-1 shrink-0" aria-hidden />
              <span>
                {company.contact.address.street}
                <br />
                {company.contact.address.city}, {company.contact.address.state}{" "}
                {company.contact.address.zip}
              </span>
            </p>
            <p className="text-white/65">
              Nonprofit Tax ID #: {company.contact.taxId}
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/10 bg-white p-6 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-navy">
              Name
              <input
                name="name"
                required
                autoComplete="name"
                className="input-field mt-2"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-medium text-navy">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="input-field mt-2"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-navy">
            I&apos;m interested in
            <select name="interest" className="input-field mt-2" defaultValue="">
              <option value="" disabled>
                Select a program
              </option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-navy">
            Message
            <textarea
              name="message"
              required
              rows={4}
              className="input-field mt-2 resize-y"
              placeholder="Share a bit about what you're looking for..."
            />
          </label>

          <button
            type="submit"
            className="btn-dark mt-5 w-full sm:w-auto"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Request a conversation"}
            <Send size={16} aria-hidden />
          </button>

          {feedback ? (
            <p
              className={`mt-4 text-sm leading-relaxed ${
                status === "error" ? "text-red-700" : "text-slate"
              }`}
              role="status"
            >
              {feedback}
            </p>
          ) : (
            <p className="mt-4 text-xs leading-relaxed text-muted">
              This is a concept demo form. For official inquiries, email{" "}
              {company.contact.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
