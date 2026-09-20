import type { Metadata } from "next";
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "Nosotros | Clínica Rizzo",
  description:
    "Conocé la experiencia, los valores y la metodología de trabajo de Clínica Rizzo.",
};

export default function NosotrosPage() {
  return (
    <main>
      <ValuesSection />
      <ProcessSection />
      <CtaBanner />
    </main>
  );
}
