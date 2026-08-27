import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { hero, homeServices } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-ark-cream">
          <div
            className="animate-drift absolute h-[55%] w-[60%] rounded-full opacity-70 blur-3xl"
            style={{ top: "-10%", left: "-5%", background: "#ddbea9" }}
          />
          <div
            className="animate-drift-reverse absolute h-[50%] w-[55%] rounded-full opacity-70 blur-3xl"
            style={{ top: "-15%", right: "-5%", background: "#b7b7a4" }}
          />
          <div
            className="animate-drift-slow absolute h-[60%] w-[70%] rounded-full opacity-60 blur-3xl"
            style={{ bottom: "-30%", left: "15%", background: "#a5a58d" }}
          />
        </div>

        <Container className="grid items-center gap-12 py-24 lg:grid-cols-2 lg:py-32">
          <div className="flex flex-col items-start gap-8">
            <div className="font-display text-3xl leading-[1.15] font-medium text-ark-deep sm:text-4xl lg:text-5xl">
              {hero.eyebrowLines.map((line, index) => (
                <Reveal key={line} delay={index * 100} className="block">
                  <span className="block whitespace-nowrap">{line}</span>
                </Reveal>
              ))}
            </div>
            <Reveal delay={220}>
              <h1 className="text-lg leading-relaxed text-ark-deep/80 sm:text-xl">{hero.heading}</h1>
            </Reveal>
            <Reveal delay={340}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={hero.primaryCta.href}
                  className="rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-ark-olive active:scale-95"
                >
                  {hero.primaryCta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="rounded-full border border-ark-deep/30 px-7 py-3.5 text-sm font-semibold text-ark-deep transition-all duration-200 hover:scale-105 hover:border-ark-deep hover:bg-white/40 active:scale-95"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-lg">
            <Parallax strength={0.08} className="absolute inset-0">
              <Image
                src="/Picture1.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="scale-110 object-cover"
                preload
              />
            </Parallax>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">Our Services</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ark-deep sm:text-4xl">
              Whole-person care, tailored to you
            </h2>
          </Reveal>

          <div className="grid items-start gap-6 md:grid-cols-3">
            {homeServices.map((service, index) => (
              <Reveal
                key={service.id}
                delay={index * 120}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ark-deep/10 bg-ark-cream/40 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <Link
                    href={`/services#${service.id}`}
                    className="font-display text-xl font-medium text-ark-deep transition-colors hover:text-ark-olive"
                  >
                    {service.title}
                  </Link>
                  <p className="text-sm leading-relaxed text-ark-deep/75">{service.body}</p>
                  <Link
                    href={`/services#${service.id}`}
                    className="mt-auto text-sm font-semibold text-ark-olive underline-offset-4 hover:underline"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ark-sage/25 py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-ark-deep sm:text-4xl">
              Healing begins when you feel seen, heard, and valued.
            </h2>
          </Reveal>
          <p className="max-w-xl text-ark-deep/75">
            Reach out to start a conversation about what care could look like for you.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-ark-olive active:scale-95"
          >
            Book a Consultation
          </Link>
        </Container>
      </section>
    </>
  );
}
