"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

export function Prologue() {
  return (
    <section
      id="prologue"
      className="relative z-10 scroll-mt-[calc(var(--nav-h)+16px)] min-h-[min(52svh,560px)] py-20 sm:min-h-[min(48svh,520px)] sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 [&_h2]:drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)] [&_p]:drop-shadow-[0_1px_14px_rgba(0,0,0,0.75)]">
        <SectionHeading
          title="Welcome to Gringos Cubanos."
          subtitle="Authentic Old World Cuban sandwiches, marinated to perfection and pressed on fresh Cuban bread. Pair your sandwich with hand-cut sides, bold flavors, and refreshing drinks."
          align="center"
        />
      </div>
    </section>
  );
}
