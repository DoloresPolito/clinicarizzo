// Flecha de trazo en SVG. Reemplaza a los caracteres → y ↗, que en iOS
// pueden mostrarse como emoji. Toma el tamaño de la fuente y el color
// del texto que la rodea.
type ArrowIconProps = {
  direction?: "right" | "up-right";
  className?: string;
};

export default function ArrowIcon({
  direction = "right",
  className,
}: ArrowIconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ flexShrink: 0 }}
    >
      <path
        d={
          direction === "right"
            ? "M2.5 8h11M9 3.5 13.5 8 9 12.5"
            : "M4 12 12 4M5.5 4H12v6.5"
        }
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
