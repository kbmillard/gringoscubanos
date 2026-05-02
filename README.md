# Gringos Cubanos — food truck website

One-page **Next.js (App Router)** site: editorial nav, hero slideshow, current truck location and maps, interactive menu with cart drawer, **upcoming schedule** board, gallery, social promo, catering form, and order requests.

## Brand assets (allowed images)

- **Logo / icons:** `gringos_cubanos_logo_web_assets/` (copied into `public/images/brand/` and `public/icons/` for the live site).
- **Photos:** only `gallery/` — synced to `public/gallery/` for Next.js. Do not add stock or scraped images.

## Updating content (Google Sheets)

Publish each sheet as CSV and set env vars to the public CSV URL.

### Menu

- Columns: see `prompt/google-sheet-menu-template.csv`.
- Set `MENU_CSV_URL` or `NEXT_PUBLIC_MENU_CSV_URL`.

### Current truck location + today’s note

- Columns: see `prompt/google-sheet-locations-template.csv`.
- Includes **`messageBoard`** — short announcement (“Today’s truck note”) with the active food-truck row.
- Set `LOCATIONS_CSV_URL` or `NEXT_PUBLIC_LOCATIONS_CSV_URL`.

### Upcoming schedule

- Columns: see `prompt/google-sheet-schedule-template.csv`.
- Set `SCHEDULE_CSV_URL` or `NEXT_PUBLIC_SCHEDULE_CSV_URL`.

## Maps

- **`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`:** browser key (HTTP referrer restrictions). Used for greedy JS maps when `lat`/`lng` exist, client geocode when needed, and embed fallbacks (same behavior as the upstream foodtruck template).
- Optional **`GOOGLE_MAPS_SERVER_KEY`** (or `GOOGLE_MAPS_API_KEY`) for server geocoding if you restrict a separate key by IP.

## Social links (canonical)

Defined in `lib/data/social.ts` as `SOCIAL_LINKS` and used in footer, social section, and JSON-LD:

- Instagram: https://www.instagram.com/gringos.cubanos/
- Facebook: https://www.facebook.com/p/Gringos-Cubanos-61575376317567/
- TikTok: https://www.tiktok.com/@gingoscubanoskcmo

## Orders / Clover

- Default flow is **order request** (no payment) when prices are missing or Clover is unset.
- Clover sandbox env vars are optional for local testing and staging.

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run lint
```

## Owner checklist

See `prompt/owner-info-needed.md`.

## GitHub

Target remote: `https://github.com/kbmillard/gringoscubanos.git` — verify `git remote -v` before pushing.
