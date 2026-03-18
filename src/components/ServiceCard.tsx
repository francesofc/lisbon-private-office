interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export default function ServiceCard({
  title,
  price,
  features,
  highlighted = false,
  badge,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative p-14 lg:p-18 transition-all duration-500 ease-out ${
        highlighted
          ? "bg-black-deep text-beige lg:scale-[1.03] lg:-my-6 lg:z-10 shadow-[0_24px_64px_rgba(14,14,14,0.25),0_8px_24px_rgba(14,14,14,0.15)]"
          : "bg-white card-inner-glow"
      }`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 ${
          highlighted
            ? "bg-gradient-to-r from-transparent via-gold/60 to-transparent"
            : "bg-gradient-to-r from-transparent via-beige-dark/30 to-transparent group-hover:via-gold/40"
        }`}
      />

      {/* Badge */}
      {badge && (
        <div className="mb-7">
          <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.18em] uppercase bg-gold/15 text-gold border border-gold/20 shadow-[0_0_12px_rgba(198,168,107,0.1)]">
            {badge}
          </span>
        </div>
      )}

      <div className={badge ? "mb-10" : "mb-12"}>
        <h3
          className={`font-serif text-[24px] lg:text-[28px] font-light tracking-[-0.015em] mb-4 transition-colors duration-400 ${
            highlighted ? "text-beige/90" : "text-black-deep"
          }`}
        >
          {title}
        </h3>
        <p className={`font-serif text-[28px] lg:text-[32px] font-light tracking-[-0.01em] transition-colors duration-400 ${
          highlighted ? "text-gold" : "text-gold group-hover:text-gold/90"
        }`}>
          {price}
        </p>
      </div>

      <div
        className={`h-px mb-10 transition-all duration-500 ${
          highlighted ? "w-10 bg-gradient-to-r from-gold/30 to-transparent" : "w-8 bg-beige-dark/30 group-hover:w-14 group-hover:bg-gradient-to-r group-hover:from-gold/40 group-hover:to-transparent"
        }`}
      />

      <ul className="space-y-6">
        {features.map((feature, i) => (
          <li
            key={i}
            className={`text-[13px] leading-[2] tracking-[0.015em] flex items-start gap-4 transition-colors duration-400 ${
              highlighted ? "text-beige/55" : "text-warm-gray/80 group-hover:text-warm-gray/95"
            }`}
          >
            <span
              className={`mt-[10px] shrink-0 block w-[14px] h-px transition-all duration-400 ${
                highlighted ? "bg-gold/40" : "bg-gold/40 group-hover:bg-gold/60"
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Subtle bottom reflection for highlighted */}
      {highlighted && (
        <div className="absolute -bottom-3 left-[10%] right-[10%] h-3 bg-gradient-to-b from-black-deep/10 to-transparent blur-sm" />
      )}
    </div>
  );
}
