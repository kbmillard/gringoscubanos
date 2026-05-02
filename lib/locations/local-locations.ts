import type { LocationItem } from "./schema";

/** Fallback row until the Locations Sheet is published — leave text fields blank for the live site. */
export const localLocationItems: LocationItem[] = [
  {
    id: "gringos-cubanos-truck",
    active: true,
    type: "food_truck",
    sortOrder: 0,
    name: "Gringos Cubanos Food Truck",
    label: "Current truck",
    address: "",
    city: "",
    state: "",
    zip: "",
    hours: "Follow @gringos.cubanos for daily hours and stops",
    phone: "417-310-6172",
    email: "",
    status: "Open",
    statusNote: "",
    mapsUrl: "",
    embedUrl: "",
    lat: null,
    lng: null,
    lastUpdated: "",
    timezone: "America/Chicago",
    messageBoard: "",
  },
];
