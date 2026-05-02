import { gallerySrc } from "@/lib/data/gallery-path";

/**
 * Hero slideshow — only allowed assets from `gallery/`.
 * Priority: filenames marked ***** for truck/dog per owner prompt; then ****** variants.
 */
export const HERO_SLIDE_FILENAMES = [
  "dog.jpg*****.jpg",
  "truckskyline.jpg******.jpg",
  "truckstreet2.jpg******.jpg",
  "truckskyline8.jpg******.jpg",
] as const;

export const HERO_SLIDES = HERO_SLIDE_FILENAMES.map((file) => ({
  src: gallerySrc(file),
  alt: `Gringos Cubanos food truck — ${file.replace(/[*.]/g, " ").trim()}`,
}));
