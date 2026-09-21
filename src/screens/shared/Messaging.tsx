import React from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WCard,
  WImagePlaceholder,
  WAvatar,
  WBadge,
  WInput,
  WButton,
  AnnotationLabel,
  cx,
} from "../../components/ui/primitives";

const THREADS = [
  { name: "Morgan J.", car: "2021 Honda Civic EX", preview: "Yes, still available! Want to...", unread: true, active: true },
  { name: "Priya R.", car: "2017 Ford F-150 XLT", preview: "Can we meet Saturday around 2pm?", unread: false, active: false },
  { name: "Alex D.", car: "2017 Ford F-150 XLT", preview: "Thanks for the quick reply.", unread: false, active: false },
];

const MESSAGES = [
  { fromMe: false, text: "Hi! Is the Civic still available?" },
  { fromMe: true, text: "Yes, still available! Want to come see it this weekend?" },
  { fromMe: false, text: "That works — would Saturday morning be okay?" },
];

export default function Messaging() {
  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="messages" />
      <div className="mb-1 flex items-center gap-2 border-b border-ink-200 bg-white px-4 py-2">
        <WBadge tone="r2">Release 2</WBadge>
        <AnnotationLabel>In-platform messaging keeps a record for both sides</AnnotationLabel>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 shrink-0 overflow-y-auto border-r border-ink-200 bg-white">
          {THREADS.map((t) => (
            <button
              key={t.name}
              className={cx(
                "flex w-full items-start gap-3 border-b border-ink-100 px-4 py-3 text-left",
                t.active ? "bg-ink-50" : "hover:bg-ink-50",
              )}
            >
              <WAvatar initials={t.name.split(" ").map((n) => n[0]).join("")} size={36} />
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
        </aside>

        <div className="flex flex-1 flex-col bg-ink-50">
          <div className="flex items-center gap-3 border-b border-ink-200 bg-white px-5 py-3">
            <WImagePlaceholder label="CAR" ratio="4/3" className="w-14" />
            <div>
              <p className="text-sm font-semibold text-ink-900">2021 Honda Civic EX</p>
              <p className="text-xs text-ink-500">with Morgan J. · $19,400</p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-5">
            {MESSAGES.map((m, i) => (
              <div key={i} className={cx("flex", m.fromMe ? "justify-end" : "justify-start")}>
                <div
                  className={cx(
                    "max-w-xs rounded-sm px-3 py-2 text-sm",
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
      </div>
    </div>
  );
}
