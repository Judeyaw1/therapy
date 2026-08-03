"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { contactInfo } from "@/lib/content";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="border-b border-ark-deep/10 bg-ark-cream/40 py-20">
        <Container>
          <p className="text-sm font-semibold tracking-widest text-ark-olive uppercase">Contact</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium text-ark-deep sm:text-5xl">
            Let&apos;s start the conversation
          </h1>
          <p className="mt-4 max-w-2xl text-ark-deep/75">
            Send us a note and we&apos;ll follow up to schedule a free consultation.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-widest text-ark-olive uppercase">Email</p>
              <p className="mt-1 text-ark-deep/80">{contactInfo.email}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-ark-olive uppercase">Phone</p>
              <p className="mt-1 text-ark-deep/80">{contactInfo.phone}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-ark-olive uppercase">Location</p>
              <p className="mt-1 text-ark-deep/80">{contactInfo.location}</p>
            </div>

            <div className="rounded-2xl border border-ark-brown/30 bg-ark-brown/10 p-6">
              <p className="text-sm font-semibold text-ark-deep">In a mental health crisis?</p>
              <p className="mt-2 text-sm leading-relaxed text-ark-deep/75">
                If you or someone you know is in immediate danger, call 911. For 24/7 support, call or text 988
                to reach the Suicide &amp; Crisis Lifeline.
              </p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-ark-deep/10 bg-ark-cream/30 p-10 text-center">
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
                <Field label="Full Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" className="sm:col-span-2" />

                <label className="flex flex-col gap-2 text-sm sm:col-span-2">
                  <span className="font-medium text-ark-deep">Interested In</span>
                  <select
                    name="interest"
                    className="rounded-lg border border-ark-deep/20 bg-white/70 px-4 py-3 text-ark-deep focus:border-ark-sage focus:outline-none"
                  >
                    <option>Psychotherapy</option>
                    <option>Coaching</option>
                    <option>Consultation &amp; Training</option>
                    <option>Not sure yet</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm sm:col-span-2">
                  <span className="font-medium text-ark-deep">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="resize-y rounded-lg border border-ark-deep/20 bg-white/70 px-4 py-3 text-ark-deep focus:border-ark-sage focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 w-fit rounded-full bg-ark-deep px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ark-olive sm:col-span-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
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
        className="rounded-lg border border-ark-deep/20 bg-white/70 px-4 py-3 text-ark-deep focus:border-ark-sage focus:outline-none"
      />
    </label>
  );
}
