import React from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WCard,
  WImagePlaceholder,
  WAvatar,
  WBadge,
  SectionTitle,
  AnnotationLabel,
} from "../../components/ui/primitives";

const OFFERS = [
  { car: "2021 Honda Civic EX", buyer: "Jordan C.", asking: 19400, offer: 18500, type: "Offer", time: "12 min ago" },
  { car: "2017 Ford F-150 XLT", buyer: "Priya R.", asking: 24900, offer: null, type: "Inquiry", time: "1 hour ago" },
  { car: "2021 Honda Civic EX", buyer: "Sam T.", asking: 19400, offer: 17000, type: "Offer", time: "3 hours ago" },
  { car: "2017 Ford F-150 XLT", buyer: "Alex D.", asking: 24900, offer: null, type: "Inquiry", time: "1 day ago" },
];

export default function ManageOffers() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="sell" role="seller" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mb-1 flex items-center gap-2">
          <WBadge tone="r2">Release 2</WBadge>
        </div>
        <SectionTitle>Offers & inquiries</SectionTitle>
        <p className="mb-6 mt-1 text-xs text-ink-500">
          Every conversation across your listings, sorted by what needs a response.
        </p>

        <div className="flex flex-col gap-3">
          {OFFERS.map((o, i) => {
            const pct = o.offer ? Math.round((o.offer / o.asking) * 100) : null;
            return (
              <WCard key={i} className="flex items-center gap-4">
                <WImagePlaceholder label="CAR" ratio="4/3" className="w-20 shrink-0" />
                <WAvatar initials={o.buyer.split(" ").map((n) => n[0]).join("")} />
                <div className="flex-1">
                  <div className="mb-0.5 flex items-center gap-2">
                    <p className="text-sm font-semibold text-ink-900">{o.buyer}</p>
                    <WBadge tone={o.type === "Offer" ? "warning" : "outline"}>{o.type}</WBadge>
                  </div>
                  <p className="text-xs text-ink-500">{o.car}</p>
                </div>
                {o.offer && (
                  <div className="text-right">
                    <AnnotationLabel>Offer</AnnotationLabel>
                    <p className="text-base font-bold text-ink-900">
                      ${o.offer.toLocaleString()}{" "}
                      <span className="text-xs font-normal text-ink-400">({pct}% of asking)</span>
                    </p>
                  </div>
                )}
                <p className="w-20 shrink-0 text-right text-[11px] text-ink-400">{o.time}</p>
                <div className="flex shrink-0 gap-1.5">
                  {o.type === "Offer" ? (
                    <>
                      <WButton size="sm" variant="outline">
                        Counter
                      </WButton>
                      <WButton size="sm">Accept</WButton>
                    </>
                  ) : (
                    <WButton size="sm">Reply</WButton>
                  )}
                </div>
              </WCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
