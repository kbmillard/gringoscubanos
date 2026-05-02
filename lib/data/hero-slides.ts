import { gallerySrc } from "@/lib/data/gallery-path";

/**
 * Hero slideshow — truck / skyline exteriors from `gallery/` only.
 * Does not reuse Story (`truckstreet.jpg****.jpg`, `truckskyline3.jpg*****.jpg`) or Gallery (`food*`).
 */
const HERO_SLIDE_DEFS = [
  {
    file: "truckskyline.jpg******.jpg",
    alt: "Gringos Cubanos food truck with Kansas City skyline at dusk",
  },
  {
    file: "truckskyline2.jpg",
    alt: "Gringos Cubanos truck and city skyline",
  },
  {
    file: "truckskyline4.jpg****.jpg",
    alt: "Gringos Cubanos truck parked with skyline behind",
  },
  {
    file: "truckskyline5.jpg****.jpg",
    alt: "Bright Gringos Cubanos truck against evening skyline",
  },
  {
    file: "truckskyline7.jpg*****.jpg",
    alt: "Gringos Cubanos food truck on the curb with downtown towers",
  },
  {
    file: "truckskyline8.jpg******.jpg",
    alt: "Gringos Cubanos truck glowing at night near the skyline",
  },
] as const;

export const HERO_SLIDES = HERO_SLIDE_DEFS.map(({ file, alt }) => ({
  src: gallerySrc(file),
  alt,
}));
