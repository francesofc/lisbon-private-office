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
          src="/assets/hero-bg.jpg"
          alt="Refined private residence with ocean view at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black-deep/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep/85 via-black-deep/50 to-black-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/50 via-transparent to-black-deep/30" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 w-full pt-56 pb-36 lg:pt-[17rem] lg:pb-52">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/40 mb-14 lg:mb-16">
              {dict.hero.locations}
            </p>
            <h1 className="font-serif text-[40px] md:text-[54px] lg:text-[66px] text-white leading-[1.12] font-light tracking-[-0.02em] mb-12 lg:mb-14">
              {dict.hero.title1}<br />{dict.hero.title2}
            </h1>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.8] text-white/50 tracking-[0.02em] max-w-md mb-10 lg:mb-12">
              {dict.hero.subtitle}
            </p>
            <p className="text-[12px] md:text-[13px] leading-[1.7] text-[#C6A66B]/55 font-serif italic tracking-[0.01em] max-w-md mb-16 lg:mb-20">
              {dict.hero.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href={`/${locale}/contact`} className="px-14 py-[18px] bg-[#C6A66B] text-[#0E0E0E] text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-white hover:text-[#0E0E0E] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] text-center">
                {dict.hero.cta1}
              </Link>
              <Link href={`/${locale}/services`} className="px-12 py-[18px] border border-white/10 text-white/30 text-[11px] tracking-[0.2em] uppercase hover:border-white/20 hover:text-white/55 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] text-center">
                {dict.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-offwhite to-transparent" />
      </section>

      {/* ============ WHY CLIENTS TRUST US ============ */}
      <section className="py-40 lg:py-56 bg-offwhite">
        <div className="max-w-[1100px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.whyUs.label} title={dict.whyUs.title} subtitle={dict.whyUs.subtitle} />
          <div className="mt-32 lg:mt-40 grid grid-cols-1 md:grid-cols-3 gap-24 lg:gap-28">
            {dict.whyUs.items.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-5 h-px bg-gold/25 mx-auto mb-12 group-hover:w-9 transition-all duration-500 ease-out" />
                <h3 className="font-serif text-[26px] lg:text-[30px] font-light mb-8 text-black-deep tracking-[-0.02em]">{item.title}</h3>
                <p className="text-[13px] leading-[2.05] tracking-[0.015em] text-warm-gray/70 max-w-[220px] mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHO THIS IS FOR ============ */}
      <section className="py-36 lg:py-52 bg-beige">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.whoIsFor.label} title={dict.whoIsFor.title} />
          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-px bg-beige-dark/25">
            {dict.whoIsFor.profiles.map((profile) => (
              <div key={profile.title} className="bg-beige p-16 lg:p-24 group">
                <div className="w-5 h-px bg-gold/30 mb-10 group-hover:w-10 transition-all duration-500 ease-out" />
                <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep tracking-[-0.02em] mb-6">{profile.title}</h3>
                <p className="text-[13px] leading-[2] tracking-[0.015em] text-warm-gray/80">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PORTUGAL SETUP SERVICE ============ */}
      <section className="py-40 lg:py-56 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.setup.label} title={dict.setup.title} subtitle={dict.setup.subtitle} />
          <div className="mt-28 grid grid-cols-1 lg:grid-cols-3 gap-px bg-beige-dark/20 lg:items-start">
            <ServiceCard title={dict.setup.basic.title} price={dict.setup.basic.price} features={[...dict.setup.basic.features]} />
            <ServiceCard title={dict.setup.premium.title} price={dict.setup.premium.price} highlighted badge={dict.setup.recommended} features={[...dict.setup.premium.features]} />
            <ServiceCard title={dict.setup.private.title} price={dict.setup.private.price} features={[...dict.setup.private.features]} />
          </div>
        </div>
      </section>

      {/* ============ WHAT HAPPENS AFTER YOU CONTACT US ============ */}
      <section className="py-36 lg:py-52 bg-beige">
        <div className="max-w-[1000px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.process.label} title={dict.process.title} />
          <div className="mt-28 space-y-0">
            {dict.process.steps.map((step, i) => (
              <div key={step.number} className="flex gap-10 lg:gap-16 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/15 text-[11px] tracking-[0.1em] text-gold/50 group-hover:border-gold/35 transition-colors duration-300 ease-out">
                    {step.number}
                  </div>
                  {i < dict.process.steps.length - 1 && (
                    <div className="w-px flex-1 bg-beige-dark/30 min-h-[56px]" />
                  )}
                </div>
                <div className="pb-16 lg:pb-20">
                  <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep tracking-[-0.02em] mb-5">{step.title}</h3>
                  <p className="text-[13px] leading-[2] tracking-[0.015em] text-warm-gray/80 max-w-md">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ START WITH A SHORT STAY (VIP) ============ */}
      <section className="py-36 lg:py-52 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.vip.label} title={dict.vip.title} subtitle={dict.vip.subtitle} light />
          <div className="mt-14 max-w-xl mx-auto text-center">
            <p className="font-serif text-[36px] font-light tracking-[-0.01em] text-gold/80 mb-7">{dict.vip.price}</p>
            <p className="text-[14px] leading-[1.95] tracking-[0.015em] text-beige/30">{dict.vip.text}</p>
          </div>
          <div className="mt-20 max-w-lg mx-auto">
            <div className="grid grid-cols-1 gap-5">
              {dict.vip.features.map((item) => (
                <div key={item} className="flex items-center gap-5 text-[13px] tracking-[0.01em] text-beige/35 py-2.5 border-b border-beige/5 last:border-0">
                  <span className="block w-3 h-px bg-gold/30 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIFESTYLE & ACCESS ============ */}
      <section className="py-36 lg:py-48 bg-offwhite">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.lifestyle.label} title={dict.lifestyle.title} subtitle={dict.lifestyle.subtitle} />
          <div className="mt-20 flex flex-wrap justify-center gap-5">
            {dict.lifestyle.categories.map((category) => (
              <div key={category} className="px-9 py-5 border border-beige-dark/25 text-[12px] tracking-[0.08em] text-warm-gray/80 hover:border-gold/30 hover:text-black-deep transition-all duration-300 ease-out">
                {category}
              </div>
            ))}
          </div>
          <p className="mt-14 text-center text-[12px] tracking-[0.05em] text-warm-gray/60 italic">{dict.lifestyle.note}</p>
        </div>
      </section>

      {/* ============ ONGOING PRIVATE ACCESS (MEMBERSHIP) ============ */}
      <section className="py-36 lg:py-48 bg-beige">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.membership.label} title={dict.membership.title} subtitle={dict.membership.subtitle} />
          <div className="mt-20 p-14 lg:p-24 bg-white relative">
            <div className="absolute top-0 left-14 right-14 lg:left-24 lg:right-24 h-px bg-gold/20" />
            <div className="text-center mb-16">
              <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep tracking-[-0.02em] mb-4">{dict.membership.packageTitle}</h3>
              <p className="font-serif text-[32px] font-light tracking-[-0.01em] text-gold">
                {dict.membership.price} <span className="text-[15px] text-warm-gray/50">{dict.membership.perYear}</span>
              </p>
            </div>
            <div className="w-8 h-px bg-beige-dark/40 mx-auto mb-12" />
            <ul className="space-y-6 max-w-md mx-auto">
              {dict.membership.features.map((feature) => (
                <li key={feature} className="flex items-start gap-4 text-[13px] leading-[1.9] tracking-[0.01em] text-warm-gray">
                  <span className="mt-[9px] shrink-0 block w-3 h-px bg-gold/40" />{feature}
                </li>
              ))}
            </ul>
            <p className="mt-14 text-center text-[12px] text-warm-gray/50 italic">{dict.membership.note}</p>
          </div>
        </div>
      </section>

      {/* ============ OUR NETWORK ============ */}
      <section className="py-36 lg:py-48 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.network.label} title={dict.network.title} subtitle={dict.network.subtitle} />
          <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-px bg-beige-dark/25">
            {dict.network.categories.map((category) => (
              <div key={category} className="bg-offwhite p-7 lg:p-10 text-center group">
                <p className="text-[12px] leading-[1.7] tracking-[0.02em] text-warm-gray group-hover:text-black-deep transition-colors duration-300 ease-out">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRIVATE GATHERINGS ============ */}
      <section className="py-36 lg:py-48 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.events.label} title={dict.events.title} subtitle={dict.events.subtitle} light />
          <div className="mt-18 flex flex-wrap justify-center gap-4">
            {dict.events.types.map((event) => (
              <div key={event} className="px-8 py-4 border border-beige/8 text-[12px] tracking-[0.05em] text-beige/35 hover:border-gold/20 hover:text-gold/60 transition-all duration-300 ease-out">
                {event}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-44 lg:py-60 bg-beige relative">
        <div className="max-w-[700px] mx-auto px-8 lg:px-16 text-center">
          <div className="w-10 h-px bg-gold/30 mx-auto mb-12" />
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold/50 mb-10">{dict.cta.exclusive}</p>
          <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-light text-black-deep leading-[1.18] tracking-[-0.02em] mb-10">
            {dict.cta.titleLine1}<br />{dict.cta.titleLine2}
          </h2>
          <p className="text-[14px] leading-[1.95] tracking-[0.015em] text-warm-gray/80 mb-18 max-w-md mx-auto">{dict.cta.text}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 bg-black-deep text-beige/80 text-[12px] tracking-[0.15em] uppercase hover:bg-black-soft hover:text-beige transition-all duration-300 ease-out">
              {dict.cta.button}
            </Link>
            <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 border border-black-deep/12 text-black-deep/50 text-[12px] tracking-[0.15em] uppercase hover:border-black-deep/30 hover:text-black-deep transition-all duration-300 ease-out">
              {dict.cta.buttonSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
