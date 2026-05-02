import { gallerySrc } from "@/lib/data/gallery-path";

/**
 * Hero slideshow — only `gallery/` truck assets (no overlap with story/gallery dog shots).
 */
export const HERO_SLIDE_FILENAMES = [
  "truckskyline.jpg******.jpg",
  "truckstreet2.jpg******.jpg",
  "truckskyline8.jpg******.jpg",
  "truckstreet4.jpg*****.jpg",
] as const;

export const HERO_SLIDES = HERO_SLIDE_FILENAMES.map((file) => ({
  src: gallerySrc(file),
  alt: `Gringos Cubanos food truck — ${file.replace(/[*.]/g, " ").trim()}`,
}));
