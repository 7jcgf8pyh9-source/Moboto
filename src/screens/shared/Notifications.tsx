import React from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WCard,
  WBadge,
  SectionTitle,
  AnnotationLabel,
  IconPlaceholder,
} from "../../components/ui/primitives";

const GROUPS = [
  {
    title: "Messages",
    items: [
      { text: "Morgan J. replied about the Civic EX", time: "12 min ago", unread: true },
      { text: "Priya R. sent an inquiry on the F-150", time: "1 hour ago", unread: true },
    ],
  },
  {
    title: "Offers",
    items: [{ text: "New offer: $18,500 on 2021 Honda Civic EX", time: "12 min ago", unread: true }],
  },
  {
    title: "Saved searches",
    items: [
      { text: "3 new matches for 'Honda Civic under $20k'", time: "3 hours ago", unread: false },
      { text: "Price dropped $600 on a favorited RAV4", time: "1 day ago", unread: false },
    ],
  },
];

export default function Notifications() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mx-auto max-w-xl">
          <div className="mb-1 flex items-center gap-2">
            <WBadge tone="r2">Release 2</WBadge>
          </div>
          <SectionTitle>Notifications</SectionTitle>
          <p className="mb-6 mt-1 text-xs text-ink-500">
            Grouped by type so a reply from a seller never gets buried under search alerts.
          </p>

          <div className="flex flex-col gap-6">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <AnnotationLabel className="mb-2 block">{group.title}</AnnotationLabel>
                <div className="flex flex-col gap-2">
                  {group.items.map((item, i) => (
                    <WCard key={i} className="flex items-center gap-3">
                      <IconPlaceholder size={28} className="rounded-full shrink-0" />
                      <p className="flex-1 text-sm text-ink-800">{item.text}</p>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="text-[11px] text-ink-400">{item.time}</span>
                        {item.unread && <span className="h-2 w-2 rounded-full bg-ink-900" />}
                      </div>
                    </WCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
