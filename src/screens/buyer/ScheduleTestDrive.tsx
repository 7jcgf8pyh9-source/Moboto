import React, { useState } from "react";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WCard,
  WBadge,
  SectionTitle,
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
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-10">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <WBadge tone="r3">Release 3</WBadge>
          </div>
          <SectionTitle className="mb-1">Schedule a test drive</SectionTitle>
          <p className="mb-6 text-xs text-ink-500">
            Pick from Morgan's actual availability — no back-and-forth needed.
          </p>

          <WCard className="mb-4 flex items-center gap-3">
            <WImagePlaceholder label="CAR" ratio="4/3" className="w-20" />
            <div>
              <p className="text-sm font-semibold text-ink-900">2021 Honda Civic EX</p>
              <p className="text-xs text-ink-500">Meets at seller's location · Austin, TX</p>
            </div>
          </WCard>

          <WCard>
            <AnnotationLabel className="mb-3 block">Choose a day</AnnotationLabel>
            <div className="mb-5 grid grid-cols-5 gap-2">
              {DAYS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className={cx(
                    "rounded-sm border py-2 text-xs font-medium",
                    day === d ? "border-ink-900 bg-ink-900 text-white" : "border-ink-300 text-ink-600 hover:border-ink-500",
                  )}
                >
                  {d}
                </button>
              ))}
            </div>

            <AnnotationLabel className="mb-3 block">Choose a time</AnnotationLabel>
            <div className="mb-6 grid grid-cols-5 gap-2">
              {SLOTS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSlot(s)}
                  className={cx(
                    "rounded-sm border py-2 text-xs font-medium",
                    slot === s ? "border-ink-900 bg-ink-900 text-white" : "border-ink-300 text-ink-600 hover:border-ink-500",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>

            <WButton full>
              Confirm {day}, {slot}
            </WButton>
          </WCard>
        </div>
      </div>
    </div>
  );
}
