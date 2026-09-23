import React from "react";
import { useNavigate } from "react-router-dom";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import { MobileSteps } from "../../components/ui/Stepper";
import {
  WButton,
  WField,
  WInput,
  WSelect,
} from "../../components/ui/primitives";

export default function CreateListingDetails() {
  const navigate = useNavigate();

  return (
    <PushScreen
      title="New listing"
      noPadding
      footer={
        <WButton full size="lg" onClick={() => navigate("/seller/new/photos")}>
          Continue to photos →
        </WButton>
      }
    >
      <MobileSteps total={4} current={0} label="Vehicle details" />
      <div className="px-4 pb-4">
        <p className="mb-4 text-xs text-ink-500">
          Start with a VIN and we'll pre-fill what we can — you confirm the rest.
        </p>

        <div className="mb-4 rounded-sm border border-dashed border-ink-300 bg-ink-50 p-3">
          <WField label="VIN (optional)" hint="We'll auto-fill make, model, year and trim">
            <div className="flex gap-2">
              <WInput placeholder="1HGCV1F3•••••••••" className="flex-1" />
              <WButton variant="outline" size="sm">
                Look up
              </WButton>
            </div>
          </WField>
        </div>

        <div className="flex flex-col gap-3">
          <WField label="Make">
            <WInput defaultValue="Honda" />
          </WField>
          <WField label="Model">
            <WInput defaultValue="Civic EX" />
          </WField>
          <div className="grid grid-cols-2 gap-3">
            <WField label="Year">
              <WInput defaultValue="2021" />
            </WField>
            <WField label="Mileage">
              <WInput defaultValue="28,300" />
            </WField>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <WField label="Transmission">
              <WSelect defaultValue="automatic">
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </WSelect>
            </WField>
            <WField label="Fuel type">
              <WSelect defaultValue="gas">
                <option value="gas">Gasoline</option>
                <option value="hybrid">Hybrid</option>
                <option value="electric">Electric</option>
                <option value="diesel">Diesel</option>
              </WSelect>
            </WField>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <WField label="Condition">
              <WSelect defaultValue="excellent">
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </WSelect>
            </WField>
            <WField label="Title status">
              <WSelect defaultValue="clean">
                <option value="clean">Clean</option>
                <option value="salvage">Salvage</option>
                <option value="rebuilt">Rebuilt</option>
              </WSelect>
            </WField>
          </div>
        </div>
      </div>
    </PushScreen>
  );
}
