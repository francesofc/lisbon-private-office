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
      className={`group relative p-12 md:p-14 lg:p-20 transition-all duration-600 ease-out ${
        highlighted
          ? "bg-black-deep text-beige lg:scale-[1.02] lg:-my-5 lg:z-10 lg:shadow-2xl"
          : "bg-white border border-transparent hover:border-beige-dark/15"
      }`}
    >
      {/* Top accent */}
      <div
        className={`absolute top-0 left-12 right-12 lg:left-20 lg:right-20 h-px transition-all duration-600 ${
          highlighted
            ? "bg-gold/35"
            : "bg-beige-dark/25 group-hover:bg-gold/35"
        }`}
      />

      {/* Badge */}
      {badge && (
        <div className="mb-8">
          <span className="inline-block px-5 py-2 text-[10px] tracking-[0.2em] uppercase bg-gold/10 text-gold/80 border border-gold/15">
            {badge}
          </span>
        </div>
      )}

      <div className={badge ? "mb-12" : "mb-14"}>
        <h3
          className={`font-serif text-[24px] lg:text-[28px] font-light tracking-[-0.02em] mb-5 ${
            highlighted ? "text-beige/90" : "text-black-deep"
          }`}
        >
          {title}
        </h3>
        <p className={`font-serif text-[28px] lg:text-[32px] font-light tracking-[-0.01em] ${
          highlighted ? "text-gold/85" : "text-gold"
        }`}>
          {price}
        </p>
      </div>

      <div
        className={`h-px mb-12 transition-all duration-600 ${
          highlighted ? "w-10 bg-beige/10" : "w-8 bg-beige-dark/25 group-hover:w-12 group-hover:bg-gold/20"
        }`}
      />

      <ul className="space-y-7">
        {features.map((feature, i) => (
          <li
            key={i}
            className={`text-[13px] leading-[2.1] tracking-[0.015em] flex items-start gap-5 ${
              highlighted ? "text-beige/40" : "text-warm-gray/65 group-hover:text-warm-gray/80"
            } transition-colors duration-500`}
          >
            <span
              className={`mt-[11px] shrink-0 block w-[12px] h-px ${
                highlighted ? "bg-gold/35" : "bg-gold/35 group-hover:bg-gold/55"
              } transition-colors duration-500`}
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
