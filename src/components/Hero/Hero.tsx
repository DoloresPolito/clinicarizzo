import Image from "next/image";
import HashLink from "../HashLink/HashLink";
import Parallax from "../Parallax/Parallax";
import Reveal from "../Reveal/Reveal";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <Parallax speed={0.08} max={36} className={styles.parallaxLayer}>
        <div className={styles.imageStage}>
          <Image
            src="/imagenes/hero-final.jpeg"
            alt="Consultorio de Clínica Rizzo"
            fill
            priority
            sizes="100vw"
            className={styles.backgroundImage}
          />
        </div>
      </Parallax>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal delay={0}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Centro odontológico · Gualeguaychú
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className={styles.title}>
              Cuidado odontológico integral, <span>en un mismo lugar.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className={styles.subtitle}>
              Odontología general, cirugía, implantes, estética y diagnóstico
              por imágenes. Un equipo de especialistas para acompañarte en
              cada etapa.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <HashLink href="/#contacto" className={styles.cta}>
              Reservar turno <span aria-hidden="true">→</span>
            </HashLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
