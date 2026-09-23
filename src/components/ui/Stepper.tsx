import React from "react";
import { cx } from "./primitives";

/** Compact mobile step indicator: thin segmented progress bar + "Step X of N" label. */
export function MobileSteps({ total, current, label }: { total: number; current: number; label: string }) {
  return (
    <div className="px-4 pb-3 pt-3">
      <div className="mb-2 flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={cx("h-1 flex-1 rounded-full", i <= current ? "bg-ink-900" : "bg-ink-200")}
          />
        ))}
      </div>
      <p className="text-[11px] font-medium text-ink-400">
        Step {current + 1} of {total} — {label}
      </p>
    </div>
  );
}

export function WStepper({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <ol className="flex w-full items-center">
      {steps.map((step, i) => {
        const state = i < current ? "done" : i === current ? "active" : "upcoming";
        return (
          <li key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex items-center gap-2">
              <span
                className={cx(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
                  state === "done" && "bg-ink-900 text-white",
                  state === "active" && "border-2 border-ink-900 text-ink-900",
                  state === "upcoming" && "border border-ink-300 text-ink-400",
                )}
              >
                {state === "done" ? "✓" : i + 1}
              </span>
              <span
                className={cx(
                  "whitespace-nowrap text-xs font-medium",
                  state === "upcoming" ? "text-ink-400" : "text-ink-800",
                )}
              >
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={cx(
                  "mx-3 h-px flex-1",
                  i < current ? "bg-ink-900" : "bg-ink-200",
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
