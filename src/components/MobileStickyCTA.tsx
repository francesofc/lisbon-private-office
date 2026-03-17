"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";

interface MobileStickyCTAProps {
  locale: Locale;
  label: string;
}

export default function MobileStickyCTA({ locale, label }: MobileStickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-gradient-to-t from-black-deep/95 via-black-deep/90 to-transparent pt-10 pb-6 px-6">
        <Link
          href={`/${locale}/contact`}
          className="block w-full py-4 bg-[#C6A66B] text-[#0E0E0E] text-[11px] tracking-[0.22em] uppercase font-semibold text-center transition-colors duration-400"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
