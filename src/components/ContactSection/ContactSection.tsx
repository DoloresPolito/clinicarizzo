import Image from "next/image";
import Reveal from "../Reveal/Reveal";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import styles from "./ContactSection.module.scss";

const BANNER_ITEMS = [
  "Atención personalizada",
  "Todas las especialidades",
  "Seguimiento en cada etapa",
];

const DETAILS = [
  {
    label: "Dirección",
    icon: "pin" as const,
    lines: ["Rivadavia 837", "Gualeguaychú, Entre Ríos"],
  },
  {
    label: "Horarios",
    icon: "clock" as const,
    lines: ["Lunes a viernes", "8:30 a 12 hs. · 16:30 a 20 hs."],
  },
  {
    label: "Sábados",
    icon: "calendar" as const,
    lines: ["8:30 a 12 hs.", "(Solo urgencias)"],
  },
];

const ICONS = {
  pin: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-7.58 7-12A7 7 0 0 0 5 9c0 4.42 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="5.5"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4 9.5h16M8 3.5v3M16 3.5v3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const WHATSAPP_URL = `https://wa.me/5493446376387?text=${encodeURIComponent(
  "Hola! Quería consultar sobre un turno."
)}`;

export default function ContactSection() {
  return (
    <>
    <section id="contacto" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>
              Es momento de dar el primer paso
            </p>
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
              <ArrowIcon />
            </a>
          </Reveal>

          <Reveal delay={320} className={styles.details}>
            <div className={styles.detailsGrid}>
              {DETAILS.map((detail) => (
                <div key={detail.label} className={styles.detailItem}>
                  <span className={styles.detailIcon}>
                    {ICONS[detail.icon]}
                  </span>
                  <div>
                    <p className={styles.detailLabel}>{detail.label}</p>
                    <p className={styles.detailText}>
                      {detail.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className={styles.visual}>
          <Image
            src="/imagenes/boca-cuadrada.jpeg"
            alt="Sonrisa saludable"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={styles.visualImage}
          />
        </div>
      </div>
    </section>

    <div className={styles.banner}>
      <div className={styles.marquee}>
        {[0, 1].map((track) => (
          <div
            className={styles.marqueeTrack}
            key={track}
            aria-hidden={track === 1}
          >
            {Array.from({ length: 3 }).map((_, repeat) =>
              BANNER_ITEMS.map((item) => (
                <span key={`${repeat}-${item}`} className={styles.marqueeItem}>
                  {item}
                  <span className={styles.dot} aria-hidden="true">
                    •
                  </span>
                </span>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
