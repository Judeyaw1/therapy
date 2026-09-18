import type { Metadata } from "next";
import Image from "next/image";
import { AboutTabs } from "@/components/AboutTabs";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { founder } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Founder | ARK Collective Care",
  description: "Meet R.A. Kwadu, the founder of ARK Collective Care.",
};

export default function FounderPage() {
  return (
    <>
      <AboutTabs />

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
    </>
  );
}
