"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type WheelEvent } from "react";
import HashLink from "../HashLink/HashLink";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import Reveal from "../Reveal/Reveal";
import styles from "./TreatmentsCarousel.module.scss";

const CARDS = [
  {
    number: "01",
    title: "Cirugía e Implantología Oral",
    description:
      "Reponemos piezas perdidas con implantes de precisión, devolviendo función y estética a tu sonrisa.",
    image: "/imagenes/tratamientos/t1.jpeg",
    href: "/tratamientos#implantes",
  },
  {
    number: "02",
    title: "Endodoncia",
    description:
      "Tratamos la raíz del problema para conservar tus piezas dentales naturales y aliviar el dolor.",
    image: "/imagenes/tratamientos/t3.jpeg",
    href: "/tratamientos#endodoncia",
  },
  {
    number: "03",
    title: "Periodoncia",
    description:
      "Cuidamos la salud de encías y tejidos de sostén para una base bucal fuerte y duradera.",
    image: "/imagenes/tratamientos/t2.jpeg",
    href: "/tratamientos#periodoncia",
  },
  {
    number: "04",
    title: "Rehabilitación Integral",
    description:
      "Planificamos tratamientos completos que recuperan función y estética de forma armónica.",
    image: "/imagenes/tratamientos/t4.jpeg",
    href: "/tratamientos#rehabilitacion",
  },
  {
    number: "05",
    title: "Odontología General",
    description:
      "Prevención, diagnóstico y controles periódicos para mantener tu salud bucal a largo plazo.",
    image: null,
    href: "/tratamientos#general",
  },
  {
    number: "06",
    title: "Diagnóstico por Imágenes",
    description:
      "Radiografías y tomografías de alta precisión para planificar cada tratamiento con exactitud.",
    image: "/imagenes/tratamientos/t6.jpeg",
    href: "/tratamientos#diagnostico",
    dark: true,
  },
  {
    number: "07",
    title: "Estética Dental",
    description:
      "Mejoramos tu sonrisa de forma natural y armónica, con resultados que se ven y se sienten bien.",
    image: "/imagenes/tratamientos/t5.jpeg",
    href: "/tratamientos#estetica",
  },
];

export default function TreatmentsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    track.scrollLeft += event.deltaY;
  };

  const toggleCard = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(index);
    }
  };

  return (
    <section id="tratamientos" className={styles.section}>
      <div className={styles.header}>
        <div>
          <Reveal>
            <p className={styles.eyebrow}>
              Nuestros tratamientos
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.title}>
              Soluciones en todas las áreas de la odontología.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160} className={styles.headerText}>
          <p>
            Trabajamos de forma coordinada para ofrecerte un plan de
            tratamiento integral, adaptado a tus necesidades.
          </p>
        </Reveal>
      </div>

      <Reveal delay={220} className={styles.trackWrapper}>
        <div className={styles.track} ref={trackRef} onWheel={handleWheel}>
          {CARDS.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={card.title}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onClick={() => toggleCard(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={[
                  styles.card,
                  isActive ? styles.cardActive : "",
                  card.dark ? styles.cardDark : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.cardImageWrap}>
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 38vw, 90vw"
                      className={styles.cardImage}
                    />
                  ) : (
                    <ImagePlaceholder
                      label="Imagen próximamente"
                      ratio="1 / 1"
                      className={styles.cardImagePlaceholder}
                    />
                  )}
                </div>
                <span className={styles.cardScrim} aria-hidden="true" />
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>{card.number}</span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <span className={styles.cardToggle} aria-hidden="true">
                  {isActive ? "×" : "+"}
                </span>

                <div className={styles.cardPanel}>
                  <div className={styles.cardPanelInner}>
                    <HashLink
                      href={card.href}
                      className={styles.cardPanelLink}
                      aria-label={`Ver ${card.title}`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <span aria-hidden="true">↗</span>
                    </HashLink>
                    <p className={styles.cardPanelText}>{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
