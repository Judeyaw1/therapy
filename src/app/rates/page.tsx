import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Rates & Insurance | ARK Counseling Collective",
  description: "Session formats, insurance, and payment information for ARK Counseling Collective.",
};

const sessionFormats = [
  { service: "Individual Therapy", length: "50-minute session" },
  { service: "Couples Therapy", length: "60-minute session" },
  { service: "Family Therapy", length: "60-minute session" },
  { service: "Group Therapy", length: "80-minute session" },
  { service: "Coaching", length: "50-minute session" },
  { service: "Consultation & Training", length: "By arrangement" },
];

const paymentMethods = ["Credit & debit cards", "HSA / FSA cards", "Cash & check"];

export default function RatesPage() {
  return (
    <>
      <section className="border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">Rates &amp; Insurance</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium text-ark-deep sm:text-5xl">
            Investing in your care
          </h1>
          <p className="mt-4 max-w-2xl text-ark-deep/75">
            Every session length below reflects our standard scheduling. Reach out and we&apos;ll confirm current
            session fees and availability for your specific need.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl font-medium text-ark-deep">Session Formats</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ark-deep/10">
            {sessionFormats.map((row, index) => (
              <div
                key={row.service}
                className={`flex items-center justify-between px-6 py-4 text-sm ${
                  index % 2 === 1 ? "bg-ark-cream/30" : "bg-white/60"
                }`}
              >
                <span className="font-medium text-ark-deep">{row.service}</span>
                <span className="text-ark-deep/70">{row.length}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-medium text-ark-deep">Insurance</h2>
              <p className="mt-4 leading-relaxed text-ark-deep/75">
                Insurance coverage varies by plan. Contact us and we&apos;ll help you understand your options,
                including in-network coverage and out-of-network reimbursement, before your first session.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium text-ark-deep">Payment Methods</h2>
              <ul className="mt-4 space-y-2 text-ark-deep/75">
                {paymentMethods.map((method) => (
                  <li key={method} className="border-b border-ark-deep/10 pb-2 text-sm">
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-ark-deep/10 bg-ark-cream/30 p-8">
            <h2 className="font-display text-xl font-medium text-ark-deep">Good Faith Estimate</h2>
            <p className="mt-3 text-sm leading-relaxed text-ark-deep/75">
              Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges
              for services if you are not using insurance. We provide this estimate in writing before your first
              appointment and any time your care plan changes.
            </p>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ark-olive"
            >
              Ask About Rates
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
