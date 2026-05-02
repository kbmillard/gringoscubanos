/** Inboxes that receive catering / truck booking requests (mailto To: line, comma-separated). */
export const CATERING_REQUEST_EMAILS = [
  "gringos.cubanos@gmail.com",
  "kylemillard@recyclicbravery.com",
] as const;

/** SMS lines to notify with the same request text (E.164 + display label). */
export const CATERING_REQUEST_SMS_RECIPIENTS = [
  { e164: "+14073106172", label: "407-310-6172" },
  { e164: "+19134883951", label: "913-488-3951" },
] as const;
