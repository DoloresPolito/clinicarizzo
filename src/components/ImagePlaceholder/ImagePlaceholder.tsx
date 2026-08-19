import styles from "./ImagePlaceholder.module.scss";

type ImagePlaceholderProps = {
  label?: string;
  ratio?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label = "Imagen",
  ratio = "4 / 3",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={[styles.placeholder, className].filter(Boolean).join(" ")}
      style={{ aspectRatio: ratio }}
    >
      <span>{label}</span>
    </div>
  );
}
