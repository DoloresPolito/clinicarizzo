import Hero from "@/components/Hero/Hero";
import JourneySection from "@/components/JourneySection/JourneySection";
import TechnologySection from "@/components/TechnologySection/TechnologySection";
import TreatmentsCarousel from "@/components/TreatmentsCarousel/TreatmentsCarousel";
import TeamIntroSection from "@/components/TeamIntroSection/TeamIntroSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TreatmentsCarousel />
      <JourneySection />
      <TechnologySection />
      <TeamIntroSection />
      <ContactSection />
    </main>
  );
}
