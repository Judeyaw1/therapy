"use client";

import { useState } from "react";
import Link from "next/link";
import type { ServiceAccordionEntry } from "@/lib/content";

export function ServicesAccordion({ entries }: { entries: ServiceAccordionEntry[] }) {
  const [openId, setOpenId] = useState<string | null>(entries[0]?.id ?? null);

  return (
    <div className="border-t border-ark-cream/30">
      {entries.map((entry) => {
        const isOpen = openId === entry.id;
        return (
          <div key={entry.id} className="border-b border-ark-cream/30">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : entry.id)}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <span className="font-display text-xl font-medium text-ark-cream sm:text-2xl">{entry.title}</span>
              <span className="relative ml-6 h-4 w-4 flex-none">
                <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-ark-cream" />
                <span
                  className={`absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-ark-cream transition-transform duration-200 ${
                    isOpen ? "rotate-0 scale-x-0" : "rotate-90"
                  }`}
                />
              </span>
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-8 text-ark-cream/85">
                  <p className="leading-relaxed">{entry.intro}</p>

                  <p className="mt-5">
                    <span className="font-semibold text-ark-cream">Who It&apos;s For: </span>
                    {entry.whoItsFor}
                  </p>

                  <p className="mt-5 font-semibold text-ark-cream">What&apos;s Included:</p>
                  <ul className="mt-2 space-y-1.5">
                    {entry.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden>&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-5 inline-block text-sm font-semibold text-ark-cream underline-offset-4 hover:underline"
                  >
                    Learn more &amp; book &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
