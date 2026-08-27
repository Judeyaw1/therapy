import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { hero, homeServices } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 55% at 15% 15%, #ddbea9 0%, transparent 60%), radial-gradient(55% 50% at 90% 10%, #b7b7a4 0%, transparent 60%), radial-gradient(70% 60% at 50% 100%, #a5a58d 0%, transparent 55%), #ffe8d6",
          }}
        />

        <Container className="grid items-center gap-12 py-24 lg:grid-cols-2 lg:py-32">
          <div className="flex flex-col items-start gap-8">
            <p className="font-display text-3xl leading-[1.15] font-medium text-ark-deep sm:text-4xl lg:text-5xl">
              {hero.eyebrowLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </p>
            <h1 className="text-lg leading-relaxed text-ark-deep/80 sm:text-xl">
              {hero.heading}
            </h1>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={hero.primaryCta.href}
                className="rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ark-olive"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="rounded-full border border-ark-deep/30 px-7 py-3.5 text-sm font-semibold text-ark-deep transition-colors hover:border-ark-deep hover:bg-white/40"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/Picture1.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              preload
            />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">Our Services</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ark-deep sm:text-4xl">
              Whole-person care, tailored to you
            </h2>
          </div>

          <div className="grid items-start gap-6 md:grid-cols-3">
            {homeServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-ark-deep/10 bg-ark-cream/40"
              >
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ark-sage/25 py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-medium text-ark-deep sm:text-4xl">
            Healing begins when you feel seen, heard, and valued.
          </h2>
          <p className="max-w-xl text-ark-deep/75">
            Reach out to start a conversation about what care could look like for you.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ark-olive"
          >
            Book a Consultation
          </Link>
        </Container>
      </section>
    </>
  );
}
