import { SOCIAL_LINKS } from "@/lib/data/social";

export const SITE_NAME = "Gringos Cubanos";

export const HOME_TITLE =
  "Gringos Cubanos | Authentic Cuban Food Truck in Kansas City";

export const HOME_DESCRIPTION =
  "Authentic Cuban sandwiches, bowls, empanadas, tostones, and bold Cuban flavors from Gringos Cubanos, rolling through Kansas City and surrounding areas.";

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Gringos Cubanos",
  alternateName: "Gringos Cubanos Food Truck",
  telephone: "+1-417-310-6172",
  servesCuisine: "Cuban",
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    name: "Kansas City and surrounding areas",
  },
  image: "/icons/logo-512x512.png",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gringoscubanos.example",
  sameAs: [
    SOCIAL_LINKS.instagram.href,
    SOCIAL_LINKS.facebook.href,
    SOCIAL_LINKS.tiktok.href,
  ],
};
