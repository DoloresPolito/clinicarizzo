import type { Metadata } from "next";
import TreatmentsSection from "@/components/TreatmentsSection/TreatmentsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "Tratamientos | Clínica Rizzo",
  description: "Todos los tratamientos y especialidades de Clínica Rizzo.",
};

export default function TratamientosPage() {
  return (
    <main>
      <TreatmentsSection />
      <CtaBanner />
    </main>
  );
}
