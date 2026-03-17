import Link from "next/link";
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-bg.webp"
          alt="Lisbon skyline at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black-deep/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep/80 via-black-deep/40 to-black-deep/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_rgba(198,168,107,0.06)_0%,_transparent_60%)]" />
        <div className="absolute top-0 left-[calc(50%-0.5px)] w-px h-28 bg-gradient-to-b from-transparent via-gold/15 to-transparent mt-[88px] hidden lg:block" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 w-full pt-40 pb-24 lg:pt-52 lg:pb-40">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold/60 mb-8">
              {dict.hero.locations}
            </p>
            <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] text-white/90 leading-[1.05] font-light mb-8 lg:mb-10">
              {dict.hero.title1}<br />{dict.hero.title2}
            </h1>
            <p className="text-[20px] md:text-[24px] leading-[1.5] text-gold/85 font-serif italic max-w-xl mb-12 lg:mb-14">
              {dict.hero.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mb-14 lg:mb-16">
              <Link href={`/${locale}/contact`} className="px-10 py-4 bg-gold/90 text-black-deep text-[12px] tracking-[0.14em] uppercase font-medium hover:bg-gold transition-all duration-500 text-center">
                {dict.hero.cta1}
              </Link>
              <Link href={`/${locale}/services`} className="px-10 py-4 border border-white/20 text-white/50 text-[12px] tracking-[0.14em] uppercase hover:border-gold/40 hover:text-gold/70 transition-all duration-500 text-center">
                {dict.hero.cta2}
              </Link>
            </div>
            <div className="w-8 h-px bg-white/10 mb-8" />
            <p className="text-[13px] leading-[1.9] text-white/25 max-w-md">
              {dict.hero.subtitle}
            </p>
            <p className="text-[12px] leading-[1.9] text-white/18 max-w-md mt-3">
              {dict.hero.text1}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-offwhite to-transparent" />
      </section>

      {/* ============ WHY CLIENTS WORK WITH US ============ */}
      <section className="py-28 lg:py-36 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.whyUs.label} title={dict.whyUs.title} />
          <div className="mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-beige-dark/30">
            {dict.whyUs.items.map((item) => (
              <div key={item.title} className="bg-offwhite text-center p-12 lg:p-16 group">
                <div className="w-8 h-px bg-gold/40 mx-auto mb-8 group-hover:w-12 transition-all duration-700" />
                <h3 className="font-serif text-[24px] lg:text-[28px] font-light mb-5 text-black-deep">{item.title}</h3>
                <p className="text-[13px] leading-[1.85] text-warm-gray max-w-[260px] mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHO THIS IS FOR ============ */}
      <section className="py-28 lg:py-36 bg-beige">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.whoIsFor.label} title={dict.whoIsFor.title} />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-beige-dark/30">
            {dict.whoIsFor.profiles.map((profile) => (
              <div key={profile.title} className="bg-beige p-12 lg:p-16 group">
                <div className="w-5 h-px bg-gold/40 mb-8 group-hover:w-10 transition-all duration-700" />
                <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep mb-4">{profile.title}</h3>
                <p className="text-[13px] leading-[1.85] text-warm-gray">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PORTUGAL SETUP SERVICE ============ */}
      <section className="py-32 lg:py-44 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.setup.label} title={dict.setup.title} subtitle={dict.setup.subtitle} />
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-beige-dark/25 lg:items-start">
            <ServiceCard title={dict.setup.basic.title} price={dict.setup.basic.price} features={[...dict.setup.basic.features]} />
            <ServiceCard title={dict.setup.premium.title} price={dict.setup.premium.price} highlighted badge={dict.setup.recommended} features={[...dict.setup.premium.features]} />
            <ServiceCard title={dict.setup.private.title} price={dict.setup.private.price} features={[...dict.setup.private.features]} />
          </div>
        </div>
      </section>

      {/* ============ WHAT HAPPENS AFTER YOU CONTACT US ============ */}
      <section className="py-28 lg:py-36 bg-beige">
        <div className="max-w-[1000px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.process.label} title={dict.process.title} />
          <div className="mt-20 space-y-0">
            {dict.process.steps.map((step, i) => (
              <div key={step.number} className="flex gap-8 lg:gap-12 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/20 text-[11px] tracking-[0.1em] text-gold/60 group-hover:border-gold/40 transition-colors duration-500">
                    {step.number}
                  </div>
                  {i < dict.process.steps.length - 1 && (
                    <div className="w-px flex-1 bg-beige-dark/40 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-12 lg:pb-16">
                  <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep mb-3">{step.title}</h3>
                  <p className="text-[13px] leading-[1.85] text-warm-gray max-w-md">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ START WITH A SHORT STAY (VIP) ============ */}
      <section className="py-32 lg:py-44 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.vip.label} title={dict.vip.title} subtitle={dict.vip.subtitle} light />
          <div className="mt-10 max-w-xl mx-auto text-center">
            <p className="font-serif text-[36px] font-light text-gold/80 mb-6">{dict.vip.price}</p>
            <p className="text-[14px] leading-[1.85] text-beige/30">{dict.vip.text}</p>
          </div>
          <div className="mt-16 max-w-lg mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {dict.vip.features.map((item) => (
                <div key={item} className="flex items-center gap-5 text-[13px] text-beige/35 py-2 border-b border-beige/5 last:border-0">
                  <span className="block w-3 h-px bg-gold/30 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIFESTYLE & ACCESS ============ */}
      <section className="py-28 lg:py-36 bg-offwhite">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.lifestyle.label} title={dict.lifestyle.title} subtitle={dict.lifestyle.subtitle} />
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {dict.lifestyle.categories.map((category) => (
              <div key={category} className="px-8 py-4 border border-beige-dark/30 text-[12px] tracking-[0.08em] text-warm-gray hover:border-gold/30 hover:text-black-deep transition-all duration-500">
                {category}
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[12px] tracking-[0.05em] text-warm-gray/60 italic">{dict.lifestyle.note}</p>
        </div>
      </section>

      {/* ============ ONGOING PRIVATE ACCESS (MEMBERSHIP) ============ */}
      <section className="py-28 lg:py-36 bg-beige">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.membership.label} title={dict.membership.title} subtitle={dict.membership.subtitle} />
          <div className="mt-16 p-12 lg:p-20 bg-white relative">
            <div className="absolute top-0 left-12 right-12 lg:left-20 lg:right-20 h-px bg-gold/20" />
            <div className="text-center mb-14">
              <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep mb-3">{dict.membership.packageTitle}</h3>
              <p className="font-serif text-[32px] font-light text-gold">
                {dict.membership.price} <span className="text-[15px] text-warm-gray/50">{dict.membership.perYear}</span>
              </p>
            </div>
            <div className="w-8 h-px bg-beige-dark/40 mx-auto mb-10" />
            <ul className="space-y-5 max-w-md mx-auto">
              {dict.membership.features.map((feature) => (
                <li key={feature} className="flex items-start gap-4 text-[13px] leading-[1.7] text-warm-gray">
                  <span className="mt-[9px] shrink-0 block w-3 h-px bg-gold/40" />{feature}
                </li>
              ))}
            </ul>
            <p className="mt-12 text-center text-[12px] text-warm-gray/50 italic">{dict.membership.note}</p>
          </div>
        </div>
      </section>

      {/* ============ OUR NETWORK ============ */}
      <section className="py-28 lg:py-36 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.network.label} title={dict.network.title} subtitle={dict.network.subtitle} />
          <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-px bg-beige-dark/25">
            {dict.network.categories.map((category) => (
              <div key={category} className="bg-offwhite p-6 lg:p-8 text-center group">
                <p className="text-[12px] leading-[1.7] tracking-[0.02em] text-warm-gray group-hover:text-black-deep transition-colors duration-500">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRIVATE GATHERINGS ============ */}
      <section className="py-28 lg:py-36 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.events.label} title={dict.events.title} subtitle={dict.events.subtitle} light />
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {dict.events.types.map((event) => (
              <div key={event} className="px-7 py-3.5 border border-beige/8 text-[12px] tracking-[0.05em] text-beige/35 hover:border-gold/20 hover:text-gold/60 transition-all duration-500">
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
            {dict.cta.titleLine1}<br />{dict.cta.titleLine2}
          </h2>
          <p className="text-[15px] leading-[1.9] text-warm-gray mb-14 max-w-md mx-auto">{dict.cta.text}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 bg-black-deep text-beige/80 text-[12px] tracking-[0.12em] uppercase hover:bg-black-soft transition-colors duration-500">
              {dict.cta.button}
            </Link>
            <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 border border-black-deep/15 text-black-deep/60 text-[12px] tracking-[0.12em] uppercase hover:border-black-deep/30 hover:text-black-deep transition-all duration-500">
              {dict.cta.buttonSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
