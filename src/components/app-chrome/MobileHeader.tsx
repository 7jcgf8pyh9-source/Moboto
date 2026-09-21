import React from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "./icons";
import { cx } from "../ui/primitives";

export function MobileHeader({
  title,
  back = false,
  transparent = false,
  action,
}: {
  title: string;
  back?: boolean;
  transparent?: boolean;
  action?: React.ReactNode;
}) {
  const navigate = useNavigate();
  return (
    <header
      className={cx(
        "flex h-14 shrink-0 items-center justify-between border-b px-3",
        transparent ? "border-transparent bg-transparent" : "border-ink-200 bg-white",
      )}
    >
      <div className="flex w-10 items-center">
        {back && (
          <button
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-800 hover:bg-ink-100"
            aria-label="Back"
          >
            <BackIcon size={20} />
          </button>
        )}
      </div>
      <h1 className="flex-1 truncate text-center text-[15px] font-semibold text-ink-900">
        {title}
      </h1>
      <div className="flex w-10 items-center justify-end">{action}</div>
    </header>
  );
}
