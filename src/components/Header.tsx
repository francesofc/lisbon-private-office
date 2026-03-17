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

  // Build locale-switched path
  function getLocalePath(targetLocale: string) {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-offwhite/95 backdrop-blur-lg border-b border-beige-dark/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center justify-between h-[80px] lg:h-[88px]">
        {/* Logo */}
        <Link href={`/${locale}`}>
          <span
            className={`font-serif text-[17px] tracking-[0.22em] uppercase transition-colors duration-500 ${
              scrolled ? "text-black-deep" : "text-beige"
            }`}
          >
            Lisbon Private Office
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-[0.08em] transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-black-deep/50" : "text-beige/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 ml-4">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center">
                <Link
                  href={getLocalePath(l)}
                  className={`text-[11px] tracking-[0.1em] transition-colors duration-300 px-1.5 py-0.5 ${
                    l === locale
                      ? scrolled
                        ? "text-gold"
                        : "text-gold"
                      : scrolled
                        ? "text-black-deep/30 hover:text-black-deep/60"
                        : "text-beige/30 hover:text-beige/60"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
                {i < locales.length - 1 && (
                  <span
                    className={`text-[11px] ${
                      scrolled ? "text-black-deep/15" : "text-beige/15"
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
            className={`ml-4 px-7 py-2.5 text-[12px] tracking-[0.12em] uppercase transition-all duration-300 ${
              scrolled
                ? "border border-black-deep/20 text-black-deep/70 hover:border-gold hover:text-gold"
                : "border border-beige/25 text-beige/70 hover:border-gold hover:text-gold"
            }`}
          >
            {dict.nav.contactUs}
          </Link>
        </div>

        {/* Mobile: Language + Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-0.5">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center">
                <Link
                  href={getLocalePath(l)}
                  className={`text-[10px] tracking-[0.1em] transition-colors duration-300 px-1 ${
                    l === locale
                      ? "text-gold"
                      : scrolled
                        ? "text-black-deep/30"
                        : "text-beige/30"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
                {i < locales.length - 1 && (
                  <span
                    className={`text-[10px] ${
                      scrolled ? "text-black-deep/15" : "text-beige/15"
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
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-black-deep" : "bg-beige"
              } ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-black-deep" : "bg-beige"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-black-deep" : "bg-beige"
              } ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-8 py-8 gap-5 bg-offwhite/98 backdrop-blur-lg border-t border-beige-dark/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[13px] tracking-[0.08em] text-black-deep/50 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-5 border-t border-beige-dark/20">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileOpen(false)}
              className="inline-block px-7 py-2.5 border border-black-deep/20 text-[12px] tracking-[0.12em] uppercase text-black-deep/70 hover:border-gold hover:text-gold transition-all duration-300"
            >
              {dict.nav.contactUs}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
