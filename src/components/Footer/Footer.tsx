import Image from "next/image";
import Link from "next/link";
import HashLink from "../HashLink/HashLink";
import styles from "./Footer.module.scss";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Tratamientos", href: "/#tratamientos" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo/logo.png"
            alt="Clínica Rizzo"
            width={36}
            height={36}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>
            <span className={styles.logoLight}>Clínica</span>
            <span className={styles.logoBold}>RIZZO</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <HashLink href={link.href}>{link.label}</HashLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.meta}>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/odontologia.rizzo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="3.5"
                  y="3.5"
                  width="17"
                  height="17"
                  rx="4.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/Centro-Odontol%C3%B3gico-Rizzo/61550662439165/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M14 21v-7h2.4l.4-3H14V9.2c0-.9.2-1.5 1.5-1.5H17V5.1c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6V11H9v3h2.4v7H14Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className={styles.contactInfo}>
            <p>Rivadavia 837, Gualeguaychú, Entre Ríos</p>
            <p>
              <a href="tel:0344642334">03446 42334</a> ·{" "}
              <a href="tel:03446376387">03446 376387</a>
            </p>
            <p>
              <a href="mailto:centroodontologicofrz@gmail.com">
                centroodontologicofrz@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>
            © {new Date().getFullYear()} Clínica Rizzo. Todos los derechos
            reservados.
          </p>
          <p className={styles.tagline}>Sonrisas que acompañan tu vida.</p>
        </div>
      </div>
    </footer>
  );
}
