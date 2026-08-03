import Image from "next/image";
import Link from "next/link";
import arkLogo from "@/asset/ark-logo.png";
import { businessName, contactInfo, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ark-deep/10 bg-ark-deep text-ark-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image src={arkLogo} alt={businessName} className="h-10 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-ark-cream/70">
              Rooted in compassion. Culturally responsive. Honoring your story through evidence-based and
              integrative care that cultivates healing.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-ark-tan uppercase">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ark-cream/80 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-ark-tan uppercase">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ark-cream/80">
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
