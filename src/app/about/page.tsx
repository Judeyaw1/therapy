import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { about, founder } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | ARK Collective Care",
  description:
    "Learn about ARK Collective Care's trauma-informed, culturally responsive, and evidence-based approach to care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">About Us</p>
          <h1 className="mt-3 font-display text-lg font-medium text-ark-deep sm:text-xl">
            {about.intro}
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl space-y-6">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed text-ark-deep/80">
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">Meet the Founder</p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_2fr]">
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={founder.photo}
                alt={founder.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div>
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
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ark-deep py-20 text-ark-cream">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-ark-tan uppercase">{about.mission.label}</p>
          <p className="mt-5 font-display text-2xl leading-relaxed font-medium text-white sm:text-3xl">
            {about.mission.body}
          </p>
        </Container>
      </section>
    </>
  );
}
