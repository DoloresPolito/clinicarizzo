import Hero from "@/components/Hero/Hero";
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValuesSection limit={2} viewMoreHref="/nosotros" />
      <ServicesSection limit={3} viewMoreHref="/servicios" />
      <ProcessSection />
      <TeamSection limit={2} viewMoreHref="/equipo" />
      <TestimonialsSection limit={2} viewMoreHref="/testimonios" />
      <CtaBanner />
    </main>
  );
}
