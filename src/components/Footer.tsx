import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import Logo from "./Logo";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-black-deep">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href={`/${locale}`} className="inline-block mb-6">
              <Logo variant="light" height={20} />
            </Link>
            <p className="text-[13px] leading-[1.8] text-beige/35 max-w-xs">
              {dict.footer.description}
            </p>
            <p className="text-[12px] tracking-[0.15em] text-beige/20 mt-6 uppercase">
              Lisbon, Portugal
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold/60 mb-8">
              {dict.footer.navTitle}
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { href: `/${locale}`, label: dict.nav.home },
                { href: `/${locale}/services`, label: dict.nav.services },
                { href: `/${locale}/about`, label: dict.nav.about },
                { href: `/${locale}/contact`, label: dict.nav.contact },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-beige/30 hover:text-gold/70 transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold/60 mb-8">
              {dict.footer.contactTitle}
            </h4>
            <div className="flex flex-col gap-4 text-[13px] text-beige/30">
              <p>Lisbon, Portugal</p>
              <a
                href="mailto:contact@lisbonprivateoffice.com"
                className="hover:text-gold/70 transition-colors duration-500"
              >
                contact@lisbonprivateoffice.com
              </a>
              <a
                href="https://wa.me/351000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold/70 transition-colors duration-500"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/lisbonprivateoffice"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold/70 transition-colors duration-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-beige/6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.05em] text-beige/18">
            &copy; {new Date().getFullYear()} Lisbon Private Office.{" "}
            {dict.footer.rights}
          </p>
          <p className="text-[11px] tracking-[0.15em] uppercase text-beige/18">
            {dict.hero.locations}
          </p>
        </div>
      </div>
    </footer>
  );
}
