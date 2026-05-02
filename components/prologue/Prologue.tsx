"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const LOGO = "/images/brand/site-logo.webp";

export function Prologue() {
  return (
    <section
      id="prologue"
      className="relative min-h-[min(88svh,760px)] overflow-hidden py-20 sm:min-h-[min(90svh,820px)] sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-charcoal" aria-hidden />

      {/* Sized with vmin so the full circular mark fits in-frame; nudge up so it isn’t cropped under the fold */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center pt-[calc(var(--nav-h)+0.5rem)] pb-16 sm:pb-20">
        <div className="relative aspect-square h-[min(68vmin,480px)] w-[min(68vmin,480px)] max-h-[62svh] max-w-[92vw] -translate-y-[6%] sm:h-[min(72vmin,540px)] sm:w-[min(72vmin,540px)] sm:max-h-[58svh] sm:-translate-y-[8%] md:-translate-y-[10%]">
          <Image
            src={LOGO}
            alt=""
            fill
            className="object-contain opacity-[0.78] brightness-[1.14] saturate-[1.12] contrast-[1.1] sm:opacity-[0.9]"
            sizes="(max-width: 768px) 90vw, 560px"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-navy/8" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_72%_at_50%_36%,transparent_36%,rgba(15,17,20,0.14)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 [&_h2]:drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)] [&_p]:drop-shadow-[0_1px_14px_rgba(0,0,0,0.75)]">
        <SectionHeading
          title="Welcome to Gringos Cubanos."
          subtitle="Authentic Old World Cuban sandwiches, marinated to perfection and pressed on fresh Cuban bread. Pair your sandwich with hand-cut sides, bold flavors, and refreshing drinks."
          align="center"
        />
      </div>
    </section>
  );
}
