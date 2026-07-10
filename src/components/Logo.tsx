import Link from "next/link";
import { company } from "@/lib/company";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="#top"
      className={`group inline-flex flex-col leading-none ${className}`}
      aria-label={`${company.name} home`}
    >
      <span
        className={`font-display text-[1.35rem] tracking-tight sm:text-[1.55rem] ${
          isLight ? "text-gold-light" : "text-gold-deep"
        }`}
      >
        Bridgepoint
      </span>
      <span
        className={`mt-1 inline-flex w-fit px-2 py-[0.2rem] text-[0.65rem] font-semibold tracking-[0.22em] uppercase ${
          isLight
            ? "bg-white text-navy"
            : "bg-navy text-white"
        }`}
      >
        Connections
      </span>
    </Link>
  );
}
