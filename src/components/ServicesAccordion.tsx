"use client";

import Link from "next/link";
import { useState } from "react";
import type { ServiceAccordionEntry } from "@/lib/content";

export function ServicesAccordion({ entries }: { entries: ServiceAccordionEntry[] }) {
  const [openId, setOpenId] = useState<string | null>(entries[0]?.id ?? null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="border-t border-ark-deep/10">
      {entries.map((entry) => {
        const isOpen = openId === entry.id;
        return (
          <div key={entry.id} className="border-b border-ark-deep/10">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : entry.id)}
              className="flex w-full items-center justify-between py-6 text-left"
            >
              <span className="font-display text-xl font-medium text-ark-deep sm:text-2xl">{entry.title}</span>
              <span className="relative ml-6 h-4 w-4 flex-none">
                <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-ark-deep" />
                <span
                  className={`absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-ark-deep transition-transform duration-200 ${
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
                <div className="pb-8">
                  <div className="max-w-2xl text-ark-deep/80">
                    <p className="leading-relaxed">{entry.intro}</p>

                    <p className="mt-5 font-semibold text-ark-deep">What&apos;s Included:</p>
                    <ul className="mt-2 space-y-3">
                      {entry.includes.map((item) => {
                        const key = `${entry.id}-${item.title}`;
                        const isExpanded = expandedItems.has(key);
                        return (
                          <li key={item.title} className="flex gap-2">
                            <span aria-hidden>&bull;</span>
                            <div>
                              <p className={!isExpanded ? "line-clamp-1" : undefined}>
                                <span className="font-semibold text-ark-deep">{item.title}: </span>
                                {item.description}
                              </p>
                              <button
                                type="button"
                                onClick={() => toggleItem(key)}
                                className="mt-1 text-sm font-semibold text-ark-olive underline-offset-4 hover:underline"
                              >
                                {isExpanded ? "Show less" : "Read more"}
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-5 inline-block text-sm font-semibold text-ark-olive underline-offset-4 hover:underline"
                    >
                      Learn more &amp; book &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
