import React from "react";
import { cx } from "./primitives";

export function BottomSheet({
  open,
  onClose,
  title,
  children,
  heightClass = "h-[70%]",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  heightClass?: string;
}) {
  return (
    <div className={cx("absolute inset-0 z-40", open ? "pointer-events-auto" : "pointer-events-none")}>
      <div
        onClick={onClose}
        className={cx(
          "absolute inset-0 bg-ink-900/40 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cx(
          "absolute inset-x-0 bottom-0 flex flex-col rounded-t-2xl bg-white shadow-[0_-8px_30px_rgba(17,18,20,0.2)] transition-transform duration-200",
          heightClass,
          open ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="flex shrink-0 items-center justify-center pt-2.5">
          <span className="h-1 w-10 rounded-full bg-ink-200" />
        </div>
        <div className="flex shrink-0 items-center justify-between px-4 py-3">
          <h2 className="text-[15px] font-semibold text-ink-900">{title}</h2>
          <button onClick={onClose} className="text-xs font-semibold text-ink-500 hover:text-ink-900">
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin px-4 pb-4">{children}</div>
      </div>
    </div>
  );
}
