import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import type { ServiceSlide } from "@/components/ServicesSlider";
import { ServicesSlider } from "@/components/ServicesSlider";
import { homeServices, matchingSteps, serviceCategories, servicesCta, servicesHero, servicesOffer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | ARK Counseling Collective",
  description:
    "Explore ARK Counseling Collective's psychotherapy, coaching, and consultation & training services.",
};

// For now, keep the slider to the three top-level services shown on the homepage.
const slides: ServiceSlide[] = homeServices.map((service) => ({
  key: service.id,
  image: service.image,
  title: service.title,
  description: service.body,
  tags: serviceCategories.find((category) => category.id === service.id)?.items.map((item) => item.badge) ?? [],
}));

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">{servicesHero.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl font-medium text-ark-deep sm:text-5xl">
              {servicesHero.heading}
            </h1>
            <p className="mt-4 max-w-xl text-ark-deep/75">{servicesHero.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={servicesHero.primaryCta.href}
                className="rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ark-olive"
              >
                {servicesHero.primaryCta.label}
              </Link>
              <Link
                href={servicesHero.secondaryCta.href}
                className="rounded-full border border-ark-deep/30 px-7 py-3.5 text-sm font-semibold text-ark-deep transition-colors hover:border-ark-deep hover:bg-white/40"
              >
                {servicesHero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {servicesHero.infoCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-ark-deep/10 bg-white/70 p-6">
                <p className="text-xs font-semibold tracking-widest text-ark-olive uppercase">{card.label}</p>
                <p className="mt-2 font-display text-lg font-medium text-ark-deep">{card.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">{servicesOffer.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ark-deep sm:text-4xl">
              {servicesOffer.heading}
            </h2>
          </div>

          <ServicesSlider slides={slides} />
        </Container>
      </section>

      <section className="border-t border-ark-deep/10 bg-ark-cream/30 py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">How Matching Works</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ark-deep sm:text-4xl">
              Fit matters as much as availability.
            </h2>
            <p className="mt-4 max-w-md text-ark-deep/75">
              We look at the issue you are bringing in, your pace, your goals, and which kind of therapeutic
              relationship is likely to feel safest and most productive.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {matchingSteps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-ark-deep/10 bg-white/70 p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ark-cream text-sm font-semibold text-ark-deep">
                  {item.step}
                </span>
                <p className="mt-4 font-medium text-ark-deep">{item.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ark-deep py-20 text-ark-cream">
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-semibold tracking-widest text-ark-tan uppercase">{servicesCta.eyebrow}</p>
          <h2 className="max-w-2xl font-display text-2xl leading-relaxed font-medium text-white sm:text-3xl">
            {servicesCta.heading}
          </h2>
          <Link
            href={servicesCta.cta.href}
            className="rounded-full bg-ark-cream px-7 py-3.5 text-sm font-semibold text-ark-deep transition-colors hover:bg-white"
          >
            {servicesCta.cta.label}
          </Link>
        </Container>
      </section>
    </>
  );
}
