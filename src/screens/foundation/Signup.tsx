import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WButton,
  WField,
  WInput,
  AnnotationLabel,
  WBadge,
  cx,
} from "../../components/ui/primitives";

export default function Signup() {
  const [role, setRole] = useState<"buyer" | "seller">("seller");

  return (
    <PushScreen title="Create account">
      <div className="mb-4 mt-1 text-center">
        <p className="text-xs text-ink-500">
          Role pre-selected from where you started — change it any time.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-2">
        {(["buyer", "seller"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={cx(
              "rounded-sm border px-3 py-2.5 text-xs font-semibold capitalize transition-colors",
              role === r
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-ink-300 text-ink-600",
            )}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <WField label="Full name">
          <WInput placeholder="Jordan Casey" />
        </WField>
        <WField label="Email">
          <WInput type="email" placeholder="you@example.com" />
        </WField>
        <WField label="Password">
          <WInput type="password" placeholder="Minimum 8 characters" />
        </WField>
        {role === "seller" && (
          <WField
            label="Phone number"
            hint="Used only for buyer inquiries, never shown publicly until you reply."
          >
            <WInput type="tel" placeholder="+1 (555) 000-0000" />
          </WField>
        )}
      </div>

      {role === "seller" && (
        <div className="mt-4 flex items-start gap-2 rounded-sm border border-dashed border-ink-300 bg-ink-50 p-3">
          <WBadge tone="outline">Next</WBadge>
          <p className="text-[11px] leading-relaxed text-ink-500">
            After signup, we'll ask you to verify your identity before your first listing goes
            live — this is what earns your "Verified Seller" badge.
          </p>
        </div>
      )}

      <WButton full size="lg" className="mt-5">
        Create account
      </WButton>

      <p className="mt-4 text-center text-xs text-ink-500">
        <AnnotationLabel className="normal-case tracking-normal text-ink-400">
          Already registered?
        </AnnotationLabel>{" "}
        <Link to="/login" className="font-semibold text-ink-900">
          Log in
        </Link>
      </p>
    </PushScreen>
  );
}
