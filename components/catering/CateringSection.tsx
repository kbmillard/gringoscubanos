"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/data/locations";
import { scrollDocumentToAnchor } from "@/lib/utils/scroll-to-anchor";

const initial = {
  name: "",
  phone: "",
  email: "",
  eventDate: "",
  eventType: "",
  guestCount: "",
  location: "",
  message: "",
};

export function CateringSection() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="catering"
      className="relative z-10 scroll-mt-[calc(var(--nav-h)+16px)] bg-charcoal/45 py-24 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div id="catering-start" tabIndex={-1} className="outline-none focus:outline-none">
          <SectionHeading
            kicker="Catering & private events"
            title="Bring the truck — bring the party."
            subtitle="Birthdays, corporate lunches, festivals, and private parties — Gringos Cubanos rolls up with a bright truck, pressed Cuban sandwiches, bold sides, and a crew that keeps the line moving."
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4 text-sm leading-relaxed text-cream/80"
          >
            <p>
              When you book the truck, you are booking Florida-rooted Cuban flavor on wheels — big
              sandwiches, hand-cut sides, and hospitality that matches the KC neighborhoods we serve.
            </p>
            <p>
              Tell us your crowd size, date, and location. We will confirm menu pacing, service
              window, and any add-ons so your guests get hot food and cold drinks.
            </p>
            <p className="pt-2 text-sm text-cream/85">
              <a className="text-cream underline-offset-4 hover:underline" href={`tel:${CONTACT.phoneTel}`}>
                Call or text {CONTACT.phoneDisplay}
              </a>
              {CONTACT.email ? (
                <>
                  {" "}
                  ·{" "}
                  <a
                    className="text-cream underline-offset-4 hover:underline"
                    href={`mailto:${CONTACT.email}?subject=Catering%20inquiry`}
                  >
                    {CONTACT.email}
                  </a>
                </>
              ) : null}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <button
                type="button"
                className="rounded-full bg-salsa px-5 py-2 text-[10px] font-semibold uppercase tracking-editorial text-cream"
                onClick={() => scrollDocumentToAnchor("catering-form")}
              >
                Book the truck
              </button>
              <button
                type="button"
                className="rounded-full border border-white/15 px-5 py-2 text-[10px] uppercase tracking-editorial text-cream hover:bg-white/5"
                onClick={() => scrollDocumentToAnchor("catering-form")}
              >
                Start your booking
              </button>
            </div>
          </motion.div>

          <form
            id="catering-form"
            onSubmit={onSubmit}
            className="space-y-4 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-8"
          >
            {sent ? (
              <p className="rounded-2xl border border-agave/40 bg-agave/10 p-4 text-sm text-cream">
                Thanks — we received your message. For a firm booking, call or text{" "}
                <a className="font-medium underline" href={`tel:${CONTACT.phoneTel}`}>
                  {CONTACT.phoneDisplay}
                </a>
                .
              </p>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                required
              />
              <Field
                label="Phone"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                required
              />
              <Field
                label="Email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                className="sm:col-span-2"
              />
              <Field
                label="Event date"
                value={form.eventDate}
                onChange={(v) => setForm((f) => ({ ...f, eventDate: v }))}
              />
              <Field
                label="Event type"
                value={form.eventType}
                onChange={(v) => setForm((f) => ({ ...f, eventType: v }))}
                placeholder="Corporate, birthday, festival…"
              />
              <Field
                label="Guest count"
                value={form.guestCount}
                onChange={(v) => setForm((f) => ({ ...f, guestCount: v }))}
              />
              <Field
                label="Event location"
                value={form.location}
                onChange={(v) => setForm((f) => ({ ...f, location: v }))}
                className="sm:col-span-2"
              />
            </div>
            <label className="block text-xs text-cream/60">
              Message / details
              <textarea
                className="mt-1 min-h-[120px] w-full rounded-xl border border-white/10 bg-charcoal px-3 py-2 text-sm text-cream"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />
            </label>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="rounded-full bg-salsa px-6 py-3 text-xs font-semibold uppercase tracking-editorial text-cream"
              >
                Ask about catering
              </button>
              <button
                type="button"
                className="rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-editorial text-cream hover:bg-white/5"
                onClick={() => setForm(initial)}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  className,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className={`block text-xs text-cream/60 ${className ?? ""}`}>
      {label}
      <input
        required={required}
        className="mt-1 w-full rounded-xl border border-white/10 bg-charcoal px-3 py-2 text-sm text-cream"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
