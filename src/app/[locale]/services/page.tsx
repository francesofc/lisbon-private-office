import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.services_title,
    description: dict.metadata.services_description,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 lg:pt-48 lg:pb-36 bg-black-deep relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(198,168,107,0.03)_0%,_transparent_70%)]" />
        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/50 mb-8">
            {dict.setup.label}
          </p>
          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[68px] text-beige/90 leading-[1.08] font-light max-w-2xl">
            {dict.nav.services}
          </h1>
          <p className="mt-8 text-[15px] leading-[1.9] text-beige/30 max-w-lg">
            {dict.setup.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite to-transparent" />
      </section>

      {/* Setup */}
      <section id="setup" className="py-32 lg:py-44 bg-offwhite scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.setup.label} title={dict.setup.title} subtitle={dict.setup.subtitle} />
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-beige-dark/25 lg:items-start">
            <ServiceCard title={dict.setup.basic.title} price={dict.setup.basic.price} features={[...dict.setup.basic.features]} />
            <ServiceCard title={dict.setup.premium.title} price={dict.setup.premium.price} highlighted badge={dict.setup.recommended} features={[...dict.setup.premium.features]} />
            <ServiceCard title={dict.setup.private.title} price={dict.setup.private.price} features={[...dict.setup.private.features]} />
          </div>
        </div>
      </section>

      {/* VIP */}
      <section id="vip" className="py-32 lg:py-44 bg-beige scroll-mt-24">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.vip.label} title={dict.vip.title} subtitle={dict.vip.subtitle} />
          <div className="mt-16 p-12 lg:p-20 bg-white relative">
            <div className="absolute top-0 left-12 right-12 lg:left-20 lg:right-20 h-px bg-gold/20" />
            <div className="text-center mb-14">
              <p className="font-serif text-[32px] font-light text-gold mb-4">{dict.vip.price}</p>
              <p className="text-[14px] text-warm-gray">{dict.vip.text}</p>
            </div>
            <div className="w-8 h-px bg-beige-dark/40 mx-auto mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto">
              {dict.vip.features.map((item) => (
                <div key={item} className="flex items-start gap-4 text-[13px] leading-[1.7] text-warm-gray">
                  <span className="mt-[9px] shrink-0 block w-3 h-px bg-gold/40" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section id="lifestyle" className="py-32 lg:py-44 bg-black-deep scroll-mt-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.lifestyle.label} title={dict.lifestyle.title} subtitle={dict.lifestyle.subtitle} light />
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {dict.lifestyle.categories.map((category) => (
              <div key={category} className="px-8 py-4 border border-beige/10 text-[12px] tracking-[0.08em] text-beige/40 hover:border-gold/25 hover:text-gold/60 transition-all duration-500">
                {category}
              </div>
            ))}
          </div>
          <p className="mt-14 text-center text-[12px] text-beige/20 italic">{dict.lifestyle.note}</p>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-32 lg:py-44 bg-offwhite scroll-mt-24">
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
                  <span className="mt-[9px] shrink-0 block w-3 h-px bg-gold/40" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-12 text-center text-[12px] text-warm-gray/50 italic">{dict.membership.note}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 lg:py-48 bg-beige relative">
        <div className="max-w-[700px] mx-auto px-8 lg:px-16 text-center">
          <div className="w-10 h-px bg-gold/40 mx-auto mb-10" />
          <h2 className="font-serif text-[32px] md:text-[40px] font-light text-black-deep leading-[1.15] mb-8">{dict.servicesCta.title}</h2>
          <p className="text-[15px] leading-[1.9] text-warm-gray mb-14 max-w-md mx-auto">{dict.servicesCta.text}</p>
          <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 bg-black-deep text-beige/80 text-[12px] tracking-[0.12em] uppercase hover:bg-black-soft transition-colors duration-500">
            {dict.servicesCta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
