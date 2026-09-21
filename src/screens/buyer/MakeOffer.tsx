import React, { useState } from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WCard,
  WField,
  WInput,
  WTextarea,
  WImagePlaceholder,
  WBadge,
  WDivider,
  AnnotationLabel,
} from "../../components/ui/primitives";

export default function MakeOffer() {
  const [offer, setOffer] = useState("18000");
  const asking = 19400;
  const diff = asking - Number(offer || 0);

  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-10">
        <div className="mx-auto max-w-lg">
          <div className="mb-4 flex items-center gap-2">
            <WBadge tone="r2">Release 2</WBadge>
            <AnnotationLabel>Negotiate in-platform, skip the phone tag</AnnotationLabel>
          </div>

          <WCard>
            <div className="mb-4 flex items-center gap-3">
              <WImagePlaceholder label="CAR" ratio="4/3" className="w-20" />
              <div>
                <p className="text-sm font-semibold text-ink-900">2021 Honda Civic EX</p>
                <p className="text-xs text-ink-500">Asking price</p>
                <p className="text-lg font-bold text-ink-900">${asking.toLocaleString()}</p>
              </div>
            </div>

            <WDivider className="mb-5" />

            <WField label="Your offer" hint={diff > 0 ? `$${diff.toLocaleString()} below asking` : "At or above asking price"}>
              <div className="flex items-center gap-2">
                <span className="text-ink-400">$</span>
                <WInput type="number" value={offer} onChange={(e) => setOffer(e.target.value)} />
              </div>
            </WField>

            <div className="mt-4">
              <WField label="Note to seller (optional)">
                <WTextarea rows={3} placeholder="I can pick up this week and pay via cashier's check." />
              </WField>
            </div>

            <WButton full className="mt-5">
              Submit offer
            </WButton>
            <p className="mt-2 text-center text-[11px] text-ink-400">
              The seller has 48 hours to accept, counter, or decline.
            </p>
          </WCard>
        </div>
      </div>
    </div>
  );
}
