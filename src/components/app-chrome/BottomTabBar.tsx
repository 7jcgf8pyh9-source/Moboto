import React from "react";
import { Link } from "react-router-dom";
import { useReleases } from "../../context/ReleaseContext";
import { cx } from "../ui/primitives";
import { HomeIcon, HeartIcon, PlusIcon, ChatIcon, UserIcon } from "./icons";

export type TabKey = "home" | "favorites" | "sell" | "inbox" | "account";

export function BottomTabBar({ active }: { active: TabKey }) {
  const { isVisible } = useReleases();
  const inboxTo = isVisible("r2") ? "/buyer/messages" : "/buyer/dashboard";

  const tabs: { key: TabKey; label: string; to: string; icon: React.ComponentType<{ className?: string; size?: number }> }[] = [
    { key: "home", label: "Home", to: "/buyer/home", icon: HomeIcon },
    { key: "favorites", label: "Saved", to: "/buyer/favorites", icon: HeartIcon },
    { key: "sell", label: "Sell", to: "/seller/dashboard", icon: PlusIcon },
    { key: "inbox", label: "Inbox", to: inboxTo, icon: ChatIcon },
    { key: "account", label: "Account", to: "/profile", icon: UserIcon },
  ];

  return (
    <nav className="flex shrink-0 items-stretch border-t border-ink-200 bg-white pb-1.5 pt-1.5">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.key === active;
        const isSell = tab.key === "sell";
        return (
          <Link
            key={tab.key}
            to={tab.to}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 py-1"
          >
            <span
              className={cx(
                "flex items-center justify-center",
                isSell &&
                  "-mt-4 h-11 w-11 rounded-full bg-ink-900 text-white shadow-[0_4px_10px_rgba(17,18,20,0.35)]",
                !isSell && (isActive ? "text-ink-900" : "text-ink-400"),
              )}
            >
              <Icon size={isSell ? 22 : 22} />
            </span>
            {!isSell && (
              <span className={cx("text-[10px] font-medium", isActive ? "text-ink-900" : "text-ink-400")}>
                {tab.label}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
