import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { feesPolicy, serviceAccordion, servicesHero } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | ARK Counseling Collective",
  description:
    "Explore ARK Counseling Collective's psychotherapy, coaching, and consultation & training services.",
};

export default function ServicesPage() {
  return (
    <section className="bg-ark-deep py-24 text-ark-cream">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-medium sm:text-4xl">{servicesHero.heading}</h1>
        <p className="mt-4 text-ark-cream/80">{servicesHero.intro}</p>
      </Container>

      <Container className="mt-14 max-w-3xl">
        <ServicesAccordion entries={serviceAccordion} />
      </Container>

      <Container className="mt-24 max-w-3xl">
        <h2 className="font-display text-3xl font-medium italic sm:text-4xl">{feesPolicy.eyebrow}</h2>

        <div className="mt-12 space-y-14">
          {feesPolicy.sections.map((section, index) => (
            <div key={section.title} className={index % 2 === 1 ? "sm:ml-auto sm:max-w-md" : "sm:max-w-md"}>
              <h3 className="font-display text-xl font-medium">{section.title}</h3>
              <p className="mt-3 leading-relaxed text-ark-cream/80">{section.body}</p>
            </div>
          ))}
        </div>

        <Link
          href={feesPolicy.cta.href}
          className="mt-10 inline-block text-sm font-semibold text-ark-cream underline-offset-4 hover:underline"
        >
          {feesPolicy.cta.label} &rarr;
        </Link>
      </Container>
    </section>
  );
}
