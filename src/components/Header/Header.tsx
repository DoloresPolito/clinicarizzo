"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HashLink from "../HashLink/HashLink";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Tratamientos", href: "/#tratamientos" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Tecnología", href: "/#tecnologia" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Contacto", href: "/#contacto" },
];

// Secciones del home que se resaltan en la navbar según el scroll.
const HOME_SECTIONS = [
  { id: "top", href: "/" },
  { id: "tratamientos", href: "/#tratamientos" },
  { id: "proceso", href: "/#proceso" },
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
  const lenis = useLenis();

  // Se reactiva Lenis en el mismo click para que el scroll de HashLink
  // (que corre justo después) no quede bloqueado.
  const closeMenu = useCallback(() => {
    lenis?.start();
    setIsMenuOpen(false);
  }, [lenis]);

  useEffect(() => {
    if (!isMenuOpen) return;

    lenis?.stop();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    // Si se agranda la pantalla a desktop, el drawer no tiene sentido.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [isMenuOpen, lenis, closeMenu]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <HashLink href="/" className={styles.logo} onClick={closeMenu}>
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
          </HashLink>

          <nav className={styles.nav}>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <HashLink
                    href={link.href}
                    className={link.href === activeHref ? styles.active : undefined}
                    aria-current={link.href === activeHref ? "true" : undefined}
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
            <HashLink href="/#contacto" className={styles.cta}>
              Reservar turno <ArrowIcon />
            </HashLink>
          </nav>

          <button
            type="button"
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ""}`}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* El drawer va fuera del <header>: su backdrop-filter crearía un
          containing block y el position: fixed quedaría atrapado adentro. */}
      <div
        className={`${styles.backdrop} ${isMenuOpen ? styles.backdropOpen : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <nav className={styles.drawerNav}>
          <ul>
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                style={{ "--i": index } as CSSProperties}
              >
                <HashLink
                  href={link.href}
                  className={link.href === activeHref ? styles.active : undefined}
                  aria-current={link.href === activeHref ? "true" : undefined}
                  onClick={closeMenu}
                >
                  <span className={styles.drawerIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.drawerLabel}>{link.label}</span>
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={styles.drawerFooter}
          style={{ "--i": NAV_LINKS.length } as CSSProperties}
        >
          <HashLink href="/#contacto" className={styles.cta} onClick={closeMenu}>
            Reservar turno <ArrowIcon />
          </HashLink>
        </div>
      </aside>
    </>
  );
}
