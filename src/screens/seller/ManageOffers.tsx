import React from "react";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WButton,
  WCard,
  WImagePlaceholder,
  WAvatar,
  WBadge,
  AnnotationLabel,
} from "../../components/ui/primitives";

const OFFERS = [
  { car: "2021 Honda Civic EX", buyer: "Jordan C.", asking: 19400, offer: 18500, type: "Offer", time: "12m ago" },
  { car: "2017 Ford F-150 XLT", buyer: "Priya R.", asking: 24900, offer: null, type: "Inquiry", time: "1h ago" },
  { car: "2021 Honda Civic EX", buyer: "Sam T.", asking: 19400, offer: 17000, type: "Offer", time: "3h ago" },
];

export default function ManageOffers() {
  return (
    <PushScreen title="Offers & inquiries">
      <div className="mb-1">
        <WBadge tone="r2">Release 2</WBadge>
      </div>
      <p className="mb-4 mt-2 text-xs text-ink-500">
        Every conversation across your listings, sorted by what needs a response.
      </p>

      <div className="flex flex-col gap-3">
        {OFFERS.map((o, i) => {
          const pct = o.offer ? Math.round((o.offer / o.asking) * 100) : null;
          return (
            <WCard key={i}>
              <div className="flex gap-3">
                <WImagePlaceholder label="CAR" ratio="4/3" className="w-16 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <WAvatar initials={o.buyer.split(" ").map((n) => n[0]).join("")} size={22} />
                    <p className="text-[13px] font-semibold text-ink-900">{o.buyer}</p>
                    <WBadge tone={o.type === "Offer" ? "warning" : "outline"}>{o.type}</WBadge>
                  </div>
                  <p className="truncate text-[11px] text-ink-500">{o.car}</p>
                  {o.offer && (
                    <p className="mt-1 text-sm font-bold text-ink-900">
                      ${o.offer.toLocaleString()}{" "}
                      <span className="text-[11px] font-normal text-ink-400">({pct}% of asking)</span>
                    </p>
                  )}
                </div>
                <AnnotationLabel className="shrink-0">{o.time}</AnnotationLabel>
              </div>
              <div className="mt-3 flex gap-2">
                {o.type === "Offer" ? (
                  <>
                    <WButton size="sm" variant="outline" className="flex-1">
                      Counter
                    </WButton>
                    <WButton size="sm" className="flex-1">
                      Accept
                    </WButton>
                  </>
                ) : (
                  <WButton size="sm" full>
                    Reply
                  </WButton>
                )}
              </div>
            </WCard>
          );
        })}
      </div>
    </PushScreen>
  );
}
