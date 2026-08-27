import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { feesPolicy, inNetworkInsurers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rates & Insurance | ARK Collective Care",
  description: "Session formats, insurance, and payment information for ARK Collective Care.",
};

const sessionFormats = [
  { service: "Individual Therapy", length: "55-minute session" },
  { service: "Relational Therapy", length: "55-minute session" },
  { service: "Family Therapy", length: "55-minute session" },
  { service: "Group Therapy", length: "55-minute session" },
  { service: "Coaching", length: "55-minute session" },
  { service: "Consulting", length: "By arrangement" },
];

export default function RatesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <div
          aria-hidden
          className="animate-drift-reverse absolute -top-1/3 -right-1/5 -z-10 h-[65%] w-[50%] rounded-full opacity-50 blur-3xl"
          style={{ background: "#a5a58d" }}
        />
        <Container>
          <Reveal>
            <h1 className="max-w-2xl font-display text-4xl font-medium text-ark-deep sm:text-5xl">
              Investing in your care
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-2xl text-ark-deep/75">
              Every session length below reflects our standard scheduling. Reach out and we&apos;ll confirm current
              session fees and availability for your specific need.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-2xl font-medium text-ark-deep">Session Formats</h2>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ark-deep/10">
            {sessionFormats.map((row, index) => (
              <Reveal
                key={row.service}
                delay={index * 70}
                className={`flex items-center justify-between px-6 py-4 text-sm transition-colors hover:bg-ark-tan/20 ${
                  index % 2 === 1 ? "bg-ark-cream/30" : "bg-white/60"
                }`}
              >
                <span className="font-medium text-ark-deep">{row.service}</span>
                <span className="text-ark-deep/70">{row.length}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <h2 className="text-center font-display text-2xl font-medium text-ark-deep">Insurance</h2>
            <p className="mt-4 leading-relaxed text-ark-deep/75">
              Insurance coverage varies by plan. Contact us and we&apos;ll help you understand your options,
              including in-network coverage and out-of-network reimbursement, before your first session.
            </p>

            <p className="mt-6 font-semibold text-ark-deep">We are in network with:</p>
            <ul className="mt-3 space-y-2">
              {inNetworkInsurers.map((insurer) => (
                <li key={insurer} className="flex gap-2 text-sm text-ark-deep/75">
                  <span aria-hidden>&bull;</span>
                  <span>{insurer}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-ark-deep/10 bg-ark-cream/30 py-24">
        <div
          aria-hidden
          className="animate-drift-slow absolute -bottom-1/3 -left-1/5 -z-10 h-[60%] w-[45%] rounded-full opacity-40 blur-3xl"
          style={{ background: "#cb997e" }}
        />
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-medium text-ark-deep italic sm:text-4xl">
              {feesPolicy.eyebrow}
            </h2>
          </Reveal>

          <div className="mt-12 space-y-14">
            {feesPolicy.sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={index * 100}
                className={index % 2 === 1 ? "sm:ml-auto sm:max-w-md" : "sm:max-w-md"}
              >
                <h3 className="font-display text-xl font-medium text-ark-deep">{section.title}</h3>
                {section.list ? (
                  <ul className="mt-3 space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="border-b border-ark-deep/10 pb-2 text-sm text-ark-deep/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 leading-relaxed text-ark-deep/75">{section.body}</p>
                )}
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-ark-olive active:scale-95"
            >
              Ask About Rates
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
