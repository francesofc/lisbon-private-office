"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/getDictionary";

export default function ContactClient({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 lg:pt-48 lg:pb-36 bg-black-deep relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(198,168,107,0.03)_0%,_transparent_70%)]" />
        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/50 mb-8">
            {dict.contact.label}
          </p>
          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[68px] text-beige/90 leading-[1.08] font-light max-w-3xl">
            {dict.contact.title1}
            <br />
            {dict.contact.title2}
          </h1>
          <p className="mt-8 text-[15px] leading-[1.9] text-beige/30 max-w-lg">
            {dict.contact.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="py-32 lg:py-44 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8">
            {/* Form */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[28px] md:text-[32px] font-light text-black-deep mb-10">
                {dict.contact.formTitle}
              </h2>

              {submitted ? (
                <div className="p-14 bg-white relative">
                  <div className="absolute top-0 left-14 right-14 h-px bg-gold/20" />
                  <div className="text-center">
                    <p className="font-serif text-[22px] font-light text-black-deep mb-4">
                      {dict.contact.thankYouTitle}
                    </p>
                    <p className="text-[14px] text-warm-gray">
                      {dict.contact.thankYouText}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-[11px] tracking-[0.2em] uppercase text-warm-gray/70 mb-3">
                      {dict.contact.nameLabel}
                    </label>
                    <input id="name" name="name" type="text" required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-beige-dark/40 text-[15px] text-black-deep placeholder:text-warm-gray/30 focus:outline-none focus:border-gold/50 transition-colors duration-500"
                      placeholder={dict.contact.namePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] tracking-[0.2em] uppercase text-warm-gray/70 mb-3">
                      {dict.contact.emailLabel}
                    </label>
                    <input id="email" name="email" type="email" required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-beige-dark/40 text-[15px] text-black-deep placeholder:text-warm-gray/30 focus:outline-none focus:border-gold/50 transition-colors duration-500"
                      placeholder={dict.contact.emailPlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[11px] tracking-[0.2em] uppercase text-warm-gray/70 mb-3">
                      {dict.contact.phoneLabel}
                    </label>
                    <input id="phone" name="phone" type="tel"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-beige-dark/40 text-[15px] text-black-deep placeholder:text-warm-gray/30 focus:outline-none focus:border-gold/50 transition-colors duration-500"
                      placeholder={dict.contact.phonePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[11px] tracking-[0.2em] uppercase text-warm-gray/70 mb-3">
                      {dict.contact.messageLabel}
                    </label>
                    <textarea id="message" name="message" rows={4} required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-beige-dark/40 text-[15px] text-black-deep placeholder:text-warm-gray/30 focus:outline-none focus:border-gold/50 transition-colors duration-500 resize-none"
                      placeholder={dict.contact.messagePlaceholder} />
                  </div>
                  <div className="pt-4">
                    <button type="submit"
                      className="px-10 py-4 bg-black-deep text-beige/80 text-[12px] tracking-[0.12em] uppercase hover:bg-black-soft transition-colors duration-500">
                      {dict.contact.send}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 lg:col-start-9">
              <h2 className="font-serif text-[28px] md:text-[32px] font-light text-black-deep mb-10">
                {dict.contact.directTitle}
              </h2>
              <div className="space-y-10">
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">{dict.contact.officeLabel}</p>
                  <p className="text-[15px] text-black-deep/60">Lisbon Private Office</p>
                  <p className="text-[15px] text-black-deep/60">Lisbon, Portugal</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">{dict.contact.emailContactLabel}</p>
                  <a href="mailto:contact@lisbonprivateoffice.com" className="text-[15px] text-black-deep/60 hover:text-gold transition-colors duration-500">
                    contact@lisbonprivateoffice.com
                  </a>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">{dict.contact.whatsappLabel}</p>
                  <a href="https://wa.me/351000000000" target="_blank" rel="noopener noreferrer"
                    className="text-[15px] text-black-deep/60 hover:text-gold transition-colors duration-500">
                    +351 000 000 000
                  </a>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">{dict.contact.instagramLabel}</p>
                  <a href="https://instagram.com/lisbonprivateoffice" target="_blank" rel="noopener noreferrer"
                    className="text-[15px] text-black-deep/60 hover:text-gold transition-colors duration-500">
                    @lisbonprivateoffice
                  </a>
                </div>
                <div className="pt-8 border-t border-beige-dark/25">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold/60 mb-3">{dict.contact.areasLabel}</p>
                  <p className="text-[15px] text-black-deep/60">{dict.hero.locations}</p>
                </div>
              </div>

              <div className="mt-14 p-10 bg-white relative group">
                <div className="absolute top-0 left-10 right-10 h-px bg-beige-dark/30 group-hover:bg-gold/20 transition-colors duration-500" />
                <p className="text-[13px] text-warm-gray mb-6">{dict.contact.whatsappCta}</p>
                <a href="https://wa.me/351000000000" target="_blank" rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 border border-black-deep/15 text-[12px] tracking-[0.12em] uppercase text-black-deep/60 hover:border-gold/40 hover:text-gold transition-all duration-500">
                  {dict.contact.whatsappButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
