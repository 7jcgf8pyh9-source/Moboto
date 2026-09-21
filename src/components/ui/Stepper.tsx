import React from "react";
import { cx } from "./primitives";

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
