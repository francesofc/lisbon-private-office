"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import Logo from "./Logo";

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

  /* Simplified nav: only Services & About — Contact is in the CTA button */
  const navLinks = [
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  function getLocalePath(targetLocale: string) {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-offwhite/95 backdrop-blur-xl border-b border-beige-dark/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center justify-between h-[80px] lg:h-[96px]">
        {/* Logo */}
        <Link href={`/${locale}`} className="relative shrink-0">
          <Logo
            variant={scrolled ? "dark" : "light"}
            height={28}
            className="hidden lg:block transition-opacity duration-500"
          />
          <Logo
            variant={scrolled ? "dark" : "light"}
            height={22}
            className="lg:hidden transition-opacity duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] tracking-[0.14em] uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-black-deep/45" : "text-beige/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 ml-14">
            {locales.map((l, i) => (
              <span key={l} className="flex items-center">
                <Link
                  href={getLocalePath(l)}
                  className={`text-[10px] tracking-[0.12em] transition-colors duration-300 px-1.5 py-0.5 ${
                    l === locale
                      ? "text-gold"
                      : scrolled
                        ? "text-black-deep/25 hover:text-black-deep/50"
                        : "text-beige/25 hover:text-beige/50"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
                {i < locales.length - 1 && (
                  <span
                    className={`text-[10px] ${
                      scrolled ? "text-black-deep/10" : "text-beige/12"
                    }`}
                  >
                    |
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* CTA — prominent contact button */}
          <Link
            href={`/${locale}/contact`}
            className={`ml-14 px-8 py-3 text-[11px] tracking-[0.16em] uppercase transition-all duration-300 ${
              scrolled
                ? "bg-black-deep text-offwhite hover:bg-gold hover:text-black-deep"
                : "bg-white/10 backdrop-blur-sm text-white/80 border border-white/15 hover:bg-gold/90 hover:text-black-deep hover:border-gold/90"
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
            className="flex flex-col gap-[6px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-black-deep" : "bg-beige"
              } ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-black-deep" : "bg-beige"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? "bg-black-deep" : "bg-beige"
              } ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
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
        <nav className="flex flex-col px-8 py-8 gap-6 bg-offwhite/98 backdrop-blur-xl border-t border-beige-dark/10">
          <Link
            href={`/${locale}`}
            onClick={() => setMobileOpen(false)}
            className="text-[12px] tracking-[0.1em] uppercase text-black-deep/40 hover:text-gold transition-colors duration-300"
          >
            {dict.nav.home}
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[12px] tracking-[0.1em] uppercase text-black-deep/40 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-6 border-t border-beige-dark/10">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileOpen(false)}
              className="inline-block px-8 py-3 bg-black-deep text-offwhite text-[11px] tracking-[0.16em] uppercase hover:bg-gold hover:text-black-deep transition-all duration-300"
            >
              {dict.nav.contactUs}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
