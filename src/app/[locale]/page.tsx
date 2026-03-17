import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";
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
      <section className="relative h-screen md:min-h-screen flex items-end md:items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-bg.jpg"
          alt="Refined private residence with ocean view at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black-deep/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep/90 via-black-deep/50 to-black-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/75 via-black-deep/15 to-black-deep/30 md:from-black-deep/55 md:via-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-7 md:px-10 lg:px-24 w-full pb-24 pt-24 md:pt-64 md:pb-48 lg:pt-[21rem] lg:pb-64">
          <div className="max-w-2xl">
            <FadeIn delay={200}>
              <p className="text-[9px] md:text-[10px] tracking-[0.45em] uppercase text-gold/35 mb-7 md:mb-14 lg:mb-16">
                {dict.hero.locations}
              </p>
            </FadeIn>
            <FadeIn delay={450}>
              <h1 className="font-serif text-[32px] md:text-[58px] lg:text-[74px] text-white leading-[1.04] font-light tracking-[-0.03em] mb-7 md:mb-16 lg:mb-18">
                {dict.hero.title1}<br />{dict.hero.title2}
              </h1>
            </FadeIn>
            <FadeIn delay={700}>
              <p className="text-[13px] md:text-[15px] lg:text-[16px] leading-[1.9] text-white/40 tracking-[0.02em] max-w-sm md:max-w-[420px] mb-6 md:mb-14 lg:mb-16">
                {dict.hero.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={900}>
              <p className="hidden md:block text-[13px] leading-[1.7] text-[#C6A66B]/40 font-serif italic tracking-[0.01em] max-w-[400px] mb-20 lg:mb-28">
                {dict.hero.tagline}
              </p>
            </FadeIn>
            <FadeIn delay={1100}>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-7">
                <Link href={`/${locale}/contact`} className="group/btn relative px-14 md:px-18 py-[17px] md:py-[20px] bg-[#C6A66B] text-[#0E0E0E] text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-white transition-all duration-500 ease-out text-center">
                  {dict.hero.cta1}
                </Link>
                <Link href={`/${locale}/services`} className="px-12 md:px-16 py-[17px] md:py-[20px] border border-white/8 text-white/25 text-[10px] md:text-[11px] tracking-[0.22em] uppercase hover:border-white/20 hover:text-white/50 transition-all duration-500 ease-out text-center">
                  {dict.hero.cta2}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-offwhite via-offwhite/50 to-transparent" />
      </section>

      {/* ============ WHY CLIENTS TRUST US ============ */}
      <section className="py-32 md:py-56 lg:py-80 bg-offwhite relative">
        <div className="max-w-[1000px] mx-auto px-7 md:px-10 lg:px-16">
          <FadeIn>
            <SectionHeading label={dict.whyUs.label} title={dict.whyUs.title} subtitle={dict.whyUs.subtitle} />
          </FadeIn>
          <div className="mt-24 md:mt-40 lg:mt-56 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-6">
            {dict.whyUs.items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 150}>
                <div className="text-center group py-10 md:py-14 lg:py-16 px-6 hover:bg-white/50 transition-all duration-600 ease-out">
                  <div className="w-6 h-px bg-gold/20 mx-auto mb-10 md:mb-14 group-hover:w-14 group-hover:bg-gold/40 transition-all duration-600 ease-out" />
                  <h3 className="font-serif text-[24px] md:text-[28px] lg:text-[32px] font-light mb-7 md:mb-9 text-black-deep tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-[13px] md:text-[13px] leading-[2.2] tracking-[0.02em] text-warm-gray/55 max-w-[240px] mx-auto group-hover:text-warm-gray/75 transition-colors duration-500">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[500px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/20 to-transparent" />
        </div>
      </section>

      {/* ============ WHO THIS IS FOR ============ */}
      <section className="py-28 md:py-52 lg:py-72 bg-beige relative">
        <div className="max-w-[1300px] mx-auto px-7 md:px-10 lg:px-20">
          <FadeIn>
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end">
              <div className="lg:col-span-5">
                <SectionHeading label={dict.whoIsFor.label} title={dict.whoIsFor.title} centered={false} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-18 md:mt-28 lg:mt-40 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {dict.whoIsFor.profiles.map((profile) => (
                <div key={profile.title} className="bg-beige p-10 md:p-14 lg:p-20 group border border-beige-dark/10 hover:border-beige-dark/25 hover:bg-white/25 transition-all duration-600 ease-out">
                  <div className="w-6 h-px bg-gold/25 mb-9 md:mb-12 group-hover:w-12 group-hover:bg-gold/45 transition-all duration-600 ease-out" />
                  <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep tracking-[-0.02em] mb-6 md:mb-8">{profile.title}</h3>
                  <p className="text-[13px] md:text-[13px] leading-[2.2] tracking-[0.02em] text-warm-gray/60 group-hover:text-warm-gray/80 transition-colors duration-500">{profile.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[500px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/20 to-transparent" />
        </div>
      </section>

      {/* ============ PORTUGAL SETUP SERVICE ============ */}
      <section className="py-32 md:py-56 lg:py-80 bg-offwhite relative">
        <div className="max-w-[1300px] mx-auto px-7 md:px-10 lg:px-20">
          <FadeIn>
            <SectionHeading label={dict.setup.label} title={dict.setup.title} subtitle={dict.setup.subtitle} />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-20 md:mt-36 lg:mt-44 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 lg:items-start">
              <ServiceCard title={dict.setup.basic.title} price={dict.setup.basic.price} features={[...dict.setup.basic.features]} />
              <ServiceCard title={dict.setup.premium.title} price={dict.setup.premium.price} highlighted badge={dict.setup.recommended} features={[...dict.setup.premium.features]} />
              <ServiceCard title={dict.setup.private.title} price={dict.setup.private.price} features={[...dict.setup.private.features]} />
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[500px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/20 to-transparent" />
        </div>
      </section>

      {/* ============ WHAT HAPPENS AFTER ============ */}
      <section className="py-28 md:py-52 lg:py-72 bg-beige relative">
        <div className="max-w-[1100px] mx-auto px-7 md:px-10 lg:px-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-4 lg:pt-2">
              <FadeIn>
                <SectionHeading label={dict.process.label} title={dict.process.title} centered={false} />
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 mt-14 md:mt-18 lg:mt-0">
              <div className="space-y-0">
                {dict.process.steps.map((step, i) => (
                  <FadeIn key={step.number} delay={i * 120}>
                    <div className="flex gap-7 md:gap-12 lg:gap-16 group">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-11 h-11 flex items-center justify-center border border-gold/12 text-[11px] tracking-[0.1em] text-gold/40 group-hover:border-gold/30 group-hover:text-gold/65 transition-all duration-500 ease-out">
                          {step.number}
                        </div>
                        {i < dict.process.steps.length - 1 && (
                          <div className="w-px flex-1 bg-beige-dark/20 min-h-[52px] md:min-h-[68px]" />
                        )}
                      </div>
                      <div className="pb-16 md:pb-22 lg:pb-28">
                        <h3 className="font-serif text-[20px] md:text-[24px] lg:text-[28px] font-light text-black-deep tracking-[-0.02em] mb-5 md:mb-7">{step.title}</h3>
                        <p className="text-[13px] leading-[2.2] tracking-[0.02em] text-warm-gray/60 max-w-sm">{step.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VIP ARRIVAL ============ */}
      <section className="py-32 md:py-56 lg:py-76 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/8 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-7 md:px-10 lg:px-20">
          <FadeIn>
            <SectionHeading label={dict.vip.label} title={dict.vip.title} subtitle={dict.vip.subtitle} light />
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-14 md:mt-20 max-w-lg mx-auto text-center">
              <p className="font-serif text-[30px] md:text-[38px] font-light tracking-[-0.02em] text-gold/75 mb-7 md:mb-10">{dict.vip.price}</p>
              <p className="text-[13px] md:text-[14px] leading-[2.2] tracking-[0.02em] text-beige/25">{dict.vip.text}</p>
            </div>
          </FadeIn>
          <FadeIn delay={220}>
            <div className="mt-20 md:mt-28 max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-6 md:gap-7">
                {dict.vip.features.map((item) => (
                  <div key={item} className="flex items-center gap-6 text-[13px] tracking-[0.015em] text-beige/30 py-3.5 border-b border-beige/4 last:border-0">
                    <span className="block w-3 h-px bg-gold/25 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/8 to-transparent" />
      </section>

      {/* ============ LIFESTYLE & ACCESS ============ */}
      <section className="py-28 md:py-52 lg:py-68 bg-offwhite relative">
        <div className="max-w-[1000px] mx-auto px-7 md:px-10 lg:px-16">
          <FadeIn>
            <div className="lg:max-w-md">
              <SectionHeading label={dict.lifestyle.label} title={dict.lifestyle.title} subtitle={dict.lifestyle.subtitle} centered={false} />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-18 md:mt-28 flex flex-wrap gap-3 md:gap-5">
              {dict.lifestyle.categories.map((category) => (
                <div key={category} className="px-7 md:px-10 py-4 md:py-5 border border-beige-dark/20 text-[12px] tracking-[0.1em] text-warm-gray/70 hover:border-gold/30 hover:text-black-deep/80 transition-all duration-500 ease-out">
                  {category}
                </div>
              ))}
            </div>
            <p className="mt-14 md:mt-18 text-[12px] tracking-[0.05em] text-warm-gray/45 italic">{dict.lifestyle.note}</p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[500px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/20 to-transparent" />
        </div>
      </section>

      {/* ============ MEMBERSHIP ============ */}
      <section className="py-28 md:py-52 lg:py-68 bg-beige relative">
        <div className="max-w-[1000px] mx-auto px-7 md:px-10 lg:px-16">
          <FadeIn>
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-6 lg:col-start-7 lg:text-right">
                <SectionHeading label={dict.membership.label} title={dict.membership.title} subtitle={dict.membership.subtitle} centered={false} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-18 md:mt-28 max-w-2xl p-10 md:p-18 lg:p-28 bg-white relative">
              <div className="absolute top-0 left-10 right-10 md:left-18 md:right-18 lg:left-28 lg:right-28 h-px bg-gold/15" />
              <div className="mb-14 md:mb-20">
                <h3 className="font-serif text-[22px] lg:text-[28px] font-light text-black-deep tracking-[-0.02em] mb-5 md:mb-6">{dict.membership.packageTitle}</h3>
                <p className="font-serif text-[28px] md:text-[34px] font-light tracking-[-0.02em] text-gold/85">
                  {dict.membership.price} <span className="text-[14px] md:text-[15px] text-warm-gray/40">{dict.membership.perYear}</span>
                </p>
              </div>
              <div className="w-10 h-px bg-beige-dark/25 mb-12 md:mb-16" />
              <ul className="space-y-6 md:space-y-8 max-w-md">
                {dict.membership.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-5 text-[13px] leading-[2.1] tracking-[0.015em] text-warm-gray/75">
                    <span className="mt-[11px] shrink-0 block w-3 h-px bg-gold/35" />{feature}
                  </li>
                ))}
              </ul>
              <p className="mt-14 md:mt-20 text-[12px] text-warm-gray/40 italic">{dict.membership.note}</p>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[500px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/20 to-transparent" />
        </div>
      </section>

      {/* ============ OUR NETWORK ============ */}
      <section className="py-28 md:py-52 lg:py-68 bg-offwhite relative">
        <div className="max-w-[1300px] mx-auto px-7 md:px-10 lg:px-20">
          <FadeIn>
            <div className="lg:max-w-md">
              <SectionHeading label={dict.network.label} title={dict.network.title} subtitle={dict.network.subtitle} centered={false} />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-18 md:mt-32 grid grid-cols-2 md:grid-cols-5 gap-px bg-beige-dark/15">
              {dict.network.categories.map((category) => (
                <div key={category} className="bg-offwhite p-7 md:p-10 lg:p-14 text-center group">
                  <p className="text-[12px] leading-[1.9] tracking-[0.03em] text-warm-gray/60 group-hover:text-black-deep/80 transition-colors duration-500 ease-out">{category}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ PRIVATE GATHERINGS ============ */}
      <section className="py-28 md:py-52 lg:py-68 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/8 to-transparent" />
        <div className="max-w-[800px] mx-auto px-7 md:px-10 lg:px-16">
          <FadeIn>
            <SectionHeading label={dict.events.label} title={dict.events.title} subtitle={dict.events.subtitle} light />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-3 md:gap-4">
              {dict.events.types.map((event) => (
                <div key={event} className="px-7 md:px-9 py-3.5 md:py-4.5 border border-beige/6 text-[12px] tracking-[0.08em] text-beige/28 hover:border-gold/20 hover:text-gold/55 transition-all duration-500 ease-out">
                  {event}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/8 to-transparent" />
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-36 md:py-60 lg:py-80 bg-beige relative">
        <div className="max-w-[640px] mx-auto px-7 md:px-10 lg:px-16 text-center">
          <FadeIn>
            <div className="w-12 h-px bg-gold/25 mx-auto mb-12 md:mb-16" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/40 mb-6 md:mb-7">{dict.cta.exclusive}</p>
            <div className="w-5 h-px bg-gold/15 mx-auto mb-12 md:mb-14" />
            <h2 className="font-serif text-[28px] md:text-[42px] lg:text-[50px] font-light text-black-deep leading-[1.1] tracking-[-0.02em] mb-10 md:mb-14">
              {dict.cta.titleLine1}<br />{dict.cta.titleLine2}
            </h2>
            <p className="text-[13px] md:text-[14px] leading-[2.2] tracking-[0.02em] text-warm-gray/60 mb-16 md:mb-24 max-w-[420px] mx-auto">{dict.cta.text}</p>
          </FadeIn>
          <FadeIn delay={180}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Link href={`/${locale}/contact`} className="inline-block px-14 md:px-16 py-[17px] md:py-[20px] bg-black-deep text-beige/75 text-[10px] md:text-[11px] tracking-[0.22em] uppercase hover:bg-black-soft hover:text-beige transition-all duration-500 ease-out">
                {dict.cta.button}
              </Link>
              <Link href={`/${locale}/contact`} className="inline-block px-12 md:px-14 py-[17px] md:py-[20px] border border-black-deep/10 text-black-deep/35 text-[10px] md:text-[11px] tracking-[0.22em] uppercase hover:border-black-deep/25 hover:text-black-deep/70 transition-all duration-500 ease-out">
                {dict.cta.buttonSecondary}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
