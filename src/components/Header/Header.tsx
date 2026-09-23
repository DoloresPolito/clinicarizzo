"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HashLink from "../HashLink/HashLink";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Tratamientos", href: "/#tratamientos" },
  { label: "Tecnología", href: "/#tecnologia" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Contacto", href: "/#contacto" },
];

// Secciones del home que se resaltan en la navbar según el scroll.
const HOME_SECTIONS = [
  { id: "top", href: "/" },
  { id: "tratamientos", href: "/#tratamientos" },
  { id: "tecnologia", href: "/#tecnologia" },
  { id: "equipo", href: "/#equipo" },
  { id: "contacto", href: "/#contacto" },
];

function useActiveHref() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string>(pathname);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }

    const update = () => {
      // La sección activa es la última cuyo inicio ya pasó el tercio
      // superior de la pantalla.
      const line = window.innerHeight * 0.35;
      let current = HOME_SECTIONS[0].href;
      for (const section of HOME_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= line) {
          current = section.href;
        }
      }
      // Al llegar al final de la página, la última sección queda activa
      // aunque no alcance a subir hasta la línea.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = HOME_SECTIONS[HOME_SECTIONS.length - 1].href;
      setActiveHref(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return activeHref;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeHref = useActiveHref();

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
                  className={link.href === activeHref ? styles.active : undefined}
                  aria-current={link.href === activeHref ? "true" : undefined}
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
