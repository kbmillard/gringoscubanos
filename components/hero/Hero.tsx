"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/data/hero-slides";
import { useOrder } from "@/context/OrderContext";

const SLIDE_MS = 5500;
/** Crossfade length — keep under SLIDE_MS so slides overlap in time without feeling sluggish */
const CROSSFADE_S = 1.35;
const CROSSFADE_EASE: [number, number, number, number] = [0.33, 0, 0.2, 1];

export function Hero() {
  const { openOrderPanel, focusMenu, scrollToSection, focusCatering, focusSchedule } = useOrder();
  const reduceMotion = useReducedMotion();
  const [i, setI] = useState(0);

  const next = useCallback(() => {
    setI((v) => (v + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(next, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [next, reduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-[var(--nav-h)]"
    >
      <div className="absolute inset-0">
        {/* Charcoal under images so blend never flashes to “empty” UI chrome */}
        <div className="absolute inset-0 bg-charcoal" aria-hidden />
        {HERO_SLIDES.map((slideItem, idx) => (
          <motion.div
            key={slideItem.src}
            className={`absolute inset-0 ${idx !== i ? "pointer-events-none" : ""}`}
            initial={false}
            aria-hidden={idx !== i}
            animate={{
              opacity: idx === i ? 1 : 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : CROSSFADE_S,
              ease: CROSSFADE_EASE,
            }}
            style={{ zIndex: idx === i ? 2 : 0 }}
          >
            <Image
              src={slideItem.src}
              alt={slideItem.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={idx === 0}
              fetchPriority={idx === 0 ? "high" : idx <= 2 ? "auto" : "low"}
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-navy/35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cuban-red/25 to-transparent" />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 pb-16 pt-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-editorial text-cream/75">
            Gringos Cubanos · Authentic Cuban food truck · Kansas City
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
            Big, bold Cuban flavor
            <br />
            rolling through Kansas City.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Authentic Cuban cuisine from Florida roots, pressed fresh and served around Kansas City
            and surrounding areas — Old World sandwiches, hand-cut sides, and a bright truck you can
            spot from down the block.
          </p>
          <div className="mt-4 flex gap-1.5" aria-hidden>
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-[width,opacity] ${
                  idx === i ? "w-8 bg-gold" : "w-2 bg-cream/35 hover:bg-cream/55"
                }`}
                aria-label={`Show slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-2 lg:w-auto"
        >
          <Cta primary label="Order / request" onClick={openOrderPanel} />
          <Cta label="View menu" onClick={focusMenu} />
          <Cta label="Find the truck" onClick={() => scrollToSection("locations")} />
          <Cta label="Upcoming schedule" onClick={focusSchedule} />
          <Cta label="Catering" onClick={focusCatering} className="col-span-2 sm:col-span-1" />
        </motion.div>
      </div>
    </section>
  );
}

function Cta({
  label,
  onClick,
  primary,
  className,
}: {
  label: string;
  onClick: () => void;
  primary?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        primary
          ? `rounded-full bg-salsa px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-editorial text-cream shadow-lg transition hover:bg-salsa/90 sm:text-[11px] ${className ?? ""}`
          : `rounded-full border border-white/20 bg-black/35 px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-editorial text-cream backdrop-blur-sm transition hover:bg-black/45 sm:text-[11px] ${className ?? ""}`
      }
    >
      {label}
    </button>
  );
}
