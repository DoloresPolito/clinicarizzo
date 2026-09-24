"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import styles from "./JourneySection.module.scss";

const STEPS = [
  {
    title: "Diagnóstico",
    description:
      "Escuchamos lo que te preocupa y, con estudios digitales y escaneo 3D, evaluamos en detalle tu salud bucal.",
    image: "/imagenes/pasos/1diagnostico.jpeg",
  },
  {
    title: "Planificación",
    description:
      "Diseñamos un plan a medida y te explicamos las opciones, los tiempos y los costos para que decidas con toda la información.",
    image: "/imagenes/pasos/2planificacion.jpeg",
  },
  {
    title: "Tratamiento",
    description:
      "Realizamos cada procedimiento con precisión, materiales de calidad y el cuidado que merecés.",
    image: "/imagenes/pasos/3tratamiento.jpeg",
  },
  {
    title: "Seguimiento",
    description:
      "Te acompañamos con controles periódicos para cuidar el resultado y tu salud bucal en el tiempo.",
    image: "/imagenes/pasos/4seguimiento.jpeg",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function JourneySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  // La sección es más alta que la pantalla y el contenido queda fijo
  // (sticky): el avance del scroll dentro de ella define el paso activo.
  useEffect(() => {
    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / scrollable));
      setProgress(p);
      setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Al tocar un paso, se scrollea hasta el tramo que le corresponde.
  const goToStep = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const top =
      window.scrollY + rect.top + ((index + 0.5) / STEPS.length) * scrollable;
    if (lenis) {
      lenis.scrollTo(top, { duration: 0.9 });
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.section}>
      <span id="proceso" className={styles.anchor} aria-hidden="true" />
      <div
        ref={trackRef}
        className={styles.track}
        style={{ "--steps": STEPS.length } as CSSProperties}
      >
        <div className={styles.sticky}>
          <div className={styles.inner}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>Proceso</p>
              <h2 className={styles.title}>Tu tratamiento, paso a paso.</h2>
            </div>

            <ol className={styles.steps} aria-label="Pasos del tratamiento">
              {STEPS.map((step, index) => (
                <li key={step.title}>
                  <button
                    type="button"
                    className={`${styles.stepButton} ${
                      index === active ? styles.stepActive : ""
                    }`}
                    aria-current={index === active ? "step" : undefined}
                    onClick={() => goToStep(index)}
                  >
                    <span className={styles.stepPrefix}>Paso</span>
                    <span className={styles.stepNumber}>{pad(index + 1)}</span>
                  </button>
                </li>
              ))}
            </ol>

            <div className={styles.stage}>
              {STEPS.map((step, index) => {
                const state =
                  index < active ? "past" : index === active ? "active" : "next";
                return (
                  <article
                    key={step.title}
                    className={styles.card}
                    data-state={state}
                  >
                    <h3 className={styles.cardTitle}>
                      <span className={styles.cardStep}>{pad(index + 1)}</span>
                      {step.title}
                    </h3>
                    <div className={styles.media}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className={styles.mediaImage}
                        sizes="(min-width: 1024px) 45vw, 90vw"
                      />
                    </div>
                    <p className={styles.cardText}>{step.description}</p>
                  </article>
                );
              })}
            </div>

            <div className={styles.progress} aria-hidden="true">
              <span style={{ transform: `scaleX(${progress})` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
