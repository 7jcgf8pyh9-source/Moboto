import React from "react";
import { Link } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WCard,
  WImagePlaceholder,
  WCheckbox,
  WBadge,
  AnnotationLabel,
  SectionTitle,
  WDivider,
  IconPlaceholder,
} from "../../components/ui/primitives";

const RESULTS = [
  { title: "2021 Honda Civic EX", price: "$19,400", miles: "28,300 mi", loc: "Austin, TX · 4 mi", verified: true },
  { title: "2020 Honda Accord Sport", price: "$21,100", miles: "33,000 mi", loc: "Austin, TX · 6 mi", verified: true },
  { title: "2019 Toyota RAV4 XLE", price: "$22,900", miles: "41,120 mi", loc: "San Marcos, TX · 18 mi", verified: true },
  { title: "2022 Mazda CX-5", price: "$26,750", miles: "15,900 mi", loc: "Round Rock, TX · 12 mi", verified: false },
  { title: "2018 Subaru Outback", price: "$17,200", miles: "63,400 mi", loc: "Austin, TX · 3 mi", verified: true },
  { title: "2020 Ford Escape SE", price: "$18,300", miles: "39,800 mi", loc: "Pflugerville, TX · 15 mi", verified: false },
];

export default function SearchResults() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 shrink-0 overflow-y-auto border-r border-ink-200 bg-white px-5 py-6">
          <div className="mb-5 flex items-center justify-between">
            <SectionTitle className="text-sm">Filters</SectionTitle>
            <button className="text-xs font-medium text-ink-400 hover:text-ink-700">Reset</button>
          </div>

          <div className="mb-5">
            <AnnotationLabel className="mb-2 block">Price range</AnnotationLabel>
            <div className="flex items-center gap-2">
              <input className="w-full rounded-sm border border-ink-300 px-2 py-1.5 text-xs" placeholder="Min" />
              <span className="text-ink-300">–</span>
              <input className="w-full rounded-sm border border-ink-300 px-2 py-1.5 text-xs" placeholder="Max" />
            </div>
          </div>

          <div className="mb-5">
            <AnnotationLabel className="mb-2 block">Body type</AnnotationLabel>
            <div className="flex flex-col gap-2">
              <WCheckbox label="Sedan" />
              <WCheckbox label="SUV" />
              <WCheckbox label="Truck" />
              <WCheckbox label="Hatchback" />
            </div>
          </div>

          <div className="mb-5">
            <AnnotationLabel className="mb-2 block">Mileage</AnnotationLabel>
            <div className="flex flex-col gap-2">
              <WCheckbox label="Under 20,000 mi" />
              <WCheckbox label="20,000–50,000 mi" />
              <WCheckbox label="50,000+ mi" />
            </div>
          </div>

          <div className="mb-5">
            <AnnotationLabel className="mb-2 block">Distance</AnnotationLabel>
            <div className="flex flex-col gap-2">
              <WCheckbox label="Within 25 mi" />
              <WCheckbox label="Within 50 mi" />
              <WCheckbox label="Within 100 mi" />
            </div>
          </div>

          <div>
            <AnnotationLabel className="mb-2 block">Trust</AnnotationLabel>
            <WCheckbox label="Verified sellers only" />
          </div>
        </aside>

        <div className="flex-1 overflow-y-auto bg-ink-50 px-8 py-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h1 className="text-base font-bold text-ink-900">128 cars near Austin, TX</h1>
              <p className="text-xs text-ink-500">Sorted by relevance</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-sm border border-ink-300 px-3 py-1.5 text-xs font-medium text-ink-600 hover:border-ink-500">
                <IconPlaceholder size={12} /> Save this search
              </button>
              <WBadge tone="r2">R2</WBadge>
            </div>
          </div>

          <WDivider className="mb-5" />

          <div className="flex flex-col gap-3">
            {RESULTS.map((r) => (
              <Link key={r.title} to="/buyer/listing/demo">
                <WCard className="flex gap-4 transition-shadow hover:shadow-md">
                  <WImagePlaceholder label="CAR PHOTO" ratio="4/3" className="w-48 shrink-0" />
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-1 flex items-center gap-2">
                      <p className="text-sm font-semibold text-ink-900">{r.title}</p>
                      {r.verified && <WBadge tone="success">Verified</WBadge>}
                    </div>
                    <p className="mb-1 text-lg font-bold text-ink-900">{r.price}</p>
                    <p className="text-xs text-ink-500">
                      {r.miles} · {r.loc}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <WButton variant="outline" size="sm">
                      View details
                    </WButton>
                  </div>
                </WCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
