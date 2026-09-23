import React from "react";
import { useNavigate } from "react-router-dom";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import { MobileSteps } from "../../components/ui/Stepper";
import { WButton, WImagePlaceholder, WBadge } from "../../components/ui/primitives";

const SHOTS = [
  { label: "Front 3/4", required: true, done: true },
  { label: "Rear 3/4", required: true, done: true },
  { label: "Interior front", required: true, done: true },
  { label: "Dashboard", required: true, done: false },
  { label: "Odometer", required: true, done: false },
  { label: "Engine bay", required: false, done: false },
];

export default function CreateListingPhotos() {
  const navigate = useNavigate();
  const requiredDone = SHOTS.filter((s) => s.required && s.done).length;
  const requiredTotal = SHOTS.filter((s) => s.required).length;

  return (
    <PushScreen
      title="New listing"
      noPadding
      footer={
        <WButton full size="lg" onClick={() => navigate("/seller/new/pricing")}>
          Continue to pricing →
        </WButton>
      }
    >
      <MobileSteps total={4} current={1} label="Photos" />
      <div className="px-4 pb-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs text-ink-500">Tap a slot to add a photo</p>
          <WBadge tone={requiredDone === requiredTotal ? "success" : "warning"}>
            {requiredDone}/{requiredTotal} required
          </WBadge>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {SHOTS.map((shot) => (
            <button key={shot.label} className="text-left">
              <WImagePlaceholder
                label={shot.done ? "ADDED" : "+ ADD"}
                ratio="4/3"
                className={shot.done ? "border-ink-500" : undefined}
              />
              <p className="mt-1 truncate text-[10px] text-ink-600">
                {shot.label}
                {shot.required && <span className="ml-0.5 text-red-500">*</span>}
              </p>
            </button>
          ))}
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-ink-400">
          Listings with all required shots get 2–3x more inquiries.
        </p>
      </div>
    </PushScreen>
  );
}
