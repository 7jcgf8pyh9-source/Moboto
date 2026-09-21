import React, { useState } from "react";
import { TabScreen } from "../../components/app-chrome/ScreenShell";
import { MobileHeader } from "../../components/app-chrome/MobileHeader";
import {
  WImagePlaceholder,
  WAvatar,
  WBadge,
  WInput,
  WButton,
  AnnotationLabel,
  cx,
} from "../../components/ui/primitives";

const THREADS = [
  { name: "Morgan J.", car: "2021 Honda Civic EX", preview: "Yes, still available! Want to...", unread: true },
  { name: "Priya R.", car: "2017 Ford F-150 XLT", preview: "Can we meet Saturday around 2pm?", unread: false },
  { name: "Alex D.", car: "2017 Ford F-150 XLT", preview: "Thanks for the quick reply.", unread: false },
];

const MESSAGES = [
  { fromMe: false, text: "Hi! Is the Civic still available?" },
  { fromMe: true, text: "Yes, still available! Want to come see it this weekend?" },
  { fromMe: false, text: "That works — would Saturday morning be okay?" },
];

export default function Messaging() {
  const [thread, setThread] = useState<string | null>(null);

  if (thread) {
    return (
      <div className="flex h-full flex-col bg-white">
        <MobileHeader title={thread} back action={<button onClick={() => setThread(null)} className="text-[11px] font-semibold text-ink-500">Threads</button>} />
        <div className="flex items-center gap-2.5 border-b border-ink-200 bg-ink-50 px-4 py-2.5">
          <WImagePlaceholder label="CAR" ratio="4/3" className="w-12" />
          <div>
            <p className="text-xs font-semibold text-ink-900">2021 Honda Civic EX</p>
            <p className="text-[11px] text-ink-500">$19,400</p>
          </div>
        </div>

        <div className="flex-1 space-y-2.5 overflow-y-auto scrollbar-thin px-4 py-4">
          {MESSAGES.map((m, i) => (
            <div key={i} className={cx("flex", m.fromMe ? "justify-end" : "justify-start")}>
              <div
                className={cx(
                  "max-w-[75%] rounded-2xl px-3 py-2 text-[13px]",
                  m.fromMe ? "bg-ink-900 text-white" : "border border-ink-200 bg-white text-ink-800",
                )}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-ink-200 bg-white p-3">
          <WInput placeholder="Write a message…" className="flex-1" />
          <WButton>Send</WButton>
        </div>
      </div>
    );
  }

  return (
    <TabScreen title="Messages" active="inbox" noPadding>
      <div className="border-b border-ink-200 bg-white px-4 py-2">
        <div className="flex items-center gap-1.5">
          <WBadge tone="r2">Release 2</WBadge>
          <AnnotationLabel>Keeps a record for both sides</AnnotationLabel>
        </div>
      </div>
      {THREADS.map((t) => (
        <button
          key={t.name}
          onClick={() => setThread(t.name)}
          className="flex w-full items-start gap-3 border-b border-ink-100 bg-white px-4 py-3 text-left"
        >
          <WAvatar initials={t.name.split(" ").map((n) => n[0]).join("")} size={40} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className={cx("truncate text-sm", t.unread ? "font-bold text-ink-900" : "font-medium text-ink-800")}>
                {t.name}
              </p>
              {t.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-ink-900" />}
            </div>
            <p className="truncate text-[11px] text-ink-400">{t.car}</p>
            <p className="truncate text-xs text-ink-500">{t.preview}</p>
          </div>
        </button>
      ))}
    </TabScreen>
  );
}
