import Link from "next/link";
import styles from "./ViewMoreLink.module.scss";

type ViewMoreLinkProps = {
  href: string;
  label?: string;
};

export default function ViewMoreLink({
  href,
  label = "Ver más",
}: ViewMoreLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {label}
    </Link>
  );
}
