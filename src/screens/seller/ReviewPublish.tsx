import React from "react";
import { useNavigate } from "react-router-dom";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import { MobileSteps } from "../../components/ui/Stepper";
import {
  WButton,
  WCard,
  WImagePlaceholder,
  WBadge,
  SectionTitle,
  WDivider,
  AnnotationLabel,
} from "../../components/ui/primitives";

export default function ReviewPublish() {
  const navigate = useNavigate();

  return (
    <PushScreen
      title="New listing"
      noPadding
      footer={<WButton full size="lg" onClick={() => navigate("/seller/dashboard")}>Publish listing</WButton>}
    >
      <MobileSteps total={4} current={3} label="Review & publish" />
      <div className="px-4 pb-4">
        <div className="mb-3 flex items-center gap-2">
          <AnnotationLabel>Preview</AnnotationLabel>
          <span className="text-[11px] text-ink-400">— exactly what buyers will see</span>
        </div>

        <WCard padded={false} className="overflow-hidden">
          <WImagePlaceholder label="MAIN PHOTO" ratio="4/3" className="rounded-none border-0" />
          <div className="p-3">
            <div className="mb-1 flex items-start justify-between">
              <div>
                <h2 className="text-base font-bold text-ink-900">2021 Honda Civic EX</h2>
                <p className="text-xs text-ink-500">Austin, TX</p>
              </div>
              <p className="text-lg font-bold text-ink-900">$19,400</p>
            </div>
            <div className="mt-1 flex gap-1.5">
              <WBadge tone="success">Verified seller</WBadge>
              <WBadge tone="outline">Clean title</WBadge>
            </div>

            <WDivider className="my-3" />
            <SectionTitle className="mb-1.5 text-sm">Description</SectionTitle>
            <p className="text-xs leading-relaxed text-ink-600">
              Single-owner Civic EX, garage kept and dealer-serviced every 5,000 miles — full
              records available on request. No accidents, no smoking.
            </p>
          </div>
        </WCard>
      </div>
    </PushScreen>
  );
}
