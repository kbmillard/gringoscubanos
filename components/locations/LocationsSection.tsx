"use client";

import { MapPin, Phone } from "lucide-react";
import { CONTACT, HOURS_LINES } from "@/lib/data/locations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocationsCatalog } from "@/context/LocationsCatalogContext";
import type { LocationItem } from "@/lib/locations/schema";
import { LocationPublicStatus } from "@/components/locations/LocationPublicStatus";
import {
  formatAddressLine,
  resolvedAppleMapsUrl,
  resolvedEmbedSrc,
  resolvedMapsUrl,
  telHrefFromDisplay,
} from "@/lib/locations/helpers";
import { GoogleMapClientResolved } from "@/components/locations/GoogleMapClientResolved";
import { GoogleMapGreedy } from "@/components/locations/GoogleMapGreedy";

function addressLines(loc: LocationItem): string[] {
  const cityLine = [loc.city, loc.state, loc.zip].filter(Boolean).join(" ").trim();
  const lines = [loc.address, cityLine].filter(Boolean);
  return lines.length > 0 ? lines : [];
}

function hasPublishedAddress(loc: LocationItem): boolean {
  return formatAddressLine(loc).trim().length > 0;
}

function isThirdPartyEmbedUrl(url: string): boolean {
  const u = url.trim().toLowerCase();
  if (!u) return false;
  return !u.includes("google.com") && !u.includes("maps.google.");
}

function parseCoord(n: number | null | undefined): number | null {
  if (n == null) return null;
  const v = Number(n);
  return Number.isFinite(v) ? v : null;
}

function MapEmbedBlock({ loc }: { loc: LocationItem }) {
  const line = formatAddressLine(loc);
  const ownerEmbed = loc.embedUrl?.trim();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  const placeId = loc.placeId?.trim();
  const lat = parseCoord(loc.lat);
  const lng = parseCoord(loc.lng);
  const coordsOk = lat != null && lng != null;
  const useGreedyJsMap =
    coordsOk && Boolean(apiKey) && (!ownerEmbed || !isThirdPartyEmbedUrl(ownerEmbed));
  const useClientResolve =
    Boolean(apiKey) &&
    !coordsOk &&
    (Boolean(placeId) || Boolean(line.trim())) &&
    !ownerEmbed?.trim();
  const src = useGreedyJsMap ? null : resolvedEmbedSrc(loc);

  return (
    <div>
      <p className="text-xs uppercase tracking-editorial text-cream/50">
        {loc.label?.trim() || loc.name}
      </p>
      {line.trim() ? (
        <p className="mt-1 text-sm text-cream/80">{line}</p>
      ) : (
        <p className="mt-1 text-sm text-cream/60">TBD</p>
      )}
      <LocationPublicStatus location={loc} variant="map" showNote />
      {useGreedyJsMap && lat != null && lng != null ? (
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10">
          <GoogleMapGreedy
            lat={lat}
            lng={lng}
            title={loc.name}
            className="h-[min(52vw,320px)] w-full min-h-[220px] bg-charcoal"
          />
        </div>
      ) : useClientResolve ? (
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10">
          <GoogleMapClientResolved
            loc={loc}
            title={loc.name}
            className="h-[min(52vw,320px)] w-full min-h-[220px] bg-charcoal"
          />
        </div>
      ) : src ? (
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title={`Map — ${loc.name}`}
            className="h-[min(52vw,320px)] w-full min-h-[220px] bg-charcoal"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={src}
          />
        </div>
      ) : (
        <div className="mt-3 rounded-2xl border border-dashed border-white/20 bg-charcoal/60 p-6 text-sm text-cream/75">
          <p className="font-medium text-cream">Map</p>
          <p className="mt-2 text-cream/70">TBD</p>
          <div className="mt-4">
            <MapButton label="Open in Google Maps" href={resolvedMapsUrl(loc)} />
          </div>
        </div>
      )}
    </div>
  );
}

function MapButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-editorial text-cream hover:bg-white/5"
    >
      {label}
    </a>
  );
}

export function LocationsSection() {
  const { loading, error, data } = useLocationsCatalog();

  const trucks = data?.foodTruckLocations ?? [];
  const primaryTruck = trucks[0];
  const phoneDisplay = primaryTruck?.phone?.trim() || CONTACT.phoneDisplay;
  const phoneTel = telHrefFromDisplay(phoneDisplay, CONTACT.phoneTel);

  const noteFromSheet = primaryTruck?.messageBoard?.trim() ?? "";

  return (
    <section id="locations" className="scroll-mt-[calc(var(--nav-h)+16px)] py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div id="locations-start" tabIndex={-1} className="outline-none focus:outline-none">
          <SectionHeading
            kicker="Current truck"
            title="Find us on the curb — pin updates from the road."
            subtitle="The truck moves daily. Address, hours, and notes update here when they are published."
          />
        </div>

        {error ? (
          <p className="mt-6 rounded-xl border border-salsa/40 bg-salsa/10 p-4 text-sm text-cream">
            {error}. Call{" "}
            <a className="underline" href={`tel:${CONTACT.phoneTel}`}>
              {CONTACT.phoneDisplay}
            </a>
            .
          </p>
        ) : null}

        {loading ? (
          <div className="mt-12 h-96 animate-pulse rounded-3xl bg-white/10" />
        ) : primaryTruck ? (
          <article className="mt-12 overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-navy/80 to-charcoal p-6 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="min-w-0 flex-1 space-y-4">
                <p className="text-xs uppercase tracking-editorial text-gold/90">Current truck location</p>
                <h3 className="font-display text-3xl text-cream sm:text-4xl">{primaryTruck.name}</h3>
                <LocationPublicStatus location={primaryTruck} variant="card" showNote />
                <div className="flex items-start gap-2 text-cream/90">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <div>
                    {hasPublishedAddress(primaryTruck) ? (
                      addressLines(primaryTruck).map((l) => <p key={l}>{l}</p>)
                    ) : (
                      <p className="text-cream/75">TBD</p>
                    )}
                  </div>
                </div>
                {primaryTruck.lastUpdated?.trim() ? (
                  <p className="text-xs text-cream/55">
                    Last updated: {primaryTruck.lastUpdated.trim()}
                  </p>
                ) : null}
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <p className="text-xs font-semibold uppercase tracking-editorial text-gold/90">
                    Today&apos;s truck note
                  </p>
                  {noteFromSheet ? (
                    <p className="mt-2 text-sm leading-relaxed text-cream/90">{noteFromSheet}</p>
                  ) : (
                    <div className="mt-2 min-h-[1.25rem]" aria-hidden />
                  )}
                  {primaryTruck.statusNote?.trim() ? (
                    <p className="mt-3 text-xs text-cream/70">
                      <span className="font-semibold text-cream/80">Status note: </span>
                      {primaryTruck.statusNote.trim()}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-2">
                  <MapButton label="Open in Google Maps" href={resolvedMapsUrl(primaryTruck)} />
                  <MapButton label="Apple Maps" href={resolvedAppleMapsUrl(primaryTruck)} />
                  <a
                    href={phoneTel}
                    className="inline-flex items-center gap-2 rounded-full bg-salsa px-4 py-2 text-[10px] font-semibold uppercase tracking-editorial text-cream hover:bg-salsa/90"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    Call / text
                  </a>
                </div>
              </div>
              <div className="w-full min-w-0 shrink-0 lg:max-w-md">
                <MapEmbedBlock loc={primaryTruck} />
              </div>
            </div>
          </article>
        ) : (
          <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-cream/80">
            Current truck location is not available yet.
          </p>
        )}

        <div
          id="hours"
          className="mt-12 scroll-mt-[calc(var(--nav-h)+16px)] rounded-3xl border border-white/10 bg-black/30 p-8"
        >
          <p className="text-xs uppercase tracking-editorial text-cream/60">Hours & updates</p>
          <ul className="mt-3 space-y-2 text-cream/85">
            {!loading && data?.locations.length
              ? data.locations.map((loc) => (
                  <li key={loc.id}>
                    <span className="font-medium text-cream">{loc.name}</span>
                    {loc.hours ? ` — ${loc.hours}` : null}
                  </li>
                ))
              : HOURS_LINES.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
