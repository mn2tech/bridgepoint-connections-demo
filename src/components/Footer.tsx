import Image from "next/image";
import { company } from "@/lib/company";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-pad border-b border-white/10 py-12 sm:py-14">
        <div className="container-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {company.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.18em] text-gold-light uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a href="#services" className="hover:text-white">
                  Programs
                </a>
              </li>
              <li>
                <a href="#pathway" className="hover:text-white">
                  Pathway Finder
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white">
                  Upcoming
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.18em] text-gold-light uppercase">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-white"
                >
                  {company.contact.email}
                </a>
              </li>
              <li>
                {company.contact.address.street}
                <br />
                {company.contact.address.city}, {company.contact.address.state}{" "}
                {company.contact.address.zip}
              </li>
              <li>Nonprofit Tax ID #: {company.contact.taxId}</li>
              <li>
                <a
                  href={company.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Official website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-pad py-6 pb-24 md:pb-6">
        <div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-white/55 sm:text-sm">
            Concept redesign created by{" "}
            <a
              href={company.nm2tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light underline-offset-2 hover:underline"
            >
              NM2TECH
            </a>{" "}
            to demonstrate opportunities for modern web design and AI-powered
            customer experiences. This demo is not the official website of{" "}
            {company.name}.
          </p>

          <a
            href={company.nm2tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 flex-col items-start gap-2 sm:items-end"
            aria-label="AI experience and concept redesign by NM2TECH"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/45 uppercase">
              Designed by
            </span>
            <Image
              src="/images/nm2tech-logo.png"
              alt="NM2TECH Next Move"
              width={160}
              height={160}
              className="h-16 w-auto rounded-md bg-black shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition group-hover:opacity-100 sm:h-[4.5rem]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
