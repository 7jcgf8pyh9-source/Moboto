import React from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WCard,
  WImagePlaceholder,
  WBadge,
  SectionTitle,
  AnnotationLabel,
  WButton,
} from "../../components/ui/primitives";

const STAGES = ["Sent", "Responded", "Scheduled", "Closed"] as const;

const INQUIRIES = [
  { title: "2021 Honda Civic EX", price: "$19,400", stage: 1, updated: "2 hours ago" },
  { title: "2020 Honda Accord Sport", price: "$21,100", stage: 0, updated: "1 day ago" },
  { title: "2022 Mazda CX-5", price: "$26,750", stage: 2, updated: "3 days ago" },
];

export default function BuyerDashboard() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" role="buyer" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <SectionTitle>Your inquiries</SectionTitle>
        <p className="mb-6 mt-1 text-xs text-ink-500">
          Track every conversation you've started, in one place.
        </p>

        <div className="flex flex-col gap-3">
          {INQUIRIES.map((inq) => (
            <WCard key={inq.title} className="flex items-center gap-4">
              <WImagePlaceholder label="CAR" ratio="4/3" className="w-28 shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink-900">{inq.title}</p>
                <p className="mb-2 text-sm font-bold text-ink-900">{inq.price}</p>
                <div className="flex items-center gap-1.5">
                  {STAGES.map((stage, i) => (
                    <React.Fragment key={stage}>
                      <span
                        className={
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold " +
                          (i <= inq.stage ? "bg-ink-900 text-white" : "bg-ink-100 text-ink-400")
                        }
                      >
                        {stage}
                      </span>
                      {i < STAGES.length - 1 && <span className="h-px w-4 bg-ink-200" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <AnnotationLabel>Updated</AnnotationLabel>
                <p className="mb-2 text-xs text-ink-500">{inq.updated}</p>
                <div className="flex items-center gap-2">
                  <WBadge tone="r2">Messages · R2</WBadge>
                  <WButton size="sm" variant="outline">
                    View listing
                  </WButton>
                </div>
              </div>
            </WCard>
          ))}
        </div>
      </div>
    </div>
  );
}
