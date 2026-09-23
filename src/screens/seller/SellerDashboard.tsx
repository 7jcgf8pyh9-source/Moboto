import React from "react";
import { Link } from "react-router-dom";
import { TabScreen } from "../../components/app-chrome/ScreenShell";
import {
  WButton,
  WLinkButton,
  WCard,
  WImagePlaceholder,
  WBadge,
  AnnotationLabel,
} from "../../components/ui/primitives";

const LISTINGS = [
  { title: "2021 Honda Civic EX", price: "$19,400", status: "Live", views: 214, inquiries: 6 },
  { title: "2017 Ford F-150 XLT", price: "$24,900", status: "Live", views: 89, inquiries: 1 },
  { title: "2015 Nissan Altima S", price: "$9,800", status: "Draft", views: 0, inquiries: 0 },
];

export default function SellerDashboard() {
  return (
    <TabScreen title="Your listings" active="sell">
      <div className="mb-4 grid grid-cols-3 gap-2">
        <WCard className="p-2.5">
          <AnnotationLabel>Views</AnnotationLabel>
          <p className="mt-1 text-lg font-bold text-ink-900">303</p>
        </WCard>
        <WCard className="p-2.5">
          <AnnotationLabel>Inquiries</AnnotationLabel>
          <p className="mt-1 text-lg font-bold text-ink-900">7</p>
        </WCard>
        <WCard className="p-2.5">
          <AnnotationLabel>Reply time</AnnotationLabel>
          <p className="mt-1 text-lg font-bold text-ink-900">~2h</p>
        </WCard>
      </div>

      <WLinkButton to="/seller/new/details" full className="mb-4">
        + List a car
      </WLinkButton>

      <div className="flex flex-col gap-3">
        {LISTINGS.map((l) => (
          <WCard key={l.title}>
            <div className="flex gap-3">
              <WImagePlaceholder label="CAR" ratio="4/3" className="w-20 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 flex items-center gap-1.5">
                  <p className="truncate text-[13px] font-semibold text-ink-900">{l.title}</p>
                  <WBadge tone={l.status === "Live" ? "success" : "outline"}>{l.status}</WBadge>
                </div>
                <p className="text-sm font-bold text-ink-900">{l.price}</p>
                <p className="mt-1 text-[11px] text-ink-500">
                  {l.views} views · {l.inquiries} {l.inquiries === 1 ? "inquiry" : "inquiries"}
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <WButton size="sm" variant="outline" className="flex-1">
                Edit
              </WButton>
              <Link
                to="/seller/insights"
                className="flex flex-1 items-center justify-center rounded-sm border border-ink-300 text-[11px] font-medium text-ink-600"
              >
                Insights (R3)
              </Link>
            </div>
          </WCard>
        ))}
      </div>

      <Link
        to="/seller/offers"
        className="mt-4 flex items-center justify-between rounded-sm border border-dashed border-ink-300 bg-ink-50 p-3 text-xs"
      >
        <span className="font-medium text-ink-700">Manage offers & inquiries</span>
        <WBadge tone="r2">R2</WBadge>
      </Link>
    </TabScreen>
  );
}
