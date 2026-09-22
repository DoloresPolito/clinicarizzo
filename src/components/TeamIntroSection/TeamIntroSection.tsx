import Link from "next/link";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import Parallax from "../Parallax/Parallax";
import Reveal from "../Reveal/Reveal";
import styles from "./TeamIntroSection.module.scss";

const BANNER_ITEMS = [
  "Atención personalizada",
  "Todas las especialidades",
  "Seguimiento en cada etapa",
];

export default function TeamIntroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>Nuestro equipo</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.title}>
              Especialistas que trabajan en conjunto.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.text}>
              Detrás de cada tratamiento hay un equipo comprometido, en
              constante formación, que comparte la misma prioridad: tu salud
              bucal.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link href="/equipo" className={styles.button}>
              Conocé al equipo <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <Parallax speed={0.12} max={26} className={styles.visual}>
          <Reveal variant="zoom">
            <ImagePlaceholder
              label="Equipo de Clínica Rizzo"
              ratio="16 / 9"
              className={styles.visualImage}
            />
          </Reveal>
        </Parallax>
      </div>

      <div className={styles.banner}>
        <div className={styles.marquee}>
          {[0, 1].map((track) => (
            <div
              className={styles.marqueeTrack}
              key={track}
              aria-hidden={track === 1}
            >
              {Array.from({ length: 3 }).map((_, repeat) =>
                BANNER_ITEMS.map((item) => (
                  <span key={`${repeat}-${item}`} className={styles.marqueeItem}>
                    {item}
                    <span className={styles.dot} aria-hidden="true">
                      •
                    </span>
                  </span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
