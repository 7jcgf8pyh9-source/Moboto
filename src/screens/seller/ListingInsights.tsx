import React from "react";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WCard,
  WBadge,
  SectionTitle,
  AnnotationLabel,
  WDivider,
} from "../../components/ui/primitives";

function Bar({ label, value, max, highlight }: { label: string; value: number; max: number; highlight?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 shrink-0 text-[11px] text-ink-500">{label}</span>
      <div className="h-2.5 flex-1 rounded-full bg-ink-100">
        <div
          className={`h-2.5 rounded-full ${highlight ? "bg-ink-900" : "bg-ink-400"}`}
          style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
        />
      </div>
      <span className="w-8 shrink-0 text-right text-[11px] font-medium text-ink-800">{value}</span>
    </div>
  );
}

export default function ListingInsights() {
  return (
    <PushScreen title="Listing performance">
      <div className="mb-1">
        <WBadge tone="r3">Release 3</WBadge>
      </div>
      <p className="mb-4 mt-2 text-xs text-ink-500">
        2021 Honda Civic EX — benchmarked against similar listings near Austin, TX.
      </p>

      <div className="mb-4 grid grid-cols-2 gap-2.5">
        {[
          ["Views", "214", "+18% vs. similar"],
          ["Saves", "31", "+4% vs. similar"],
          ["Inquiries", "6", "On par"],
          ["Avg. reply", "1.8h", "Faster than 72%"],
        ].map(([label, value, note]) => (
          <WCard key={label} className="p-2.5">
            <AnnotationLabel>{label}</AnnotationLabel>
            <p className="mt-0.5 text-xl font-bold text-ink-900">{value}</p>
            <p className="mt-0.5 text-[10px] text-emerald-600">{note}</p>
          </WCard>
        ))}
      </div>

      <WCard className="mb-4">
        <SectionTitle className="mb-3 text-sm">Views — last 14 days</SectionTitle>
        <div className="flex flex-col gap-2.5">
          <Bar label="Yours" value={214} max={260} highlight />
          <Bar label="Similar avg." value={181} max={260} />
        </div>
      </WCard>

      <WCard>
        <SectionTitle className="mb-1 text-sm">Suggestion</SectionTitle>
        <WDivider className="my-2.5" />
        <p className="text-xs leading-relaxed text-ink-600">
          Listings with a vehicle history report get 22% more inquiries in your area. Yours
          doesn't have one yet —{" "}
          <span className="font-medium text-ink-900">add a report to boost conversion.</span>
        </p>
      </WCard>
    </PushScreen>
  );
}
