import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
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
    title: dict.metadata.about_title,
    description: dict.metadata.about_description,
  };
}

export default async function AboutPage({
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
            {dict.about.label}
          </p>
          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[68px] text-beige/90 leading-[1.08] font-light max-w-3xl">
            {dict.about.title1}
            <br />
            {dict.about.title2}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite to-transparent" />
      </section>

      {/* Story */}
      <section className="py-32 lg:py-44 bg-offwhite">
        <div className="max-w-[680px] mx-auto px-8 lg:px-16">
          <div className="w-10 h-px bg-gold/40 mb-12" />
          <p className="font-serif text-[22px] md:text-[26px] leading-[1.5] font-light text-black-deep mb-10">
            {dict.about.story1}
          </p>
          <p className="text-[15px] leading-[1.9] text-warm-gray mb-8">
            {dict.about.story2}
          </p>
          <p className="text-[15px] leading-[1.9] text-warm-gray">
            {dict.about.story3}
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 lg:py-44 bg-beige">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionHeading label={dict.about.approachLabel} title={dict.about.approachTitle} />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-beige-dark/30">
            {dict.about.approachPillars.map((pillar) => (
              <div key={pillar.title} className="bg-beige p-12 lg:p-16 group">
                <div className="w-8 h-px bg-gold/30 mb-8 group-hover:w-12 transition-all duration-700" />
                <h3 className="font-serif text-[24px] lg:text-[28px] font-light text-black-deep mb-5">
                  {pillar.title}
                </h3>
                <p className="text-[13px] leading-[1.85] text-warm-gray max-w-sm">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 lg:py-44 bg-black-deep relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/50 mb-12">
            {dict.about.locationsLabel}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            {["Lisbon", "Cascais", "Algarve"].map((location) => (
              <h3 key={location} className="font-serif text-[28px] md:text-[36px] font-light text-beige/50">
                {location}
              </h3>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 lg:py-48 bg-offwhite">
        <div className="max-w-[700px] mx-auto px-8 lg:px-16 text-center">
          <div className="w-10 h-px bg-gold/40 mx-auto mb-10" />
          <h2 className="font-serif text-[32px] md:text-[40px] font-light text-black-deep leading-[1.15] mb-8">
            {dict.about.ctaTitle}
          </h2>
          <p className="text-[15px] leading-[1.9] text-warm-gray mb-14 max-w-md mx-auto">
            {dict.about.ctaText}
          </p>
          <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 bg-black-deep text-beige/80 text-[12px] tracking-[0.12em] uppercase hover:bg-black-soft transition-colors duration-500">
            {dict.nav.contactUs}
          </Link>
        </div>
      </section>
    </>
  );
}
