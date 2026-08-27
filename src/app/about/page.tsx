import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { about, founder } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | ARK Collective Care",
  description:
    "Learn about ARK Collective Care's trauma-informed, culturally responsive, and evidence-based approach to care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <div
          aria-hidden
          className="animate-drift-slow absolute -top-1/3 -right-1/4 -z-10 h-[70%] w-[55%] rounded-full opacity-50 blur-3xl"
          style={{ background: "#ddbea9" }}
        />
        <Container className="max-w-3xl">
          <Reveal>
            <h1 className="font-display text-4xl font-medium text-ark-deep sm:text-5xl">{about.heading}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 leading-relaxed text-ark-deep/75">{about.intro}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">Our Approach</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 120} className="border-t-2 border-ark-olive pt-4">
                <h2 className="font-display text-lg font-medium text-ark-deep">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ark-deep/75">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ark-deep/10 bg-ark-cream/30 py-20">
        <Container className="max-w-3xl space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 120}>
              <p className="leading-relaxed text-ark-deep/80">{paragraph}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">Meet the Founder</p>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_2fr]">
            <Reveal className="group relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={founder.photo}
                alt={founder.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Reveal>

            <Reveal delay={150}>
              <h2 className="font-display text-2xl font-medium text-ark-deep sm:text-3xl">{founder.name}</h2>
              <p className="mt-1 text-sm font-semibold tracking-wide text-ark-olive uppercase">
                {founder.credentials}
              </p>
              <div className="mt-6 space-y-5">
                {founder.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="leading-relaxed text-ark-deep/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ark-deep py-20 text-ark-cream">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-ark-tan uppercase">{about.mission.label}</p>
            <p className="mt-5 font-display text-2xl leading-relaxed font-medium text-white sm:text-3xl">
              {about.mission.body}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ark-deep transition-all duration-200 hover:scale-105 hover:bg-ark-tan active:scale-95"
            >
              Book a Consultation
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
