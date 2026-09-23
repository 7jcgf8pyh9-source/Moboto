import React from "react";
import { useLocation } from "react-router-dom";
import { getScreenByPath, GROUP_LABELS } from "../../data/screens";
import { AnnotationLabel, WBadge } from "../ui/primitives";
import { ScreenNav } from "./ScreenNav";

const RELEASE_TONE = { mvp: "mvp", r2: "r2", r3: "r3" } as const;
const RELEASE_TEXT = { mvp: "MVP", r2: "Release 2", r3: "Release 3" } as const;

export function DocsPanel() {
  const location = useLocation();
  const screen = getScreenByPath(location.pathname);

  return (
    <aside className="flex h-full w-[460px] shrink-0 flex-col border-r border-ink-200 bg-white">
      <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-6">
        {screen ? (
          <>
            <div className="mb-3 flex items-center gap-2">
              <WBadge tone={RELEASE_TONE[screen.release]}>{RELEASE_TEXT[screen.release]}</WBadge>
              <AnnotationLabel>{GROUP_LABELS[screen.group]}</AnnotationLabel>
            </div>
            <h1 className="mb-1 text-xl font-bold leading-tight text-ink-900">{screen.title}</h1>
            <p className="mb-5 text-xs font-medium text-ink-400">{screen.flowLabel}</p>

            <section className="mb-5">
              <AnnotationLabel className="mb-2 block">Why this screen exists</AnnotationLabel>
              <p className="text-[13px] leading-relaxed text-ink-700">{screen.purpose}</p>
            </section>

            <section className="mb-5">
              <AnnotationLabel className="mb-2 block">Key UX decisions</AnnotationLabel>
              <ul className="flex flex-col gap-2">
                {screen.keyDecisions.map((decision, i) => (
                  <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-ink-700">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </section>

            {screen.flowNote && (
              <section className="rounded-sm border border-dashed border-ink-300 bg-ink-50 p-3">
                <AnnotationLabel className="mb-1 block">Flow connections</AnnotationLabel>
                <p className="text-[12px] leading-relaxed text-ink-600">{screen.flowNote}</p>
              </section>
            )}
          </>
        ) : (
          <p className="text-sm text-ink-500">No documentation found for this route.</p>
        )}
      </div>

      <div className="max-h-[320px] shrink-0 overflow-y-auto scrollbar-thin border-t border-ink-200 bg-ink-50 px-4 py-4">
        <ScreenNav />
      </div>
    </aside>
  );
}
