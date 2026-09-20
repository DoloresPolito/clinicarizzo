import type { Metadata } from "next";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "Testimonios | Clínica Rizzo",
  description: "Lo que dicen nuestros pacientes sobre Clínica Rizzo.",
};

export default function TestimoniosPage() {
  return (
    <main>
      <TestimonialsSection />
      <CtaBanner />
    </main>
  );
}
