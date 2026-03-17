import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image - using native img to avoid CDN processing issues */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-bg.webp"
          alt="Lisbon skyline at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black-deep/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep/80 via-black-deep/40 to-black-deep/50" />

        {/* Subtle warm gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_rgba(198,168,107,0.06)_0%,_transparent_60%)]" />

        {/* Decorative vertical line */}
        <div className="absolute top-0 left-[calc(50%-0.5px)] w-px h-28 bg-gradient-to-b from-transparent via-gold/15 to-transparent mt-[88px] hidden lg:block" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 w-full pt-40 pb-24 lg:pt-52 lg:pb-40">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold/60 mb-8">
              {dict.hero.locations}
            </p>

            <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] text-white/90 leading-[1.05] font-light mb-8">
              {dict.hero.title1}
              <br />
              {dict.hero.title2}
            </h1>

            <p className="text-[16px] md:text-[18px] text-white/45 font-light tracking-[0.02em] mb-6">
              {dict.hero.subtitle}
            </p>

            <div className="w-10 h-px bg-gold/40 my-10" />

            <p className="text-[15px] leading-[1.9] text-white/35 max-w-lg mb-6">
              {dict.hero.text1}
            </p>
            <p className="text-[15px] leading-[1.9] text-white/35 max-w-lg mb-14">
              {dict.hero.text2}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href={`/${locale}/services`}
                className="px-9 py-3.5 bg-gold/90 text-black-deep text-[12px] tracking-[0.12em] uppercase hover:bg-gold transition-all duration-500 text-center"
              >
                {dict.hero.cta1}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-9 py-3.5 border border-white/15 text-white/55 text-[12px] tracking-[0.12em] uppercase hover:border-gold/40 hover:text-gold/70 transition-all duration-500 text-center"
              >
                {dict.hero.cta2}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-offwhite to-transparent" />
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section className="py-32 lg:py-44 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading
            label={dict.philosophy.label}
            title={dict.philosophy.title}
            subtitle={dict.philosophy.subtitle}
          />
          <div className="mt-8 max-w-xl mx-auto text-center">
            <p className="text-[15px] leading-[1.9] text-warm-gray">
              {dict.philosophy.text1}
            </p>
            <p className="mt-6 text-[15px] leading-[1.9] text-warm-gray">
              {dict.philosophy.text2}
            </p>
          </div>

          <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-beige-dark/30">
            {dict.philosophy.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-offwhite text-center p-12 lg:p-16 group"
              >
                <div className="w-8 h-px bg-gold/40 mx-auto mb-8 group-hover:w-12 transition-all duration-700" />
                <h3 className="font-serif text-[24px] lg:text-[28px] font-light mb-5 text-black-deep">
                  {pillar.title}
                </h3>
                <p className="text-[13px] leading-[1.85] text-warm-gray max-w-[240px] mx-auto">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES OVERVIEW ============ */}
      <section className="py-32 lg:py-44 bg-beige">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading
            label={dict.servicesOverview.label}
            title={dict.servicesOverview.title}
            subtitle={dict.servicesOverview.subtitle}
          />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-beige-dark/30">
            {dict.servicesOverview.items.map((service, i) => (
              <Link
                key={service.title}
                href={`/${locale}/services#${["setup", "vip", "lifestyle", "membership"][i]}`}
                className="group bg-beige p-12 lg:p-16 relative"
              >
                <span className="text-[11px] tracking-[0.2em] uppercase text-gold/40 mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-[24px] lg:text-[28px] font-light text-black-deep mb-4 group-hover:text-gold-muted transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-[1.85] text-warm-gray max-w-sm">
                  {service.description}
                </p>
                <span className="inline-block mt-8 text-[11px] tracking-[0.2em] uppercase text-gold/50 group-hover:text-gold transition-colors duration-500">
                  {dict.servicesOverview.explore} &#8594;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PORTUGAL SETUP SERVICE ============ */}
      <section className="py-32 lg:py-44 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading
            label={dict.setup.label}
            title={dict.setup.title}
            subtitle={dict.setup.subtitle}
          />
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-beige-dark/25">
            <ServiceCard
              title={dict.setup.basic.title}
              price={dict.setup.basic.price}
              features={[...dict.setup.basic.features]}
            />
            <ServiceCard
              title={dict.setup.premium.title}
              price={dict.setup.premium.price}
              highlighted
              features={[...dict.setup.premium.features]}
            />
            <ServiceCard
              title={dict.setup.private.title}
              price={dict.setup.private.price}
              features={[...dict.setup.private.features]}
            />
          </div>
        </div>
      </section>

      {/* ============ VIP ARRIVAL ============ */}
      <section className="py-32 lg:py-44 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading
            label={dict.vip.label}
            title={dict.vip.title}
            subtitle={dict.vip.subtitle}
            light
          />
          <div className="mt-10 max-w-xl mx-auto text-center">
            <p className="font-serif text-[36px] font-light text-gold/80 mb-6">
              {dict.vip.price}
            </p>
            <p className="text-[14px] leading-[1.85] text-beige/30">
              {dict.vip.text}
            </p>
          </div>
          <div className="mt-16 max-w-lg mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {dict.vip.features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5 text-[13px] text-beige/35 py-2 border-b border-beige/5 last:border-0"
                >
                  <span className="block w-3 h-px bg-gold/30 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIFESTYLE CONCIERGE ============ */}
      <section className="py-32 lg:py-44 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading
            label={dict.lifestyle.label}
            title={dict.lifestyle.title}
            subtitle={dict.lifestyle.subtitle}
          />
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-beige-dark/25">
            {dict.lifestyle.services.map((service) => (
              <div
                key={service}
                className="bg-offwhite p-8 lg:p-10 group"
              >
                <div className="w-5 h-px bg-gold/30 mb-5 group-hover:w-8 transition-all duration-700" />
                <p className="text-[13px] leading-[1.7] text-warm-gray">
                  {service}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-center text-[12px] tracking-[0.05em] text-warm-gray/60 italic">
            {dict.lifestyle.note}
          </p>
        </div>
      </section>

      {/* ============ PRIVATE MEMBERSHIP ============ */}
      <section className="py-32 lg:py-44 bg-beige">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading
            label={dict.membership.label}
            title={dict.membership.title}
            subtitle={dict.membership.subtitle}
          />
          <div className="mt-16 p-12 lg:p-20 bg-white relative">
            <div className="absolute top-0 left-12 right-12 lg:left-20 lg:right-20 h-px bg-gold/20" />
            <div className="text-center mb-14">
              <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep mb-3">
                {dict.membership.packageTitle}
              </h3>
              <p className="font-serif text-[32px] font-light text-gold">
                {dict.membership.price}{" "}
                <span className="text-[15px] text-warm-gray/50">
                  {dict.membership.perYear}
                </span>
              </p>
            </div>
            <div className="w-8 h-px bg-beige-dark/40 mx-auto mb-10" />
            <ul className="space-y-5 max-w-md mx-auto">
              {dict.membership.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 text-[13px] leading-[1.7] text-warm-gray"
                >
                  <span className="mt-[9px] shrink-0 block w-3 h-px bg-gold/40" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-12 text-center text-[12px] text-warm-gray/50 italic">
              {dict.membership.note}
            </p>
          </div>
        </div>
      </section>

      {/* ============ NETWORK ============ */}
      <section className="py-32 lg:py-44 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading
            label={dict.network.label}
            title={dict.network.title}
            subtitle={dict.network.subtitle}
          />
          <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-px bg-beige-dark/25">
            {dict.network.categories.map((category) => (
              <div
                key={category}
                className="bg-offwhite p-6 lg:p-8 text-center group"
              >
                <p className="text-[12px] leading-[1.7] tracking-[0.02em] text-warm-gray group-hover:text-black-deep transition-colors duration-500">
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRIVATE EVENTS ============ */}
      <section className="py-32 lg:py-44 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading
            label={dict.events.label}
            title={dict.events.title}
            subtitle={dict.events.subtitle}
            light
          />
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {dict.events.types.map((event) => (
              <div
                key={event}
                className="px-7 py-3.5 border border-beige/8 text-[12px] tracking-[0.05em] text-beige/35 hover:border-gold/20 hover:text-gold/60 transition-all duration-500"
              >
                {event}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-36 lg:py-48 bg-beige relative">
        <div className="max-w-[700px] mx-auto px-8 lg:px-16 text-center">
          <div className="w-10 h-px bg-gold/40 mx-auto mb-10" />
          <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-light text-black-deep leading-[1.15] mb-8">
            {dict.cta.titleLine1}
            <br />
            {dict.cta.titleLine2}
          </h2>
          <p className="text-[15px] leading-[1.9] text-warm-gray mb-14 max-w-md mx-auto">
            {dict.cta.text}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-10 py-4 bg-black-deep text-beige/80 text-[12px] tracking-[0.12em] uppercase hover:bg-black-soft transition-colors duration-500"
          >
            {dict.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
