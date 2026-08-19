import styles from "./CtaBanner.module.scss";

export default function CtaBanner() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>¿Lista para tu mejor sonrisa?</h2>
        <p className={styles.subtitle}>
          Coordiná una consulta y armamos juntos tu plan de tratamiento.
        </p>
        <a href="#" className={styles.cta}>
          Reservar turno
        </a>
      </div>
    </section>
  );
}
