import React from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WCard,
  WBadge,
  SectionTitle,
  AnnotationLabel,
  WDivider,
} from "../../components/ui/primitives";

const ALERTS = [
  { name: "Honda Civic under $20k", criteria: "Honda Civic · Under $20,000 · Within 50 mi", matches: 3, active: true },
  { name: "SUVs near Round Rock", criteria: "SUV · $20,000–$30,000 · Round Rock, TX", matches: 0, active: true },
  { name: "Low-mileage Subarus", criteria: "Subaru · Under 30,000 mi", matches: 1, active: false },
];

export default function SavedSearchAlerts() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mb-1 flex items-center gap-2">
          <WBadge tone="r2">Release 2</WBadge>
        </div>
        <SectionTitle>Saved search alerts</SectionTitle>
        <p className="mb-6 mt-1 text-xs text-ink-500">
          Get notified the moment a matching car is listed — no need to keep re-searching.
        </p>

        <div className="flex flex-col gap-3">
          {ALERTS.map((alert) => (
            <WCard key={alert.name}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <p className="text-sm font-semibold text-ink-900">{alert.name}</p>
                    {alert.matches > 0 && <WBadge tone="success">{alert.matches} new</WBadge>}
                  </div>
                  <p className="text-xs text-ink-500">{alert.criteria}</p>
                </div>
                <label className="flex items-center gap-2 text-xs text-ink-500">
                  <input type="checkbox" defaultChecked={alert.active} className="h-4 w-4 rounded-sm border-ink-400" />
                  Active
                </label>
              </div>
              <WDivider className="my-3" />
              <div className="flex items-center justify-between">
                <AnnotationLabel>Notify via email + push</AnnotationLabel>
                <WButton size="sm" variant="outline">
                  View matches
                </WButton>
              </div>
            </WCard>
          ))}
        </div>
      </div>
    </div>
  );
}
