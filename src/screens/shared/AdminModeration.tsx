import React from "react";
import {
  WCard,
  WBadge,
  WButton,
  WImagePlaceholder,
  AnnotationLabel,
} from "../../components/ui/primitives";

const QUEUE = [
  { car: "2019 BMW 3 Series", reason: "Suspected duplicate VIN", severity: "High" },
  { car: "2016 Chevrolet Malibu", reason: "Photos don't match description", severity: "High" },
  { car: "New seller: Devon K.", reason: "Identity verification submitted", severity: "Routine" },
  { car: "2020 Kia Soul", reason: "Price seems too low for market", severity: "Medium" },
];

export default function AdminModeration() {
  return (
    <div className="flex h-full flex-col bg-white">
      <header className="flex h-14 shrink-0 items-center justify-between bg-ink-900 px-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[11px] font-bold text-ink-900">
            M
          </span>
          <span className="text-sm font-bold text-white">Moboto Admin</span>
        </div>
        <WBadge tone="r3">R3</WBadge>
      </header>
      <div className="flex-1 overflow-y-auto scrollbar-thin bg-ink-50 px-4 py-4">
        <p className="mb-4 text-xs text-ink-500">
          Trust & safety queue, prioritized by severity — a companion tool for on-the-go
          moderation, separate from the buyer/seller app.
        </p>

        <div className="flex flex-col gap-3">
          {QUEUE.map((item, i) => (
            <WCard key={i}>
              <div className="flex gap-3">
                <WImagePlaceholder label="EVIDENCE" ratio="4/3" className="w-16 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-1.5">
                    <p className="truncate text-[13px] font-semibold text-ink-900">{item.car}</p>
                  </div>
                  <WBadge
                    tone={item.severity === "High" ? "warning" : item.severity === "Medium" ? "outline" : "success"}
                  >
                    {item.severity}
                  </WBadge>
                  <p className="mt-1 text-[11px] text-ink-500">{item.reason}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <WButton size="sm" variant="outline" className="flex-1">
                  Dismiss
                </WButton>
                <WButton size="sm" className="flex-1">
                  Review
                </WButton>
              </div>
            </WCard>
          ))}
        </div>

        <AnnotationLabel className="mb-1 mt-5 block">Note</AnnotationLabel>
        <p className="text-[11px] leading-relaxed text-ink-400">
          This is the operational backbone behind buyer-facing trust badges — internal-only.
        </p>
      </div>
    </div>
  );
}
