import React from "react";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WCard,
  WBadge,
  AnnotationLabel,
  IconPlaceholder,
} from "../../components/ui/primitives";

const GROUPS = [
  {
    title: "Messages",
    items: [
      { text: "Morgan J. replied about the Civic EX", time: "12m ago", unread: true },
      { text: "Priya R. sent an inquiry on the F-150", time: "1h ago", unread: true },
    ],
  },
  {
    title: "Offers",
    items: [{ text: "New offer: $18,500 on 2021 Honda Civic EX", time: "12m ago", unread: true }],
  },
  {
    title: "Saved searches",
    items: [
      { text: "3 new matches for 'Honda Civic under $20k'", time: "3h ago", unread: false },
      { text: "Price dropped $600 on a favorited RAV4", time: "1d ago", unread: false },
    ],
  },
];

export default function Notifications() {
  return (
    <PushScreen title="Notifications" noPadding>
      <div className="border-b border-ink-200 px-4 py-2">
        <WBadge tone="r2">Release 2</WBadge>
      </div>
      <div className="flex flex-col">
        {GROUPS.map((group) => (
          <div key={group.title} className="border-b border-ink-100 px-4 py-3">
            <AnnotationLabel className="mb-2 block">{group.title}</AnnotationLabel>
            <div className="flex flex-col gap-2">
              {group.items.map((item, i) => (
                <WCard key={i} className="flex items-center gap-2.5">
                  <IconPlaceholder size={26} className="shrink-0 rounded-full" />
                  <p className="flex-1 text-[13px] text-ink-800">{item.text}</p>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <span className="text-[10px] text-ink-400">{item.time}</span>
                    {item.unread && <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />}
                  </div>
                </WCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PushScreen>
  );
}
