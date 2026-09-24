"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type HashLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function HashLink({
  href,
  children,
  onClick,
  ...rest
}: HashLinkProps) {
  const pathname = usePathname();
  const lenis = useLenis();

  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex + 1);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const samePage = path === "" || path === pathname;
    if (!samePage) return;

    // Link a la misma página sin hash (ej. "Inicio" estando en "/"):
    // se vuelve arriba de todo con Lenis en vez de navegar.
    if (!hash) {
      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.pushState(null, "", path || pathname);
      return;
    }

    const target = document.getElementById(hash);
    if (!target) return;

    // El espacio del header lo da el scroll-margin-top de cada sección
    // (Lenis y scrollIntoView lo respetan), así que no se suma offset.
    event.preventDefault();
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.history.pushState(null, "", `#${hash}`);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
