interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  height?: number;
}

export default function Logo({
  variant = "light",
  className = "",
  height = 28,
}: LogoProps) {
  const src = variant === "light" ? "/logo/logo-light.svg" : "/logo/logo-dark.svg";
  const alt = "Lisbon Private Office";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{ height: `${height}px`, width: "auto" }}
      className={`block ${className}`}
    />
  );
}
