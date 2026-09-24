"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

function HashScrollOnRouteChange() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || !lenis) return;

    const timer = setTimeout(() => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        lenis.resize();
        lenis.scrollTo(target, { immediate: true });
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      }}
    >
      <HashScrollOnRouteChange />
      {children}
    </ReactLenis>
  );
}
