"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const countryCodes = [
  { name: "United States / Canada", flag: "🇺🇸", dial: "+1" },
  { name: "United Kingdom", flag: "🇬🇧", dial: "+44" },
  { name: "Ghana", flag: "🇬🇭", dial: "+233" },
  { name: "Nigeria", flag: "🇳🇬", dial: "+234" },
  { name: "Kenya", flag: "🇰🇪", dial: "+254" },
  { name: "South Africa", flag: "🇿🇦", dial: "+27" },
  { name: "India", flag: "🇮🇳", dial: "+91" },
  { name: "France", flag: "🇫🇷", dial: "+33" },
  { name: "Germany", flag: "🇩🇪", dial: "+49" },
  { name: "Mexico", flag: "🇲🇽", dial: "+52" },
  { name: "Brazil", flag: "🇧🇷", dial: "+55" },
  { name: "Australia", flag: "🇦🇺", dial: "+61" },
  { name: "Philippines", flag: "🇵🇭", dial: "+63" },
  { name: "Ethiopia", flag: "🇪🇹", dial: "+251" },
];

function formatPhoneDigits(digits: string, dial: string) {
  if (dial !== "+1") return digits;
  const d = digits.slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <div
          aria-hidden
          className="animate-drift absolute -top-1/3 -right-1/4 -z-10 h-[65%] w-[50%] rounded-full opacity-50 blur-3xl"
          style={{ background: "#ddbea9" }}
        />
        <Container>
          <Reveal>
            <h1 className="max-w-2xl font-display text-4xl font-medium text-ark-deep sm:text-5xl">
              Let&apos;s start the conversation
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-2xl text-ark-deep/75">
              Send us a message and we&apos;ll follow up to schedule a free 15 minute phone consultation.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="mx-auto max-w-xl">
          {submitted ? (
            <div className="animate-fade-in-scale rounded-2xl border border-ark-deep/10 bg-ark-cream/30 p-10 text-center">
              <h2 className="font-display text-2xl font-medium text-ark-deep">Thank you for reaching out</h2>
              <p className="mt-3 text-ark-deep/75">We&apos;ve received your message and will be in touch soon.</p>
            </div>
          ) : (
            <form
              className="grid gap-5 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <Reveal delay={0}>
                <Field label="Full Name" name="name" type="text" required />
              </Reveal>
              <Reveal delay={60}>
                <Field label="Email" name="email" type="email" required />
              </Reveal>
              <Reveal delay={120} className="sm:col-span-2">
                <PhoneField />
              </Reveal>

              <Reveal delay={180} className="sm:col-span-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-medium text-ark-deep">Interested In</span>
                  <select
                    name="interest"
                    className="rounded-lg border border-ark-deep/20 bg-white/70 px-4 py-3 text-ark-deep transition-colors focus:border-ark-sage focus:outline-none"
                  >
                    <option>Psychotherapy</option>
                    <option>Coaching</option>
                    <option>Consulting</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </Reveal>

              <Reveal delay={240} className="sm:col-span-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-medium text-ark-deep">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="resize-y rounded-lg border border-ark-deep/20 bg-white/70 px-4 py-3 text-ark-deep transition-colors focus:border-ark-sage focus:outline-none"
                  />
                </label>
              </Reveal>

              <Reveal delay={300} className="sm:col-span-2">
                <button
                  type="submit"
                  className="mt-2 w-fit rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-ark-olive active:scale-95"
                >
                  Send Message
                </button>
              </Reveal>
            </form>
          )}

          <div className="mt-10 rounded-2xl border border-ark-brown/30 bg-ark-brown/10 p-6">
            <p className="text-sm font-semibold text-ark-deep">In a mental health crisis?</p>
            <p className="mt-2 text-sm leading-relaxed text-ark-deep/75">
              If you or someone you know is in immediate danger, call 911. For 24/7 support, call or text 988 to
              reach the Suicide &amp; Crisis Lifeline.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function PhoneField() {
  const [dial, setDial] = useState("+1");
  const [digits, setDigits] = useState("");

  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-ark-deep">Phone</span>
      <div className="flex gap-2">
        <select
          value={dial}
          onChange={(event) => setDial(event.target.value)}
          aria-label="Country code"
          className="rounded-lg border border-ark-deep/20 bg-white/70 px-2 py-3 text-ark-deep transition-colors focus:border-ark-sage focus:outline-none"
        >
          {countryCodes.map((country) => (
            <option key={country.name} value={country.dial}>
              {country.flag} {country.dial}
            </option>
          ))}
        </select>
        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={formatPhoneDigits(digits, dial)}
          onChange={(event) => setDigits(event.target.value.replace(/\D/g, "").slice(0, 15))}
          placeholder={dial === "+1" ? "(555) 123-4567" : "Phone number"}
          className="min-w-0 flex-1 rounded-lg border border-ark-deep/20 bg-white/70 px-4 py-3 text-ark-deep transition-colors focus:border-ark-sage focus:outline-none"
        />
      </div>
      <input type="hidden" name="phone" value={digits ? `${dial} ${digits}` : ""} />
    </label>
  );
}

function Field({
  label,
  name,
  type,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm ${className}`}>
      <span className="font-medium text-ark-deep">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-ark-deep/20 bg-white/70 px-4 py-3 text-ark-deep transition-colors focus:border-ark-sage focus:outline-none"
      />
    </label>
  );
}
