/**
 * Fallbacks when `/api/locations` is loading, failed, or a row type is missing.
 * Keep aligned with `lib/locations/local-locations.ts` and owner sheet defaults.
 */
export const FOOTER_VISIT_FALLBACK = {
  restaurant: {
    address: "Food truck service",
    cityLine: "Kansas City metro — pin updates daily",
  },
  truck: {
    address: "See current truck location on site",
    detail: "",
    cityLine: "Kansas City metro",
  },
  hoursPrimary: "Hours vary by stop — see schedule and Instagram",
} as const;
