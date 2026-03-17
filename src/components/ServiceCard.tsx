interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export default function ServiceCard({
  title,
  price,
  features,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative p-10 lg:p-12 transition-all duration-500 ${
        highlighted
          ? "bg-black-deep text-beige"
          : "bg-white hover:bg-white"
      }`}
    >
      {/* Top accent */}
      <div
        className={`absolute top-0 left-10 right-10 h-px ${
          highlighted
            ? "bg-gold/30"
            : "bg-beige-dark/40 group-hover:bg-gold/30"
        } transition-colors duration-500`}
      />

      <div className="mb-10">
        <h3
          className={`font-serif text-[24px] lg:text-[28px] font-light mb-3 ${
            highlighted ? "text-beige/90" : "text-black-deep"
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-serif text-[28px] lg:text-[32px] font-light ${
            highlighted ? "text-gold" : "text-gold"
          }`}
        >
          {price}
        </p>
      </div>

      <div
        className={`w-8 h-px mb-8 ${
          highlighted ? "bg-beige/15" : "bg-beige-dark/40"
        }`}
      />

      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li
            key={i}
            className={`text-[13px] leading-[1.7] flex items-start gap-4 ${
              highlighted ? "text-beige/45" : "text-warm-gray"
            }`}
          >
            <span
              className={`mt-[9px] shrink-0 block w-[14px] h-px ${
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
