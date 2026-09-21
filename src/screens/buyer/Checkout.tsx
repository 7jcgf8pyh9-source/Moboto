import React from "react";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WButton,
  WCard,
  WBadge,
  WField,
  WInput,
  AnnotationLabel,
  WDivider,
  IconPlaceholder,
} from "../../components/ui/primitives";

export default function Checkout() {
  return (
    <PushScreen
      title="Secure checkout"
      footer={
        <>
          <WButton full size="lg">Pay refundable deposit</WButton>
          <p className="mt-1.5 text-center text-[10px] text-ink-400">Fully refundable within 48 hours</p>
        </>
      }
    >
      <div className="mb-1">
        <WBadge tone="r3">Release 3</WBadge>
      </div>
      <p className="mb-4 mt-2 text-xs text-ink-500">
        A refundable deposit held in escrow — taking the car off the market while you finalize
        paperwork off-platform.
      </p>

      <WCard className="mb-4">
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
        <WDivider className="my-3" />
        <div className="flex justify-between text-sm font-bold text-ink-900">
          <span>Due today</span>
          <span>$500</span>
        </div>
      </WCard>

      <WCard>
        <AnnotationLabel className="mb-3 block">Payment details</AnnotationLabel>
        <div className="flex flex-col gap-3">
          <WField label="Card number">
            <WInput placeholder="4242 4242 4242 4242" />
          </WField>
          <WField label="Name on card">
            <WInput placeholder="Jordan Casey" />
          </WField>
          <div className="grid grid-cols-2 gap-3">
            <WField label="Expiry">
              <WInput placeholder="MM / YY" />
            </WField>
            <WField label="CVC">
              <WInput placeholder="•••" />
            </WField>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-sm border border-dashed border-ink-300 bg-ink-50 p-3">
          <IconPlaceholder size={18} className="shrink-0" />
          <p className="text-[11px] leading-relaxed text-ink-500">
            Funds are held by Moboto Escrow and released to the seller only after both parties
            confirm the deal is complete.
          </p>
        </div>
      </WCard>
    </PushScreen>
  );
}
