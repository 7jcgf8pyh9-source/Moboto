import React from "react";
import { Link, type LinkProps } from "react-router-dom";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Small uppercase annotation label, wireframe-style ("SECTION / STEP 2 OF 4"). */
export function AnnotationLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cx("text-lg font-semibold text-ink-900", className)}>{children}</h2>;
}

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-ink-900 text-white border border-ink-900 hover:bg-ink-800",
  secondary: "bg-ink-100 text-ink-900 border border-ink-300 hover:bg-ink-200",
  outline: "bg-white text-ink-900 border border-ink-400 hover:border-ink-600",
  ghost: "bg-transparent text-ink-700 border border-transparent hover:bg-ink-100",
  danger: "bg-white text-red-700 border border-red-300 hover:bg-red-50",
};

export function WButton({
  children,
  variant = "primary",
  size = "md",
  className,
  full,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  full?: boolean;
}) {
  const sizes = {
    sm: "text-xs px-2.5 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  };
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-1.5 rounded-sm font-medium transition-colors",
        buttonVariants[variant],
        sizes[size],
        full && "w-full",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function WLinkButton({
  children,
  variant = "primary",
  size = "md",
  className,
  full,
  ...rest
}: LinkProps & {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  full?: boolean;
}) {
  const sizes = {
    sm: "text-xs px-2.5 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  };
  return (
    <Link
      className={cx(
        "inline-flex items-center justify-center gap-1.5 rounded-sm font-medium transition-colors",
        buttonVariants[variant],
        sizes[size],
        full && "w-full",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function WCard({
  children,
  className,
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-sm border border-ink-200 bg-white",
        padded && "p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function WPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("rounded-sm border border-dashed border-ink-300 bg-ink-50", className)}>
      {children}
    </div>
  );
}

export function WField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-ink-600">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-ink-400">{hint}</span>}
    </label>
  );
}

export function WInput({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cx(
        "w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm text-ink-800 placeholder:text-ink-400 focus:border-ink-600 focus:outline-none",
        className,
      )}
      {...rest}
    />
  );
}

export function WTextarea({
  className,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cx(
        "w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm text-ink-800 placeholder:text-ink-400 focus:border-ink-600 focus:outline-none",
        className,
      )}
      {...rest}
    />
  );
}

export function WSelect({
  className,
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cx(
        "w-full rounded-sm border border-ink-300 bg-white px-3 py-2 text-sm text-ink-800 focus:border-ink-600 focus:outline-none",
        className,
      )}
      {...rest}
    >
      {children}
    </select>
  );
}

export function WCheckbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-sm text-ink-700">
      <input type="checkbox" className="h-4 w-4 rounded-sm border-ink-400 text-ink-900" />
      {label}
    </label>
  );
}

export function WChip({
  children,
  active,
  onClick,
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active ? "border-ink-900 bg-ink-900 text-white" : "border-ink-300 text-ink-600",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function WDivider({ className }: { className?: string }) {
  return <div className={cx("h-px w-full bg-ink-200", className)} />;
}

type BadgeTone = "neutral" | "mvp" | "r2" | "r3" | "success" | "warning" | "outline";

const badgeTones: Record<BadgeTone, string> = {
  neutral: "bg-ink-800 text-white",
  mvp: "bg-ink-800 text-white",
  r2: "bg-blue-700 text-white",
  r3: "bg-purple-700 text-white",
  success: "bg-emerald-600 text-white",
  warning: "bg-amber-500 text-white",
  outline: "border border-ink-300 text-ink-600 bg-white",
};

export function WBadge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function WAvatar({ initials, size = 36 }: { initials: string; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border border-ink-300 bg-ink-100 font-semibold text-ink-600"
      style={{ width: size, height: size, fontSize: size / 2.6 }}
    >
      {initials}
    </div>
  );
}

export function WStars({ rating = 4, count }: { rating?: number; count?: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-ink-500">
      <span className="tracking-tight text-ink-800">
        {"★".repeat(Math.round(rating))}
        {"☆".repeat(5 - Math.round(rating))}
      </span>
      {count !== undefined && <span>({count})</span>}
    </span>
  );
}

export function WImagePlaceholder({
  label = "IMAGE",
  ratio = "16/9",
  className,
}: {
  label?: string;
  ratio?: string;
  className?: string;
}) {
  // Tailwind's generated stylesheet orders utilities by its own internal scale, not by
  // source order, so a plain cx() can't let a passed-in `w-*` override a default `w-full`.
  // Only fall back to the default when the caller didn't specify a width themselves.
  const hasWidthOverride = className ? /\bw-\S+/.test(className) : false;

  return (
    <div
      className={cx(
        "relative flex items-center justify-center overflow-hidden rounded-sm border border-ink-300 bg-[repeating-linear-gradient(135deg,#e6e8eb,#e6e8eb_8px,#eef0f2_8px,#eef0f2_16px)]",
        !hasWidthOverride && "w-full",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <span className="rounded-sm bg-white/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-500">
        {label}
      </span>
    </div>
  );
}

export function IconPlaceholder({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cx("inline-block rounded-sm border border-ink-400 bg-ink-100", className)}
      style={{ width: size, height: size }}
    />
  );
}
