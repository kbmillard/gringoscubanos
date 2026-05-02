/**
 * Default map pin when the sheet has no lat/lng yet (or embed fallback).
 * 39°05'23.62"N 94°34'50.06"W
 */
export const DEFAULT_MAP_PIN_LAT = 39 + 5 / 60 + 23.62 / 3600;
export const DEFAULT_MAP_PIN_LNG = -(94 + 34 / 60 + 50.06 / 3600);

/** `lat,lng` for Google `center=` / `ll=` query params */
export const DEFAULT_MAP_CENTER_COMMA = `${DEFAULT_MAP_PIN_LAT},${DEFAULT_MAP_PIN_LNG}`;
