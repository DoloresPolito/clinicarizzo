import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import styles from "./Hero.module.scss";

const STATS = [
  { label: "Mejor clínica", value: "2025" },
  { label: "Ubicación", value: "Buenos Aires" },
  { label: "Especialidad", value: "Tecnología de vanguardia" },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Salud y estética dental</p>
          <h1 className={styles.title}>
            Cuidado moderno para una <span>sonrisa perfecta</span>
          </h1>
          <p className={styles.subtitle}>
            Del cuidado preventivo a las restauraciones más complejas, un
            enfoque integral pensado para tu salud dental.
          </p>
          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Reservar turno
            </a>
            <a href="#servicios" className={styles.secondary}>
              Conocer más
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <ImagePlaceholder label="Imagen principal" ratio="4 / 5" />
        </div>
      </div>

      <div className={styles.statsBar}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
