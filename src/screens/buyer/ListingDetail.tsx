import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon, BookmarkIcon, ShareIcon } from "../../components/app-chrome/icons";
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
  cx,
} from "../../components/ui/primitives";

const SPECS = [
  ["Year", "2021"],
  ["Make", "Honda"],
  ["Model", "Civic EX"],
  ["Mileage", "28,300 mi"],
  ["Transmission", "Automatic"],
  ["Fuel type", "Gasoline"],
  ["Exterior", "Modern Steel Metallic"],
  ["VIN", "1HGCV1F3•••••••••"],
];

const PHOTOS = ["MAIN PHOTO", "INTERIOR", "REAR 3/4", "ODOMETER", "+5 MORE"];

export default function ListingDetail() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="relative flex h-full flex-col bg-white">
      <div className="absolute inset-x-0 top-0 z-20 flex h-14 items-center justify-between px-3">
        <button
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink-700 shadow"
          aria-label="Back"
        >
          <BackIcon size={18} />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink-700 shadow">
          <ShareIcon size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin pb-24">
        <div>
          <WImagePlaceholder label={PHOTOS[activePhoto]} ratio="4/3" className="rounded-none border-0" />
          <div className="flex justify-center gap-1.5 py-2">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                className={cx("h-1.5 rounded-full transition-all", i === activePhoto ? "w-4 bg-ink-900" : "w-1.5 bg-ink-200")}
              />
            ))}
          </div>
        </div>

        <div className="px-4">
          <div className="mb-1 flex items-start justify-between gap-2">
            <div>
              <h1 className="text-lg font-bold leading-tight text-ink-900">2021 Honda Civic EX</h1>
              <p className="text-xs text-ink-500">Austin, TX · Listed 3 days ago</p>
            </div>
            <button
              onClick={() => setSaved((s) => !s)}
              className={cx(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                saved ? "border-ink-900 bg-ink-900 text-white" : "border-ink-300 text-ink-500",
              )}
            >
              <BookmarkIcon size={16} />
            </button>
          </div>
          <p className="mb-3 text-2xl font-bold text-ink-900">$19,400</p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            <WBadge tone="success">Verified seller</WBadge>
            <WBadge tone="outline">Clean title</WBadge>
            <WBadge tone="outline">1 owner</WBadge>
          </div>

          <WCard className="mb-4 flex items-center gap-3">
            <WAvatar initials="MJ" size={40} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink-900">Morgan J.</p>
              <WStars rating={4.5} count={32} />
            </div>
            <div className="text-right text-[11px] text-ink-500">
              <p>Responds in</p>
              <p className="font-semibold text-ink-800">~2 hours</p>
            </div>
          </WCard>

          <WDivider className="my-4" />

          <SectionTitle className="mb-3 text-[15px]">Vehicle specs</SectionTitle>
          <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {SPECS.map(([label, value]) => (
              <div key={label} className="border-b border-ink-100 pb-2">
                <p className="text-[10px] uppercase tracking-wide text-ink-400">{label}</p>
                <p className="text-xs font-medium text-ink-900">{value}</p>
              </div>
            ))}
          </div>

          <WDivider className="my-4" />

          <SectionTitle className="mb-2 text-[15px]">Description</SectionTitle>
          <p className="mb-4 text-[13px] leading-relaxed text-ink-700">
            Single-owner Civic EX, garage kept and dealer-serviced every 5,000 miles — full
            records available on request. No accidents, no smoking. Recent tires (2023) and
            brake pads (2024).
          </p>

          <WDivider className="my-4" />

          <SectionTitle className="mb-2 text-[15px]">Vehicle history</SectionTitle>
          <WCard className="mb-2">
            <p className="mb-1 text-sm font-medium text-ink-900">No accidents or damage reported</p>
            <p className="mb-3 text-[11px] text-ink-500">Verified 3 days ago</p>
            <WButton variant="outline" size="sm" full>
              View full report
            </WButton>
          </WCard>

          <div className="mt-4 flex flex-col gap-2">
            <WLinkButton to="/buyer/offer" variant="outline" full>
              <span className="flex items-center gap-1.5">
                Make an offer <WBadge tone="r2">R2</WBadge>
              </span>
            </WLinkButton>
            <WLinkButton to="/buyer/financing" variant="ghost" full>
              <span className="flex items-center gap-1.5">
                Estimate financing <WBadge tone="r3">R3</WBadge>
              </span>
            </WLinkButton>
            <WLinkButton to="/buyer/test-drive" variant="ghost" full>
              <span className="flex items-center gap-1.5">
                Schedule test drive <WBadge tone="r3">R3</WBadge>
              </span>
            </WLinkButton>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-ink-200 bg-white p-3">
        <WLinkButton to="/buyer/contact" full size="lg">
          Contact seller
        </WLinkButton>
      </div>
    </div>
  );
}
