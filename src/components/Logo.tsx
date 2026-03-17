interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "default" | "compact";
}

export default function Logo({
  variant = "light",
  className = "",
  size = "default",
}: LogoProps) {
  const color =
    variant === "light" ? "text-white/90" : "text-[#0E0E0E]";

  return (
    <span
      className={`block select-none ${color} ${className}`}
      aria-label="Lisbon Private Office"
    >
      <span
        className={`block font-light tracking-[0.3em] uppercase leading-none ${
          size === "compact"
            ? "text-[12px]"
            : "text-[14px] lg:text-[15px]"
        }`}
      >
        Lisbon Private Office
      </span>
    </span>
  );
}
