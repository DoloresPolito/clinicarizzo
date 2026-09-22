import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import {
  ImplantIcon,
  RehabIcon,
  RootIcon,
  ScanIcon,
  SparkleIcon,
  ToothIcon,
} from "./icons";
import styles from "./TreatmentsSection.module.scss";

const TREATMENTS = [
  {
    id: "general",
    title: "Odontología general",
    description:
      "Prevención, diagnóstico y tratamientos para una salud bucal duradera.",
    Icon: ToothIcon,
  },
  {
    id: "implantes",
    title: "Implantes y cirugía",
    description:
      "Soluciones para recuperar piezas perdidas y devolver función y comodidad.",
    Icon: ImplantIcon,
  },
  {
    id: "estetica",
    title: "Estética dental",
    description:
      "Tratamientos que mejoran la estética de forma natural y armónica.",
    Icon: SparkleIcon,
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    description:
      "Diagnóstico y tratamiento para conservar tus piezas dentales.",
    Icon: RootIcon,
  },
  {
    id: "rehabilitacion",
    title: "Rehabilitación integral",
    description: "Planificación y recuperación funcional y estética.",
    Icon: RehabIcon,
  },
  {
    id: "diagnostico",
    title: "Diagnóstico por imágenes",
    description:
      "Radiografías y tomografías para una mejor planificación.",
    Icon: ScanIcon,
  },
];

type TreatmentsSectionProps = {
  limit?: number;
  viewMoreHref?: string;
};

export default function TreatmentsSection({
  limit,
  viewMoreHref,
}: TreatmentsSectionProps) {
  const treatments = limit ? TREATMENTS.slice(0, limit) : TREATMENTS;

  return (
    <section id="tratamientos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <Reveal>
              <p className={styles.eyebrow}>Nuestros tratamientos</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className={styles.title}>
                Soluciones en todas las áreas de la odontología.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className={styles.headerText}>
            <p>
              Trabajamos de forma coordinada para ofrecerte un plan de
              tratamiento integral, adaptado a tus necesidades.
            </p>
            {viewMoreHref && (
              <Link href={viewMoreHref} className={styles.link}>
                Ver todos los tratamientos <span aria-hidden="true">→</span>
              </Link>
            )}
          </Reveal>
        </div>

        <div className={styles.grid}>
          {treatments.map(({ id, title, description, Icon }, index) => (
            <Reveal key={title} delay={index * 80} y={14}>
              <div id={id} className={styles.card}>
                <Icon className={styles.icon} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
