import React from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WCard,
  WBadge,
  SectionTitle,
  AnnotationLabel,
  WDivider,
} from "../../components/ui/primitives";

function Bar({ label, value, max, highlight }: { label: string; value: number; max: number; highlight?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 text-xs text-ink-500">{label}</span>
      <div className="h-3 flex-1 rounded-full bg-ink-100">
        <div
          className={`h-3 rounded-full ${highlight ? "bg-ink-900" : "bg-ink-400"}`}
          style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-right text-xs font-medium text-ink-800">{value}</span>
    </div>
  );
}

export default function ListingInsights() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="sell" role="seller" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mb-1 flex items-center gap-2">
          <WBadge tone="r3">Release 3</WBadge>
        </div>
        <SectionTitle>Listing performance</SectionTitle>
        <p className="mb-6 mt-1 text-xs text-ink-500">
          2021 Honda Civic EX — benchmarked against similar listings near Austin, TX.
        </p>

        <div className="mb-6 grid grid-cols-4 gap-4">
          {[
            ["Views", "214", "+18% vs. similar"],
            ["Saves", "31", "+4% vs. similar"],
            ["Inquiries", "6", "On par"],
            ["Avg. time to reply", "1.8h", "Faster than 72%"],
          ].map(([label, value, note]) => (
            <WCard key={label}>
              <AnnotationLabel>{label}</AnnotationLabel>
              <p className="mt-1 text-2xl font-bold text-ink-900">{value}</p>
              <p className="mt-1 text-[11px] text-emerald-600">{note}</p>
            </WCard>
          ))}
        </div>

        <WCard className="mb-6">
          <SectionTitle className="mb-4 text-sm">Views over last 14 days</SectionTitle>
          <div className="flex flex-col gap-2.5">
            <Bar label="Your listing" value={214} max={260} highlight />
            <Bar label="Similar listings avg." value={181} max={260} />
          </div>
        </WCard>

        <WCard>
          <SectionTitle className="mb-1 text-sm">Suggestion</SectionTitle>
          <WDivider className="my-3" />
          <p className="text-xs leading-relaxed text-ink-600">
            Listings with a vehicle history report attached get 22% more inquiries in your area.
            Yours doesn't have one yet —{" "}
            <span className="font-medium text-ink-900">add a report to boost conversion.</span>
          </p>
        </WCard>
      </div>
    </div>
  );
}
