import type { Metadata } from "next";
import TeamSection from "@/components/TeamSection/TeamSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "Equipo | Clínica Rizzo",
  description: "Los profesionales que forman parte de Clínica Rizzo.",
};

export default function EquipoPage() {
  return (
    <main>
      <TeamSection />
      <CtaBanner />
    </main>
  );
}
