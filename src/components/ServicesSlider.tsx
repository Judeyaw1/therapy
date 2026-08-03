"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type ServiceSlide = {
  key: string;
  image: string;
  badge?: string;
  title: string;
  description: string;
  tags: string[];
};

export function ServicesSlider({ slides }: { slides: ServiceSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ratiosRef = useRef<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    ratiosRef.current = slides.map(() => 0);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = slideRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) ratiosRef.current[index] = entry.intersectionRatio;
        }

        let bestIndex = 0;
        let bestRatio = -1;
        ratiosRef.current.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });
        setActiveIndex(bestIndex);
      },
      { root: track, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const el of slideRefs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [slides]);

  function scrollToIndex(index: number) {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    slideRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.key}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="flex w-[85%] flex-none snap-center flex-col overflow-hidden rounded-2xl border border-ark-deep/10 bg-white/60 sm:w-1/2 lg:w-1/3"
          >
            <div className="relative aspect-4/3 w-full">
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              {slide.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-ark-deep uppercase">
                  {slide.badge}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="font-display text-xl font-medium text-ark-deep">{slide.title}</h3>
              <p className="text-sm leading-relaxed text-ark-deep/75">{slide.description}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-ark-sage/20 px-3 py-1 text-xs font-medium text-ark-deep/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-auto pt-3 text-sm font-semibold text-ark-olive underline-offset-4 hover:underline"
              >
                Learn more &amp; book &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Go to ${slide.title}`}
              aria-current={index === activeIndex}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-ark-deep" : "w-2 bg-ark-deep/25"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Previous service"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ark-deep/30 text-ark-deep transition-colors hover:border-ark-deep hover:bg-white/40 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span aria-hidden>&larr;</span>
          </button>
          <button
            type="button"
            aria-label="Next service"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === slides.length - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ark-deep text-white transition-colors hover:bg-ark-olive disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span aria-hidden>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
