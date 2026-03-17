"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  function getLocalePath(targetLocale: string) {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-offwhite/95 backdrop-blur-xl border-b border-beige-dark/15 shadow-[0_1px_20px_rgba(0,0,0,0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-24 flex items-center justify-between h-[72px] md:h-[82px] lg:h-[96px]">
        {/* Logo */}
        <Link href={`/${locale}`}>
          <span
            className={`font-serif text-[11px] md:text-[18px] lg:text-[19px] tracking-[0.15em] md:tracking-[0.22em] uppercase transition-colors duration-700 whitespace-nowrap ${
              scrolled ? "text-[#0E0E0E]" : "text-white"
            }`}
          >
            Lisbon Private Office
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 lg:gap-12">
          <nav className="flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] lg:text-[12px] tracking-[0.1em] transition-all duration-500 ease-out hover:text-gold ${
                  scrolled ? "text-black-deep/35" : "text-white/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 ml-4">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center">
                <Link
                  href={getLocalePath(l)}
                  className={`text-[10px] tracking-[0.12em] transition-colors duration-500 px-1.5 py-0.5 ${
                    l === locale
                      ? "text-gold/70"
                      : scrolled
                        ? "text-black-deep/20 hover:text-black-deep/45"
                        : "text-white/20 hover:text-white/45"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
                {i < locales.length - 1 && (
                  <span
                    className={`text-[10px] ${
                      scrolled ? "text-black-deep/8" : "text-white/10"
                    }`}
                  >
                    |
                  </span>
                )}
              </span>
            ))}
          </div>

          <Link
            href={`/${locale}/contact`}
            className={`ml-4 px-8 py-3 text-[11px] tracking-[0.18em] uppercase transition-all duration-500 ease-out ${
              scrolled
                ? "border border-[#0E0E0E]/15 text-[#0E0E0E]/60 hover:border-gold/50 hover:text-gold"
                : "border border-white/15 text-white/55 hover:border-gold/50 hover:text-gold"
            }`}
          >
            {dict.nav.contactUs}
          </Link>
        </div>

        {/* Mobile: Language + Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center">
                <Link
                  href={getLocalePath(l)}
                  className={`text-[10px] tracking-[0.1em] transition-colors duration-400 px-1 ${
                    l === locale
                      ? "text-gold/70"
                      : scrolled
                        ? "text-black-deep/20"
                        : "text-white/20"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
                {i < locales.length - 1 && (
                  <span
                    className={`text-[10px] ${
                      scrolled ? "text-black-deep/8" : "text-white/10"
                    }`}
                  >
                    |
                  </span>
                )}
              </span>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px transition-all duration-400 ${
                scrolled ? "bg-[#0E0E0E]" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-400 ${
                scrolled ? "bg-[#0E0E0E]" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-400 ${
                scrolled ? "bg-[#0E0E0E]" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-600 ease-out ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-8 py-12 gap-8 bg-offwhite/98 backdrop-blur-xl border-t border-beige-dark/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[15px] tracking-[0.04em] text-black-deep/50 hover:text-gold transition-colors duration-500 py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-5 pt-8 border-t border-beige-dark/10">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileOpen(false)}
              className="block w-full py-4.5 bg-[#C6A66B] text-[#0E0E0E] text-[10px] tracking-[0.25em] uppercase font-semibold text-center transition-colors duration-500"
            >
              {dict.nav.contactUs}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
