"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { company } from "@/lib/company";

const navLinks = [
  { href: "#services", label: "Programs" },
  { href: "#why", label: "Why Bridgepoint" },
  { href: "#pathway", label: "Find Your Fit" },
  { href: "#events", label: "Upcoming" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-navy/95 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad">
        <div className="container-shell flex h-[4.25rem] items-center justify-between gap-4 sm:h-[4.75rem]">
          <Logo variant="light" />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary ml-2 !min-h-10 !px-4 !text-sm">
              Get Involved
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-navy lg:hidden"
        >
          <nav
            className="section-pad container-shell flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${company.contact.email}`}
              className="btn-primary mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Email Us
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
