import React from "react";
import { Link } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WLinkButton,
  WCard,
  WImagePlaceholder,
  WBadge,
  WStars,
  WAvatar,
  WDivider,
  AnnotationLabel,
  SectionTitle,
  IconPlaceholder,
} from "../../components/ui/primitives";

const SPECS = [
  ["Year", "2021"],
  ["Make", "Honda"],
  ["Model", "Civic EX"],
  ["Mileage", "28,300 mi"],
  ["Transmission", "Automatic"],
  ["Fuel type", "Gasoline"],
  ["Exterior color", "Modern Steel Metallic"],
  ["VIN", "1HGCV1F3•••••••••"],
];

export default function ListingDetail() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" />
      <div className="flex-1 overflow-y-auto bg-ink-50">
        <div className="mx-auto max-w-5xl px-8 py-8">
          <div className="mb-4 flex items-center gap-2 text-xs text-ink-400">
            <Link to="/buyer/search" className="hover:text-ink-700 hover:underline">
              Search results
            </Link>
            <span>/</span>
            <span className="text-ink-600">2021 Honda Civic EX</span>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="grid grid-cols-4 grid-rows-2 gap-2">
                <WImagePlaceholder label="MAIN PHOTO" ratio="4/3" className="col-span-3 row-span-2" />
                <WImagePlaceholder label="INTERIOR" ratio="4/3" />
                <WImagePlaceholder label="REAR 3/4" ratio="4/3" />
                <WImagePlaceholder label="ODOMETER" ratio="4/3" />
                <WImagePlaceholder label="+6 MORE" ratio="4/3" />
              </div>

              <div className="mt-8">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h1 className="text-xl font-bold text-ink-900">2021 Honda Civic EX</h1>
                    <p className="text-sm text-ink-500">Austin, TX · Listed 3 days ago</p>
                  </div>
                  <button className="flex items-center gap-1.5 rounded-sm border border-ink-300 px-3 py-1.5 text-xs font-medium text-ink-600 hover:border-ink-500">
                    <IconPlaceholder size={12} /> Save
                  </button>
                </div>
                <div className="flex gap-2">
                  <WBadge tone="success">Verified seller</WBadge>
                  <WBadge tone="outline">Clean title</WBadge>
                  <WBadge tone="outline">1 owner</WBadge>
                </div>
              </div>

              <WDivider className="my-6" />

              <SectionTitle className="mb-4">Vehicle specs</SectionTitle>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {SPECS.map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-ink-100 pb-2 text-sm">
                    <span className="text-ink-500">{label}</span>
                    <span className="font-medium text-ink-900">{value}</span>
                  </div>
                ))}
              </div>

              <WDivider className="my-6" />

              <SectionTitle className="mb-3">Description</SectionTitle>
              <p className="text-sm leading-relaxed text-ink-700">
                Single-owner Civic EX, garage kept and dealer-serviced every 5,000 miles — full
                records available on request. No accidents, no smoking. Recent tires (2023) and
                brake pads (2024). Sunroof, adaptive cruise, and Honda Sensing suite all working
                as expected. Reason for selling: upgrading to a larger vehicle for a growing
                family.
              </p>

              <WDivider className="my-6" />

              <SectionTitle className="mb-3">Vehicle history</SectionTitle>
              <WCard className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ink-900">No accidents or damage reported</p>
                  <p className="text-xs text-ink-500">History report provided by seller · verified 3 days ago</p>
                </div>
                <WButton variant="outline" size="sm">
                  View full report
                </WButton>
              </WCard>
            </div>

            <div className="col-span-1">
              <div className="sticky top-4 flex flex-col gap-4">
                <WCard>
                  <p className="text-xs text-ink-500">Asking price</p>
                  <p className="mb-4 text-3xl font-bold text-ink-900">$19,400</p>
                  <WLinkButton to="/buyer/contact" full className="mb-2">
                    Contact seller
                  </WLinkButton>
                  <WLinkButton to="/buyer/offer" variant="outline" full>
                    <span className="flex items-center gap-1.5">
                      Make an offer <WBadge tone="r2">R2</WBadge>
                    </span>
                  </WLinkButton>
                  <WLinkButton to="/buyer/financing" variant="ghost" full className="mt-2">
                    <span className="flex items-center gap-1.5">
                      Estimate financing <WBadge tone="r3">R3</WBadge>
                    </span>
                  </WLinkButton>
                </WCard>

                <WCard>
                  <AnnotationLabel className="mb-3 block">Seller</AnnotationLabel>
                  <div className="flex items-center gap-3">
                    <WAvatar initials="MJ" size={44} />
                    <div>
                      <p className="text-sm font-semibold text-ink-900">Morgan J.</p>
                      <WStars rating={4.5} count={32} />
                    </div>
                  </div>
                  <WDivider className="my-3" />
                  <div className="flex flex-col gap-1.5 text-xs text-ink-500">
                    <div className="flex justify-between">
                      <span>Response time</span>
                      <span className="font-medium text-ink-800">~2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Member since</span>
                      <span className="font-medium text-ink-800">2022</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active listings</span>
                      <span className="font-medium text-ink-800">3</span>
                    </div>
                  </div>
                </WCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
