"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";

const tabs = [
  { label: "Our Story", href: "/about" },
  { label: "Meet the Founder", href: "/about/founder" },
] as const;

export function AboutTabs() {
  const pathname = usePathname();

  return (
    <div className="border-b border-ark-deep/10">
      <Container>
        <nav className="flex gap-8">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`border-b-2 py-4 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-ark-deep text-ark-deep"
                    : "border-transparent text-ark-deep/50 hover:text-ark-deep"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
