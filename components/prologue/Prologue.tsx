"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const LOGO = "/images/brand/site-logo.webp";

const STATS = [
  "30 years combined kitchen craft",
  "Florida roots → Kansas City",
  "Big bright truck",
  "Pressed Cuban bread",
  "Bold sides & drinks",
  "Catering ready",
] as const;

export function Prologue() {
  return (
    <section
      id="prologue"
      className="relative min-h-[520px] overflow-hidden py-24 sm:min-h-[580px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-charcoal" aria-hidden />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden pt-[var(--nav-h)]">
        <div className="relative aspect-square w-[min(165vw,72rem)] translate-y-[24%] sm:w-[min(150vw,80rem)] sm:translate-y-[28%] md:translate-y-[32%]">
          <Image
            src={LOGO}
            alt=""
            fill
            className="object-contain opacity-[0.78] brightness-[1.14] saturate-[1.12] contrast-[1.1] sm:opacity-[0.9]"
            sizes="100vw"
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

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STATS.map((s) => (
            <motion.li
              key={s}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl border border-white/15 bg-black/30 px-5 py-4 text-center text-xs uppercase tracking-editorial text-cream/85 backdrop-blur-sm"
            >
              {s}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
