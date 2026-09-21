import React from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WCard,
  WBadge,
  WField,
  WInput,
  SectionTitle,
  AnnotationLabel,
  WDivider,
  IconPlaceholder,
} from "../../components/ui/primitives";

export default function Checkout() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <WBadge tone="r3">Release 3</WBadge>
          </div>
          <SectionTitle className="mb-1">Secure your deal</SectionTitle>
          <p className="mb-6 text-xs text-ink-500">
            A refundable deposit held in escrow — taking the car off the market while you finalize paperwork off-platform.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <WCard className="col-span-2">
              <AnnotationLabel className="mb-3 block">Payment details</AnnotationLabel>
              <div className="grid grid-cols-2 gap-3">
                <WField label="Card number" hint="">
                  <WInput placeholder="4242 4242 4242 4242" />
                </WField>
                <WField label="Name on card">
                  <WInput placeholder="Jordan Casey" />
                </WField>
                <WField label="Expiry">
                  <WInput placeholder="MM / YY" />
                </WField>
                <WField label="CVC">
                  <WInput placeholder="•••" />
                </WField>
              </div>

              <WDivider className="my-5" />

              <div className="flex items-center gap-2 rounded-sm border border-dashed border-ink-300 bg-ink-50 p-3">
                <IconPlaceholder size={18} />
                <p className="text-[11px] leading-relaxed text-ink-500">
                  Funds are held by Moboto Escrow and released to the seller only after both
                  parties confirm the deal is complete.
                </p>
              </div>
            </WCard>

            <WCard>
              <AnnotationLabel className="mb-3 block">Order summary</AnnotationLabel>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-500">Vehicle price</span>
                  <span className="font-medium text-ink-900">$19,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Refundable deposit</span>
                  <span className="font-medium text-ink-900">$500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Platform fee</span>
                  <span className="font-medium text-ink-900">$0</span>
                </div>
              </div>
              <WDivider className="my-4" />
              <div className="mb-5 flex justify-between text-sm font-bold text-ink-900">
                <span>Due today</span>
                <span>$500</span>
              </div>
              <WButton full>Pay refundable deposit</WButton>
              <p className="mt-2 text-center text-[10px] text-ink-400">
                Fully refundable within 48 hours
              </p>
            </WCard>
          </div>
        </div>
      </div>
    </div>
  );
}
