import Reveal from "../Reveal/Reveal";
import ViewMoreLink from "../ViewMoreLink/ViewMoreLink";
import styles from "./TestimonialsSection.module.scss";

const TESTIMONIALS = [
  {
    quote:
      "Un trato increíble desde el primer momento. Me explicaron todo el proceso y el resultado superó mis expectativas.",
    name: "Paciente",
  },
  {
    quote:
      "La atención y la tecnología que usan marcan la diferencia. Recomiendo la clínica sin dudarlo.",
    name: "Paciente",
  },
  {
    quote:
      "Después de años sin sonreír con confianza, hoy me siento completamente distinto.",
    name: "Paciente",
  },
];

type TestimonialsSectionProps = {
  limit?: number;
  viewMoreHref?: string;
};

export default function TestimonialsSection({
  limit,
  viewMoreHref,
}: TestimonialsSectionProps) {
  const testimonials = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section id="testimonios" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Testimonios
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={styles.title}>Lo que dicen nuestros pacientes</h2>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 90} y={14}>
              <blockquote className={styles.card}>
                <p className={styles.quote}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className={styles.name}>{testimonial.name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        {viewMoreHref && (
          <ViewMoreLink href={viewMoreHref} label="Ver más testimonios" />
        )}
      </div>
    </section>
  );
}
