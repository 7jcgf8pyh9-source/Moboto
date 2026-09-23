import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TabScreen } from "../../components/app-chrome/ScreenShell";
import { SearchIcon, BellIcon } from "../../components/app-chrome/icons";
import {
  WCard,
  WImagePlaceholder,
  WInput,
  WBadge,
  WChip,
  AnnotationLabel,
  SectionTitle,
} from "../../components/ui/primitives";

const LISTINGS = [
  { title: "2021 Honda Civic EX", price: "$19,400", miles: "28,300 mi", loc: "Austin, TX", verified: true },
  { title: "2019 Toyota RAV4 XLE", price: "$22,900", miles: "41,120 mi", loc: "San Marcos, TX", verified: true },
  { title: "2022 Mazda CX-5", price: "$26,750", miles: "15,900 mi", loc: "Round Rock, TX", verified: false },
];

export default function BuyerHome() {
  const navigate = useNavigate();

  return (
    <TabScreen
      title="Moboto"
      active="home"
      noPadding
      action={
        <Link to="/notifications" className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700">
          <BellIcon size={20} />
        </Link>
      }
    >
      <div className="px-4 pb-2 pt-3">
        <button
          onClick={() => navigate("/buyer/search")}
          className="flex w-full items-center gap-2 rounded-full border border-ink-300 bg-white px-4 py-3 text-left text-sm text-ink-400"
        >
          <SearchIcon size={18} className="text-ink-400" />
          Search make, model, or keyword…
        </button>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <WChip active>All</WChip>
          <WChip>Sedan</WChip>
          <WChip>SUV</WChip>
          <WChip>Truck</WChip>
          <WChip>Under $20k</WChip>
        </div>
      </div>

      <div className="mb-6 px-4">
        <div className="mb-2 flex items-center justify-between">
          <SectionTitle className="text-[15px]">Recommended for you</SectionTitle>
          <Link to="/buyer/search" className="text-xs font-medium text-ink-500">
            See all
          </Link>
        </div>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {LISTINGS.map((listing) => (
            <Link key={listing.title} to="/buyer/listing/demo" className="w-44 shrink-0">
              <WCard padded={false} className="overflow-hidden">
                <WImagePlaceholder label="CAR PHOTO" ratio="4/3" className="rounded-none border-0 border-b" />
                <div className="p-2.5">
                  <div className="mb-1 flex items-start justify-between gap-1">
                    <p className="text-[13px] font-semibold leading-snug text-ink-900">{listing.title}</p>
                  </div>
                  <p className="text-sm font-bold text-ink-900">{listing.price}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-[11px] text-ink-500">{listing.miles}</p>
                    {listing.verified && <WBadge tone="success">OK</WBadge>}
                  </div>
                </div>
              </WCard>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-4 pb-2">
        <div className="mb-2 flex items-center justify-between">
          <SectionTitle className="text-[15px]">Recently added near you</SectionTitle>
          <AnnotationLabel>Updated hourly</AnnotationLabel>
        </div>
        <div className="flex flex-col gap-3">
          {LISTINGS.slice()
            .reverse()
            .map((listing) => (
              <Link key={listing.title + "-r"} to="/buyer/listing/demo">
                <WCard className="flex gap-3">
                  <WImagePlaceholder label="CAR" ratio="4/3" className="w-24 shrink-0" />
                  <div className="flex-1">
                    <div className="mb-0.5 flex items-center gap-1.5">
                      <p className="text-[13px] font-semibold text-ink-900">{listing.title}</p>
                      {listing.verified && <WBadge tone="success">Verified</WBadge>}
                    </div>
                    <p className="text-sm font-bold text-ink-900">{listing.price}</p>
                    <p className="text-[11px] text-ink-500">
                      {listing.miles} · {listing.loc}
                    </p>
                  </div>
                </WCard>
              </Link>
            ))}
        </div>
      </div>
    </TabScreen>
  );
}
