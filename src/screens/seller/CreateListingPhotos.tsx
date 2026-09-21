import React from "react";
import { useNavigate } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import { WStepper } from "../../components/ui/Stepper";
import {
  WButton,
  WCard,
  WImagePlaceholder,
  AnnotationLabel,
  SectionTitle,
  WBadge,
} from "../../components/ui/primitives";

const STEPS = ["Vehicle details", "Photos", "Price & description", "Review & publish"];

const SHOTS = [
  { label: "Front 3/4", required: true, done: true },
  { label: "Rear 3/4", required: true, done: true },
  { label: "Interior — front seats", required: true, done: true },
  { label: "Interior — dashboard", required: true, done: false },
  { label: "Odometer reading", required: true, done: false },
  { label: "Engine bay", required: false, done: false },
  { label: "Any damage / wear", required: false, done: false },
  { label: "Additional photo", required: false, done: false },
];

export default function CreateListingPhotos() {
  const navigate = useNavigate();
  const requiredDone = SHOTS.filter((s) => s.required && s.done).length;
  const requiredTotal = SHOTS.filter((s) => s.required).length;

  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="sell" role="seller" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mx-auto max-w-2xl">
          <WStepper steps={STEPS} current={1} />

          <WCard className="mt-8">
            <div className="mb-1 flex items-center justify-between">
              <SectionTitle>Photos</SectionTitle>
              <WBadge tone={requiredDone === requiredTotal ? "success" : "warning"}>
                {requiredDone}/{requiredTotal} required shots
              </WBadge>
            </div>
            <p className="mb-5 text-xs text-ink-500">
              Listings with all required shots get 2–3x more inquiries. Tap a slot to add a photo.
            </p>

            <div className="grid grid-cols-4 gap-3">
              {SHOTS.map((shot) => (
                <button key={shot.label} className="text-left">
                  <WImagePlaceholder
                    label={shot.done ? "ADDED" : "+ ADD"}
                    ratio="4/3"
                    className={shot.done ? "border-ink-500" : undefined}
                  />
                  <p className="mt-1 text-[11px] text-ink-600">
                    {shot.label}
                    {shot.required && <span className="ml-1 text-red-500">*</span>}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => navigate("/seller/new/details")}
                className="text-xs font-medium text-ink-500 hover:text-ink-800"
              >
                ← Back
              </button>
              <div className="flex items-center gap-3">
                <AnnotationLabel>Step 2 of 4</AnnotationLabel>
                <WButton onClick={() => navigate("/seller/new/pricing")}>
                  Continue to pricing →
                </WButton>
              </div>
            </div>
          </WCard>
        </div>
      </div>
    </div>
  );
}
