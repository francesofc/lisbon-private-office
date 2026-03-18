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
          className={`text-[11px] tracking-[0.35em] uppercase mb-8 ${
            light ? "text-gold/50" : "text-gold/70"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-[32px] md:text-[40px] lg:text-[52px] leading-[1.18] font-light tracking-[-0.015em] ${
          light ? "text-beige/90" : "text-black-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-8 text-[14px] leading-[2] tracking-[0.02em] max-w-xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-beige/35" : "text-warm-gray/70"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
