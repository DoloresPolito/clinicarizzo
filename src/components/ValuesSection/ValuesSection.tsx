import Reveal from "../Reveal/Reveal";
import ViewMoreLink from "../ViewMoreLink/ViewMoreLink";
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

type ValuesSectionProps = {
  limit?: number;
  viewMoreHref?: string;
};

export default function ValuesSection({
  limit,
  viewMoreHref,
}: ValuesSectionProps) {
  const values = limit ? VALUES.slice(0, limit) : VALUES;

  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Nuestra experiencia
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={styles.title}>
            Un nuevo concepto de odontología personalizada
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90} y={14}>
              <div className={styles.card}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {viewMoreHref && (
          <ViewMoreLink href={viewMoreHref} label="Conocer más sobre nosotros" />
        )}
      </div>
    </section>
  );
}
