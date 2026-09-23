import Reveal from "../Reveal/Reveal";
import styles from "./ProcessSection.module.scss";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Evaluación integral de tu salud bucal con tecnología digital.",
  },
  {
    number: "02",
    title: "Planificación",
    description: "Diseñamos un plan de tratamiento a medida de tus objetivos.",
  },
  {
    number: "03",
    title: "Tratamiento",
    description: "Ejecutamos cada procedimiento con precisión y cuidado.",
  },
  {
    number: "04",
    title: "Seguimiento",
    description: "Acompañamos los resultados con controles periódicos.",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>
            Metodología
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={styles.title}>
            Precisión en cada paso del tratamiento
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 90} y={14}>
              <div className={styles.step}>
                <span className={styles.number}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
