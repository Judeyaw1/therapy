import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { serviceAccordion, servicesHero } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | ARK Collective Care",
  description:
    "Explore ARK Collective Care's psychotherapy, coaching, and consultation & training services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <div
          aria-hidden
          className="animate-drift absolute -top-1/4 -left-1/4 -z-10 h-[65%] w-[50%] rounded-full opacity-50 blur-3xl"
          style={{ background: "#b7b7a4" }}
        />
        <Container className="max-w-2xl">
          <Reveal>
            <h1 className="font-display text-4xl font-medium text-ark-deep sm:text-5xl">{servicesHero.heading}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-ark-deep/75">{servicesHero.intro}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-5xl">
          <ServicesAccordion entries={serviceAccordion} />
        </Container>
      </section>
    </>
  );
}
