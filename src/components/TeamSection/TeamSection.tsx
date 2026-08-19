import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import styles from "./TeamSection.module.scss";

const TEAM = [
  { name: "Nombre Apellido", role: "Odontóloga general" },
  { name: "Nombre Apellido", role: "Especialista en ortodoncia" },
  { name: "Nombre Apellido", role: "Especialista en implantes" },
  { name: "Nombre Apellido", role: "Odontopediatra" },
];

export default function TeamSection() {
  return (
    <section id="equipo" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Equipo</p>
        <h2 className={styles.title}>
          Profesionales que combinan experiencia y calidez
        </h2>

        <div className={styles.grid}>
          {TEAM.map((member, index) => (
            <div key={`${member.name}-${index}`} className={styles.card}>
              <ImagePlaceholder label="Foto" ratio="3 / 4" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
