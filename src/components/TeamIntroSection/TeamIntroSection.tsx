import Image from "next/image";
import Reveal from "../Reveal/Reveal";
import styles from "./TeamIntroSection.module.scss";

const TEAM = [
  {
    name: "Felipe Rizzo",
    role: "Odontólogo",
    specialty: "Rehabilitación integral e implantes",
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

export default function TeamIntroSection() {
  return (
    <section id="equipo" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>
              Nuestro equipo
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.title}>
              Especialistas que trabajan en conjunto.
              <span className={styles.avatarCluster} aria-hidden="true">
                {TEAM.slice(0, 3).map((member) => (
                  <Image
                    key={member.name}
                    src={member.photo}
                    alt=""
                    width={32}
                    height={32}
                    className={styles.avatarClusterImage}
                  />
                ))}
                {TEAM.length > 3 && (
                  <span className={styles.avatarClusterMore}>
                    +{TEAM.length - 3}
                  </span>
                )}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.text}>
              Detrás de cada tratamiento hay un equipo comprometido, en
              constante formación, que comparte la misma prioridad: tu salud
              bucal.
            </p>
          </Reveal>
        </div>

        <Reveal variant="zoom" className={styles.visual}>
          <div className={styles.teamTrackWrapper}>
            <div className={styles.teamTrack}>
              {[0, 1].map((track) => (
                <div
                  className={styles.teamTrackInner}
                  key={track}
                  aria-hidden={track === 1}
                >
                  {Array.from({ length: 3 }).map((_, repeat) =>
                    TEAM.map((member) => (
                      <div
                        key={`${repeat}-${member.name}`}
                        className={styles.teamCard}
                      >
                        <div className={styles.teamCardPhotoWrap}>
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            sizes="(min-width: 1024px) 16vw, 55vw"
                            className={styles.teamCardPhoto}
                          />
                        </div>
                        <div className={styles.teamCardFooter}>
                          <h3 className={styles.teamCardName}>
                            {member.name}
                          </h3>
                          {member.specialty && (
                            <p className={styles.teamCardSpecialty}>
                              {member.specialty}
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
