import React from "react";
import { TabScreen } from "../../components/app-chrome/ScreenShell";
import {
  WCard,
  WImagePlaceholder,
  WBadge,
  AnnotationLabel,
} from "../../components/ui/primitives";

const STAGES = ["Sent", "Responded", "Scheduled", "Closed"] as const;

const INQUIRIES = [
  { title: "2021 Honda Civic EX", price: "$19,400", stage: 1, updated: "2h ago" },
  { title: "2020 Honda Accord Sport", price: "$21,100", stage: 0, updated: "1d ago" },
  { title: "2022 Mazda CX-5", price: "$26,750", stage: 2, updated: "3d ago" },
];

export default function BuyerDashboard() {
  return (
    <TabScreen title="Your inquiries" active="inbox">
      <div className="mb-3 flex items-center gap-2">
        <WBadge tone="outline">Pre-messaging (MVP)</WBadge>
      </div>
      <p className="mb-4 text-xs text-ink-500">
        Full in-app messaging ships in Release 2 — for now, track inquiry status here.
      </p>

      <div className="flex flex-col gap-3">
        {INQUIRIES.map((inq) => (
          <WCard key={inq.title}>
            <div className="flex gap-3">
              <WImagePlaceholder label="CAR" ratio="4/3" className="w-20 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-ink-900">{inq.title}</p>
                <p className="text-sm font-bold text-ink-900">{inq.price}</p>
                <AnnotationLabel className="mt-1 block">Updated {inq.updated}</AnnotationLabel>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1">
              {STAGES.map((stage, i) => (
                <React.Fragment key={stage}>
                  <span
                    className={
                      "rounded-full px-2 py-0.5 text-[9px] font-semibold " +
                      (i <= inq.stage ? "bg-ink-900 text-white" : "bg-ink-100 text-ink-400")
                    }
                  >
                    {stage}
                  </span>
                  {i < STAGES.length - 1 && <span className="h-px w-2.5 bg-ink-200" />}
                </React.Fragment>
              ))}
            </div>
          </WCard>
        ))}
      </div>
    </TabScreen>
  );
}
