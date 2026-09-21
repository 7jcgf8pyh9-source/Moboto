import React from "react";
import { Link } from "react-router-dom";
import { WAvatar, WBadge, cx } from "../ui/primitives";

export type NavRole = "guest" | "buyer" | "seller";

const NAV_LINKS: { label: string; to: string; match: string }[] = [
  { label: "Buy", to: "/buyer/home", match: "buy" },
  { label: "Sell", to: "/seller/dashboard", match: "sell" },
  { label: "Favorites", to: "/buyer/favorites", match: "favorites" },
  { label: "Messages", to: "/buyer/messages", match: "messages" },
];

export function AppTopNav({
  active,
  role = "guest",
}: {
  active?: string;
  role?: NavRole;
}) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-ink-200 bg-white px-8">
      <div className="flex items-center gap-8">
        <Link to="/buyer/home" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink-900 text-xs font-bold text-white">
            M
          </span>
          <span className="text-base font-bold tracking-tight text-ink-900">Moboto</span>
        </Link>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cx(
                "text-sm font-medium transition-colors",
                active === link.match
                  ? "text-ink-900 border-b-2 border-ink-900 pb-[21px] -mb-[21px]"
                  : "text-ink-500 hover:text-ink-800",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/seller/new/details"
          className="rounded-sm border border-ink-300 px-3 py-1.5 text-xs font-semibold text-ink-700 hover:border-ink-600"
        >
          + List a car
        </Link>
        {role === "guest" ? (
          <Link
            to="/login"
            className="rounded-sm bg-ink-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-ink-800"
          >
            Log in
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <WBadge tone="outline">{role}</WBadge>
            <WAvatar initials={role === "seller" ? "SL" : "BY"} size={32} />
          </div>
        )}
      </div>
    </header>
  );
}
