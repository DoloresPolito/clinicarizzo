import Link from "next/link";
import styles from "./Footer.module.scss";

const NAV_LINKS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Equipo", href: "/equipo" },
  { label: "Testimonios", href: "/testimonios" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Clínica</span>
          <p>
            Odontología integral con un enfoque cercano y tecnología de
            vanguardia.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Navegación</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contacto</h3>
          <ul>
            <li>Av. Siempre Viva 1234, Buenos Aires</li>
            <li>hola@clinica.com</li>
            <li>+54 11 0000 0000</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Redes</h3>
          <ul>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Clínica. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
