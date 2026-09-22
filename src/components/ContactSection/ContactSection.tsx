import Image from "next/image";
import Parallax from "../Parallax/Parallax";
import Reveal from "../Reveal/Reveal";
import styles from "./ContactSection.module.scss";

const SCHEDULE = [
  {
    label: "Lunes a Viernes",
    hours: ["8:30 a 12 hs.", "y 16:30 a 20 hs."],
  },
  {
    label: "Sábados",
    hours: ["8:30 a 12 hs.", "(Solo urgencias)"],
  },
];

const WHATSAPP_URL = `https://wa.me/5493446376387?text=${encodeURIComponent(
  "Hola! Quería consultar sobre un turno."
)}`;

export default function ContactSection() {
  return (
    <section id="contacto" className={styles.section}>
      <Parallax speed={0.08} max={36} className={styles.parallaxLayer}>
        <Image
          src="/imagenes/boca.jpeg"
          alt="Sonrisa saludable"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
        />
      </Parallax>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>Es momento de dar el primer paso</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className={styles.title}>¿Necesitás hacer una consulta?</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.text}>
              Escribinos por WhatsApp y coordinamos tu turno. Estamos para
              acompañarte en cada etapa.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.08c-.24.68-1.4 1.32-1.93 1.4-.49.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.8.85.26.13.44.19.5.3.06.13.06.7-.18 1.38Z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </Reveal>

          <Reveal delay={320} className={styles.schedule}>
            <h3 className={styles.scheduleTitle}>Horarios</h3>
            <div className={styles.scheduleGrid}>
              {SCHEDULE.map((block) => (
                <div key={block.label} className={styles.scheduleRow}>
                  <span className={styles.scheduleLabel}>{block.label}</span>
                  <div className={styles.scheduleHours}>
                    {block.hours.map((hour) => (
                      <span key={hour}>{hour}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
