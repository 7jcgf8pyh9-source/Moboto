import React from "react";
import {
  WCard,
  WBadge,
  WButton,
  WImagePlaceholder,
  SectionTitle,
  AnnotationLabel,
} from "../../components/ui/primitives";

const QUEUE = [
  { car: "2019 BMW 3 Series", reason: "Reported: suspected duplicate VIN", severity: "High" },
  { car: "2016 Chevrolet Malibu", reason: "Reported: photos don't match description", severity: "High" },
  { car: "New seller: Devon K.", reason: "Identity verification submitted", severity: "Routine" },
  { car: "2020 Kia Soul", reason: "Reported: price seems too low for market", severity: "Medium" },
];

export default function AdminModeration() {
  return (
    <div className="flex h-full flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-ink-200 bg-ink-900 px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-white text-xs font-bold text-ink-900">
            M
          </span>
          <span className="text-sm font-bold text-white">Moboto Admin</span>
        </div>
        <WBadge tone="r3">Release 3 · Internal tool</WBadge>
      </header>
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <SectionTitle>Trust & safety queue</SectionTitle>
        <p className="mb-6 mt-1 text-xs text-ink-500">
          Prioritized by severity — safety-critical flags never wait behind routine verification.
        </p>

        <div className="flex flex-col gap-3">
          {QUEUE.map((item, i) => (
            <WCard key={i} className="flex items-center gap-4">
              <WImagePlaceholder label="EVIDENCE" ratio="4/3" className="w-20 shrink-0" />
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <p className="text-sm font-semibold text-ink-900">{item.car}</p>
                  <WBadge
                    tone={item.severity === "High" ? "warning" : item.severity === "Medium" ? "outline" : "success"}
                  >
                    {item.severity}
                  </WBadge>
                </div>
                <p className="text-xs text-ink-500">{item.reason}</p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <WButton size="sm" variant="outline">
                  Dismiss
                </WButton>
                <WButton size="sm">Review</WButton>
              </div>
            </WCard>
          ))}
        </div>

        <div className="mt-6">
          <AnnotationLabel>Note</AnnotationLabel>
          <p className="mt-1 text-[11px] text-ink-400">
            This screen is the operational backbone behind buyer-facing trust badges — not a
            buyer/seller-facing surface.
          </p>
        </div>
      </div>
    </div>
  );
}
