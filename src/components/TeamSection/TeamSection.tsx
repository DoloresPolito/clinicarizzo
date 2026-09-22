import Image from "next/image";
import Reveal from "../Reveal/Reveal";
import ViewMoreLink from "../ViewMoreLink/ViewMoreLink";
import styles from "./TeamSection.module.scss";

const TEAM = [
  {
    name: "Felipe Rizzo",
    role: "Odontólogo",
    specialty: "Rehabilitación integral e implantes, odontología general",
    photo: "/equipo/1.jpeg",
  },
  {
    name: "Juan Rizzo",
    role: "Odontólogo",
    specialty: "Odontología general",
    photo: "/equipo/2.jpeg",
  },
  {
    name: "Marianela Reynoso",
    role: "Odontóloga",
    specialty: "Endodoncia y odontología general",
    photo: "/equipo/3.jpeg",
  },
  {
    name: "Melina",
    role: "Secretaria y asistente dental",
    specialty: "",
    photo: "/equipo/4.jpeg",
  },
];

type TeamSectionProps = {
  limit?: number;
  viewMoreHref?: string;
};

export default function TeamSection({ limit, viewMoreHref }: TeamSectionProps) {
  const team = limit ? TEAM.slice(0, limit) : TEAM;

  return (
    <section id="equipo" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>Equipo</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={styles.title}>
            Profesionales que combinan experiencia y calidez
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <Reveal key={`${member.name}-${index}`} delay={index * 90} y={14}>
              <div className={styles.card}>
                <div className={styles.photoWrapper}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className={styles.photo}
                  />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                {member.specialty && (
                  <p className={styles.specialty}>{member.specialty}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {viewMoreHref && (
          <ViewMoreLink href={viewMoreHref} label="Ver equipo completo" />
        )}
      </div>
    </section>
  );
}
