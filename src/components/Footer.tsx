import Link from "next/link";
import { businessName, contactInfo, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ark-deep/10 bg-ark-deep text-ark-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="max-w-xs font-display text-xl leading-[1.15] font-medium text-ark-cream">
              <span className="block whitespace-nowrap">Rooted in compassion.</span>
              <span className="block whitespace-nowrap">Culturally responsive.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white">
              Honoring your story through evidence-based and integrative care that cultivates healing.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-ark-tan uppercase">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white transition-colors hover:text-ark-tan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-ark-tan uppercase">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white">
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-6 text-xs text-ark-cream/60 md:flex-row md:justify-between">
          <span>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
