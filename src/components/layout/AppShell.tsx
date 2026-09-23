import React from "react";
import { DocsPanel } from "./DocsPanel";
import { PhoneFrame } from "./PhoneFrame";
import { ReleaseMenu } from "./ReleaseMenu";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen min-w-[1000px] flex-col bg-ink-100">
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-ink-200 bg-white px-5">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-bold tracking-tight text-ink-900">Moboto</span>
          <span className="text-xs text-ink-400">
            — mobile app prototype, viewed here on desktop for flow documentation
          </span>
        </div>
        <ReleaseMenu />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <DocsPanel />
        <PhoneFrame>{children}</PhoneFrame>
      </div>
    </div>
  );
}
