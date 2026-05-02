"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallerySrc } from "@/lib/data/gallery-path";

/**
 * Food-focused gallery — `food*` filenames from approved `gallery/` only.
 * Priority **** / ***** files appear first per owner naming.
 */
const SHOTS = [
  { file: "food13*****.jpg", alt: "Cuban food from Gringos Cubanos truck" },
  { file: "food22******.jpg", alt: "Sandwich and sides — Gringos Cubanos" },
  { file: "food20*****8.jpg", alt: "Pressed sandwich — Gringos Cubanos" },
  { file: "food21****.jpg", alt: "Fritas and truck favorites" },
  { file: "food24****.jpg", alt: "Empanadas — Gringos Cubanos" },
  { file: "food12****.jpg", alt: "Beef empanada" },
  { file: "food8.jpg", alt: "Tostones / plantains" },
  { file: "food4.jpg", alt: "Hand-cut fries" },
  { file: "food5.jpg", alt: "Bowl with pork" },
  { file: "food6.jpg", alt: "Bowl with chicken" },
  { file: "food7.jpg", alt: "Bowl with steak" },
  { file: "food1.jpg", alt: "Beverages" },
  { file: "food3.jpg", alt: "Beans and rice" },
] as const;

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative z-10 scroll-mt-[calc(var(--nav-h)+16px)] bg-charcoal/45 py-24 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          kicker="Gallery"
          title="Color, char, and pressed bread."
          align="center"
          subtitle="Real plates from the window — Cuban sandwiches, sides, and truck energy around Kansas City."
        />
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {SHOTS.map((s, i) => (
            <div
              key={s.file}
              className={`relative mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={gallerySrc(s.file)}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
