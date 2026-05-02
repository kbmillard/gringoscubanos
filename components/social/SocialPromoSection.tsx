"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS } from "@/lib/data/social";

/** Simple TikTok glyph — Lucide may not include TikTok in all versions. */
function TikTokIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.4a6.33 6.33 0 0 0-1.88-.28 6.34 6.34 0 1 0 6.34 6.34c.01-.13 0-.26 0-.39V9.02a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.12-.15z" />
    </svg>
  );
}

export function SocialPromoSection() {
  return (
    <section className="relative z-10 bg-charcoal py-24">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <SectionHeading
          kicker="Social"
          title="Tag us — drink on us."
          align="center"
          subtitle="Follow or tag us on social media and get a free drink."
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 rounded-3xl border border-gold/25 bg-gradient-to-br from-navy/60 to-charcoal p-8 text-center"
        >
          <p className="text-lg font-medium text-cream">
            Follow or tag us on social media and get a free drink.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-cream transition hover:bg-white/10"
            >
              <Instagram className="h-5 w-5" aria-hidden />
              <span>
                {SOCIAL_LINKS.instagram.label}{" "}
                <span className="text-cream/70">({SOCIAL_LINKS.instagram.handle})</span>
              </span>
            </a>
            <a
              href={SOCIAL_LINKS.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-cream transition hover:bg-white/10"
            >
              <Facebook className="h-5 w-5" aria-hidden />
              <span>{SOCIAL_LINKS.facebook.label}</span>
            </a>
            <a
              href={SOCIAL_LINKS.tiktok.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-cream transition hover:bg-white/10"
            >
              <TikTokIcon className="h-5 w-5" />
              <span>
                {SOCIAL_LINKS.tiktok.label}{" "}
                <span className="text-cream/70">({SOCIAL_LINKS.tiktok.handle})</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
