import React from "react";

const SCREEN_WIDTH = 390;
const SCREEN_HEIGHT = 844;

function StatusBar() {
  return (
    <div className="flex h-11 shrink-0 items-center justify-between bg-white px-6 pt-1 text-[13px] font-semibold text-ink-900">
      <span>9:41</span>
      <div className="absolute left-1/2 top-1.5 h-6 w-24 -translate-x-1/2 rounded-full bg-ink-900" />
      <div className="flex items-center gap-1">
        <span className="text-[11px]">▂▄▆</span>
        <span className="text-[11px]">📶</span>
        <span className="h-3 w-6 rounded-[3px] border border-ink-900 relative">
          <span className="absolute inset-y-0 left-0 m-[1.5px] w-[65%] rounded-[1px] bg-ink-900" />
        </span>
      </div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 overflow-auto bg-ink-200 px-10 py-10">
      <div className="flex min-w-fit flex-col items-center justify-center gap-3">
        <div
          className="relative shrink-0 rounded-[3rem] bg-ink-900 p-[12px] shadow-[0_20px_50px_rgba(17,18,20,0.25)]"
          style={{ width: SCREEN_WIDTH + 24, height: SCREEN_HEIGHT + 24 }}
        >
          <div
            className="relative flex flex-col overflow-hidden rounded-[2.25rem] bg-white"
            style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          >
            <StatusBar />
            <div className="relative flex-1 overflow-hidden">{children}</div>
            <div className="pointer-events-none absolute bottom-1.5 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-ink-900/80" />
          </div>
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
          390 × 844 · mobile viewport
        </span>
      </div>
    </div>
  );
}
