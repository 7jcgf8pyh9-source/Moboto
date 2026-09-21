import React from "react";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WButton,
  WCard,
  WBadge,
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
    <PushScreen title="Saved search alerts">
      <div className="mb-1">
        <WBadge tone="r2">Release 2</WBadge>
      </div>
      <p className="mb-4 mt-2 text-xs text-ink-500">
        Get notified the moment a matching car is listed — no need to keep re-searching.
      </p>

      <div className="flex flex-col gap-3">
        {ALERTS.map((alert) => (
          <WCard key={alert.name}>
            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <div className="mb-1 flex items-center gap-1.5">
                  <p className="text-[13px] font-semibold text-ink-900">{alert.name}</p>
                  {alert.matches > 0 && <WBadge tone="success">{alert.matches} new</WBadge>}
                </div>
                <p className="text-[11px] text-ink-500">{alert.criteria}</p>
              </div>
              <label className="flex shrink-0 items-center gap-1.5 text-[11px] text-ink-500">
                <input type="checkbox" defaultChecked={alert.active} className="h-3.5 w-3.5 rounded-sm border-ink-400" />
                Active
              </label>
            </div>
            <WDivider className="my-2.5" />
            <div className="flex items-center justify-between">
              <AnnotationLabel>Email + push</AnnotationLabel>
              <WButton size="sm" variant="outline">
                View matches
              </WButton>
            </div>
          </WCard>
        ))}
      </div>
    </PushScreen>
  );
}
