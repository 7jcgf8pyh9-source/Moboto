import React, { useState } from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WAvatar,
  WBadge,
  WButton,
  WCard,
  WCheckbox,
  WField,
  WInput,
  AnnotationLabel,
  SectionTitle,
  WDivider,
  cx,
} from "../../components/ui/primitives";

const TABS = ["Account", "Verification", "Notifications", "Payout details"] as const;

export default function ProfileSettings() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Account");

  return (
    <div className="flex h-full flex-col">
      <AppTopNav role="seller" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mx-auto flex max-w-3xl items-center gap-4">
          <WAvatar initials="SL" size={56} />
          <div>
            <h1 className="text-lg font-bold text-ink-900">Sam Larsen</h1>
            <p className="text-xs text-ink-500">sam.larsen@example.com · Member since 2024</p>
          </div>
          <WBadge tone="success" className="ml-auto">Verified seller</WBadge>
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl gap-1 border-b border-ink-200">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cx(
                "border-b-2 px-3 py-2 text-sm font-medium transition-colors",
                tab === t
                  ? "border-ink-900 text-ink-900"
                  : "border-transparent text-ink-400 hover:text-ink-700",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-3xl">
          {tab === "Account" && (
            <WCard>
              <SectionTitle className="mb-4">Account details</SectionTitle>
              <div className="grid grid-cols-2 gap-4">
                <WField label="Full name">
                  <WInput defaultValue="Sam Larsen" />
                </WField>
                <WField label="Email">
                  <WInput defaultValue="sam.larsen@example.com" />
                </WField>
                <WField label="Phone">
                  <WInput defaultValue="+1 (555) 010-2938" />
                </WField>
                <WField label="Location">
                  <WInput defaultValue="Austin, TX" />
                </WField>
              </div>
              <WDivider className="my-5" />
              <WButton>Save changes</WButton>
            </WCard>
          )}

          {tab === "Verification" && (
            <WCard>
              <SectionTitle className="mb-1">Identity verification</SectionTitle>
              <p className="mb-4 text-xs text-ink-500">
                Verification is what powers the trust badges buyers see on your listings.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Government ID", status: "Verified" },
                  { label: "Phone number", status: "Verified" },
                  { label: "Email address", status: "Verified" },
                  { label: "Vehicle title ownership", status: "Pending review" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-sm border border-ink-200 px-3 py-2.5"
                  >
                    <span className="text-sm text-ink-800">{item.label}</span>
                    <WBadge tone={item.status === "Verified" ? "success" : "warning"}>
                      {item.status}
                    </WBadge>
                  </div>
                ))}
              </div>
            </WCard>
          )}

          {tab === "Notifications" && (
            <WCard>
              <SectionTitle className="mb-4">Notification preferences</SectionTitle>
              <div className="flex flex-col gap-3">
                <WCheckbox label="New buyer inquiries" />
                <WCheckbox label="Offers on my listings" />
                <WCheckbox label="Saved search matches" />
                <WCheckbox label="Price drop alerts on favorites" />
                <WCheckbox label="Weekly market summary email" />
              </div>
            </WCard>
          )}

          {tab === "Payout details" && (
            <WCard>
              <div className="mb-3 flex items-center gap-2">
                <AnnotationLabel>Release 3</AnnotationLabel>
              </div>
              <SectionTitle className="mb-1">Payout details</SectionTitle>
              <p className="text-xs text-ink-500">
                Once Secure Checkout ships, deposit payouts will be configured here. Placeholder
                for now — bank details form will mirror the Checkout screen's trust framing.
              </p>
            </WCard>
          )}
        </div>
      </div>
    </div>
  );
}
