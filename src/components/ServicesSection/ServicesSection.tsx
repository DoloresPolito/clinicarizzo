import ViewMoreLink from "../ViewMoreLink/ViewMoreLink";
import styles from "./ServicesSection.module.scss";

const SERVICES = [
  {
    title: "Odontología general",
    description: "Chequeos, limpiezas y tratamientos preventivos de rutina.",
  },
  {
    title: "Estética dental",
    description: "Diseño de sonrisa, carillas y blanqueamiento profesional.",
  },
  {
    title: "Ortodoncia",
    description: "Brackets y alineadores para corregir la posición dentaria.",
  },
  {
    title: "Implantes",
    description: "Reemplazo de piezas dentales con resultados naturales.",
  },
  {
    title: "Odontopediatría",
    description: "Cuidado dental especializado para las infancias.",
  },
  {
    title: "Rehabilitación oral",
    description: "Tratamientos integrales para restaurar la función dental.",
  },
];

type ServicesSectionProps = {
  limit?: number;
  viewMoreHref?: string;
};

export default function ServicesSection({
  limit,
  viewMoreHref,
}: ServicesSectionProps) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Servicios</p>
        <h2 className={styles.title}>Todo lo que tu sonrisa necesita</h2>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {viewMoreHref && (
          <ViewMoreLink href={viewMoreHref} label="Ver todos los servicios" />
        )}
      </div>
    </section>
  );
}
