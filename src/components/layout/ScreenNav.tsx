import React from "react";
import { NavLink } from "react-router-dom";
import { GROUP_LABELS, GROUP_ORDER, SCREENS } from "../../data/screens";
import { useReleases } from "../../context/ReleaseContext";
import { WBadge, cx } from "../ui/primitives";
import type { Release } from "../../context/ReleaseContext";

const RELEASE_TONE: Record<Release, "mvp" | "r2" | "r3"> = {
  mvp: "mvp",
  r2: "r2",
  r3: "r3",
};
const RELEASE_SHORT: Record<Release, string> = { mvp: "MVP", r2: "R2", r3: "R3" };

export function ScreenNav() {
  const { isVisible } = useReleases();

  return (
    <nav className="flex flex-col gap-5">
      {GROUP_ORDER.map((group) => {
        const screens = SCREENS.filter((s) => s.group === group && isVisible(s.release));
        if (screens.length === 0) return null;
        return (
          <div key={group}>
            <h3 className="mb-1.5 px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
              {GROUP_LABELS[group]}
            </h3>
            <ul className="flex flex-col gap-0.5">
              {screens.map((screen) => (
                <li key={screen.id}>
                  <NavLink
                    to={screen.path}
                    className={({ isActive }) =>
                      cx(
                        "flex items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-[13px] transition-colors",
                        isActive
                          ? "bg-ink-900 text-white"
                          : "text-ink-600 hover:bg-ink-100 hover:text-ink-900",
                      )
                    }
                    end
                  >
                    {({ isActive }) => (
                      <>
                        <span className="truncate">{screen.title}</span>
                        {screen.release !== "mvp" && (
                          <WBadge
                            tone={RELEASE_TONE[screen.release]}
                            className={cx(isActive && "bg-white/20 text-white")}
                          >
                            {RELEASE_SHORT[screen.release]}
                          </WBadge>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
