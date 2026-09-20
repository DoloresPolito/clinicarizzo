import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "Servicios | Clínica Rizzo",
  description: "Todos los tratamientos y especialidades de Clínica Rizzo.",
};

export default function ServiciosPage() {
  return (
    <main>
      <ServicesSection />
      <CtaBanner />
    </main>
  );
}
