"use client";

import { useEffect, useState } from "react";
import { company } from "@/lib/company";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a href="#contact" className="btn-dark flex-1 !min-h-11 !text-sm">
          Get involved
        </a>
        <a
          href={`mailto:${company.contact.email}`}
          className="btn-outline flex-1 !min-h-11 !text-sm"
        >
          Email
        </a>
      </div>
    </div>
  );
}
