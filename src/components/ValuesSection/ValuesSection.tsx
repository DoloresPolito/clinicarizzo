import styles from "./ValuesSection.module.scss";

const VALUES = [
  {
    title: "Innovación",
    description:
      "Equipamiento de última generación y planificación digital para diagnósticos precisos.",
  },
  {
    title: "Calidez humana",
    description:
      "Un trato cercano y empático en cada etapa del tratamiento, pensado para tu comodidad.",
  },
  {
    title: "Excelencia",
    description:
      "Estándares exigentes de calidad y seguimiento en cada procedimiento que realizamos.",
  },
];

export default function ValuesSection() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Nuestra experiencia</p>
        <h2 className={styles.title}>
          Un nuevo concepto de odontología personalizada
        </h2>

        <div className={styles.grid}>
          {VALUES.map((value) => (
            <div key={value.title} className={styles.card}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
