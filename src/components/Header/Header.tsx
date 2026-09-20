"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Equipo", href: "/equipo" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo/logo.png"
            alt="Clínica Rizzo"
            width={36}
            height={36}
            className={styles.logoImage}
            priority
          />
          Clínica Rizzo
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#contacto" className={styles.cta}>
            Reservar turno
          </Link>
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
