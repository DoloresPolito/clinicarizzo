import Hero from "@/components/Hero/Hero";
import TechnologySection from "@/components/TechnologySection/TechnologySection";
import TreatmentsCarousel from "@/components/TreatmentsCarousel/TreatmentsCarousel";
import TeamIntroSection from "@/components/TeamIntroSection/TeamIntroSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechnologySection />
      <TreatmentsCarousel />
      <TeamIntroSection />
      <ContactSection />
    </main>
  );
}
