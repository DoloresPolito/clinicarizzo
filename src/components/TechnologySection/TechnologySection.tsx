import Image from "next/image";
import HashLink from "../HashLink/HashLink";
import Parallax from "../Parallax/Parallax";
import Reveal from "../Reveal/Reveal";
import styles from "./TechnologySection.module.scss";

const HIGHLIGHTS = [
  "Tomografía computada",
  "Radiografía panorámica",
  "Radiografías digitales",
  "Diagnóstico de precisión",
];

export default function TechnologySection() {
  return (
    <section id="tecnologia" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Tecnología
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.title}>
              La precisión marca la diferencia.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.text}>
              Contamos con tecnología avanzada en diagnóstico por imágenes:
              radiografías digitales y estudios avanzados para planificar
              tratamientos más efectivos, con tomografía computada y
              radiografía panorámica. Esto nos permite detectar y tratar
              problemas bucales con mayor exactitud y confianza.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <HashLink href="/#tratamientos" className={styles.button}>
              Conocé nuestra tecnología <span aria-hidden="true">→</span>
            </HashLink>
          </Reveal>
        </div>

        <Parallax speed={0.12} max={26} className={styles.visual}>
          <Reveal variant="zoom">
            <Image
              src="/imagenes/tomo-final.jpeg"
              alt="Equipo de diagnóstico por imágenes"
              width={1086}
              height={1448}
              className={styles.visualImage}
              sizes="(min-width: 1024px) 24rem, 80vw"
            />
          </Reveal>
        </Parallax>

        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((item, index) => (
            <li key={item}>
              <Reveal delay={index * 90} y={12}>
                {item}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
