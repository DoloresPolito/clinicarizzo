"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HashLink from "../HashLink/HashLink";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Tecnología", href: "/#tecnologia" },
  { label: "Equipo", href: "/equipo" },
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
            width={40}
            height={40}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>
            <span className={styles.logoLight}>Clínica</span>
            <span className={styles.logoBold}>RIZZO</span>
          </span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <HashLink
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
          <HashLink
            href="/#contacto"
            className={styles.cta}
            onClick={() => setIsMenuOpen(false)}
          >
            Reservar turno <span aria-hidden="true">→</span>
          </HashLink>
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
