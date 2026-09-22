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

const HEADER_OFFSET = -76;

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
    if (event.defaultPrevented || !hash) return;

    const samePage = path === "" || path === pathname;
    if (!samePage) return;

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: HEADER_OFFSET });
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
