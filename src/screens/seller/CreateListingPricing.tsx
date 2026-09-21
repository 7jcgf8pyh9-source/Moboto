import React from "react";
import { useNavigate } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import { WStepper } from "../../components/ui/Stepper";
import {
  WButton,
  WCard,
  WField,
  WInput,
  WTextarea,
  AnnotationLabel,
  SectionTitle,
} from "../../components/ui/primitives";

const STEPS = ["Vehicle details", "Photos", "Price & description", "Review & publish"];

export default function CreateListingPricing() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="sell" role="seller" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mx-auto max-w-2xl">
          <WStepper steps={STEPS} current={2} />

          <WCard className="mt-8">
            <SectionTitle className="mb-5">Price & description</SectionTitle>

            <WField label="Asking price" hint="Market range for this trim & mileage: $18,200–$20,600">
              <div className="flex items-center gap-2">
                <span className="text-ink-400">$</span>
                <WInput type="number" defaultValue="19400" />
              </div>
            </WField>

            <div className="mt-3 h-2 w-full rounded-full bg-ink-100">
              <div className="h-2 w-3/5 rounded-full bg-ink-900" />
            </div>
            <p className="mt-1 text-[11px] text-ink-400">Your price is competitive — mid-range for similar listings nearby.</p>

            <div className="mt-6">
              <WField label="Description" hint="Mention condition, maintenance history, and reason for selling">
                <WTextarea
                  rows={6}
                  defaultValue="Single-owner Civic EX, garage kept and dealer-serviced every 5,000 miles — full records available on request. No accidents, no smoking. Recent tires (2023) and brake pads (2024)."
                />
              </WField>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => navigate("/seller/new/photos")}
                className="text-xs font-medium text-ink-500 hover:text-ink-800"
              >
                ← Back
              </button>
              <div className="flex items-center gap-3">
                <AnnotationLabel>Step 3 of 4</AnnotationLabel>
                <WButton onClick={() => navigate("/seller/new/review")}>
                  Review listing →
                </WButton>
              </div>
            </div>
          </WCard>
        </div>
      </div>
    </div>
  );
}
