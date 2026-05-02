import type { LocationItem } from "./schema";

/** Demo truck row — replace via Google Sheet in production. */
export const localLocationItems: LocationItem[] = [
  {
    id: "gringos-cubanos-truck",
    active: true,
    type: "food_truck",
    sortOrder: 0,
    name: "Gringos Cubanos Food Truck",
    label: "Current truck",
    address: "TBD — check Instagram for today’s pin",
    city: "Kansas City",
    state: "MO",
    zip: "",
    hours: "Follow @gringos.cubanos for daily hours and stops",
    phone: "417-310-6172",
    email: "",
    status: "Open",
    statusNote: "Demo location until the owner publishes the live sheet row.",
    mapsUrl: "",
    embedUrl: "",
    lat: null,
    lng: null,
    lastUpdated: new Date().toISOString(),
    timezone: "America/Chicago",
    messageBoard:
      "Follow us on Instagram for today’s truck updates — this note updates from the Locations Sheet.",
  },
];
