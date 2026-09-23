import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileHeader } from "../../components/app-chrome/MobileHeader";
import { BottomSheet } from "../../components/ui/BottomSheet";
import {
  WButton,
  WCard,
  WImagePlaceholder,
  WCheckbox,
  WChip,
  WBadge,
  AnnotationLabel,
} from "../../components/ui/primitives";

const RESULTS = [
  { title: "2021 Honda Civic EX", price: "$19,400", miles: "28,300 mi", loc: "Austin, TX · 4 mi", verified: true },
  { title: "2020 Honda Accord Sport", price: "$21,100", miles: "33,000 mi", loc: "Austin, TX · 6 mi", verified: true },
  { title: "2019 Toyota RAV4 XLE", price: "$22,900", miles: "41,120 mi", loc: "San Marcos, TX · 18 mi", verified: true },
  { title: "2022 Mazda CX-5", price: "$26,750", miles: "15,900 mi", loc: "Round Rock, TX · 12 mi", verified: false },
  { title: "2018 Subaru Outback", price: "$17,200", miles: "63,400 mi", loc: "Austin, TX · 3 mi", verified: true },
];

export default function SearchResults() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="relative flex h-full flex-col bg-white">
      <MobileHeader
        title="Search results"
        back
        action={
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700"
            aria-label="Filters"
          >
            <span className="text-lg leading-none">☰</span>
          </button>
        }
      />

      <div className="border-b border-ink-200 px-4 py-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-900">128 cars near Austin, TX</p>
          <button
            onClick={() => setFiltersOpen(true)}
            className="rounded-full border border-ink-300 px-3 py-1 text-[11px] font-semibold text-ink-600"
          >
            Filters
          </button>
        </div>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          <WChip active>Verified only</WChip>
          <WChip>Under $25k</WChip>
          <WChip>Within 50 mi</WChip>
          <WChip>SUV</WChip>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin bg-ink-50 px-4 py-3">
        <div className="flex flex-col gap-3">
          {RESULTS.map((r) => (
            <Link key={r.title} to="/buyer/listing/demo">
              <WCard className="flex gap-3">
                <WImagePlaceholder label="CAR" ratio="4/3" className="w-24 shrink-0" />
                <div className="flex flex-1 flex-col justify-center">
                  <div className="mb-0.5 flex items-center gap-1.5">
                    <p className="text-[13px] font-semibold text-ink-900">{r.title}</p>
                    {r.verified && <WBadge tone="success">Verified</WBadge>}
                  </div>
                  <p className="text-sm font-bold text-ink-900">{r.price}</p>
                  <p className="text-[11px] text-ink-500">
                    {r.miles} · {r.loc}
                  </p>
                </div>
              </WCard>
            </Link>
          ))}
        </div>
      </div>

      <BottomSheet open={filtersOpen} onClose={() => setFiltersOpen(false)} title="Filters">
        <div className="mb-5">
          <AnnotationLabel className="mb-2 block">Price range</AnnotationLabel>
          <div className="flex items-center gap-2">
            <input className="w-full rounded-sm border border-ink-300 px-2 py-2 text-xs" placeholder="Min" />
            <span className="text-ink-300">–</span>
            <input className="w-full rounded-sm border border-ink-300 px-2 py-2 text-xs" placeholder="Max" />
          </div>
        </div>
        <div className="mb-5">
          <AnnotationLabel className="mb-2 block">Body type</AnnotationLabel>
          <div className="flex flex-col gap-2.5">
            <WCheckbox label="Sedan" />
            <WCheckbox label="SUV" />
            <WCheckbox label="Truck" />
            <WCheckbox label="Hatchback" />
          </div>
        </div>
        <div className="mb-5">
          <AnnotationLabel className="mb-2 block">Mileage</AnnotationLabel>
          <div className="flex flex-col gap-2.5">
            <WCheckbox label="Under 20,000 mi" />
            <WCheckbox label="20,000–50,000 mi" />
            <WCheckbox label="50,000+ mi" />
          </div>
        </div>
        <div className="mb-6">
          <AnnotationLabel className="mb-2 block">Trust</AnnotationLabel>
          <WCheckbox label="Verified sellers only" />
        </div>
        <WButton full onClick={() => setFiltersOpen(false)}>
          Show 128 results
        </WButton>
      </BottomSheet>
    </div>
  );
}
