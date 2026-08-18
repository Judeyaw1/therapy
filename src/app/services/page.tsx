import type { Metadata } from "next";
import { Container } from "@/components/Container";
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
      <section className="border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">Services</p>
          <h1 className="mt-3 font-display text-4xl font-medium text-ark-deep sm:text-5xl">
            {servicesHero.heading}
          </h1>
          <p className="mt-4 text-ark-deep/75">{servicesHero.intro}</p>
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
