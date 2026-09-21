import React from "react";
import { useNavigate } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import { WStepper } from "../../components/ui/Stepper";
import {
  WButton,
  WCard,
  WField,
  WInput,
  WSelect,
  AnnotationLabel,
  SectionTitle,
} from "../../components/ui/primitives";

const STEPS = ["Vehicle details", "Photos", "Price & description", "Review & publish"];

export default function CreateListingDetails() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="sell" role="seller" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mx-auto max-w-2xl">
          <WStepper steps={STEPS} current={0} />

          <WCard className="mt-8">
            <SectionTitle className="mb-1">Vehicle details</SectionTitle>
            <p className="mb-5 text-xs text-ink-500">
              Start with a VIN and we'll pre-fill what we can — you confirm the rest.
            </p>

            <div className="mb-5 flex items-end gap-2 rounded-sm border border-dashed border-ink-300 bg-white p-3">
              <WField label="VIN (optional)" hint="We'll auto-fill make, model, year and trim">
                <WInput placeholder="1HGCV1F3•••••••••" />
              </WField>
              <WButton variant="outline" size="sm" className="mb-1">
                Look up
              </WButton>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <WField label="Make">
                <WInput defaultValue="Honda" />
              </WField>
              <WField label="Model">
                <WInput defaultValue="Civic EX" />
              </WField>
              <WField label="Year">
                <WInput defaultValue="2021" />
              </WField>
              <WField label="Mileage">
                <WInput defaultValue="28,300" />
              </WField>
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

            <div className="mt-6 flex items-center justify-between">
              <AnnotationLabel>Step 1 of 4</AnnotationLabel>
              <WButton onClick={() => navigate("/seller/new/photos")}>
                Continue to photos →
              </WButton>
            </div>
          </WCard>
        </div>
      </div>
    </div>
  );
}
