import React from "react";
import { useLocation } from "react-router-dom";

const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 860;

export function CanvasFrame({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex-1 overflow-auto bg-ink-200 px-10 py-8">
      <div className="flex min-w-fit justify-center">
        <div
          className="shrink-0 overflow-hidden rounded-md border border-ink-300 bg-white shadow-[0_8px_30px_rgba(17,18,20,0.12)]"
          style={{ width: CANVAS_WIDTH }}
        >
          <div className="flex h-9 items-center gap-2 border-b border-ink-200 bg-ink-50 px-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
            </div>
            <div className="ml-3 flex-1 truncate rounded-sm bg-white px-3 py-1 text-[11px] text-ink-400">
              moboto.app{location.pathname}
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-300">
              1280 × 860 desktop
            </span>
          </div>
          <div className="overflow-y-auto scrollbar-thin bg-white" style={{ height: CANVAS_HEIGHT }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
