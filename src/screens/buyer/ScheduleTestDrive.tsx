import React, { useState } from "react";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WButton,
  WCard,
  WBadge,
  AnnotationLabel,
  WImagePlaceholder,
  cx,
} from "../../components/ui/primitives";

const DAYS = ["Mon 23", "Tue 24", "Wed 25", "Thu 26", "Fri 27"];
const SLOTS = ["9:00 AM", "11:30 AM", "1:00 PM", "3:30 PM", "5:00 PM"];

export default function ScheduleTestDrive() {
  const [day, setDay] = useState(DAYS[1]);
  const [slot, setSlot] = useState(SLOTS[2]);

  return (
    <PushScreen
      title="Schedule test drive"
      footer={<WButton full size="lg">Confirm {day}, {slot}</WButton>}
    >
      <div className="mb-1">
        <WBadge tone="r3">Release 3</WBadge>
      </div>
      <p className="mb-4 mt-2 text-xs text-ink-500">
        Pick from Morgan's actual availability — no back-and-forth needed.
      </p>

      <WCard className="mb-4 flex items-center gap-3">
        <WImagePlaceholder label="CAR" ratio="4/3" className="w-16" />
        <div>
          <p className="text-sm font-semibold text-ink-900">2021 Honda Civic EX</p>
          <p className="text-xs text-ink-500">Meets at seller's location · Austin, TX</p>
        </div>
      </WCard>

      <AnnotationLabel className="mb-2 block">Choose a day</AnnotationLabel>
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
        {DAYS.map((d) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={cx(
              "shrink-0 rounded-sm border px-3 py-2 text-xs font-medium",
              day === d ? "border-ink-900 bg-ink-900 text-white" : "border-ink-300 text-ink-600",
            )}
          >
            {d}
          </button>
        ))}
      </div>

      <AnnotationLabel className="mb-2 block">Choose a time</AnnotationLabel>
      <div className="grid grid-cols-2 gap-2">
        {SLOTS.map((s) => (
          <button
            key={s}
            onClick={() => setSlot(s)}
            className={cx(
              "rounded-sm border py-2.5 text-xs font-medium",
              slot === s ? "border-ink-900 bg-ink-900 text-white" : "border-ink-300 text-ink-600",
            )}
          >
            {s}
          </button>
        ))}
      </div>
    </PushScreen>
  );
}
