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
          className={`text-[11px] tracking-[0.3em] uppercase mb-6 ${
            light ? "text-gold/50" : "text-gold/70"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-[32px] md:text-[40px] lg:text-[52px] leading-[1.15] font-light ${
          light ? "text-beige/90" : "text-black-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-[15px] leading-[1.85] max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-beige/40" : "text-warm-gray"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
