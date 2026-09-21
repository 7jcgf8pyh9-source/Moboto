import React, { useEffect, useRef, useState } from "react";
import { RELEASE_DESCRIPTIONS, RELEASE_LABELS, useReleases, type Release } from "../../context/ReleaseContext";
import { cx } from "../ui/primitives";

const TOGGLEABLE: Release[] = ["r2", "r3"];

export function ReleaseMenu() {
  const { visible, toggle } = useReleases();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const activeCount = TOGGLEABLE.filter((r) => visible.has(r)).length;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={cx(
          "flex items-center gap-2 rounded-sm border border-ink-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 hover:border-ink-500",
          open && "border-ink-600",
        )}
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-ink-400 text-[9px]">
          ⋮
        </span>
        Releases
        {activeCount > 0 && (
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-ink-900 px-1 text-[10px] text-white">
            {activeCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-sm border border-ink-300 bg-white p-3 shadow-lg">
          <p className="mb-3 text-[11px] leading-snug text-ink-400">
            Toggle which release layers appear in the screen list and navigation. MVP is always
            visible — it's the shipped foundation.
          </p>
          <div className="flex flex-col gap-2">
            {(["mvp", ...TOGGLEABLE] as Release[]).map((release) => {
              const isMvp = release === "mvp";
              const checked = isMvp || visible.has(release);
              return (
                <label
                  key={release}
                  className={cx(
                    "flex cursor-pointer items-start gap-2.5 rounded-sm border border-transparent p-2 hover:bg-ink-50",
                    isMvp && "cursor-default opacity-70",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={isMvp}
                    onChange={() => toggle(release)}
                    className="mt-0.5 h-4 w-4 rounded-sm border-ink-400 text-ink-900"
                  />
                  <span>
                    <span className="block text-xs font-semibold text-ink-900">
                      {RELEASE_LABELS[release]}
                      {isMvp && <span className="ml-1.5 text-[10px] font-normal text-ink-400">always on</span>}
                    </span>
                    <span className="block text-[11px] leading-snug text-ink-500">
                      {RELEASE_DESCRIPTIONS[release]}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
