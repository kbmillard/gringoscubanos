"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

export function Prologue() {
  return (
    <section
      id="prologue"
      className="relative z-10 scroll-mt-[calc(var(--nav-h)+16px)] pt-10 pb-2 sm:pt-14 sm:pb-4"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-charcoal/35 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-10 mb-10 sm:mb-14">
          <SectionHeading
            title="Welcome to Gringos Cubanos."
            subtitle="Authentic Old World Cuban sandwiches, marinated to perfection and pressed on fresh Cuban bread. Pair your sandwich with hand-cut sides, bold flavors, and refreshing drinks."
            align="center"
            className="max-w-none [&_h2]:text-balance [&_p]:text-pretty"
          />
        </div>
      </div>
    </section>
  );
}
