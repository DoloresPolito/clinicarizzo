"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          Clínica
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className={styles.cta}>
            Reservar turno
          </a>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
