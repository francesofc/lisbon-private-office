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
      className={`group relative p-14 lg:p-18 transition-all duration-400 ease-out ${
        highlighted
          ? "bg-black-deep text-beige lg:scale-[1.02] lg:-my-4 lg:z-10 lg:shadow-2xl"
          : "bg-white hover:bg-white"
      }`}
    >
      {/* Top accent */}
      <div
        className={`absolute top-0 left-10 right-10 h-px ${
          highlighted
            ? "bg-gold/40"
            : "bg-beige-dark/40 group-hover:bg-gold/30"
        } transition-colors duration-400`}
      />

      {/* Badge */}
      {badge && (
        <div className="mb-7">
          <span className="inline-block px-4 py-1.5 text-[10px] tracking-[0.18em] uppercase bg-gold/15 text-gold border border-gold/20">
            {badge}
          </span>
        </div>
      )}

      <div className={badge ? "mb-10" : "mb-12"}>
        <h3
          className={`font-serif text-[24px] lg:text-[28px] font-light tracking-[-0.015em] mb-4 ${
            highlighted ? "text-beige/90" : "text-black-deep"
          }`}
        >
          {title}
        </h3>
        <p className="font-serif text-[28px] lg:text-[32px] font-light tracking-[-0.01em] text-gold">
          {price}
        </p>
      </div>

      <div
        className={`w-8 h-px mb-10 ${
          highlighted ? "bg-beige/15" : "bg-beige-dark/40"
        }`}
      />

      <ul className="space-y-6">
        {features.map((feature, i) => (
          <li
            key={i}
            className={`text-[13px] leading-[2] tracking-[0.015em] flex items-start gap-4 ${
              highlighted ? "text-beige/45" : "text-warm-gray/80"
            }`}
          >
            <span
              className={`mt-[10px] shrink-0 block w-[14px] h-px ${
                highlighted ? "bg-gold/40" : "bg-gold/50"
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
