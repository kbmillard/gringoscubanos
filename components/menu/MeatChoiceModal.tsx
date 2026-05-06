"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useScrollLock } from "@/lib/utils/use-scroll-lock";
import { meatChoices } from "@/lib/menu/schema";
import type { MenuItem } from "@/lib/menu/schema";

type Props = {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (meat: string) => void;
};

export function MeatChoiceModal({ item, open, onOpenChange, onConfirm }: Props) {
  const titleId = useId();
  const [mounted, setMounted] = useState(false);
  const dialogOpen = Boolean(open && item);

  useEffect(() => {
    setMounted(true);
  }, []);

  useScrollLock(dialogOpen);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange, open]);

  if (!mounted || !dialogOpen || !item) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[85] flex min-h-0 items-center justify-center overflow-x-hidden overflow-y-auto p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close meat choice"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-[86] my-auto flex w-full max-w-md min-h-0 max-h-[min(85dvh,720px)] flex-col rounded-2xl border border-white/10 bg-charcoal p-6 shadow-2xl sm:max-h-[85vh]">
        <div className="mb-4 shrink-0 flex items-start justify-between gap-3">
          <div>
            <p id={titleId} className="font-display text-2xl text-cream">
              Choose an option
            </p>
            <p className="mt-1 text-sm text-cream/70">{item.name}</p>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-cream hover:bg-white/5"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-y-contain pr-1">
          {meatChoices.map((m) => (
            <li key={m}>
              <button
                type="button"
                className="w-full rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-cream hover:border-cream/40 hover:bg-white/5"
                onClick={() => {
                  onConfirm(m);
                  onOpenChange(false);
                }}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
