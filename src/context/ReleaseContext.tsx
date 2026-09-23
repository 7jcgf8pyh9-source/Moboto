import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Release = "mvp" | "r2" | "r3";

export const RELEASE_LABELS: Record<Release, string> = {
  mvp: "MVP",
  r2: "Release 2",
  r3: "Release 3",
};

export const RELEASE_DESCRIPTIONS: Record<Release, string> = {
  mvp: "Core buyer/seller flow. Always visible — this is the foundation everything else builds on.",
  r2: "Trust & conversion layer: messaging, offers, alerts, moderation tools.",
  r3: "Growth & monetization layer: financing, scheduling, payments, seller analytics.",
};

const STORAGE_KEY = "moboto.visibleReleases";
const TOGGLEABLE: Release[] = ["r2", "r3"];

interface ReleaseContextValue {
  visible: Set<Release>;
  isVisible: (release: Release) => boolean;
  toggle: (release: Release) => void;
}

const ReleaseContext = createContext<ReleaseContextValue | null>(null);

function loadInitial(): Set<Release> {
  if (typeof window === "undefined") return new Set(["mvp"]);
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set(["mvp"]);
    const parsed = JSON.parse(raw) as Release[];
    const set = new Set<Release>(["mvp"]);
    parsed.forEach((r) => {
      if (TOGGLEABLE.includes(r)) set.add(r);
    });
    return set;
  } catch {
    return new Set(["mvp"]);
  }
}

export function ReleaseProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState<Set<Release>>(loadInitial);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array.from(visible).filter((r) => r !== "mvp")),
      );
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  }, [visible]);

  const value = useMemo<ReleaseContextValue>(
    () => ({
      visible,
      isVisible: (release) => visible.has(release),
      toggle: (release) => {
        if (release === "mvp") return;
        setVisible((prev) => {
          const next = new Set(prev);
          if (next.has(release)) next.delete(release);
          else next.add(release);
          return next;
        });
      },
    }),
    [visible],
  );

  return <ReleaseContext.Provider value={value}>{children}</ReleaseContext.Provider>;
}

export function useReleases() {
  const ctx = useContext(ReleaseContext);
  if (!ctx) throw new Error("useReleases must be used within ReleaseProvider");
  return ctx;
}
