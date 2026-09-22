"use client";

import Image from "next/image";
import { useRef, type WheelEvent } from "react";
import HashLink from "../HashLink/HashLink";
import Reveal from "../Reveal/Reveal";
import styles from "./TreatmentsCarousel.module.scss";

const CARDS = [
  {
    number: "01",
    title: "Odontología general",
    description:
      "Prevención, diagnóstico y tratamientos para una salud bucal duradera.",
    image: "/imagenes/tratamientos/a.jpg",
    href: "/tratamientos#general",
  },
  {
    number: "02",
    title: "Implantes y cirugía",
    description:
      "Soluciones para recuperar piezas perdidas y devolver función y comodidad.",
    image: "/imagenes/tratamientos/e-crop.jpg",
    href: "/tratamientos#implantes",
  },
  {
    number: "03",
    title: "Estética dental",
    description:
      "Tratamientos que mejoran la estética de forma natural y armónica.",
    image: "/imagenes/tratamientos/c.jpg",
    href: "/tratamientos#estetica",
  },
  {
    number: "04",
    title: "Endodoncia",
    description:
      "Diagnóstico y tratamiento para conservar tus piezas dentales.",
    image: "/imagenes/tratamientos/d.jpg",
    href: "/tratamientos#endodoncia",
  },
  {
    number: "05",
    title: "Rehabilitación integral",
    description: "Planificación y recuperación funcional y estética.",
    image: "/imagenes/tratamientos/b.jpg",
    href: "/tratamientos#rehabilitacion",
  },
  {
    number: "06",
    title: "Diagnóstico por imágenes",
    description: "Radiografías y tomografías para una mejor planificación.",
    image: "/imagenes/tomo-final.jpeg",
    href: "/tratamientos#diagnostico",
  },
];

export default function TreatmentsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    track.scrollLeft += event.deltaY;
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <Reveal>
            <p className={styles.eyebrow}>Nuestros tratamientos</p>
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
          <HashLink href="/tratamientos" className={styles.link}>
            Ver todos los tratamientos <span aria-hidden="true">→</span>
          </HashLink>
        </Reveal>
      </div>

      <Reveal delay={220} className={styles.trackWrapper}>
        <div className={styles.track} ref={trackRef} onWheel={handleWheel}>
          {CARDS.map((card) => (
            <HashLink key={card.title} href={card.href} className={styles.card}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 28vw, 78vw"
                className={styles.cardImage}
              />
              <span className={styles.scrim} aria-hidden="true" />
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{card.number}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <div className={styles.cardDesc}>
                <span className={styles.divider} aria-hidden="true" />
                <p className={styles.cardDescText}>{card.description}</p>
              </div>
              <span className={styles.plus} aria-hidden="true">
                +
              </span>
            </HashLink>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
