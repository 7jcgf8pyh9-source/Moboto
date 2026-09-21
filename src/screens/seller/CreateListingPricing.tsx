import React from "react";
import { useNavigate } from "react-router-dom";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import { MobileSteps } from "../../components/ui/Stepper";
import { WButton, WField, WInput, WTextarea } from "../../components/ui/primitives";

export default function CreateListingPricing() {
  const navigate = useNavigate();

  return (
    <PushScreen
      title="New listing"
      noPadding
      footer={
        <WButton full size="lg" onClick={() => navigate("/seller/new/review")}>
          Review listing →
        </WButton>
      }
    >
      <MobileSteps total={4} current={2} label="Price & description" />
      <div className="px-4 pb-4">
        <WField label="Asking price" hint="Market range for this trim & mileage: $18,200–$20,600">
          <div className="flex items-center gap-2">
            <span className="text-ink-400">$</span>
            <WInput type="number" defaultValue="19400" />
          </div>
        </WField>

        <div className="mt-3 h-2 w-full rounded-full bg-ink-100">
          <div className="h-2 w-3/5 rounded-full bg-ink-900" />
        </div>
        <p className="mt-1 text-[11px] text-ink-400">
          Your price is competitive — mid-range for similar listings nearby.
        </p>

        <div className="mt-5">
          <WField label="Description" hint="Mention condition, maintenance history, and reason for selling">
            <WTextarea
              rows={6}
              defaultValue="Single-owner Civic EX, garage kept and dealer-serviced every 5,000 miles — full records available on request. No accidents, no smoking. Recent tires (2023) and brake pads (2024)."
            />
          </WField>
        </div>
      </div>
    </PushScreen>
  );
}
