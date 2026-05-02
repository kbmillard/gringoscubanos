import { CONTACT } from "@/lib/data/locations";

export type CateringFormFields = {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  location: string;
  message: string;
};

const SMS_BODY_MAX = 1200;

export function formatCateringInquiry(form: CateringFormFields): string {
  const lines = [
    "Gringos Cubanos — catering / truck booking",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : "Email: (not provided)",
    `Event date: ${form.eventDate || "—"}`,
    `Event type: ${form.eventType || "—"}`,
    `Guest count: ${form.guestCount || "—"}`,
    `Location: ${form.location || "—"}`,
    "",
    "Details:",
    form.message.trim() || "—",
  ];
  return lines.join("\n");
}

function cateringInboundEmail(): string | undefined {
  if (typeof process === "undefined" || !process.env.NEXT_PUBLIC_CATERING_EMAIL) return undefined;
  const v = process.env.NEXT_PUBLIC_CATERING_EMAIL.trim();
  return v || undefined;
}

export type CateringDeliveryMode = "mailto" | "sms";

export type CateringInquiryOpenResult = { mode: CateringDeliveryMode; body: string };

/**
 * Opens the visitor's mail or SMS app with a pre-filled request (must run from a user gesture).
 * Returns the full message text (for confirmation UI) and which channel was used.
 */
export function openCateringInquiry(form: CateringFormFields): CateringInquiryOpenResult {
  const body = formatCateringInquiry(form);
  const email = cateringInboundEmail();

  if (email) {
    const subject = encodeURIComponent("Gringos Cubanos — catering request");
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    return { mode: "mailto", body };
  }

  const smsBody =
    body.length > SMS_BODY_MAX ? `${body.slice(0, SMS_BODY_MAX - 30)}\n…(message truncated)` : body;
  window.location.href = `sms:${CONTACT.phoneTel}?body=${encodeURIComponent(smsBody)}`;
  return { mode: "sms", body };
}
