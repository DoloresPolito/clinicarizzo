import Image from "next/image";
import Parallax from "../Parallax/Parallax";
import Reveal from "../Reveal/Reveal";
import ViewMoreLink from "../ViewMoreLink/ViewMoreLink";
import styles from "./AboutSection.module.scss";

const STATS = [
  { value: "2005", label: "Año de fundación" },
  { value: "+20", label: "Años de trayectoria" },
  { value: "7", label: "Especialidades" },
];

export default function AboutSection() {
  return (
    <section id="clinica" className={styles.section}>
      <Parallax speed={0.06} max={30} className={styles.media}>
        <Image
          src="/imagenes/hero-final.jpeg"
          alt="Consultorio de Clínica Rizzo con luz natural"
          fill
          sizes="100vw"
          className={styles.image}
        />
      </Parallax>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>Nosotros · Desde 2005</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.title}>
              Más de veinte años cuidando sonrisas{" "}
              <span className={styles.titleAccent}>en Gualeguaychú.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.text}>
              Clínica Rizzo nació en 2005 con una idea simple: reunir en un
              mismo lugar a especialistas de distintas áreas de la
              odontología. Hoy seguimos creciendo con la misma vocación:
              tratamientos cuidadosos, tecnología actualizada y un trato
              cercano con cada paciente.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className={styles.stats}>
              {STATS.map((stat) => (
                <li key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <ViewMoreLink href="/nosotros" label="Conocé la clínica" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
