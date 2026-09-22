"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import styles from "./Reveal.module.scss";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "zoom" | "fade";
  delay?: number;
  y?: number;
};

export default function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  y = 16,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = {
    "--reveal-y": `${y}px`,
    transitionDelay: visible ? `${delay}ms` : "0ms",
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={[
        styles.reveal,
        styles[variant],
        visible ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
