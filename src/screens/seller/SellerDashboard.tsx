import React from "react";
import { Link } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WLinkButton,
  WCard,
  WImagePlaceholder,
  WBadge,
  SectionTitle,
  AnnotationLabel,
  WDivider,
} from "../../components/ui/primitives";

const LISTINGS = [
  { title: "2021 Honda Civic EX", price: "$19,400", status: "Live", views: 214, inquiries: 6 },
  { title: "2017 Ford F-150 XLT", price: "$24,900", status: "Live", views: 89, inquiries: 1 },
  { title: "2015 Nissan Altima S", price: "$9,800", status: "Draft", views: 0, inquiries: 0 },
];

export default function SellerDashboard() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="sell" role="seller" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <SectionTitle>Your listings</SectionTitle>
            <p className="mt-1 text-xs text-ink-500">3 listings · 7 open inquiries</p>
          </div>
          <WLinkButton to="/seller/new/details">+ List a car</WLinkButton>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-4">
          <WCard>
            <AnnotationLabel>Total views</AnnotationLabel>
            <p className="mt-1 text-2xl font-bold text-ink-900">303</p>
          </WCard>
          <WCard>
            <AnnotationLabel>Open inquiries</AnnotationLabel>
            <p className="mt-1 text-2xl font-bold text-ink-900">7</p>
            <WBadge tone="r2" className="mt-1">Manage · R2</WBadge>
          </WCard>
          <WCard>
            <AnnotationLabel>Avg. response time</AnnotationLabel>
            <p className="mt-1 text-2xl font-bold text-ink-900">~2h</p>
          </WCard>
        </div>

        <div className="flex flex-col gap-3">
          {LISTINGS.map((l) => (
            <WCard key={l.title} className="flex items-center gap-4">
              <WImagePlaceholder label="CAR" ratio="4/3" className="w-28 shrink-0" />
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <p className="text-sm font-semibold text-ink-900">{l.title}</p>
                  <WBadge tone={l.status === "Live" ? "success" : "outline"}>{l.status}</WBadge>
                </div>
                <p className="text-sm font-bold text-ink-900">{l.price}</p>
              </div>
              <div className="flex items-center gap-6 text-center text-xs text-ink-500">
                <div>
                  <p className="text-base font-bold text-ink-900">{l.views}</p>
                  views
                </div>
                <span className="h-8 w-px bg-ink-200" />
                <div>
                  <p className="text-base font-bold text-ink-900">{l.inquiries}</p>
                  inquiries
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <WButton size="sm" variant="outline">
                  Edit
                </WButton>
                <Link to="/seller/insights" className="text-center text-[11px] text-ink-400 hover:text-ink-700">
                  Insights (R3)
                </Link>
              </div>
            </WCard>
          ))}
        </div>
      </div>
    </div>
  );
}
