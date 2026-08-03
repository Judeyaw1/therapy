"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import arkLogo from "@/asset/newlogo-transparent.png";
import { businessName, nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ark-deep/10 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image src={arkLogo} alt={businessName} className="h-10 w-auto sm:h-12" preload />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-ark-olive ${
                  isActive ? "text-ark-olive" : "text-ark-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-ark-sage px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ark-olive md:inline-block"
          >
            Book a Consultation
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-ark-deep transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-6 bg-ark-deep transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-ark-deep transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-ark-deep/10 bg-[var(--background)] transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ark-deep/10 py-3 text-base font-medium text-ark-deep last:border-none"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-ark-sage px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
