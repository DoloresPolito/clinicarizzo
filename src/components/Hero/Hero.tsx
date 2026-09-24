import Image from "next/image";
import HashLink from "../HashLink/HashLink";
import Parallax from "../Parallax/Parallax";
import Reveal from "../Reveal/Reveal";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import styles from "./Hero.module.scss";

const HIGHLIGHTS = [
  { number: "01", label: "Odontología general" },
  { number: "02", label: "Estética dental" },
  { number: "03", label: "Implantes" },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <Parallax speed={0.08} max={36} className={styles.parallaxLayer}>
        <div className={styles.imageStage}>
          <Image
            src="/imagenes/hero-final2.jpeg"
            alt="Pieza dental de cristal con un anillo dorado"
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
              Centro odontológico <span aria-hidden="true">·</span>{" "}
              Gualeguaychú
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className={styles.title}>
              <span>Cuidado</span> <span>odontológico integral,</span>{" "}
              <span className={styles.titleAccent}>en un mismo lugar.</span>
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
              Reservar turno <ArrowIcon />
            </HashLink>
          </Reveal>
        </div>
      </div>

      <div className={styles.footer}>
        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((item) => (
            <li key={item.number} className={styles.highlight}>
              <span className={styles.highlightNumber}>{item.number}</span>
              <span className={styles.highlightLine} aria-hidden="true" />
              <span className={styles.highlightLabel}>{item.label}</span>
            </li>
          ))}
        </ul>
        <HashLink
          href="/#tratamientos"
          className={styles.scrollCue}
          aria-label="Bajar a la siguiente sección"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 2v13M3.5 9.5 9 15l5.5-5.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </HashLink>
      </div>
    </section>
  );
}
