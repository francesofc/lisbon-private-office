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
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ animation: "heroZoom 20s ease-out forwards" }}
        />
        <div className="absolute inset-0 bg-black-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep/90 via-black-deep/55 to-black-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/70 via-black-deep/20 to-black-deep/35 md:from-black-deep/55 md:via-transparent" />
        {/* Subtle gold vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(198,168,107,0.06),transparent_70%)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-7 md:px-8 lg:px-20 w-full pb-24 pt-24 md:pt-64 md:pb-44 lg:pt-[20rem] lg:pb-60">
          <div className="max-w-2xl">
            <FadeIn delay={100}>
              <p className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-gold/40 mb-7 md:mb-16 lg:mb-20">
                {dict.hero.locations}
              </p>
            </FadeIn>
            <FadeIn delay={250}>
              <h1 className="font-serif text-[32px] md:text-[58px] lg:text-[72px] text-white leading-[1.06] font-light tracking-[-0.025em] mb-6 md:mb-14 lg:mb-16 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
                {dict.hero.title1}<br />{dict.hero.title2}
              </h1>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-[13px] md:text-[15px] lg:text-[16px] leading-[1.8] text-white/45 tracking-[0.02em] max-w-sm md:max-w-md mb-6 md:mb-12 lg:mb-14">
                {dict.hero.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={500}>
              <p className="hidden md:block text-[13px] leading-[1.7] text-[#C6A66B]/50 font-serif italic tracking-[0.01em] max-w-md mb-20 lg:mb-24">
                {dict.hero.tagline}
              </p>
            </FadeIn>
            <FadeIn delay={650}>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link href={`/${locale}/contact`} className="btn-gold px-12 md:px-16 py-4 md:py-[19px] bg-[#C6A66B] text-[#0E0E0E] text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-white hover:text-[#0E0E0E] transition-all duration-400 text-center shadow-[0_4px_24px_rgba(198,168,107,0.25)]">
                  {dict.hero.cta1}
                </Link>
                <Link href={`/${locale}/services`} className="px-10 md:px-14 py-4 md:py-[19px] border border-white/25 text-white/55 text-[11px] tracking-[0.2em] uppercase hover:border-white/45 hover:text-white/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-400 text-center backdrop-blur-[2px]">
                  {dict.hero.cta2}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-offwhite via-offwhite/60 to-transparent" />

        {/* CSS animation for hero zoom */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes heroZoom {
            from { transform: scale(1.08); }
            to { transform: scale(1.0); }
          }
        `}} />
      </section>

      {/* ============ WHY CLIENTS TRUST US ============ */}
      <section className="py-28 md:py-48 lg:py-68 bg-offwhite bg-noise depth-layer relative">
        <div className="max-w-[1100px] mx-auto px-7 md:px-8 lg:px-16 relative z-10">
          <FadeIn>
            <SectionHeading label={dict.whyUs.label} title={dict.whyUs.title} subtitle={dict.whyUs.subtitle} />
          </FadeIn>
          <div className="mt-20 md:mt-36 lg:mt-48 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-10">
            {dict.whyUs.items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="text-center group p-8 md:p-10 lg:p-14 card-lift bg-white/0 hover:bg-white/80 rounded-sm">
                  <div className="w-5 h-px bg-gold/25 mx-auto mb-8 md:mb-12 group-hover:w-14 group-hover:bg-gold/50 transition-all duration-500 ease-out" />
                  <h3 className="font-serif text-[24px] md:text-[26px] lg:text-[30px] font-light mb-6 md:mb-8 text-black-deep tracking-[-0.015em]">{item.title}</h3>
                  <p className="text-[14px] md:text-[13px] leading-[2.1] tracking-[0.015em] text-warm-gray/65 max-w-[280px] md:max-w-[230px] mx-auto group-hover:text-warm-gray/85 transition-colors duration-400">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[600px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/30 to-transparent" />
        </div>
      </section>

      {/* ============ WHO THIS IS FOR ============ */}
      <section className="py-24 md:py-44 lg:py-64 bg-beige bg-noise relative">
        <div className="max-w-[1400px] mx-auto px-7 md:px-8 lg:px-16 relative z-10">
          <FadeIn>
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end">
              <div className="lg:col-span-5">
                <SectionHeading label={dict.whoIsFor.label} title={dict.whoIsFor.title} centered={false} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-16 md:mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {dict.whoIsFor.profiles.map((profile) => (
                <div key={profile.title} className="bg-white/40 backdrop-blur-sm p-10 md:p-14 lg:p-20 group border border-beige-dark/10 card-inner-glow">
                  <div className="w-5 h-px bg-gold/30 mb-8 md:mb-10 group-hover:w-12 group-hover:bg-gold/55 transition-all duration-500 ease-out" />
                  <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep tracking-[-0.015em] mb-5 md:mb-7">{profile.title}</h3>
                  <p className="text-[14px] md:text-[13px] leading-[2.1] tracking-[0.015em] text-warm-gray/70 group-hover:text-warm-gray/90 transition-colors duration-400">{profile.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[600px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/25 to-transparent" />
        </div>
      </section>

      {/* ============ PORTUGAL SETUP SERVICE ============ */}
      <section className="py-28 md:py-48 lg:py-68 bg-offwhite depth-layer relative">
        <div className="max-w-[1400px] mx-auto px-7 md:px-8 lg:px-16 relative z-10">
          <FadeIn>
            <SectionHeading label={dict.setup.label} title={dict.setup.title} subtitle={dict.setup.subtitle} />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 lg:items-start">
              <ServiceCard title={dict.setup.basic.title} price={dict.setup.basic.price} features={[...dict.setup.basic.features]} />
              <ServiceCard title={dict.setup.premium.title} price={dict.setup.premium.price} highlighted badge={dict.setup.recommended} features={[...dict.setup.premium.features]} />
              <ServiceCard title={dict.setup.private.title} price={dict.setup.private.price} features={[...dict.setup.private.features]} />
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[600px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/30 to-transparent" />
        </div>
      </section>

      {/* ============ WHAT HAPPENS AFTER ============ */}
      <section className="py-24 md:py-44 lg:py-64 bg-beige bg-noise relative">
        <div className="max-w-[1200px] mx-auto px-7 md:px-8 lg:px-16 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4 lg:pt-2">
              <FadeIn>
                <SectionHeading label={dict.process.label} title={dict.process.title} centered={false} />
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 mt-14 md:mt-16 lg:mt-0">
              <div className="space-y-0">
                {dict.process.steps.map((step, i) => (
                  <FadeIn key={step.number} delay={i * 100}>
                    <div className="flex gap-7 md:gap-10 lg:gap-14 group">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-11 h-11 flex items-center justify-center border border-gold/15 text-[11px] tracking-[0.1em] text-gold/50 group-hover:border-gold/40 group-hover:text-gold/70 group-hover:shadow-[0_0_16px_rgba(198,168,107,0.1)] transition-all duration-400 ease-out">
                          {step.number}
                        </div>
                        {i < dict.process.steps.length - 1 && (
                          <div className="w-px flex-1 bg-gradient-to-b from-beige-dark/30 to-beige-dark/10 min-h-[48px] md:min-h-[60px]" />
                        )}
                      </div>
                      <div className="pb-14 md:pb-18 lg:pb-24">
                        <h3 className="font-serif text-[20px] md:text-[22px] lg:text-[26px] font-light text-black-deep tracking-[-0.015em] mb-4 md:mb-6">{step.title}</h3>
                        <p className="text-[14px] md:text-[13px] leading-[2.1] tracking-[0.015em] text-warm-gray/75 max-w-sm">{step.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VIP ============ */}
      <section className="py-28 md:py-44 lg:py-64 bg-black-deep bg-noise relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(198,168,107,0.04),transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto px-7 md:px-8 lg:px-16 relative z-10">
          <FadeIn>
            <SectionHeading label={dict.vip.label} title={dict.vip.title} subtitle={dict.vip.subtitle} light />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-12 md:mt-16 max-w-xl mx-auto text-center">
              <p className="font-serif text-[30px] md:text-[36px] font-light tracking-[-0.01em] text-gold/80 mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(198,168,107,0.15)]">{dict.vip.price}</p>
              <p className="text-[14px] leading-[2] tracking-[0.015em] text-beige/30">{dict.vip.text}</p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="mt-16 md:mt-24 max-w-lg mx-auto">
              <div className="grid grid-cols-1 gap-5 md:gap-6">
                {dict.vip.features.map((item) => (
                  <div key={item} className="flex items-center gap-5 text-[13px] tracking-[0.01em] text-beige/35 py-3 border-b border-beige/5 last:border-0 hover:text-beige/55 hover:border-gold/10 transition-all duration-300">
                    <span className="block w-3 h-px bg-gold/30 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </section>

      {/* ============ LIFESTYLE & ACCESS ============ */}
      <section className="py-24 md:py-44 lg:py-58 bg-offwhite depth-layer relative">
        <div className="max-w-[1100px] mx-auto px-7 md:px-8 lg:px-16 relative z-10">
          <FadeIn>
            <div className="lg:max-w-lg">
              <SectionHeading label={dict.lifestyle.label} title={dict.lifestyle.title} subtitle={dict.lifestyle.subtitle} centered={false} />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-16 md:mt-24 flex flex-wrap gap-3 md:gap-5">
              {dict.lifestyle.categories.map((category) => (
                <div key={category} className="px-7 md:px-9 py-4 md:py-5 border border-beige-dark/25 text-[12px] tracking-[0.08em] text-warm-gray/80 hover:border-gold/40 hover:text-black-deep hover:shadow-[0_4px_16px_rgba(198,168,107,0.08)] hover:-translate-y-px transition-all duration-400 ease-out">
                  {category}
                </div>
              ))}
            </div>
            <p className="mt-12 md:mt-16 text-[12px] tracking-[0.05em] text-warm-gray/55 italic">{dict.lifestyle.note}</p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[600px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/25 to-transparent" />
        </div>
      </section>

      {/* ============ MEMBERSHIP ============ */}
      <section className="py-24 md:py-44 lg:py-58 bg-beige bg-noise relative">
        <div className="max-w-[1100px] mx-auto px-7 md:px-8 lg:px-16 relative z-10">
          <FadeIn>
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-6 lg:col-start-7 lg:text-right">
                <SectionHeading label={dict.membership.label} title={dict.membership.title} subtitle={dict.membership.subtitle} centered={false} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-16 md:mt-24 max-w-2xl p-10 md:p-16 lg:p-28 bg-white relative shadow-[0_8px_40px_rgba(14,14,14,0.04),0_1px_8px_rgba(14,14,14,0.02)]">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
              <div className="mb-12 md:mb-18">
                <h3 className="font-serif text-[22px] lg:text-[26px] font-light text-black-deep tracking-[-0.015em] mb-4 md:mb-5">{dict.membership.packageTitle}</h3>
                <p className="font-serif text-[28px] md:text-[32px] font-light tracking-[-0.01em] text-gold drop-shadow-[0_0_12px_rgba(198,168,107,0.15)]">
                  {dict.membership.price} <span className="text-[14px] md:text-[15px] text-warm-gray/50">{dict.membership.perYear}</span>
                </p>
              </div>
              <div className="w-10 h-px bg-gradient-to-r from-gold/30 to-transparent mb-10 md:mb-14" />
              <ul className="space-y-5 md:space-y-7 max-w-md">
                {dict.membership.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-[14px] md:text-[13px] leading-[2] tracking-[0.01em] text-warm-gray">
                    <span className="mt-[10px] shrink-0 block w-3 h-px bg-gold/40" />{feature}
                  </li>
                ))}
              </ul>
              <p className="mt-12 md:mt-16 text-[12px] text-warm-gray/50 italic">{dict.membership.note}</p>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="max-w-[600px] mx-auto h-full bg-gradient-to-r from-transparent via-beige-dark/25 to-transparent" />
        </div>
      </section>

      {/* ============ OUR NETWORK ============ */}
      <section className="py-24 md:py-44 lg:py-58 bg-offwhite relative">
        <div className="max-w-[1400px] mx-auto px-7 md:px-8 lg:px-16">
          <FadeIn>
            <div className="lg:max-w-md">
              <SectionHeading label={dict.network.label} title={dict.network.title} subtitle={dict.network.subtitle} centered={false} />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-16 md:mt-28 grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-beige-dark/20">
              {dict.network.categories.map((category) => (
                <div key={category} className="bg-offwhite p-6 md:p-8 lg:p-12 text-center group hover:bg-white transition-all duration-400 ease-out">
                  <p className="text-[12px] leading-[1.8] tracking-[0.02em] text-warm-gray group-hover:text-black-deep transition-colors duration-400 ease-out">{category}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ PRIVATE GATHERINGS ============ */}
      <section className="py-24 md:py-44 lg:py-58 bg-black-deep bg-noise relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(198,168,107,0.03),transparent_60%)]" />
        <div className="max-w-[900px] mx-auto px-7 md:px-8 lg:px-16 relative z-10">
          <FadeIn>
            <SectionHeading label={dict.events.label} title={dict.events.title} subtitle={dict.events.subtitle} light />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-14 md:mt-20 flex flex-wrap justify-center gap-3 md:gap-4">
              {dict.events.types.map((event) => (
                <div key={event} className="px-6 md:px-8 py-3.5 md:py-4 border border-beige/8 text-[12px] tracking-[0.05em] text-beige/35 hover:border-gold/30 hover:text-gold/70 hover:shadow-[0_0_16px_rgba(198,168,107,0.08)] transition-all duration-400 ease-out">
                  {event}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-32 md:py-52 lg:py-72 bg-beige bg-noise depth-layer relative pb-44 md:pb-52 lg:pb-72">
        <div className="max-w-[700px] mx-auto px-7 md:px-8 lg:px-16 text-center relative z-10">
          <FadeIn>
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-10 md:mb-14" />
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold/45 mb-5 md:mb-6">{dict.cta.exclusive}</p>
            <div className="w-6 h-px bg-gold/20 mx-auto mb-10 md:mb-12" />
            <h2 className="font-serif text-[28px] md:text-[40px] lg:text-[48px] font-light text-black-deep leading-[1.15] tracking-[-0.015em] mb-8 md:mb-12">
              {dict.cta.titleLine1}<br />{dict.cta.titleLine2}
            </h2>
            <p className="text-[14px] leading-[2] tracking-[0.015em] text-warm-gray/75 mb-14 md:mb-20 max-w-md mx-auto">{dict.cta.text}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5">
              <Link href={`/${locale}/contact`} className="btn-gold inline-block px-12 py-4 md:py-[17px] bg-black-deep text-beige/80 text-[11px] tracking-[0.18em] uppercase hover:text-beige transition-all duration-400 ease-out shadow-[0_4px_20px_rgba(14,14,14,0.15)]">
                {dict.cta.button}
              </Link>
              <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 md:py-[17px] border border-black-deep/12 text-black-deep/45 text-[11px] tracking-[0.18em] uppercase hover:border-black-deep/35 hover:text-black-deep hover:shadow-[0_4px_16px_rgba(14,14,14,0.06)] transition-all duration-400 ease-out">
                {dict.cta.buttonSecondary}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
