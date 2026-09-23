import React, { useState } from "react";
import { TabScreen } from "../../components/app-chrome/ScreenShell";
import {
  WAvatar,
  WBadge,
  WButton,
  WCard,
  WChip,
  WCheckbox,
  WField,
  WInput,
  AnnotationLabel,
  SectionTitle,
  WDivider,
} from "../../components/ui/primitives";

const TABS = ["Account", "Verification", "Notifications", "Payout"] as const;

export default function ProfileSettings() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Account");

  return (
    <TabScreen title="Profile & settings" active="account">
      <div className="flex items-center gap-3">
        <WAvatar initials="SL" size={52} />
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-base font-bold text-ink-900">Sam Larsen</h1>
          <p className="truncate text-xs text-ink-500">sam.larsen@example.com</p>
        </div>
        <WBadge tone="success">Verified</WBadge>
      </div>

      <div className="my-4 flex gap-2 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <WChip key={t} active={tab === t} onClick={() => setTab(t)}>
            {t}
          </WChip>
        ))}
      </div>

      {tab === "Account" && (
        <WCard>
          <SectionTitle className="mb-3 text-sm">Account details</SectionTitle>
          <div className="flex flex-col gap-3">
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
          <WDivider className="my-4" />
          <WButton full>Save changes</WButton>
        </WCard>
      )}

      {tab === "Verification" && (
        <WCard>
          <SectionTitle className="mb-1 text-sm">Identity verification</SectionTitle>
          <p className="mb-4 text-xs text-ink-500">
            Verification powers the trust badges buyers see on your listings.
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Government ID", status: "Verified" },
              { label: "Phone number", status: "Verified" },
              { label: "Email address", status: "Verified" },
              { label: "Vehicle title ownership", status: "Pending" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-sm border border-ink-200 px-3 py-2.5"
              >
                <span className="text-xs text-ink-800">{item.label}</span>
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
          <SectionTitle className="mb-3 text-sm">Notification preferences</SectionTitle>
          <div className="flex flex-col gap-3">
            <WCheckbox label="New buyer inquiries" />
            <WCheckbox label="Offers on my listings" />
            <WCheckbox label="Saved search matches" />
            <WCheckbox label="Price drop alerts on favorites" />
          </div>
        </WCard>
      )}

      {tab === "Payout" && (
        <WCard>
          <div className="mb-2 flex items-center gap-2">
            <AnnotationLabel>Release 3</AnnotationLabel>
          </div>
          <SectionTitle className="mb-1 text-sm">Payout details</SectionTitle>
          <p className="text-xs text-ink-500">
            Once Secure Checkout ships, deposit payouts get configured here — placeholder for
            now.
          </p>
        </WCard>
      )}
    </TabScreen>
  );
}
