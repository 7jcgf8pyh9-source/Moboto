import React from "react";
import { MobileHeader } from "./MobileHeader";
import { BottomTabBar, type TabKey } from "./BottomTabBar";
import { cx } from "../ui/primitives";

/** Top-level screen reachable from the bottom tab bar. */
export function TabScreen({
  title,
  active,
  action,
  noPadding,
  children,
}: {
  title: string;
  active: TabKey;
  action?: React.ReactNode;
  noPadding?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-white">
      <MobileHeader title={title} action={action} />
      <div className={cx("flex-1 overflow-y-auto scrollbar-thin bg-ink-50", !noPadding && "px-4 py-4")}>
        {children}
      </div>
      <BottomTabBar active={active} />
    </div>
  );
}

/** Pushed screen (detail, form, flow step) reached by navigating forward — has a back header, no tab bar. */
export function PushScreen({
  title,
  action,
  noPadding,
  transparentHeader,
  footer,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  noPadding?: boolean;
  transparentHeader?: boolean;
  footer?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-white">
      <MobileHeader title={title} back action={action} transparent={transparentHeader} />
      <div className={cx("flex-1 overflow-y-auto scrollbar-thin bg-ink-50", !noPadding && "px-4 py-4")}>
        {children}
      </div>
      {footer && <div className="shrink-0 border-t border-ink-200 bg-white p-3">{footer}</div>}
    </div>
  );
}
