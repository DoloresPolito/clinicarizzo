import Reveal from "../Reveal/Reveal";
import styles from "./CtaBanner.module.scss";

export default function CtaBanner() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>¿Lista para tu mejor sonrisa?</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className={styles.subtitle}>
            Coordiná una consulta y armamos juntos tu plan de tratamiento.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <a href="#" className={styles.cta}>
            Reservar turno
          </a>
        </Reveal>
      </div>
    </section>
  );
}
