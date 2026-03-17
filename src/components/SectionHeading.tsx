interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p
          className={`text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-8 md:mb-10 ${
            light ? "text-gold/45" : "text-gold/60"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-[30px] md:text-[42px] lg:text-[52px] leading-[1.12] font-light tracking-[-0.02em] ${
          light ? "text-beige/90" : "text-black-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-8 md:mt-10 text-[13px] md:text-[14px] leading-[2.1] tracking-[0.02em] max-w-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-beige/30" : "text-warm-gray/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
