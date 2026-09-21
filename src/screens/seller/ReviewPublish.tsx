import React from "react";
import { useNavigate } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import { WStepper } from "../../components/ui/Stepper";
import {
  WButton,
  WCard,
  WImagePlaceholder,
  WBadge,
  AnnotationLabel,
  SectionTitle,
  WDivider,
} from "../../components/ui/primitives";

const STEPS = ["Vehicle details", "Photos", "Price & description", "Review & publish"];

export default function ReviewPublish() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="sell" role="seller" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mx-auto max-w-2xl">
          <WStepper steps={STEPS} current={3} />

          <div className="mt-6 mb-3 flex items-center gap-2">
            <AnnotationLabel>Preview</AnnotationLabel>
            <span className="text-[11px] text-ink-400">— exactly what buyers will see</span>
          </div>

          <WCard>
            <div className="grid grid-cols-3 gap-2">
              <WImagePlaceholder label="MAIN PHOTO" ratio="4/3" className="col-span-2" />
              <div className="grid grid-rows-2 gap-2">
                <WImagePlaceholder label="INTERIOR" ratio="4/3" />
                <WImagePlaceholder label="+6 MORE" ratio="4/3" />
              </div>
            </div>

            <div className="mt-4 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-ink-900">2021 Honda Civic EX</h2>
                <p className="text-xs text-ink-500">Austin, TX</p>
              </div>
              <p className="text-xl font-bold text-ink-900">$19,400</p>
            </div>
            <div className="mt-2 flex gap-2">
              <WBadge tone="success">Verified seller</WBadge>
              <WBadge tone="outline">Clean title</WBadge>
            </div>

            <WDivider className="my-4" />
            <SectionTitle className="mb-2 text-sm">Description</SectionTitle>
            <p className="text-xs leading-relaxed text-ink-600">
              Single-owner Civic EX, garage kept and dealer-serviced every 5,000 miles — full
              records available on request. No accidents, no smoking.
            </p>
          </WCard>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => navigate("/seller/new/pricing")}
              className="text-xs font-medium text-ink-500 hover:text-ink-800"
            >
              ← Back to edit
            </button>
            <div className="flex items-center gap-3">
              <AnnotationLabel>Step 4 of 4</AnnotationLabel>
              <WButton onClick={() => navigate("/seller/dashboard")}>Publish listing</WButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
